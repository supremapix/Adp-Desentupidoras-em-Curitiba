import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, DollarSign, Wrench, Shield, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../constants';

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Orçamento e Preços",
      icon: <DollarSign className="text-adp-green" size={24} />,
      items: [
        { 
          q: "Como é calculado o valor de um desentupimento?", 
          a: "O valor depende da extensão do encanamento, do diâmetro da tubulação, da complexidade do acesso e do tipo de maquinário necessário (sondas rotativas com molas espirais ou hidrojateamento de alta pressão). O técnico avalia o local e informa o orçamento claro antes de iniciar qualquer procedimento." 
        },
        { 
          q: "Quais são as formas de pagamento aceitas?", 
          a: "Aceitamos PIX, cartões de crédito e débito das principais bandeiras e dinheiro. Para serviços de maior porte, consulte as opções de parcelamento no cartão com nossa equipe." 
        },
        { 
          q: "Existe taxa para avaliação técnica no local?", 
          a: "A política de deslocamento e avaliação varia de acordo com a distância e a localidade em Curitiba e Região Metropolitana. Entre em contato com nossa central telefônica para verificar as condições específicas para o seu endereço." 
        }
      ]
    },
    {
      category: "Métodos de Execução",
      icon: <Wrench className="text-adp-blue" size={24} />,
      items: [
        { 
          q: "É necessário quebrar pisos ou paredes para desentupir?", 
          a: "Na grande maioria dos casos, não. Nossas máquinas utilizam cabos de aço flexíveis com ponteiras desincrustadoras que entram por ralos, vasos ou caixas de inspeção, contornando as curvas dos canos sem romper a alvenaria." 
        },
        { 
          q: "Quanto tempo dura uma desobstrução de encanamento?", 
          a: "Desentupimentos pontuais de pias, ralos ou vasos costumam levar entre 30 e 60 minutos. Redes coletoras extensas de condomínios, galerias pluviais ou esgotamento de fossas sépticas de grande porte podem exigir algumas horas." 
        },
        { 
          q: "Como é evitada a sujeira no imóvel durante o procedimento?", 
          a: "Nossos técnicos utilizam protetores e realizam o recolhimento dos cabos rotativos de forma controlada, realizando o descarte dos resíduos e a limpeza da área de trabalho ao final do serviço." 
        }
      ]
    },
    {
      category: "Garantia e Segurança Técnica",
      icon: <Shield className="text-adp-orange" size={24} />,
      items: [
        { 
          q: "Os serviços de desentupimento possuem garantia?", 
          a: "Sim. Todos os serviços executados pela ADP Desentupidora contam com garantia técnica comprovada por escrito. Se houver reincidência de entupimento decorrente do mesmo fator no período garantido, realizamos nova vistoria técnica." 
        },
        { 
          q: "A ADP emite nota fiscal para condomínios e empresas?", 
          a: "Sim. Emitimos Nota Fiscal e documentação de execução para clientes residenciais, síndicos, condomínios comerciais e empresas industriais." 
        }
      ]
    },
    {
      category: "Atendimento e Cobertura",
      icon: <Clock className="text-purple-500" size={24} />,
      items: [
        { 
          q: "A empresa atende chamados de emergência?", 
          a: "Sim. Mantemos suporte técnico voltado para atendimentos emergenciais em Curitiba e Região Metropolitana, conforme escala e disponibilidade das equipes volantes." 
        },
        { 
          q: "A ADP atende todos os bairros de Curitiba e cidades vizinhas?", 
          a: "Sim. Atendemos todos os bairros da capital e os 28 municípios da Região Metropolitana, com base central no bairro Cidade Industrial de Curitiba (CIC)." 
        }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(section => section.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    })))
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title="Dúvidas Frequentes | ADP Desentupidora Curitiba"
        description="Tire suas dúvidas sobre serviços de desentupimento em Curitiba: orçamento, maquinário sem quebra, garantia técnica e área de cobertura da ADP."
        canonicalPath="/duvidas"
        schemaData={faqSchema}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20 border-b-4 border-adp-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <HelpCircle size={40} className="mx-auto text-adp-orange mb-3" />
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-4">
            Perguntas Frequentes sobre Desentupimento
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Respostas claras e transparentes sobre metodologia de trabalho, avaliação técnica e garantia.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          
          {faqs.map((section, secIdx) => (
            <section key={secIdx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                 {section.icon}
                 <h2 className="text-xl font-bold text-gray-900">{section.category}</h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {section.items.map((item, idx) => {
                  const globalIdx = secIdx * 10 + idx;
                  const isOpen = openIndex === globalIdx;
                  
                  return (
                    <div key={idx} className="p-4 md:p-6">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                        className="w-full text-left font-bold text-gray-800 flex justify-between items-center hover:text-adp-blue transition"
                        aria-expanded={isOpen}
                      >
                        <span className="pr-4 text-base md:text-lg">{item.q}</span>
                        <ChevronDown className={`transition-transform duration-300 text-adp-blue flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed pt-2">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <VideoCTA location="Curitiba e Região Metropolitana" />
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="bg-adp-blue text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black mb-3">Ainda tem dúvidas?</h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Nossa equipe técnica esclarece suas dúvidas diretamente pelo telefone ou WhatsApp.
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
                Conversar pelo WhatsApp
              </a>
            </div>
            <LeadForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FaqPage;
