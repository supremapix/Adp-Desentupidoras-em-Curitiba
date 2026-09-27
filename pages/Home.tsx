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
  Wrench, 
  Truck, 
  CheckCircle, 
  HelpCircle,
  MessageCircle,
  Building2,
  FileCheck
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { 
  CITIES, 
  NEIGHBORHOODS, 
  PHONE_LINK, 
  WHATSAPP_LINK, 
  PHONE_DISPLAY, 
  SERVICES,
  toSlug,
  COMPANY_ADDRESS,
  COMPANY_NEIGHBORHOOD
} from '../constants';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const homeFaqs = [
    {
      q: "Como é calculado o orçamento para desentupimento em Curitiba?",
      a: "O valor é definido após avaliação técnica presencial da tubulação, considerando a extensão do bloqueio, o diâmetro da tubulação e o maquinário necessário (máquina rotativa de cabos flexíveis ou hidrojato). O orçamento detalhado é apresentado para aprovação antes de iniciar o serviço."
    },
    {
      q: "É necessário quebrar pisos ou paredes para desentupir?",
      a: "Na ampla maioria dos casos, não. Nossos técnicos utilizam cabos flexíveis espirais e ponteiras desincrustadoras que percorrem o interior das curvas da tubulação diretamente por ralos ou caixas de inspeção, sem danificar cerâmicas ou alvenaria."
    },
    {
      q: "Qual a área de atendimento da ADP Desentupidora?",
      a: "Atendemos os 74 bairros oficiais de Curitiba e os municípios da Região Metropolitana, incluindo São José dos Pinhais, Araucária, Colombo, Pinhais, Fazenda Rio Grande e Campo Largo, com equipes técnicas volantes."
    },
    {
      q: "Os serviços de desentupimento possuem garantia?",
      a: "Sim. Todos os serviços executados pela ADP contam com garantia técnica por escrito, assegurando a eficácia da desobstrução realizada."
    }
  ];

  return (
    <div className="bg-white">
      <EnhancedSEO 
        title="Desentupidora em Curitiba | ADP Serviços Especializados"
        description="Serviços de desentupimento em Curitiba e Região Metropolitana. Desobstrução técnica de esgoto, pias, ralos, vasos e caça vazamentos com diagnóstico preciso."
        keywords="desentupidora curitiba, desentupimento curitiba, desentupidora de esgoto, caca vazamentos curitiba, limpa fossa curitiba"
        canonicalPath="/"
        includeLocalBusiness={true}
      />

      {/* HERO SECTION - REFINADO, SEM SLOP, ALTO CONTRASTE */}
      <section className="bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Coluna Esquerda: Texto Principal e Ações de Contato */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Kicker tipográfico sem badge de pílula */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                <span>Base em Curitiba · Atendimento Volante na Capital e RMC</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Desentupidora em Curitiba com Diagnóstico Preciso e Sem Quebra
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
                Desobstrução técnica de esgotos, pias, ralos, vasos sanitários, hidrojateamento e localização de vazamentos. Equipes volantes com avaliação no local e orçamento transparente antes da execução.
              </p>

              {/* Botões de Contato Principais (Grandes, Confortáveis para Idosos) */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a 
                  href={PHONE_LINK} 
                  className="bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-xl font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-3 text-center"
                >
                  <Phone size={20} fill="currentColor" />
                  <span>Ligar: {PHONE_DISPLAY}</span>
                </a>
                
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-6 rounded-xl font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-3 text-center"
                >
                  <MessageCircle size={20} />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>

              {/* Indicadores de Confiança com Linha Sutil */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-blue-400 flex-shrink-0" />
                  <span>Garantia por Escrito</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck size={18} className="text-blue-400 flex-shrink-0" />
                  <span>Orçamento Claro</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0" />
                  <span>Sede no CIC (Curitiba)</span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Orçamento */}
            <div className="lg:col-span-5">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* GUIA CURITIBA - BANNER DE CONEXÃO REGIONAL */}
      <section className="bg-slate-800 text-white py-6 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-700/60 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
              <Building2 size={20} className="text-blue-300" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg text-white">Central Operacional da Capital: Curitiba</h2>
              <p className="text-xs sm:text-sm text-slate-300">Confira detalhes operacionais, rotas e lista de bairros atendidos na capital.</p>
            </div>
          </div>
          <Link 
            to="/desentupidora-curitiba" 
            className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition whitespace-nowrap shadow-sm"
          >
            <span>Ver Guia de Curitiba</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* IDENTIFICAÇÃO DE PROBLEMAS HIDRÁULICOS COMUNS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">Diagnóstico no Local</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Qual problema hidráulico você precisa resolver?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Identifique abaixo a situação do seu imóvel. A equipe da ADP Desentupidora atua com maquinário específico para cada tipo de bloqueio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Pia ou Ralo Entupido", 
                desc: "Água acumulando na cuba, escoando devagar ou com retorno de mau cheiro. Desobstrução rápida com molas espirais.", 
                link: "/servicos/desentupimento-de-esgoto", 
                icon: <Droplets size={24} className="text-blue-700" /> 
              },
              { 
                title: "Vaso Sanitário Obstruído", 
                desc: "Nível da água subindo ao acionar a descarga com risco de refluxo. Desobstrução técnica sem arranhar ou quebrar a louça.", 
                link: "/servicos/desentupimento-de-esgoto", 
                icon: <Wrench size={24} className="text-blue-700" /> 
              },
              { 
                title: "Rede de Esgoto Principal", 
                desc: "Retorno de água suja nas caixas de inspeção do quintal ou ralos do piso térreo. Limpeza profunda da canalização coletora.", 
                link: "/servicos/desentupimento-de-esgoto", 
                icon: <Truck size={24} className="text-blue-700" /> 
              },
              { 
                title: "Conta de Água Muito Alta", 
                desc: "Aumento repentino na fatura sem mudança de rotina? Localizamos o ponto exato de vazamentos subterrâneos com geofone.", 
                link: "/servicos/caca-vazamentos", 
                icon: <Search size={24} className="text-blue-700" /> 
              }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.link} 
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1 text-sm font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
                  <span>Conhecer o serviço</span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GRADE DE SERVIÇOS ESPECIALIZADOS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">Nossas Soluções</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Serviços de Desentupidora em Curitiba e Região
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Equipamentos de alta tecnologia para clientes residenciais, edifícios condominiais, estabelecimentos comerciais e indústrias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((serv) => (
              <article 
                key={serv.slug} 
                className="bg-slate-50/60 p-7 sm:p-8 rounded-2xl border border-slate-200/90 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold">
                    <Wrench size={20} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {serv.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {serv.shortDesc}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-sm">
                  <Link 
                    to={`/servicos/${serv.slug}`} 
                    className="font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight size={15} />
                  </Link>
                  <a 
                    href={PHONE_LINK} 
                    className="text-xs text-slate-500 font-semibold hover:text-blue-700"
                  >
                    Ligar: {PHONE_DISPLAY}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA DE ATENDIMENTO TRANSPARENTE */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">Etapas Claras</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Como Funciona o Atendimento da ADP Desentupidora?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Processo técnico estruturado para garantir diagnóstico transparente e execução sem surpresas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={i} className="bg-slate-800/80 p-6 sm:p-7 rounded-2xl border border-slate-700/70">
                <span className="text-3xl font-extrabold text-blue-400 block mb-3 font-mono">{st.step}</span>
                <h3 className="text-lg font-bold mb-2 text-white">{st.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEO / ESTRUTURA TÉCNICA */}
      <VideoCTA />

      {/* PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">Esclarecimentos</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Perguntas Frequentes sobre Desentupimento
            </h2>
            <p className="text-slate-600 text-base">
              Respostas claras sobre valores, maquinário e procedimentos técnicos.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition"
                  aria-expanded={openFaq === idx}
                >
                  <span className="pr-4 text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-200 text-blue-700 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
