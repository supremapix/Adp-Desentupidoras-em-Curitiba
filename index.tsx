import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as reactHelmetAsync from 'react-helmet-async';

const HelmetProvider = (reactHelmetAsync as any).HelmetProvider || (reactHelmetAsync as any).default?.HelmetProvider || (reactHelmetAsync as any);

const rootElement = document.getElementById("root");

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(
      rootElement,
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    );
  } else {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    );
  }
}

// Service Worker: registra apenas em produção fora de iframe; no preview/dev remove SWs e caches antigos
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  const isPreview =
    window.self !== window.top ||
    window.location.hostname === 'localhost' ||
    /usercontent\.goog|run\.app|aistudio/.test(window.location.hostname);

  if (import.meta.env.PROD && !isPreview) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  } else {
    navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister())).catch(() => {});
    if ('caches' in window) {
      caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {});
    }
  }
}
