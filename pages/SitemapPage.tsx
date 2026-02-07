import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Wrench, Navigation, Globe, Phone, Home, Layers, Star } from 'lucide-react';
import { CITIES, NEIGHBORHOODS, SERVICES, PHONE_DISPLAY, PHONE_LINK } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slugify = (text: string) => {
    return text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, '-')
      .replace(/ç/g, 'c');
  };

  // Separação lógica para melhor experiência do usuário
  const vilas = NEIGHBORHOODS.filter(n => n.includes('Vila') || n.includes('Conjunto') || n.includes('Loteamento'));
  const mainNeighborhoods = NEIGHBORHOODS.filter(n => !vilas.includes(n));

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Mapa do Site Completo | ADP Desentupidora Curitiba"
        description="Acesse todas as páginas, bairros, vilas e cidades atendidas pela ADP Desentupidora em Curitiba e Região Metropolitana."
        canonicalPath="/mapa-do-site"
      />

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Globe className="mx-auto text-adp-orange mb-4" size={48} />
          <h1 className="text-4xl font-heading font-black mb-4">Mapa Geral do Site</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Navegue por todos os nossos serviços e encontre sua localização específica para atendimento imediato 24h.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-2">
              <Home size={24} /> Institucional
            </h2>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-adp-blue transition font-medium">Home / Início</Link></li>
              <li><Link to="/como-funciona" className="text-gray-600 hover:text-adp-blue transition font-medium">Como Funciona</Link></li>
              <li><Link to="/cobertura" className="text-gray-600 hover:text-adp-blue transition font-medium">Áreas Atendidas</Link></li>
              <li><Link to="/duvidas" className="text-gray-600 hover:text-adp-blue transition font-medium">FAQ / Dúvidas</Link></li>
              <li><a href={PHONE_LINK} className="text-adp-red font-bold">Ligar para ADP: {PHONE_DISPLAY}</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-2">
              <Wrench size={24} /> Nossos Serviços
            </h2>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.slug}>
                  <Link to={`/servicos/${service.slug}`} className="text-gray-600 hover:text-adp-blue transition font-medium">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-2">
              <Navigation size={24} /> Cidades RMC
            </h2>
            <div className="grid grid-cols-1 gap-1">
              {CITIES.map(city => (
                <Link key={city} to={`/local/cidade/${slugify(city)}`} className="text-gray-600 hover:text-adp-blue text-sm">
                  Desentupidora em {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bairros Principais */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-blue border-b pb-4 mb-6">
            <Star size={24} /> Bairros de Curitiba
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {mainNeighborhoods.sort().map(neighborhood => (
              <Link key={neighborhood} to={`/local/bairro/${slugify(neighborhood)}`} className="text-gray-500 hover:text-adp-blue text-xs bg-white p-2 border rounded">
                {neighborhood}
              </Link>
            ))}
          </div>
        </div>

        {/* Vilas e Conjuntos */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-adp-orange border-b pb-4 mb-6">
            <Layers size={24} /> Vilas, Conjuntos e Loteamentos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {vilas.sort().map(vila => (
              <Link key={vila} to={`/local/bairro/${slugify(vila)}`} className="text-gray-500 hover:text-adp-orange text-xs bg-white p-2 border rounded border-orange-50">
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