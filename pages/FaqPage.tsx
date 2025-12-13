import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, DollarSign, Wrench, Shield, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const FaqPage = () => {
  useEffect(() => {
    document.title = "Dúvidas Frequentes | ADP Desentupidora";
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Preços e Pagamentos",
      icon: <DollarSign className="text-green-500" />,
      items: [
        { q: "Qual o valor do desentupimento?", a: "O valor varia conforme a complexidade, o equipamento necessário e a extensão do entupimento. Nossa visita é gratuita para avaliação e o orçamento é passado na hora, a partir de R$ 90,00." },
        { q: "Quais as formas de pagamento?", a: "Aceitamos dinheiro, PIX, cartões de débito e crédito (todas as bandeiras). Para valores maiores, oferecemos parcelamento no cartão." },
        { q: "A visita é cobrada?", a: "Não! A visita técnica para orçamento é totalmente gratuita em Curitiba e região metropolitana. Você só paga se aprovar o serviço." }
      ]
    },
    {
      category: "Serviços e Execução",
      icon: <Wrench className="text-blue-500" />,
      items: [
        { q: "Vocês quebram pisos ou paredes?", a: "Na maioria dos casos, não. Utilizamos equipamentos modernos (Roto Rooter e Hidrojato) que desobstruem a tubulação internamente. A quebra só é necessária se houver colapso estrutural do cano." },
        { q: "Quanto tempo demora o serviço?", a: "Desentupimentos simples levam em média 30 a 60 minutos. Serviços mais complexos ou limpeza de fossas grandes podem levar algumas horas." },
        { q: "Fazem barulho ou sujeira?", a: "Nossos equipamentos são profissionais e relativamente silenciosos. Prezamos pela limpeza total do local após a execução do serviço." }
      ]
    },
    {
      category: "Garantia e Segurança",
      icon: <Shield className="text-adp-orange" />,
      items: [
        { q: "O serviço tem garantia?", a: "Sim, oferecemos garantia por escrito de até 90 dias para desentupimentos, conforme o Código de Defesa do Consumidor. Se entupir novamente no período, voltamos sem custo." },
        { q: "Vocês emitem nota fiscal?", a: "Sim, emitimos Nota Fiscal para todos os serviços, seja para residências, condomínios ou empresas." },
      ]
    },
    {
      category: "Atendimento",
      icon: <Clock className="text-purple-500" />,
      items: [
        { q: "Atendem de madrugada e fim de semana?", a: "Sim! Temos equipes de plantão 24 horas, 7 dias por semana, incluindo sábados, domingos e feriados." },
        { q: "Atendem condomínios?", a: "Sim, atendemos condomínios com preços especiais e contratos de manutenção preventiva." },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <HelpCircle size={48} className="mx-auto text-adp-orange mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Dúvidas <span className="text-adp-orange">Frequentes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Confira as respostas para as perguntas mais comuns de nossos clientes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          
          {faqs.map((section, secIdx) => (
            <div key={secIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                 {section.icon}
                 <h2 className="text-lg font-bold text-gray-800">{section.category}</h2>
              </div>
              
              <div>
                {section.items.map((item, idx) => {
                  const globalIdx = secIdx * 10 + idx; // Unique ID logic
                  const isOpen = openIndex === globalIdx;
                  
                  return (
                    <div key={idx} className="border-b border-gray-50 last:border-0">
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                        className="w-full text-left px-6 py-4 font-medium text-gray-800 flex justify-between items-start hover:bg-gray-50 transition-colors focus:outline-none"
                      >
                        <span className="pr-4">{item.q}</span>
                        <ChevronDown className={`flex-shrink-0 mt-1 transition-transform duration-300 text-adp-blue ${isOpen ? 'rotate-180' : ''}`} size={20} />
                      </button>
                      <div className={`px-6 text-gray-600 bg-blue-50/30 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
             <LeadForm />
             <div className="mt-8 bg-adp-blue text-white p-6 rounded-xl shadow-lg text-center">
                <p className="font-bold text-lg mb-2">Ainda tem dúvidas?</p>
                <p className="text-sm opacity-90 mb-4">Nossa equipe está pronta para responder.</p>
                <a href="/#contato" className="inline-block w-full bg-white text-adp-blue font-bold py-3 rounded-lg hover:bg-gray-100 transition">
                  Falar com Atendente
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;