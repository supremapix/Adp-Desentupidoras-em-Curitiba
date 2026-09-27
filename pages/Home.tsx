import React, { useState } from 'react';
import { 
  Shield, 
  Clock, 
  Droplets, 
  MapPin, 
  ChevronDown, 
  Phone, 
  Search, 
  ArrowRight, 
  Zap, 
  Wrench, 
  Truck, 
  CheckCircle, 
  Building2, 
  HelpCircle 
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { 
  CITIES, 
  NEIGHBORHOODS, 
  PHONE_LINK, 
  WHATSAPP_LINK, 
  PHONE_DISPLAY, 
  SERVICES,
  toSlug 
} from '../constants';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const homeFaqs = [
    {
      q: "Como é calculado o orçamento para desentupimento em Curitiba?",
      a: "O valor é definido após avaliação técnica presencial da tubulação, considerando a extensão do bloqueio, o diâmetro da tubulação e o maquinário necessário (máquina rotativa ou hidrojato). O orçamento detalhado é apresentado para aprovação antes de iniciar o serviço."
    },
    {
      q: "É necessário quebrar pisos ou paredes para desentupir?",
      a: "Na ampla maioria dos casos, não. Nossos técnicos utilizam cabos flexíveis espirais e bicos desincrustadores que percorrem o interior das curvas da tubulação sem danificar cerâmicas ou alvenaria."
    },
    {
      q: "Qual a área de atendimento da ADP?",
      a: "Atendemos todos os bairros de Curitiba e os 28 municípios da Região Metropolitana, incluindo São José dos Pinhais, Araucária, Colombo, Pinhais e Campo Largo, com equipes volantes."
    },
    {
      q: "Os serviços de desentupimento possuem garantia?",
      a: "Sim. Todos os serviços executados pela ADP contam com garantia técnica por escrito, assegurando a eficácia da desobstrução realizada."
    }
  ];

  return (
    <div className="overflow-hidden">
      <EnhancedSEO 
        title="Desentupidora em Curitiba | ADP Serviços Especializados"
        description="Serviços de desentupimento em Curitiba e Região Metropolitana. Desobstrução de esgoto, pias, ralos, vasos e caça vazamentos com diagnóstico preciso."
        keywords="desentupidora curitiba, desentupimento curitiba, desentupidora de esgoto, caca vazamentos curitiba, limpa fossa curitiba"
        canonicalPath="/"
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 min-h-[85vh] flex items-center pt-16 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 opacity-10 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-adp-orange opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
                <span className="text-sm font-medium">Equipes Volantes em Curitiba e RMC</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight text-shadow">
                Desentupidora em Curitiba: <span className="text-adp-orange">Atendimento Especializado</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 font-light max-w-xl leading-relaxed">
                Soluções técnicas para desentupimento de esgotos, pias, ralos, vasos sanitários e localização de vazamentos. Diagnóstico no local e orçamento transparente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href={PHONE_LINK} 
                  className="flex-1 bg-adp-blue hover:bg-blue-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/50 transition-transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="fill-current" size={20} />
                  LIGAR: {PHONE_DISPLAY}
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-[#25D366] hover:bg-green-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-green-900/50 transition-transform hover:scale-105 flex items-center justify-center"
                >
                  ORÇAMENTO VIA WHATSAPP
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5"><Shield size={16} className="text-adp-orange" /> Garantia Técnica</div>
                <div className="flex items-center gap-1.5"><Clock size={16} className="text-adp-orange" /> Atendimento Ágil</div>
                <div className="flex items-center gap-1.5"><MapPin size={16} className="text-adp-orange" /> Sede Própria em Curitiba</div>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
               <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* BANNER GUIA CURITIBA */}
      <section className="bg-adp-blue py-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-4 text-white">
              <div className="bg-white/20 p-3 rounded-2xl">
                <Zap size={24} className="text-adp-orange fill-adp-orange" />
              </div>
              <div>
                 <h2 className="font-black text-xl leading-none">ATENDIMENTO REGIONAL EM CURITIBA</h2>
                 <p className="text-sm text-blue-100">Confira nossa cobertura completa e detalhes operacionais para a capital paranaense.</p>
              </div>
           </div>
           <Link 
            to="/desentupidora-curitiba" 
            className="bg-white text-adp-blue px-8 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-adp-orange hover:text-white transition-all transform hover:scale-105 shadow-xl"
           >
             VER PÁGINA DE CURITIBA <ArrowRight size={20} />
           </Link>
        </div>
      </section>

      {/* IDENTIFICAÇÃO DE PROBLEMAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Qual problema hidráulico você precisa resolver?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Identifique abaixo a situação do seu imóvel. A equipe da ADP Desentupidora atua com equipamentos específicos para cada tipo de obstrução.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { 
                 title: "Pia ou Ralo Entupido", 
                 desc: "Água acumulando na cuba, descendo lentamente ou exalando odor de gordura? Desobstrução rápida com molas rotativas.", 
                 link: "/servicos/desentupimento-de-esgoto", 
                 icon: <Droplets /> 
               },
               { 
                 title: "Vaso Sanitário Obstruído", 
                 desc: "Nível da água subindo ao acionar a descarga com risco de transbordamento. Remoção de objetos sem quebrar a louça.", 
                 link: "/servicos/desentupimento-de-esgoto", 
                 icon: <Wrench /> 
               },
               { 
                 title: "Esgoto Principal Retornando", 
                 desc: "Retorno de dejetos pelas caixas de inspeção ou ralos do térreo. Limpeza profunda da canalização coletora.", 
                 link: "/servicos/desentupimento-de-esgoto", 
                 icon: <Truck /> 
               },
               { 
                 title: "Conta de Água Alta", 
                 desc: "Consumo subindo sem alteração de rotina? Localizamos o ponto exato do vazamento subterrâneo com geofone eletrônico.", 
                 link: "/servicos/caca-vazamentos", 
                 icon: <Search /> 
               }
             ].map((item, idx) => (
               <Link 
                 key={idx} 
                 to={item.link} 
                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 border-transparent hover:border-adp-blue group flex flex-col justify-between"
               >
                 <div>
                   <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-adp-blue mb-6 group-hover:scale-110 group-hover:bg-adp-blue group-hover:text-white transition-all">
                      {item.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                 </div>
                 <span className="text-adp-blue font-bold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                   Conhecer o Serviço &rarr;
                 </span>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* GRADE DE SERVIÇOS ESPECIALIZADOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-adp-blue font-bold text-sm uppercase tracking-widest">Nossas Especialidades</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mt-2 mb-4">
              Serviços de Desentupidora em Curitiba e Região
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Executamos serviços com equipamentos de ponta para clientes residenciais, condomínios comerciais e plantas industriais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((serv) => (
              <article key={serv.slug} className="border border-gray-100 rounded-3xl p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-adp-blue/10 text-adp-blue rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{serv.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {serv.shortDesc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <Link 
                    to={`/servicos/${serv.slug}`} 
                    className="text-adp-blue font-bold text-sm hover:underline flex items-center gap-1"
                  >
                    Ver detalhes do serviço <ArrowRight size={16} />
                  </Link>
                  <a 
                    href={PHONE_LINK} 
                    className="text-xs text-gray-500 font-semibold hover:text-adp-orange"
                  >
                    Ligar: {PHONE_DISPLAY}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA DE ATENDIMENTO */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              Como funciona o atendimento da ADP Desentupidora?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Processo técnico estruturado para garantir diagnóstico transparente e execução sem surpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Chamado e Triagem",
                desc: "Contato por telefone ou WhatsApp com levantamento do endereço e dos sintomas relatados no imóvel."
              },
              {
                step: "02",
                title: "Avaliação e Diagnóstico",
                desc: "Deslocamento da equipe técnica volante até o local para inspecionar o ponto de obstrução."
              },
              {
                step: "03",
                title: "Orçamento Transparente",
                desc: "Apresentação do valor técnico detalhado com explicação do método a ser aplicado antes de iniciar."
              },
              {
                step: "04",
                title: "Execução e Garantia",
                desc: "Desobstrução com equipamentos mecânicos ou hidrojato, testes finais de vazão e garantia técnica."
              }
            ].map((st, i) => (
              <div key={i} className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/60 relative">
                <span className="text-5xl font-black text-adp-orange/30 block mb-4">{st.step}</span>
                <h3 className="text-xl font-bold mb-2">{st.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/como-funciona" 
              className="inline-flex items-center gap-2 text-adp-orange font-bold hover:underline"
            >
              Conheça em detalhes nosso fluxo operacional &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <VideoCTA location="Curitiba e Região Metropolitana" />

      {/* FAQ DA HOME */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-gray-900 mb-3">
              Dúvidas Frequentes sobre Nossos Serviços
            </h2>
            <p className="text-gray-600">
              Respostas claras sobre avaliação técnica, garantia e metodologia de trabalho.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition"
                  aria-expanded={openFaq === idx}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 text-adp-blue ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/duvidas" className="text-adp-blue font-bold hover:underline">
              Ver todas as perguntas frequentes &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* COBERTURA GERAL */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Presença Operacional em Curitiba e Municípios Vizinhos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-sm">
            Nossa central técnica no CIC permite deslocamento planejado para bairros da capital (como Batel, Portão, Água Verde, Boqueirão, Centro e Santa Felicidade) e cidades metropolitanas como São José dos Pinhais, Colombo, Pinhais e Araucária.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/desentupidora-curitiba" className="bg-blue-50 text-adp-blue font-bold px-4 py-2 rounded-xl text-sm hover:bg-adp-blue hover:text-white transition">
              Curitiba (Central)
            </Link>
            {CITIES.slice(1, 8).map(city => (
              <Link 
                key={city} 
                to={`/local/cidade/${toSlug(city)}`}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm hover:bg-adp-blue hover:text-white transition"
              >
                {city}
              </Link>
            ))}
            <Link to="/cobertura" className="bg-adp-orange text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-orange-600 transition">
              Ver todas as 29 cidades e 90 bairros &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
