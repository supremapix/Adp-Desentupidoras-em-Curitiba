import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Wrench, Navigation, Globe, Phone, Mail, Home } from 'lucide-react';
import { CITIES, NEIGHBORHOODS, SERVICES, PHONE_DISPLAY, PHONE_LINK } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slugify = (text: string) => {
    return text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[áàãâ]/g, 'a')
      .replace(/[éê]/g, 'e')
      .replace(/[í]/g, 'i')
      .replace(/[óõô]/g, 'o')
      .replace(/[úü]/g, 'u')
      .replace(/ç/g, 'c');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Mapa do Site | ADP Desentupidora Curitiba"
        description="Acesse todas as páginas, serviços e locais de atendimento da ADP Desentupidora em um só lugar."
        canonicalPath="/mapa-do-site"
      />

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Globe className="mx-auto text-adp-orange mb-4" size={48} />
          <h1 className="text-4xl font-heading font-black mb-4">Mapa do Site</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Navegue por todas as sessões, serviços especializados e áreas de cobertura da nossa desentupidora.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Sessão: Institucional */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-2">
              <Home size={24} /> Institucional
            </h2>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-adp-blue transition">Início / Home</Link></li>
              <li><Link to="/como-funciona" className="text-gray-600 hover:text-adp-blue transition">Como Funciona</Link></li>
              <li><Link to="/cobertura" className="text-gray-600 hover:text-adp-blue transition">Área de Cobertura</Link></li>
              <li><Link to="/duvidas" className="text-gray-600 hover:text-adp-blue transition">Dúvidas Frequentes (FAQ)</Link></li>
              <li><Link to="/suprema-sites" className="text-gray-600 hover:text-adp-blue transition">Sobre o Desenvolvedor</Link></li>
              <li><a href={PHONE_LINK} className="text-gray-600 hover:text-adp-blue transition font-bold">Contato: {PHONE_DISPLAY}</a></li>
            </ul>
          </div>

          {/* Sessão: Serviços */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-2">
              <Wrench size={24} /> Serviços Especializados
            </h2>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.slug}>
                  <Link to={`/servicos/${service.slug}`} className="text-gray-600 hover:text-adp-blue transition">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sessão: Cidades */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-2">
              <Navigation size={24} /> Cidades Atendidas
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {CITIES.map(city => (
                <Link 
                  key={city} 
                  to={`/local/cidade/${slugify(city)}`} 
                  className="text-gray-600 hover:text-adp-blue transition text-sm"
                >
                  Desentupidora em {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sessão: Bairros de Curitiba */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-2">
            <MapPin size={24} /> Bairros de Curitiba (Atendimento 24h)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
            {NEIGHBORHOODS.sort().map(neighborhood => (
              <Link 
                key={neighborhood} 
                to={`/local/bairro/${slugify(neighborhood)}`} 
                className="text-gray-500 hover:text-adp-blue transition text-xs"
              >
                {neighborhood}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;