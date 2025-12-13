import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import SupremaPage from './pages/SupremaPage';
import ServicePage from './pages/ServicePage';

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local/:type/:slug" element={<LocationPage />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
          <Route path="/suprema-sites" element={<SupremaPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;