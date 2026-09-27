import React, { useState, useEffect } from 'react';
import { MapPin, Search, ArrowRight, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CITIES, NEIGHBORHOODS, toSlug, COMPANY_ADDRESS, COMPANY_NEIGHBORHOOD, COMPANY_CITY, COMPANY_STATE } from '../constants';
import LeadForm from '../components/LeadForm';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const CoveragePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCities = CITIES.filter(city => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNeighborhoods = NEIGHBORHOODS.filter(neighborhood => 
    neighborhood.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Área de Cobertura | ADP Desentupidora Curitiba e RMC"
        description="Confira as cidades e bairros atendidos pela ADP Desentupidora em Curitiba e Região Metropolitana. Equipes volantes e suporte técnico presencial."
        canonicalPath="/cobertura"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20 border-b-4 border-adp-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-adp-orange font-bold uppercase tracking-widest text-xs mb-2 block">
            Regiões Atendidas
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-4">
            Área de Cobertura: Curitiba e Região Metropolitana
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Atendimento técnico prestado a partir de nossa central em Curitiba ({COMPANY_NEIGHBORHOOD}) para toda a capital e municípios da RMC.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text"
              placeholder="Buscar cidade, bairro ou vila..."
              className="w-full p-4 pl-12 rounded-2xl text-gray-900 outline-none focus:ring-4 focus:ring-adp-blue/50 shadow-lg text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar cidade ou bairro"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Curitiba Hub Banner */}
          <div className="bg-adp-blue text-white p-6 md:p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-adp-orange font-bold text-xs uppercase tracking-wider block mb-1">
                Central da Capital
              </span>
              <h2 className="text-2xl font-black">Desentupidora em Curitiba</h2>
              <p className="text-sm text-blue-100 mt-1 max-w-lg">
                Consulte nossa página detalhada sobre a operação na capital, incluindo bairros com atendimento volante direto.
              </p>
            </div>
            <Link 
              to="/desentupidora-curitiba" 
              className="bg-white text-adp-blue font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition whitespace-nowrap text-sm shadow"
            >
              Acessar Guia de Curitiba &rarr;
            </Link>
          </div>

          {/* Cities Section */}
          <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
              <Navigation className="text-adp-blue" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Municípios Atendidos na RMC</h2>
            </div>
            
            {filteredCities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredCities.map((city) => (
                  <Link 
                    key={city}
                    to={`/local/cidade/${toSlug(city)}`}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl hover:bg-adp-blue hover:text-white transition group border border-gray-100"
                  >
                    <span className="text-sm font-semibold">{city}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic text-sm">Nenhum município encontrado com este nome.</p>
            )}
          </section>

          {/* Neighborhoods Section */}
          <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
              <MapPin className="text-adp-orange" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Bairros e Vilas de Curitiba</h2>
            </div>
            
            {filteredNeighborhoods.length > 0 ? (
              <div className="max-h-[32rem] overflow-y-auto custom-scrollbar pr-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredNeighborhoods.map((neighborhood) => (
                    <Link 
                      key={neighborhood}
                      to={`/local/bairro/${toSlug(neighborhood)}`}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-adp-blue hover:text-white transition group border border-gray-100"
                    >
                      <span className="text-xs font-medium truncate">{neighborhood}</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic text-sm">Nenhum bairro ou vila encontrado com este nome.</p>
            )}
          </section>

          <VideoCTA location="Curitiba e Região Metropolitana" />
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <LeadForm />
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800">
              <h3 className="text-lg font-bold mb-2">Base Operacional</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {COMPANY_ADDRESS}, {COMPANY_NEIGHBORHOOD}, {COMPANY_CITY} - {COMPANY_STATE}. Atendimento prestado em todas as localidades mediante disponibilidade das equipes volantes.
              </p>
              <Link to="/mapa-do-site" className="text-adp-orange text-xs font-bold hover:underline">
                Acessar mapa completo do site &rarr;
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoveragePage;
