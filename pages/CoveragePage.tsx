import React, { useState, useEffect } from 'react';
import { MapPin, Search, ArrowRight, Navigation, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  toSlug, 
  COMPANY_ADDRESS, 
  COMPANY_NEIGHBORHOOD, 
  COMPANY_CITY, 
  COMPANY_STATE,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_LINK
} from '../constants';
import { CONFIRMED_METROPOLITAN_CITIES, CONSOLIDATED_BAIRROS, CONSOLIDATED_CITIES } from '../consolidations';
import { NEIGHBORHOODS } from '../constants';
import LeadForm from '../components/LeadForm';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const CoveragePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 11 Cidades Metropolitanas Principais
  const confirmedCities = CONFIRMED_METROPOLITAN_CITIES;

  // 74 Bairros Oficiais de Curitiba (excluindo os 71 consolidados)
  const officialBairros = NEIGHBORHOODS.filter(n => !CONSOLIDATED_BAIRROS[toSlug(n)]);

  // 17 Municípios sob Consulta (excluindo Curitiba que tem landing própria)
  const peripheralCities = Object.entries(CONSOLIDATED_CITIES)
    .filter(([slug]) => slug !== 'curitiba')
    .map(([slug, data]) => ({ slug, name: data.targetName, originalSlug: slug }));

  const filteredCities = confirmedCities.filter(city => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNeighborhoods = officialBairros.filter(neighborhood => 
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
            Atendimento técnico prestado a partir de nossa central em Curitiba ({COMPANY_NEIGHBORHOOD}) para a capital e municípios metropolitanos com equipes volantes.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text"
              placeholder="Buscar cidade ou bairro..."
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
                Consulte nossa página principal sobre a operação em Curitiba, com atendimento volante direto nos bairros e diagnóstico presencial.
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
            <div className="flex items-center gap-3 mb-4 border-b pb-4">
              <Navigation className="text-adp-blue" size={24} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Municípios Atendidos na RMC</h2>
                <p className="text-xs text-gray-500">Cidades metropolitanas com rotas regulares de atendimento volante</p>
              </div>
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
              <p className="text-gray-500 italic text-sm">Nenhum município principal encontrado com este nome.</p>
            )}

            {/* Demais Municípios RMC sob Consulta */}
            <div className="mt-8 pt-6 border-t border-gray-100 bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                Demais Municípios da Região Metropolitana (Atendimento sob Consulta de Rota)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Para municípios com maior distância da capital (como Lapa, Rio Negro, Mandirituba, Campo do Tenente, Cerro Azul, Doutor Ulysses, Adrianópolis, Bocaiúva do Sul e outros), o deslocamento é programado mediante avaliação prévia de viabilidade técnica da rota.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={PHONE_LINK} 
                  className="inline-flex items-center gap-2 bg-white text-adp-blue border border-adp-blue/30 px-4 py-2 rounded-xl text-xs font-bold hover:bg-adp-blue hover:text-white transition"
                >
                  <Phone size={14} /> Consultar por Telefone ({PHONE_DISPLAY})
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-600 transition"
                >
                  <MessageCircle size={14} /> Consultar via WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Neighborhoods Section */}
          <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 border-b pb-4">
              <MapPin className="text-adp-orange" size={24} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Bairros de Curitiba</h2>
                <p className="text-xs text-gray-500">74 bairros oficiais com atendimento técnico volante</p>
              </div>
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
              <p className="text-gray-500 italic text-sm">Nenhum bairro oficial encontrado com este nome.</p>
            )}

            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-500 leading-relaxed">
              <strong>Nota sobre vilas e conjuntos:</strong> Todas as vilas, núcleos habitacionais e conjuntos residenciais de Curitiba (como Vila Sabará, Caiuá, Vila Verde, Vila Parolin, Vila Torres, etc.) são plenamente atendidos através da equipe técnica responsável pelo seu respectivo bairro oficial.
            </div>
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
