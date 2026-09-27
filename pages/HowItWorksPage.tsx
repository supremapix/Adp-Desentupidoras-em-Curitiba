import React, { useEffect } from 'react';
import { Phone, Clock, FileText, Wrench, CheckCircle, Shield, Truck } from 'lucide-react';
import { PHONE_LINK, WHATSAPP_LINK, PHONE_DISPLAY, SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const HowItWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <Phone size={28} />,
      title: "1. Contato e Triagem Técnica",
      desc: "Você entra em contato por telefone ou WhatsApp com nossa central. Coletamos informações sobre os sintomas da obstrução (pia, vaso, esgoto principal ou caixa de gordura) e o endereço em Curitiba ou RMC.",
      detail: "Atendimento ágil para chamados emergenciais e agendamentos."
    },
    {
      icon: <Truck size={28} />,
      title: "2. Direcionamento da Equipe Volante",
      desc: "Nossa central direciona a equipe técnica mais próxima da sua região. Contamos com veículos equipados com máquinas desentupidoras rotativas e acessórios de desobstrução mecânica.",
      detail: "Deslocamento planejado para a capital e municípios metropolitanos."
    },
    {
      icon: <FileText size={28} />,
      title: "3. Diagnóstico Técnico no Local",
      desc: "O técnico especializado inspeciona as caixas de inspeção, ralos e ramais afetados para identificar o tipo de bloqueio (gordura, raízes, terra ou objetos) e a extensão da tubulação.",
      detail: "Avaliação presencial para diagnóstico preciso."
    },
    {
      icon: <Shield size={28} />,
      title: "4. Apresentação do Orçamento",
      desc: "Com base no diagnóstico presencial, apresentamos o orçamento detalhado, explicando a metodologia recomendada e o valor total antes de qualquer intervenção física no encanamento.",
      detail: "Transparência total sem custos surpresa."
    },
    {
      icon: <Wrench size={28} />,
      title: "5. Execução Especializada sem Quebra",
      desc: "Após sua aprovação, introduzimos os cabos de aço espirais flexíveis ou a mangueira de hidrojateamento diretamente pela tubulação, desobstruindo e raspando as paredes internas sem danificar pisos ou cerâmicas.",
      detail: "Serviço limpo com maquinário específico para cada bitola."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "6. Teste de Vazão e Garantia",
      desc: "Realizamos testes de descarga e escoamento na presença do cliente para comprovar a vazão plena da rede. Ao finalizar, emitimos o comprovante do serviço com garantia técnica.",
      detail: "Garantia do serviço executado e laudo técnico."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Como Funciona o Atendimento | ADP Desentupidora Curitiba"
        description="Conheça o processo passo a passo da ADP Desentupidora em Curitiba: do contato inicial ao diagnóstico no local, execução sem quebra e garantia técnica."
        canonicalPath="/como-funciona"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20 border-b-4 border-adp-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-adp-orange font-bold uppercase tracking-widest text-xs mb-2 block">
            Processo Transparente
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-4">
            Como Funciona o Atendimento da ADP Desentupidora
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Entenda como nossa equipe técnica atua desde o primeiro contato até a resolução completa do problema hidráulico.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <article 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-adp-blue flex-shrink-0">
                   {step.icon}
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
                  <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
                  <p className="text-xs text-adp-blue font-bold flex items-center gap-1 pt-1">
                    <CheckCircle size={14} /> {step.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <VideoCTA location="Curitiba e Região Metropolitana" />

          {/* Links para Serviços */}
          <section className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Serviços que Seguem este Processo:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map(s => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition text-sm font-semibold text-gray-800 hover:text-adp-blue flex justify-between items-center"
                >
                  <span>{s.title}</span>
                  <span>&rarr;</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="bg-adp-blue text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black mb-3">Precisa de Ajuda Técnica?</h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Fale diretamente com nossa central para triagem do seu problema e envio de equipe técnica.
              </p>
              <a 
                href={PHONE_LINK} 
                className="block w-full bg-white text-adp-blue py-4 rounded-2xl font-black text-xl text-center hover:bg-gray-100 transition shadow-lg mb-3"
              >
                {PHONE_DISPLAY}
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-adp-green text-white py-3.5 rounded-2xl font-bold text-center hover:bg-green-600 transition"
              >
                WhatsApp de Atendimento
              </a>
            </div>
            <LeadForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HowItWorksPage;
