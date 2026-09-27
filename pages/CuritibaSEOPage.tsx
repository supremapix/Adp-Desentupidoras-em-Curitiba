import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Clock, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Wrench, 
  Droplets, 
  MapPin, 
  Award, 
  Zap, 
  Building2, 
  Truck 
} from 'lucide-react';
import { 
  PHONE_DISPLAY, 
  PHONE_LINK, 
  WHATSAPP_LINK, 
  COMPANY_ADDRESS, 
  COMPANY_NEIGHBORHOOD, 
  COMPANY_CITY,
  SERVICES 
} from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import LeadForm from '../components/LeadForm';
import VideoCTA from '../components/VideoCTA';

const CuritibaSEOPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const curitibaFaqs = [
    {
      q: "Como solicitar um orçamento de desentupimento em Curitiba?",
      a: "Você pode entrar em contato diretamente com nossa central pelo telefone ou WhatsApp. Nossos técnicos realizam a triagem inicial e agendam a avaliação técnica presencial da tubulação para diagnóstico e apresentação de orçamento claro."
    },
    {
      q: "Quais tipos de desentupimento são realizados em Curitiba?",
      a: "Realizamos desobstrução de ramais de pias, ralos, vasos sanitários, caixas de gordura, colunas prediais de esgoto e redes pluviais em toda a capital paranaense."
    },
    {
      q: "Onde fica a base da ADP em Curitiba?",
      a: `Nossa sede e base operacional estão localizadas na ${COMPANY_ADDRESS}, no bairro ${COMPANY_NEIGHBORHOOD}, em ${COMPANY_CITY} - PR. A partir dessa localização estratégica, nossas equipes volantes atendem rapidamente os diversos bairros da cidade.`
    },
    {
      q: "Os serviços executados contam com garantia?",
      a: "Sim. Todos os serviços prestados pela ADP contam com garantia técnica com emissão de comprovante e laudo dos procedimentos executados."
    },
    {
      q: "Como é evitada a quebra de pisos e paredes durante o serviço?",
      a: "Utilizamos máquinas desentupidoras rotativas com cabos espirais flexíveis de aço e pontas desincrustadoras que entram diretamente pelos ralos ou caixas de inspeção, sem necessidade de abertura de alvenaria na grande maioria dos casos."
    }
  ];

  const curitibaSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": curitibaFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-white">
      <EnhancedSEO 
        title="Desentupidora em Curitiba | Atendimento Técnico ADP"
        description="Serviços especializados de desentupimento em Curitiba. Desobstrução de esgoto, pias, ralos, vasos sanitários e caça vazamentos com base no CIC."
        keywords="desentupidora em curitiba, desentupimento em curitiba, desentupidora de esgoto curitiba, desentupidora cic, desentupidora batel, desentupidora agua verde"
        canonicalPath="/desentupidora-curitiba"
        schemaData={curitibaSchema}
      />

      {/* Hero Master SEO - Design Refinado */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              <span>Atendimento em Todos os Bairros de Curitiba</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Desentupidora em Curitiba: <span className="text-blue-400">Atendimento Técnico Especializado</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Soluções profissionais para desobstrução de esgotos, tubulações, ramais de pias e ralos em residências, condomínios e estabelecimentos comerciais de Curitiba.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2">
              <a 
                href={PHONE_LINK} 
                className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-3"
              >
                <Phone size={20} fill="currentColor" />
                <span>Ligar: {PHONE_DISPLAY}</span>
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                <span>Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques Técnicos e Estrutura */}
      <div className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center">
            <div className="text-lg font-bold text-slate-900 mb-0.5">Sede no CIC</div>
            <div className="text-slate-500 text-xs font-medium">Base Própria em Curitiba</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center">
            <div className="text-lg font-bold text-slate-900 mb-0.5">Diagnóstico</div>
            <div className="text-slate-500 text-xs font-medium">Avaliação no Local</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center">
            <div className="text-lg font-bold text-slate-900 mb-0.5">Sem Quebra</div>
            <div className="text-slate-500 text-xs font-medium">Máquinas Rotativas</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center">
            <div className="text-lg font-bold text-slate-900 mb-0.5">Garantia</div>
            <div className="text-slate-500 text-xs font-medium">Comprovante Técnico</div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            
            {/* Artigo Principal */}
            <article className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-black text-gray-900 mb-6 border-l-8 border-adp-orange pl-4">
                Como Atua a ADP Desentupidora em Curitiba
              </h2>
              <p className="leading-relaxed mb-4">
                Com base estabelecida no bairro Cidade Industrial de Curitiba (CIC), a <strong>ADP Desentupidora</strong> presta serviços especializados de manutenção e desobstrução hidráulica para clientes residenciais, síndicos prediais e estabelecimentos comerciais.
              </p>
              <p className="leading-relaxed mb-6">
                Entupimentos na rede de esgoto provocam refluxo de detritos, proliferação de odores desagradáveis e risco iminente de contaminação. Para solucionar essas emergências, utilizamos equipamentos mecânicos rotativos com cabos de aço espirais flexíveis e hidrojateamento de alta pressão, que realizam a raspagem interna das canalizações sem comprometer a estrutura das tubulações.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <Award className="text-adp-blue mb-3" size={32} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Equipamentos Profissionais</h3>
                  <p className="text-sm text-gray-600">
                    Sondas rotativas desincrustadoras para ramais internos e hidrojateamento de alta pressão para tubulações de grande diâmetro e caixas de gordura.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <Zap className="text-adp-orange mb-3" size={32} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Atendimento Direto</h3>
                  <p className="text-sm text-gray-600">
                    Operação própria, sem terceirização ou intermediários, garantindo responsabilidade técnica e preço justo avaliado no local.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Serviços Prestados em Curitiba
              </h2>
              <ul className="space-y-2 mb-6">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/servicos/${s.slug}`} className="text-adp-blue font-semibold hover:underline">
                      {s.title}
                    </Link>
                    : {s.shortDesc}
                  </li>
                ))}
              </ul>
            </article>

            {/* Comprehensive FAQ Section */}
            <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
                Perguntas Frequentes sobre Desentupimento em Curitiba
              </h2>
              <div className="space-y-4">
                {curitibaFaqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-left px-6 py-5 font-bold text-gray-800 flex justify-between items-center transition-colors hover:bg-blue-50/50"
                      aria-expanded={openFaq === index}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown className={`transition-transform duration-300 text-adp-blue flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <VideoCTA location="Curitiba" />

            {/* Bairros Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                Bairros Atendidos em Curitiba
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Nossa base volante percorre todas as regiões da capital paranaense. Confira alguns bairros com atendimento regular:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {['CIC', 'Batel', 'Água Verde', 'Centro', 'Portão', 'Santa Felicidade', 'Boqueirão', 'Sítio Cercado', 'Uberaba', 'Bacacheri', 'Pinheirinho', 'Novo Mundo'].map(b => (
                  <div key={b} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100 font-medium text-xs text-gray-800">
                    <MapPin size={14} className="text-adp-blue flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/cobertura" className="text-adp-blue font-bold text-sm hover:underline">
                  Ver lista completa de bairros de Curitiba e municípios da RMC &rarr;
                </Link>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-adp-blue text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <h3 className="text-2xl font-black mb-3">Atendimento Técnico</h3>
                <p className="mb-6 opacity-90 text-sm leading-relaxed">
                  Avaliação no local e atendimento técnico para desentupimento e caça vazamentos em Curitiba.
                </p>
                <a 
                  href={PHONE_LINK} 
                  className="block w-full bg-white text-adp-blue py-4 rounded-2xl font-black text-xl text-center hover:bg-gray-100 transition shadow-lg"
                >
                  {PHONE_DISPLAY}
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs opacity-90">
                  <Clock size={14} /> Atendimento de Emergência
                </div>
              </div>
              <LeadForm />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CuritibaSEOPage;
