import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import * as reactHelmetAsync from 'react-helmet-async';
import fs from 'fs';
import path from 'path';
import { AppRoutes } from '../App';
import { SERVICES, NEIGHBORHOODS, toSlug } from '../constants';
import { 
  CONFIRMED_METROPOLITAN_CITIES, 
  CONSOLIDATED_BAIRROS, 
  CONSOLIDATED_CITIES,
  getAllRedirectRules 
} from '../consolidations';
import { QUALIFIED_PAGES } from '../data/metroNeighborhoods';

const HelmetProvider = (reactHelmetAsync as any).HelmetProvider || (reactHelmetAsync as any).default?.HelmetProvider;

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const BASE_URL = 'https://adpservicos.app.br';

interface RouteInfo {
  path: string;
  isIndexable: boolean;
  priority: string;
  changefreq: string;
  lastmod?: string;
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

  // 6 Serviços Especializados
  for (const s of SERVICES) {
    routes.push({
      path: `/servicos/${s.slug}`,
      isIndexable: true,
      priority: '0.9',
      changefreq: 'weekly'
    });
  }

  // 11 Cidades Confirmadas na Região Metropolitana
  for (const city of CONFIRMED_METROPOLITAN_CITIES) {
    routes.push({
      path: `/local/cidade/${toSlug(city)}`,
      isIndexable: true,
      priority: '0.9',
      changefreq: 'monthly'
    });
  }

  // 74 Bairros Oficiais de Curitiba
  const officialBairros = NEIGHBORHOODS.filter(n => !CONSOLIDATED_BAIRROS[toSlug(n)]);
  for (const b of officialBairros) {
    routes.push({
      path: `/local/bairro/${toSlug(b)}`,
      isIndexable: true,
      priority: '0.8',
      changefreq: 'monthly'
    });
  }

  // 71 Bairros Consolidados (Não indexáveis, apenas para fallback com noindex e meta refresh)
  for (const slug of Object.keys(CONSOLIDATED_BAIRROS)) {
    routes.push({
      path: `/local/bairro/${slug}`,
      isIndexable: false,
      priority: '0.1',
      changefreq: 'yearly'
    });
  }

  // 18 Cidades Consolidadas (Não indexáveis)
  for (const slug of Object.keys(CONSOLIDATED_CITIES)) {
    routes.push({
      path: `/local/cidade/${slug}`,
      isIndexable: false,
      priority: '0.1',
      changefreq: 'yearly'
    });
  }

  // Bairros de cidades da RMC com página própria qualificada (data/metroNeighborhoods.ts)
  for (const p of QUALIFIED_PAGES) {
    routes.push({
      path: `/local/cidade/${p.citySlug}/${p.slug}`,
      isIndexable: true,
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: p.lastmod
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
    <lastmod>${r.lastmod || now}</lastmod>
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

function updateRedirectConfigFiles() {
  const redirectRules = getAllRedirectRules();

  // 1. Gera _redirects para Netlify / Cloudflare Pages
  const redirectsFile = path.resolve(process.cwd(), '_redirects');
  const distRedirectsFile = path.join(DIST_DIR, '_redirects');
  
  let redirectsContent = '# Redirecionamentos 301 permanentes de URLs consolidadas\n';
  for (const rule of redirectRules) {
    redirectsContent += `${rule.fromPath} ${rule.targetPath} 301!\n`;
  }
  redirectsContent += '\n# Rota 404 para URLs inexistentes\n/* /404.html 404\n';

  fs.writeFileSync(redirectsFile, redirectsContent, 'utf-8');
  fs.writeFileSync(distRedirectsFile, redirectsContent, 'utf-8');
  console.log(`✓ Atualizado: _redirects com ${redirectRules.length} regras de 301 permanente`);

  // 2. Gera vercel.json para hospedagem na Vercel
  const vercelFile = path.resolve(process.cwd(), 'vercel.json');
  const vercelConfig = {
    cleanUrls: true,
    trailingSlash: false,
    redirects: redirectRules.map(r => ({
      source: r.fromPath,
      destination: r.targetPath,
      statusCode: 301
    })),
    routes: [
      { handle: "filesystem" },
      { src: "/(.*)", status: 404, dest: "/404.html" }
    ]
  };

  fs.writeFileSync(vercelFile, JSON.stringify(vercelConfig, null, 2), 'utf-8');
  console.log(`✓ Atualizado: vercel.json com ${redirectRules.length} regras de redirect permanente`);
}

async function prerender() {
  console.log('🚀 Iniciando auditoria e pré-renderização estática (SSG)...');

  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Erro: dist/index.html não foi encontrado. Execute vite build primeiro.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');
  const cleanTemplate = rawTemplate
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:title["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:description["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:type["'][^>]*>\s*/gi, '');

  const allRoutes = getAllRoutes();

  // Inclui rota 404 para gerar dist/404.html
  const renderTargets = [
    ...allRoutes.map(r => ({ route: r.path, is404: false })),
    { route: '/404-not-found-page', is404: true }
  ];

  console.log(`Renderizando ${renderTargets.length} rotas para HTML estático...`);

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

    // Atualiza title
    if (helmet && helmet.title) {
      const titleTag = helmet.title.toString();
      if (titleTag) {
        html = html.replace(/<title>.*?<\/title>/i, titleTag);
      }
    }

    // Injeta meta, links e JSON-LD no head
    if (helmet) {
      const metaTags = helmet.meta ? helmet.meta.toString() : '';
      const linkTags = helmet.link ? helmet.link.toString() : '';
      const scriptTags = helmet.script ? helmet.script.toString() : '';

      const tagsToInsert = `\n    ${metaTags}\n    ${linkTags}\n    ${scriptTags}\n  `;
      html = html.replace('</head>', `${tagsToInsert}</head>`);
    }

    // Injeta corpo da aplicação
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Gravação dos arquivos
    if (target.is404) {
      const out404 = path.join(DIST_DIR, '404.html');
      fs.writeFileSync(out404, html, 'utf-8');
    } else if (target.route === '/') {
      fs.writeFileSync(templatePath, html, 'utf-8');
    } else {
      const routeFolder = path.join(DIST_DIR, target.route);
      fs.mkdirSync(routeFolder, { recursive: true });
      fs.writeFileSync(path.join(routeFolder, 'index.html'), html, 'utf-8');

      const flatHtmlPath = `${path.join(DIST_DIR, target.route)}.html`;
      fs.mkdirSync(path.dirname(flatHtmlPath), { recursive: true });
      fs.writeFileSync(flatHtmlPath, html, 'utf-8');
    }
  }

  // Gera sitemap.xml estritamente com URLs canônicas indexáveis
  const indexableCount = allRoutes.filter(r => r.isIndexable).length;
  const sitemapXml = generateSitemap(allRoutes);
  const publicSitemap = path.resolve(process.cwd(), 'public/sitemap.xml');
  const distSitemap = path.join(DIST_DIR, 'sitemap.xml');

  fs.writeFileSync(publicSitemap, sitemapXml, 'utf-8');
  fs.writeFileSync(distSitemap, sitemapXml, 'utf-8');
  console.log(`✓ Gerado: sitemap.xml estritamente com ${indexableCount} URLs canônicas indexáveis (Status 200)`);

  // Atualiza _redirects e vercel.json
  updateRedirectConfigFiles();

  console.log('✅ Auditoria e pré-renderização concluídas com sucesso!');
}

prerender().catch(err => {
  console.error('❌ Falha na pré-renderização:', err);
  process.exit(1);
});
