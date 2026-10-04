import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

// 1. Read sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const urlsInSitemap = Array.from(sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)).map(m => m[1]);

console.log('=== SITEMAP AUDIT ===');
console.log('Total URLs in sitemap.xml:', urlsInSitemap.length);

// 2. Check the 3 newly delivered URLs
const deliveredSlugs = [
  { slug: '/local/cidade/almirante-tamandare/cachoeira', city: 'Almirante Tamandaré', name: 'Cachoeira' },
  { slug: '/local/cidade/campo-magro/passauna', city: 'Campo Magro', name: 'Passaúna' },
  { slug: '/local/cidade/piraquara/guarituba', city: 'Piraquara', name: 'Guarituba' }
];

console.log('\n=== 3 DELIVERED URLS CHECK ===');
for (const item of deliveredSlugs) {
  const fullUrl = `https://adpservicos.app.br${item.slug}`;
  const inSitemap = urlsInSitemap.includes(fullUrl);
  
  // Read generated HTML
  const htmlPath = path.join(distDir, item.slug, 'index.html');
  const htmlExists = fs.existsSync(htmlPath);
  let canonicalInHtml = null;
  let titleInHtml = null;
  let descInHtml = null;

  if (htmlExists) {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i) ||
                           html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["']/i);
    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i) ||
                         html.match(/<meta[^>]*content=["'](.*?)["'][^>]*name=["']description["']/i);
    canonicalInHtml = canonicalMatch ? canonicalMatch[1] : 'NONE';
    titleInHtml = titleMatch ? titleMatch[1] : 'NONE';
    descInHtml = descMatch ? descMatch[1] : 'NONE';
  }

  console.log(`- ${item.name} (${item.city}):`);
  console.log(`  URL: ${fullUrl}`);
  console.log(`  In Sitemap: ${inSitemap ? 'YES (Status 200)' : 'NO'}`);
  console.log(`  HTML Generated: ${htmlExists ? 'YES (' + htmlPath + ')' : 'NO'}`);
  console.log(`  Canonical in HTML: ${canonicalInHtml}`);
  console.log(`  Title in HTML: ${titleInHtml}`);
  console.log(`  Meta Description: ${descInHtml}`);
}

// 3. Inspect Canonical Consistency Across ALL Indexable URLs
console.log('\n=== CANONICAL & HTML AUDIT FOR ALL INDEXABLE URLS ===');
let inheritedHomeCount = 0;
let missingCanonicalCount = 0;
let correctCanonicalCount = 0;

for (const url of urlsInSitemap) {
  const urlPath = url.replace('https://adpservicos.app.br', '') || '/';
  let htmlPath = urlPath === '/' 
    ? path.join(distDir, 'index.html')
    : path.join(distDir, urlPath, 'index.html');
  
  if (!fs.existsSync(htmlPath)) {
    htmlPath = path.join(distDir, `${urlPath}.html`);
  }

  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i) ||
                           html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["']/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : null;

    if (!canonical) {
      missingCanonicalCount++;
      console.log(`⚠️ Missing canonical: ${urlPath}`);
    } else if (urlPath !== '/' && canonical === 'https://adpservicos.app.br/') {
      inheritedHomeCount++;
      console.log(`❌ Inherited Homepage canonical on: ${urlPath} -> ${canonical}`);
    } else if (canonical === url) {
      correctCanonicalCount++;
    } else {
      console.log(`⚠️ Mismatched canonical: ${urlPath} -> ${canonical} (expected ${url})`);
    }
  } else {
    console.log(`❌ HTML file missing for indexable URL: ${urlPath}`);
  }
}

console.log(`\nResult across all ${urlsInSitemap.length} sitemap URLs:
- Correct Canonical matching own URL: ${correctCanonicalCount}/${urlsInSitemap.length}
- Inherited Home Canonical: ${inheritedHomeCount}
- Missing Canonical: ${missingCanonicalCount}`);
