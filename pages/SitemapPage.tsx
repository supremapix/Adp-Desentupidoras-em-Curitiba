import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Navigation, Globe, Home, Star, ShieldCheck } from 'lucide-react';
import { SERVICES, PHONE_DISPLAY, PHONE_LINK, toSlug, NEIGHBORHOODS } from '../constants';
import { CONFIRMED_METROPOLITAN_CITIES, CONSOLIDATED_BAIRROS } from '../consolidations';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 74 Bairros Oficiais de Curitiba
  const officialBairros = NEIGHBORHOODS
    .filter(n => !CONSOLIDATED_BAIRROS[toSlug(n)])
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));

  // 11 Cidades da RMC
  const confirmedCities = [...CONFIRMED_METROPOLITAN_CITIES].sort((a, b) => a.localeCompare(b, 'pt-BR'));

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Mapa do Site Completo | ADP Desentupidora Curitiba"
        description="Acesse o índice de páginas canônicas, serviços especializados, bairros e municípios atendidos pela ADP Desentupidora em Curitiba e Região Metropolitana."
        canonicalPath="/mapa-do-site"
      />

      <section className="bg-slate-900 text-white py-16 border-b-4 border-adp-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Globe className="mx-auto text-adp-orange mb-3" size={40} />
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-3">
            Mapa Geral do Site
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-light">
            Índice de navegação de todas as páginas canônicas indexáveis da ADP Desentupidora.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* Institucional, Serviços e Cidades Principais */}
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
            <ul className="space-y-1.5 text-xs">
              {confirmedCities.map(city => (
                <li key={city}>
                  <Link to={`/local/cidade/${toSlug(city)}`} className="text-gray-700 hover:text-adp-blue font-medium block py-0.5">
                    Desentupidora em {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bairros Oficiais de Curitiba */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-3 mb-6 gap-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-adp-blue">
              <Star size={20} /> Bairros Oficiais de Curitiba ({officialBairros.length})
            </h2>
            <span className="text-xs text-gray-500">Páginas técnicas especializadas por bairro</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {officialBairros.map(neighborhood => (
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

        {/* Nota de Governança Técnica de URLs */}
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
          <ShieldCheck className="text-adp-blue flex-shrink-0 mt-1" size={24} />
          <div className="text-xs text-gray-700 space-y-1">
            <h3 className="font-bold text-gray-900 text-sm">Estrutura Canônica do Site</h3>
            <p>
              Este mapa do site e o arquivo <code>sitemap.xml</code> listam exclusivamente páginas canônicas com status HTTP 200 e conteúdo único verificado. Subdivisões, vilas e loteamentos habitacionais são atendidos de forma integrada através de suas respectivas páginas de bairros oficiais, mantendo a integridade da arquitetura de informação e prevenindo duplicação técnica de conteúdo.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SitemapPage;
