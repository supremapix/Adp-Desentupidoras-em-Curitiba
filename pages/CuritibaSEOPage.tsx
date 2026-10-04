import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  MapPin, 
  Award, 
  Zap, 
  Building2, 
  Truck,
  CheckCircle2,
  FileCheck
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
import { BlogCover, BLOG_IMAGES } from '../components/BlogCover';

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

      {/* Hero Master SEO - Design Refinado e Autêntico */}
      <section className="bg-slate-900 text-white pt-14 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Texto e Ações */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 font-semibold text-blue-300 kicker font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                <span>Base Física no CIC · Cobertura em Todos os Bairros de Curitiba</span>
              </div>
              
              <h1 className="text-white font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                Desentupidora em Curitiba com Atendimento Técnico Especializado
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                Soluções profissionais para desobstrução de esgotos, redes pluviais, ramais de pias e ralos em residências, condomínios e estabelecimentos comerciais de Curitiba sem quebrar pisos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href={PHONE_LINK} 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-3 text-center"
                >
                  <Phone size={20} fill="currentColor" />
                  <span>Ligar: {PHONE_DISPLAY}</span>
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-3 text-center"
                >
                  <MessageCircle size={20} />
                  <span>Orçamento no WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Shield size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Garantia Escrita</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileCheck size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Orçamento Claro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Sede no CIC</span>
                </div>
              </div>
            </div>

            {/* Imagem de Capa 16:9 Logística no CIC com Logo Sobreposta */}
            <div className="lg:col-span-5">
              <BlogCover 
                image={BLOG_IMAGES.CHEGADA_40MIN.image}
                alt={BLOG_IMAGES.CHEGADA_40MIN.alt}
                titleAttr={BLOG_IMAGES.CHEGADA_40MIN.titleAttr}
                priority={true}
                className="shadow-xl border border-slate-700/80"
              />
              <div className="mt-2 text-right">
                <span className="text-xs text-slate-400">
                  {BLOG_IMAGES.CHEGADA_40MIN.tag} · Curitiba CIC
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="faixa-obra h-3" aria-hidden="true" />

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            
            {/* Artigo Principal */}
            <article className="prose prose-slate max-w-none text-slate-700">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Como Atua a ADP Desentupidora em Curitiba
              </h2>
              <p className="leading-relaxed mb-4 text-base sm:text-lg">
                Com base estabelecida no bairro Cidade Industrial de Curitiba (CIC), na Rua Luiz Maltaca, a <strong>ADP Desentupidora</strong> presta serviços especializados de manutenção e desobstrução hidráulica para clientes residenciais, síndicos prediais e estabelecimentos comerciais.
              </p>
              <p className="leading-relaxed mb-6 text-base">
                Entupimentos na rede de esgoto provocam refluxo de detritos, proliferação de odores desagradáveis e risco iminente de contaminação. Para solucionar essas emergências, utilizamos equipamentos mecânicos rotativos com cabos de aço espirais flexíveis e hidrojateamento de alta pressão, que realizam a raspagem interna das canalizações sem comprometer a estrutura das tubulações.
              </p>

              {/* Capa 16:9 Ilustrando Diferenciais da Empresa */}
              <div className="my-8 not-prose">
                <BlogCover 
                  image={BLOG_IMAGES.DIFERENCIAIS_ADP.image}
                  alt={BLOG_IMAGES.DIFERENCIAIS_ADP.alt}
                  titleAttr={BLOG_IMAGES.DIFERENCIAIS_ADP.titleAttr}
                  className="shadow-sm border border-slate-200"
                />
                <p className="text-xs text-slate-500 mt-2 text-center italic">
                  {BLOG_IMAGES.DIFERENCIAIS_ADP.summary}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <Award className="text-blue-700 mb-3" size={30} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Equipamentos Profissionais</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Sondas rotativas desincrustadoras para ramais internos e hidrojateamento de alta pressão para tubulações de grande diâmetro e caixas de gordura.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <Zap className="text-blue-700 mb-3" size={30} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Atendimento Direto</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Operação própria, sem intermediários, garantindo responsabilidade técnica e preço justo avaliado presencialmente no local.
                  </p>
                </div>
              </div>

              {/* Bloco de Condomínios com Imagem 16:9 */}
              <div className="my-8 not-prose bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <BlogCover 
                      image={BLOG_IMAGES.MANUTENCAO_PREVENTIVA.image}
                      alt={BLOG_IMAGES.MANUTENCAO_PREVENTIVA.alt}
                      titleAttr={BLOG_IMAGES.MANUTENCAO_PREVENTIVA.titleAttr}
                    />
                  </div>
                  <div className="md:col-span-6 space-y-2">
                    <span className="text-xs font-bold uppercase text-blue-700">Prédios e Condomínios</span>
                    <h3 className="text-lg font-bold text-slate-900">Manutenção Preventiva de Colunas e Prumadas</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Atendimento especializado para síndicos e administradoras em Curitiba. Limpeza preventiva programada para evitar refluxo em apartamentos térreos.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4 not-prose">
                Serviços Prestados em Curitiba
              </h2>
              <ul className="space-y-2 mb-6 not-prose">
                {SERVICES.map((s) => (
                  <li key={s.slug} className="text-sm">
                    <Link to={`/servicos/${s.slug}`} className="text-blue-700 font-semibold hover:underline">
                      {s.title}
                    </Link>
                    <span className="text-slate-600">: {s.shortDesc}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Comprehensive FAQ Section */}
            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Perguntas Frequentes sobre Desentupimento em Curitiba
              </h2>
              <div className="space-y-3">
                {curitibaFaqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-left px-5 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition"
                      aria-expanded={openFaq === index}
                    >
                      <span className="pr-4 text-base">{faq.q}</span>
                      <ChevronDown className={`transition-transform duration-200 text-blue-700 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <VideoCTA location="Curitiba" />

            {/* Bairros Section */}
            <section className="pt-8 border-t-2 border-slate-900">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Bairros Atendidos em Curitiba
              </h2>
              <p className="text-slate-600 mb-6 text-sm">
                Nossa base volante percorre todas as regiões da capital paranaense. Confira os principais bairros atendidos:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {['CIC', 'Batel', 'Água Verde', 'Centro', 'Portão', 'Santa Felicidade', 'Boqueirão', 'Sítio Cercado', 'Uberaba', 'Bacacheri', 'Pinheirinho', 'Novo Mundo'].map(b => (
                  <div key={b} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200/80 font-medium text-xs text-slate-800">
                    <MapPin size={14} className="text-blue-700 flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/cobertura" className="text-blue-700 font-bold text-sm hover:underline inline-flex items-center gap-1">
                  <span>Ver lista completa de 74 bairros de Curitiba e municípios da RMC</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-md border border-slate-800 space-y-4">
                <span className="text-blue-400 block kicker font-semibold">
                  Central Curitiba
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Atendimento Técnico no Local
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Avaliação presencial para desentupimento de esgotos, pias, ralos e caça vazamentos em Curitiba.
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

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
                  Base: Rua Luiz Maltaca, 36, CIC, Curitiba - PR.
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
