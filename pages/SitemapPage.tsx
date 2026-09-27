import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Wrench, Navigation, Globe, Phone, Home, Layers, Star } from 'lucide-react';
import { CITIES, NEIGHBORHOODS, SERVICES, PHONE_DISPLAY, PHONE_LINK, toSlug } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vilas = NEIGHBORHOODS.filter(n => n.includes('Vila') || n.includes('Conjunto') || n.includes('Loteamento'));
  const mainNeighborhoods = NEIGHBORHOODS.filter(n => !vilas.includes(n));

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Mapa do Site Completo | ADP Desentupidora Curitiba"
        description="Acesse o índice completo de páginas, serviços especializados, bairros e municípios atendidos pela ADP Desentupidora em Curitiba e Região Metropolitana."
        canonicalPath="/mapa-do-site"
      />

      <section className="bg-slate-900 text-white py-16 border-b-4 border-adp-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Globe className="mx-auto text-adp-orange mb-3" size={40} />
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-3">
            Mapa Geral do Site
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-light">
            Índice de navegação de todas as páginas institucionais, serviços e localidades atendidas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* Institucional e Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-adp-blue border-b pb-3">
              <Home size={20} /> Páginas Principais
            </h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-700 hover:text-adp-blue transition font-medium">Início / Página Principal</Link></li>
              <li><Link to="/desentupidora-curitiba" className="text-gray-700 hover:text-adp-blue transition font-medium">Desentupidora em Curitiba (Central)</Link></li>
              <li><Link to="/como-funciona" className="text-gray-700 hover:text-adp-blue transition font-medium">Como Funciona o Atendimento</Link></li>
              <li><Link to="/cobertura" className="text-gray-700 hover:text-adp-blue transition font-medium">Áreas Atendidas e Cobertura</Link></li>
              <li><Link to="/duvidas" className="text-gray-700 hover:text-adp-blue transition font-medium">Dúvidas Frequentes (FAQ)</Link></li>
              <li className="pt-2"><a href={PHONE_LINK} className="text-adp-red font-bold">Central Telefônica: {PHONE_DISPLAY}</a></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-adp-blue border-b pb-3">
              <Wrench size={20} /> Serviços Especializados
            </h2>
            <ul className="space-y-2 text-sm">
              {SERVICES.map(service => (
                <li key={service.slug}>
                  <Link to={`/servicos/${service.slug}`} className="text-gray-700 hover:text-adp-blue transition font-medium">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-adp-blue border-b pb-3">
              <Navigation size={20} /> Municípios da Região Metropolitana
            </h2>
            <div className="max-h-60 overflow-y-auto custom-scrollbar pr-1 space-y-1">
              {CITIES.map(city => (
                <div key={city}>
                  <Link to={`/local/cidade/${toSlug(city)}`} className="text-gray-600 hover:text-adp-blue text-xs block py-0.5">
                    Desentupidora em {city}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bairros de Curitiba */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold flex items-center gap-2 text-adp-blue border-b pb-3 mb-6">
            <Star size={20} /> Bairros de Curitiba
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {mainNeighborhoods.sort().map(neighborhood => (
              <Link 
                key={neighborhood} 
                to={`/local/bairro/${toSlug(neighborhood)}`} 
                className="text-gray-600 hover:text-adp-blue text-xs bg-gray-50 p-2 rounded border border-gray-100 truncate hover:bg-blue-50 transition"
              >
                {neighborhood}
              </Link>
            ))}
          </div>
        </div>

        {/* Vilas e Conjuntos */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold flex items-center gap-2 text-adp-orange border-b pb-3 mb-6">
            <Layers size={20} /> Vilas e Conjuntos Habitacionais
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {vilas.sort().map(vila => (
              <Link 
                key={vila} 
                to={`/local/bairro/${toSlug(vila)}`} 
                className="text-gray-600 hover:text-adp-orange text-xs bg-gray-50 p-2 rounded border border-orange-100 truncate hover:bg-orange-50 transition"
              >
                {vila}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
