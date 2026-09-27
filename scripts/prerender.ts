import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import * as reactHelmetAsync from 'react-helmet-async';
import fs from 'fs';
import path from 'path';
import { AppRoutes } from '../App';
import { SERVICES, CITIES, NEIGHBORHOODS, toSlug } from '../constants';

const HelmetProvider = (reactHelmetAsync as any).HelmetProvider || (reactHelmetAsync as any).default?.HelmetProvider;

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const BASE_URL = 'https://adpservicos.app.br';

interface RouteInfo {
  path: string;
  isIndexable: boolean;
  priority: string;
  changefreq: string;
}

function getAllRoutes(): RouteInfo[] {
  const routes: RouteInfo[] = [
    { path: '/', isIndexable: true, priority: '1.0', changefreq: 'weekly' },
    { path: '/desentupidora-curitiba', isIndexable: true, priority: '1.0', changefreq: 'weekly' },
    { path: '/como-funciona', isIndexable: true, priority: '0.8', changefreq: 'monthly' },
    { path: '/cobertura', isIndexable: true, priority: '0.9', changefreq: 'weekly' },
    { path: '/duvidas', isIndexable: true, priority: '0.8', changefreq: 'monthly' },
    { path: '/mapa-do-site', isIndexable: true, priority: '0.8', changefreq: 'weekly' },
    { path: '/suprema-sites', isIndexable: false, priority: '0.1', changefreq: 'yearly' }
  ];

  // 6 Services
  for (const s of SERVICES) {
    routes.push({
      path: `/servicos/${s.slug}`,
      isIndexable: true,
      priority: '0.9',
      changefreq: 'weekly'
    });
  }

  // 29 Cities
  for (const city of CITIES) {
    routes.push({
      path: `/local/cidade/${toSlug(city)}`,
      isIndexable: true,
      priority: '0.9',
      changefreq: 'monthly'
    });
  }

  // 90 Neighborhoods & Vilas
  for (const n of NEIGHBORHOODS) {
    routes.push({
      path: `/local/bairro/${toSlug(n)}`,
      isIndexable: true,
      priority: '0.8',
      changefreq: 'monthly'
    });
  }

  return routes;
}

function generateSitemap(routes: RouteInfo[]): string {
  const indexableRoutes = routes.filter(r => r.isIndexable);
  const now = new Date().toISOString().split('T')[0];

  const xmlEntries = indexableRoutes.map(r => {
    const loc = r.path === '/' ? BASE_URL : `${BASE_URL}${r.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;
}

async function prerender() {
  console.log('🚀 Iniciando pré-renderização estática (SSG)...');

  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Erro: dist/index.html não foi encontrado. Execute vite build primeiro.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');
  // Strip default fallback tags to prevent duplicate meta descriptions and og tags
  const cleanTemplate = rawTemplate
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:title["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:description["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:type["'][^>]*>\s*/gi, '');

  const allRoutes = getAllRoutes();

  // Also include 404 route for generating dist/404.html
  const renderTargets = [
    ...allRoutes.map(r => ({ route: r.path, is404: false })),
    { route: '/404-not-found-page', is404: true }
  ];

  console.log(`Renderizando ${renderTargets.length} páginas para HTML estático...`);

  for (const target of renderTargets) {
    const helmetContext: { helmet?: any } = {};

    const appHtml = renderToString(
      React.createElement(
        HelmetProvider,
        { context: helmetContext },
        React.createElement(
          StaticRouter,
          { location: target.route },
          React.createElement(AppRoutes)
        )
      )
    );

    const { helmet } = helmetContext;

    let html = cleanTemplate;

    // Replace title
    if (helmet && helmet.title) {
      const titleTag = helmet.title.toString();
      if (titleTag) {
        html = html.replace(/<title>.*?<\/title>/i, titleTag);
      }
    }

    // In head, insert meta, link, script
    if (helmet) {
      const metaTags = helmet.meta ? helmet.meta.toString() : '';
      const linkTags = helmet.link ? helmet.link.toString() : '';
      const scriptTags = helmet.script ? helmet.script.toString() : '';

      const tagsToInsert = `\n    ${metaTags}\n    ${linkTags}\n    ${scriptTags}\n  `;
      html = html.replace('</head>', `${tagsToInsert}</head>`);
    }

    // Insert body html
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine destination file
    if (target.is404) {
      const out404 = path.join(DIST_DIR, '404.html');
      fs.writeFileSync(out404, html, 'utf-8');
      console.log(`✓ Gerado: dist/404.html (Página de Erro 404 Estática)`);
    } else if (target.route === '/') {
      fs.writeFileSync(templatePath, html, 'utf-8');
      console.log(`✓ Gerado: dist/index.html (Página Inicial)`);
    } else {
      const routeFolder = path.join(DIST_DIR, target.route);
      fs.mkdirSync(routeFolder, { recursive: true });
      fs.writeFileSync(path.join(routeFolder, 'index.html'), html, 'utf-8');

      // Also create dist${route}.html for hosting providers that prefer file.html
      const flatHtmlPath = `${path.join(DIST_DIR, target.route)}.html`;
      fs.mkdirSync(path.dirname(flatHtmlPath), { recursive: true });
      fs.writeFileSync(flatHtmlPath, html, 'utf-8');
    }
  }

  // Update sitemaps
  const sitemapXml = generateSitemap(allRoutes);
  const publicSitemap = path.resolve(process.cwd(), 'public/sitemap.xml');
  const distSitemap = path.join(DIST_DIR, 'sitemap.xml');

  fs.writeFileSync(publicSitemap, sitemapXml, 'utf-8');
  fs.writeFileSync(distSitemap, sitemapXml, 'utf-8');
  console.log(`✓ Gerado: sitemap.xml com ${allRoutes.filter(r => r.isIndexable).length} URLs canônicas indexáveis`);

  console.log('✅ Pré-renderização concluída com sucesso!');
}

prerender().catch(err => {
  console.error('❌ Falha na pré-renderização:', err);
  process.exit(1);
});
