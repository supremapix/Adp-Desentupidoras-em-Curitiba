import React, { useEffect } from 'react';
import { Phone, Clock, FileText, Wrench, CheckCircle, Shield, Truck, ArrowRight } from 'lucide-react';
import { PHONE_LINK, WHATSAPP_LINK } from '../constants';
import LeadForm from '../components/LeadForm';
import EnhancedSEO from '../components/EnhancedSEO';

const HowItWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <Phone size={32} />,
      title: "1. Contato Imediato",
      desc: "Você entra em contato via Telefone ou WhatsApp. Nossa central de atendimento 24h coleta suas informações básicas e o endereço.",
      detail: "Disponível 24 horas por dia, 7 dias por semana."
    },
    {
      icon: <Truck size={32} />,
      title: "2. Visita Técnica Grátis",
      desc: "Deslocamos a equipe técnica mais próxima de você. Em Curitiba e região, o tempo médio de chegada é de 30 minutos.",
      detail: "Sem taxa de visita. Frota rastreada."
    },
    {
      icon: <FileText size={32} />,
      title: "3. Diagnóstico e Orçamento",
      desc: "O técnico avalia o problema no local, identifica a causa exata e fornece um orçamento por escrito na hora, sem compromisso.",
      detail: "Transparência total antes de começar."
    },
    {
      icon: <Wrench size={32} />,
      title: "4. Execução do Serviço",
      desc: "Após sua aprovação, realizamos o serviço imediatamente utilizando equipamentos modernos que evitam a quebra de pisos e paredes.",
      detail: "Rápido, limpo e eficiente."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "5. Pagamento Facilitado",
      desc: "Ao finalizar, você confere o resultado. Aceitamos cartões de crédito, débito, PIX e dinheiro. Parcelamos serviços maiores.",
      detail: "Nota fiscal e facilidade no pagamento."
    },
    {
      icon: <Shield size={32} />,
      title: "6. Garantia Estendida",
      desc: "Emitimos certificado de garantia de até 90 dias (conforme o serviço). Se o problema voltar, nós voltamos e resolvemos.",
      detail: "Segurança total para você."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Como Funciona - ADP Desentupidora | Processo Passo a Passo"
        description="Entenda como funciona o atendimento da ADP Desentupidora. Da ligação até a garantia, veja como resolvemos seu problema em 30 minutos."
        canonicalPath="/como-funciona"
      />
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Como Funciona o <span className="text-adp-orange">Atendimento ADP</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Processo simples, transparente e sem surpresas. Do seu chamado até a solução completa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-8 relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                <div className="md:absolute md:-left-8 md:bg-adp-blue md:text-white md:w-16 md:h-16 md:rounded-full md:flex md:items-center md:justify-center md:border-4 md:border-gray-50 z-10 hidden">
                   <span className="font-bold text-xl">{index + 1}</span>
                </div>
                
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-adp-blue flex-shrink-0 md:hidden">
                   <span className="font-bold text-xl">{index + 1}</span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-adp-orange">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2 leading-relaxed">{step.desc}</p>
                  <p className="text-sm text-adp-blue font-semibold flex items-center gap-1">
                    <CheckCircle size={14} /> {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-adp-blue text-white p-8 rounded-2xl shadow-lg mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para resolver seu problema?</h3>
            <p className="mb-8 opacity-90">Nossos técnicos estão de plantão aguardando seu chamado.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={PHONE_LINK} className="bg-white text-adp-blue px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Ligar Agora
              </a>
              <a href={WHATSAPP_LINK} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition shadow-lg border border-white/20">
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <LeadForm />
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-gray-800 mb-4 border-b pb-2">Diferenciais</h4>
               <ul className="space-y-4 text-sm">
                 <li className="flex items-start gap-3">
                   <Clock className="text-adp-orange flex-shrink-0" size={18} />
                   <span>Atendimento 24 horas, inclusive domingos e feriados.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Shield className="text-adp-orange flex-shrink-0" size={18} />
                   <span>Empresa legalizada e com todas as licenças ambientais.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Wrench className="text-adp-orange flex-shrink-0" size={18} />
                   <span>Equipamentos que não quebram pisos (Roto Rooter e Hidrojato).</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;