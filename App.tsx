import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import SupremaPage from './pages/SupremaPage';
import ServicePage from './pages/ServicePage';
import HowItWorksPage from './pages/HowItWorksPage';
import CoveragePage from './pages/CoveragePage';
import FaqPage from './pages/FaqPage';

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local/:type/:slug" element={<LocationPage />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
          <Route path="/como-funciona" element={<HowItWorksPage />} />
          <Route path="/cobertura" element={<CoveragePage />} />
          <Route path="/duvidas" element={<FaqPage />} />
          <Route path="/suprema-sites" element={<SupremaPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;