import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const distDir = path.resolve(__dirname, 'dist');
const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(distDir);

async function startServer() {
  if (!isProd) {
    // Development mode with Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: PORT, host: '0.0.0.0' },
      appType: 'custom'
    });

    app.use(vite.middlewares);

    // List of known static routes
    const knownStaticRoutes = [
      '/',
      '/desentupidora-curitiba',
      '/como-funciona',
      '/cobertura',
      '/duvidas',
      '/mapa-do-site',
      '/suprema-sites'
    ];

    app.use(async (req: Request, res: Response, next: NextFunction) => {
      const url = req.originalUrl.split('?')[0];

      // Ignore assets / static files with dots
      if (url.includes('.') && !url.endsWith('.html')) {
        return next();
      }

      const isValidRoute = 
        knownStaticRoutes.includes(url) ||
        url.startsWith('/servicos/') ||
        url.startsWith('/local/');

      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        if (!isValidRoute) {
          // Send 404 status with rendered template in dev
          res.status(404).set({ 'Content-Type': 'text/html' }).end(template);
          return;
        }

        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production mode: serve pre-rendered static files from dist with clean URLs
    const html404Path = path.join(distDir, '404.html');

    // 1. Static assets
    if (fs.existsSync(path.join(distDir, 'assets'))) {
      app.use('/assets', express.static(path.join(distDir, 'assets')));
    }

    // 2. Clean URLs resolver (serves exact HTML files without 301 trailing-slash redirects)
    app.use((req: Request, res: Response, next: NextFunction) => {
      const url = req.path;

      if (url === '/') {
        return res.status(200).sendFile(path.join(distDir, 'index.html'));
      }

      // Check flat file: dist/servicos/desentupimento-de-esgoto.html
      const directHtml = path.join(distDir, `${url}.html`);
      if (fs.existsSync(directHtml)) {
        return res.status(200).sendFile(directHtml);
      }

      // Check nested index: dist/servicos/desentupimento-de-esgoto/index.html
      const nestedIndex = path.join(distDir, url, 'index.html');
      if (fs.existsSync(nestedIndex)) {
        return res.status(200).sendFile(nestedIndex);
      }

      next();
    });

    // 3. Regular static files (robots.txt, sitemap.xml, images, etc.)
    app.use(express.static(distDir, { redirect: false }));

    // 4. Unknown routes: return HTTP 404 real with 404.html
    app.use((req: Request, res: Response) => {
      if (fs.existsSync(html404Path)) {
        res.status(404).sendFile(html404Path);
      } else {
        res.status(404).send('<!DOCTYPE html><html lang="pt-BR"><head><title>404</title><meta name="robots" content="noindex, nofollow"></head><body><h1>404 - Página Não Encontrada</h1></body></html>');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT} (Mode: ${isProd ? 'production' : 'development'})`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
