import React, { useEffect } from 'react';
import { Phone, FileText, Wrench, CheckCircle, Shield, Truck, MessageCircle } from 'lucide-react';
import { PHONE_LINK, WHATSAPP_LINK, PHONE_DISPLAY, SERVICES, COMPANY_ADDRESS, COMPANY_NEIGHBORHOOD } from '../constants';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';
import { BlogCover, BLOG_IMAGES } from '../components/BlogCover';

const HowItWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <Phone size={24} className="text-blue-700" />,
      title: "1. Contato e Triagem Técnica",
      desc: "Você entra em contato por telefone ou WhatsApp com nossa central. Coletamos informações sobre os sintomas da obstrução (pia, vaso, esgoto principal ou caixa de gordura) e o endereço em Curitiba ou RMC.",
      detail: "Atendimento ágil para chamados emergenciais e agendamentos."
    },
    {
      icon: <Truck size={24} className="text-blue-700" />,
      title: "2. Direcionamento da Equipe Volante",
      desc: "Nossa central direciona a equipe técnica mais próxima da sua região. Contamos com veículos equipados com máquinas desentupidoras rotativas e acessórios de desobstrução mecânica.",
      detail: "Deslocamento planejado para a capital e municípios metropolitanos."
    },
    {
      icon: <FileText size={24} className="text-blue-700" />,
      title: "3. Diagnóstico Técnico no Local",
      desc: "O técnico especializado inspeciona as caixas de inspeção, ralos e ramais afetados para identificar o tipo de bloqueio (gordura, raízes, terra ou objetos) e a extensão da tubulação.",
      detail: "Avaliação presencial para diagnóstico preciso."
    },
    {
      icon: <Shield size={24} className="text-blue-700" />,
      title: "4. Apresentação do Orçamento",
      desc: "Com base no diagnóstico presencial, apresentamos o orçamento detalhado, explicando a metodologia recomendada e o valor total antes de qualquer intervenção física no encanamento.",
      detail: "Transparência total sem custos surpresa."
    },
    {
      icon: <Wrench size={24} className="text-blue-700" />,
      title: "5. Execução Mecânica Especializada",
      desc: "Após sua aprovação, introduzimos os cabos de aço espirais flexíveis ou a mangueira de hidrojateamento diretamente pela tubulação, desobstruindo e raspando as paredes internas com preservação da alvenaria.",
      detail: "Serviço com maquinário específico para cada diâmetro."
    },
    {
      icon: <CheckCircle size={24} className="text-blue-700" />,
      title: "6. Teste de Escoamento e Validação",
      desc: "Realizamos testes práticos de escoamento na presença do cliente para comprovar a vazão plena da rede e entregamos o comprovante do serviço realizado.",
      detail: "Validação presencial ao término do atendimento."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <EnhancedSEO 
        title="Como Funciona o Atendimento | ADP Desentupidora Curitiba"
        description="Conheça o processo passo a passo da ADP Desentupidora em Curitiba: do contato inicial ao diagnóstico no local, execução mecânica e validação presencial."
        canonicalPath="/como-funciona"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white pt-14 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-blue-300 kicker font-semibold">
            Metodologia Transparente
          </span>
          <h1 className="text-white max-w-3xl mx-auto font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Como Funciona o Atendimento da ADP Desentupidora
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Entenda detalhadamente cada etapa técnica, desde o primeiro contato telefônico até a resolução definitiva do bloqueio hidráulico.
          </p>
        </div>
      </section>
      <div className="faixa-obra h-3" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Card com a Foto da Chegada Rápida e Logística */}
          <div className="pt-8 border-t-2 border-slate-900">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6">
                <BlogCover 
                  image={BLOG_IMAGES.CHEGADA_40MIN.image}
                  alt={BLOG_IMAGES.CHEGADA_40MIN.alt}
                  titleAttr={BLOG_IMAGES.CHEGADA_40MIN.titleAttr}
                  className="shadow-sm"
                />
              </div>
              <div className="md:col-span-6 space-y-2">
                <span className="text-xs font-bold uppercase text-blue-700">Deslocamento Rápido</span>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Logística Estratégica a Partir do CIC
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {BLOG_IMAGES.CHEGADA_40MIN.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Passos do Atendimento */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <article 
                key={index} 
                className="border-slate-200/90 flex flex-col md:flex-row gap-5 hover:shadow-md transition-shadow pt-8 border-t-2 border-slate-900"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">{step.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  <p className="text-xs text-blue-700 font-bold flex items-center gap-1 pt-1">
                    <CheckCircle size={14} /> {step.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Card com Foto de Preço Transparente */}
          <div className="pt-8 border-t-2 border-slate-900">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6">
                <BlogCover 
                  image={BLOG_IMAGES.PRECO.image}
                  alt={BLOG_IMAGES.PRECO.alt}
                  titleAttr={BLOG_IMAGES.PRECO.titleAttr}
                  className="shadow-sm"
                />
              </div>
              <div className="md:col-span-6 space-y-2">
                <span className="text-xs font-bold uppercase text-blue-700">Sem Cobranças Abusivas</span>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Orçamento no Local Explicado com Clareza
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {BLOG_IMAGES.PRECO.summary}
                </p>
              </div>
            </div>
          </div>

          <VideoCTA location="Curitiba e Região Metropolitana" />

          {/* Links para Serviços */}
          <section className="pt-8 border-t-2 border-slate-900">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Serviços que Seguem Este Processo:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map(s => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition text-sm font-semibold text-slate-800 hover:text-blue-700 flex justify-between items-center border border-slate-200/70"
                >
                  <span>{s.title}</span>
                  <span>&rarr;</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-md border border-slate-800 space-y-4">
              <span className="text-blue-400 block kicker font-semibold">
                Central de Atendimento
              </span>
              <h3 className="text-xl font-bold leading-tight">
                Dúvidas sobre o Atendimento?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Fale diretamente com nossa central para triagem do seu problema e envio de equipe técnica.
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
                Base Operacional: {COMPANY_ADDRESS}, {COMPANY_NEIGHBORHOOD}.
              </div>
            </div>

            <LeadForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HowItWorksPage;
