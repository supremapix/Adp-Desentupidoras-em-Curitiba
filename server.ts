import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { getAllRedirectRules } from './consolidations';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const distDir = path.resolve(__dirname, 'dist');
const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(distDir);

// Carrega as regras de redirecionamento 301 consolidadas
const redirectRules = getAllRedirectRules();
const redirectMap = new Map<string, string>();
for (const rule of redirectRules) {
  redirectMap.set(rule.fromPath, rule.targetPath);
}

async function startServer() {
  // 1. Middleware global de redirecionamentos 301 permanentes
  app.use((req: Request, res: Response, next: NextFunction) => {
    const rawPath = req.path.replace(/\/+$/, '') || '/';
    const target = redirectMap.get(rawPath);
    if (target) {
      return res.redirect(301, target);
    }
    next();
  });

  if (!isProd) {
    // Modo Desenvolvimento com Vite
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: PORT, host: '0.0.0.0' },
      appType: 'custom'
    });

    app.use(vite.middlewares);

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
    // Modo Produção: entrega de arquivos pré-renderizados estáticos
    const html404Path = path.join(distDir, '404.html');

    // Ativos estáticos (JS, CSS, imagens)
    if (fs.existsSync(path.join(distDir, 'assets'))) {
      app.use('/assets', express.static(path.join(distDir, 'assets')));
    }

    // Resolvedor de URLs limpas (sem 301 de trailing slash)
    app.use((req: Request, res: Response, next: NextFunction) => {
      const url = req.path.replace(/\/+$/, '') || '/';

      if (url === '/') {
        return res.status(200).sendFile(path.join(distDir, 'index.html'));
      }

      // Arquivo direto flat: dist/servicos/desentupimento-de-esgoto.html
      const directHtml = path.join(distDir, `${url}.html`);
      if (fs.existsSync(directHtml)) {
        return res.status(200).sendFile(directHtml);
      }

      // Arquivo aninhado: dist/servicos/desentupimento-de-esgoto/index.html
      const nestedIndex = path.join(distDir, url, 'index.html');
      if (fs.existsSync(nestedIndex)) {
        return res.status(200).sendFile(nestedIndex);
      }

      next();
    });

    // Arquivos estáticos na raiz (robots.txt, sitemap.xml, etc.)
    app.use(express.static(distDir, { redirect: false }));

    // Qualquer rota inexistente retorna 404 real com 404.html
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
