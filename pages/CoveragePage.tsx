import React, { useState, useEffect } from 'react';
import { MapPin, Search, ArrowRight, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CITIES, NEIGHBORHOODS } from '../constants';
import LeadForm from '../components/LeadForm';
import EnhancedSEO from '../components/EnhancedSEO';

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
        title="Área de Cobertura - ADP Desentupidora Curitiba e Região"
        description="Confira nossa área de atuação em Curitiba e Região Metropolitana. Atendemos todos os bairros e cidades vizinhas com frota própria."
        canonicalPath="/cobertura"
      />
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Área de <span className="text-adp-orange">Cobertura</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Atendemos Curitiba e toda a Região Metropolitana com equipes volantes para chegada rápida.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text"
              placeholder="Digite seu bairro ou cidade..."
              className="w-full p-4 pl-12 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-adp-blue/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Cities Section */}
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
              <Navigation className="text-adp-blue" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Cidades Atendidas</h2>
            </div>
            
            {filteredCities.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {filteredCities.map((city) => (
                  <Link 
                    key={city}
                    to={`/local/cidade/${city.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c')}`}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-adp-blue hover:text-white transition group"
                  >
                    <span className="text-sm font-medium">{city}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">Nenhuma cidade encontrada com esse nome.</p>
            )}
          </section>

          {/* Neighborhoods Section */}
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
              <MapPin className="text-adp-orange" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Bairros de Curitiba</h2>
            </div>
            
            {filteredNeighborhoods.length > 0 ? (
              <div className="h-96 overflow-y-auto custom-scrollbar pr-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredNeighborhoods.map((neighborhood) => (
                    <Link 
                      key={neighborhood}
                      to={`/local/bairro/${neighborhood.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c')}`}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-adp-blue hover:text-white transition group"
                    >
                      <span className="text-sm font-medium">{neighborhood}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic">Nenhum bairro encontrado com esse nome.</p>
            )}
          </section>

          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-adp-blue mb-2">Não encontrou sua localização?</h3>
            <p className="text-gray-600 mb-4">
              Provavelmente atendemos sua região mesmo que ela não esteja listada acima. Nossa base móvel cobre um raio de 100km de Curitiba.
            </p>
            <Link to="/#contato" className="text-adp-orange font-bold hover:underline">
              Entre em contato para confirmar o atendimento &rarr;
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
             <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoveragePage;