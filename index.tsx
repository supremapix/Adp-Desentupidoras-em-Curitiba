import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as reactHelmetAsync from 'react-helmet-async';

const HelmetProvider = (reactHelmetAsync as any).HelmetProvider || (reactHelmetAsync as any).default?.HelmetProvider;

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

// Service Worker Registration com proteção de origem para preview
if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.location.hostname !== 'localhost' && !window.location.hostname.includes('usercontent.goog')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Ignora erro de registro em ambiente de visualização
    });
  });
}
