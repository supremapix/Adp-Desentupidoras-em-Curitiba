import React, { useState, useEffect } from 'react';
import { MapPin, Search, ArrowRight, Navigation, Phone, MessageCircle, Building2, ShieldCheck } from 'lucide-react';
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
import { BlogCover, BLOG_IMAGES } from '../components/BlogCover';

const CoveragePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 11 Cidades Metropolitanas Principais
  const confirmedCities = CONFIRMED_METROPOLITAN_CITIES;

  // 74 Bairros Oficiais de Curitiba (excluindo os 71 consolidados)
  const officialBairros = NEIGHBORHOODS.filter(n => !CONSOLIDATED_BAIRROS[toSlug(n)]);

  const filteredCities = confirmedCities.filter(city => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNeighborhoods = officialBairros.filter(neighborhood => 
    neighborhood.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <EnhancedSEO 
        title="Área de Cobertura | ADP Desentupidora Curitiba e RMC"
        description="Confira as cidades e bairros atendidos pela ADP Desentupidora em Curitiba e Região Metropolitana. Equipes volantes e suporte técnico presencial."
        canonicalPath="/cobertura"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white pt-14 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-blue-300 kicker font-semibold">
            Regiões Atendidas
          </span>
          <h1 className="text-white max-w-3xl mx-auto font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Área de Cobertura: Curitiba e Região Metropolitana
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Atendimento técnico estruturado a partir da base no bairro {COMPANY_NEIGHBORHOOD} para toda a capital e municípios metropolitanos com viaturas volantes.
          </p>
          
          <div className="max-w-xl mx-auto relative pt-2">
            <input 
              type="text"
              placeholder="Digite o nome de uma cidade ou bairro..."
              className="w-full p-4 pl-12 rounded-xl text-slate-900 bg-white outline-none focus:ring-4 focus:ring-blue-500/30 shadow-md text-base border border-slate-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar cidade ou bairro"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 mt-1" size={20} />
          </div>
        </div>
      </section>
      <div className="faixa-obra h-3" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Curitiba Hub Banner com Imagem 16:9 Oficial com Logo Overlay */}
          <div className="pt-8 border-t-2 border-slate-900">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <BlogCover 
                  image={BLOG_IMAGES.CHEGADA_40MIN.image}
                  alt={BLOG_IMAGES.CHEGADA_40MIN.alt}
                  titleAttr={BLOG_IMAGES.CHEGADA_40MIN.titleAttr}
                  className="shadow-sm"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-1.5 text-blue-700 kicker font-semibold">
                  <Building2 size={16} />
                  <span>Central da Capital</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Desentupidora em Curitiba</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consulte nossa página principal sobre a operação em Curitiba, com atendimento volante direto nos 74 bairros oficiais e avaliação presencial.
                </p>
                <div>
                  <Link 
                    to="/desentupidora-curitiba" 
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition"
                  >
                    <span>Acessar Guia de Curitiba</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cities Section */}
          <section className="pt-8 border-t-2 border-slate-900">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <Navigation className="text-blue-700" size={24} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Municípios Atendidos na RMC</h2>
                <p className="text-xs text-slate-500">Cidades metropolitanas com rotas regulares de atendimento volante</p>
              </div>
            </div>
            
            {filteredCities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredCities.map((city) => (
                  <Link 
                    key={city}
                    to={`/local/cidade/${toSlug(city)}`}
                    className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl hover:bg-blue-700 hover:text-white transition group border border-slate-200/70"
                  >
                    <span className="text-sm font-semibold">{city}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic text-sm">Nenhum município principal encontrado com este termo.</p>
            )}

            {/* Demais Municípios RMC sob Consulta */}
            <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Demais Municípios da Região Metropolitana (Atendimento sob Consulta de Rota)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Para municípios com maior distância da capital (como Lapa, Rio Negro, Campo do Tenente, Cerro Azul, Doutor Ulysses, Adrianópolis, Bocaiúva do Sul e outros), o deslocamento é programado mediante avaliação prévia de viabilidade técnica da rota.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={PHONE_LINK} 
                  className="inline-flex items-center gap-2 bg-white text-blue-700 border border-blue-200 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  <Phone size={14} /> 
                  <span>Consultar por Telefone ({PHONE_DISPLAY})</span>
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-700 transition shadow-sm"
                >
                  <MessageCircle size={14} /> 
                  <span>Consultar via WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

          {/* Neighborhoods Section */}
          <section className="pt-8 border-t-2 border-slate-900">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <MapPin className="text-blue-700" size={24} />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Bairros Oficiais de Curitiba</h2>
                <p className="text-xs text-slate-500">74 bairros com cobertura de equipes volantes</p>
              </div>
            </div>
            
            {filteredNeighborhoods.length > 0 ? (
              <div className="max-h-[32rem] overflow-y-auto custom-scrollbar pr-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                  {filteredNeighborhoods.map((neighborhood) => (
                    <Link 
                      key={neighborhood}
                      to={`/local/bairro/${toSlug(neighborhood)}`}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-700 hover:text-white transition group border border-slate-200/70"
                    >
                      <span className="text-xs font-medium truncate">{neighborhood}</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-slate-500 italic text-sm">Nenhum bairro oficial encontrado com este termo.</p>
            )}

            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-500 leading-relaxed">
              <strong>Nota sobre vilas e conjuntos:</strong> Todas as vilas, núcleos habitacionais e conjuntos residenciais de Curitiba (como Vila Sabará, Caiuá, Vila Verde, Vila Parolin, Vila Torres, etc.) são plenamente atendidos através da equipe técnica volante responsável pelo seu respectivo bairro oficial.
            </div>
          </section>

          <VideoCTA location="Curitiba e Região Metropolitana" />
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-md border border-slate-800 space-y-4">
              <span className="text-blue-400 block kicker font-semibold">
                Central de Atendimento
              </span>
              <h3 className="text-xl font-bold leading-tight">
                Triagem de Região
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {COMPANY_ADDRESS}, {COMPANY_NEIGHBORHOOD}, {COMPANY_CITY} - {COMPANY_STATE}. Atendimento prestado em todas as localidades mediante disponibilidade das equipes volantes.
              </p>
              
              <div className="space-y-2.5 pt-2">
                <a 
                  href={PHONE_LINK} 
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3.5 px-4 rounded-xl font-bold text-base shadow transition"
                >
                  <Phone size={18} fill="currentColor" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow transition"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp de Plantão</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <Link to="/mapa-do-site" className="text-blue-300 text-xs font-semibold hover:underline">
                  Acessar mapa completo do site &rarr;
                </Link>
              </div>
            </div>

            <LeadForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoveragePage;
