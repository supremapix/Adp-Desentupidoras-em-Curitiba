import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import SupremaPage from './pages/SupremaPage';
import ServicePage from './pages/ServicePage';
import HowItWorksPage from './pages/HowItWorksPage';
import CoveragePage from './pages/CoveragePage';
import FaqPage from './pages/FaqPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local/:type/:slug" element={<LocationPage />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
          <Route path="/como-funciona" element={<HowItWorksPage />} />
          <Route path="/cobertura" element={<CoveragePage />} />
          <Route path="/duvidas" element={<FaqPage />} />
          <Route path="/suprema-sites" element={<SupremaPage />} />
          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;