import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Shield, Clock, Tool, Droplets, Camera, Truck, Wrench } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { PHONE_LINK, WHATSAPP_LINK } from '../constants';

const ServicePage = () => {
  const { slug } = useParams();

  // Content Data Base
  const servicesContent: Record<string, any> = {
    "desentupimento-de-esgoto": {
      title: "Desentupimento de Esgoto",
      icon: <Droplets size={48} className="text-adp-blue" />,
      heroText: "Rede de esgoto fluindo livremente. Atendimento 24h sem quebrar pisos.",
      description: "O entupimento de esgoto é um problema sério que pode causar retorno de dejetos, mau cheiro e riscos à saúde. A ADP Desentupidora utiliza equipamentos rotativos e de hidrojateamento para desobstruir tubulações de qualquer diâmetro, garantindo a limpeza completa das paredes internas do cano e prevenindo novos entupimentos.",
      benefits: [
        "Eliminação imediata do mau cheiro",
        "Prevenção de transbordamentos e infiltrações",
        "Equipamentos que não danificam a tubulação",
        "Garantia de 90 dias no serviço executado"
      ],
      process: [
        "Inspeção inicial do local afetado",
        "Escolha do equipamento adequado (K-500 ou Hidrojato)",
        "Execução da desobstrução e raspagem interna",
        "Testes de vazão para garantir fluxo normal"
      ]
    },
    "limpeza-de-fossa": {
      title: "Limpeza de Fossa",
      icon: <Truck size={48} className="text-adp-blue" />,
      heroText: "Caminhões auto-vácuo para limpeza completa e descarte ecológico.",
      description: "A limpeza periódica de fossas sépticas, sumidouros e caixas de gordura é essencial para evitar o transbordamento e a contaminação do solo. Possuímos frota própria de caminhões equipados com bombas de alta sucção, realizando o esgotamento total e o transporte dos resíduos para estações de tratamento autorizadas (SANEPAR).",
      benefits: [
        "Prevenção de entupimentos na rede interna",
        "Evita contaminação do lençol freático",
        "Fornecimento de certificado de descarte (MTR)",
        "Atendimento a residências, comércios e indústrias"
      ],
      process: [
        "Posicionamento do caminhão próximo ao local",
        "Sucção dos resíduos líquidos e pastosos",
        "Hidrojateamento para limpeza das paredes da fossa",
        "Transporte e descarte em local licenciado"
      ]
    },
    "caca-vazamentos": {
      title: "Caça Vazamentos",
      icon: <Wrench size={48} className="text-adp-blue" />,
      heroText: "Detectamos vazamentos invisíveis sem quebrar sua casa. Economize água!",
      description: "Sua conta de água aumentou sem motivo? Pode haver um vazamento oculto. Utilizamos tecnologia de ponta, como Geofones Eletrônicos e Câmeras Termográficas, para localizar o ponto exato do vazamento com precisão milimétrica, evitando quebra-quebra desnecessário e reduzindo o custo do reparo.",
      benefits: [
        "Redução imediata na conta de água",
        "Laudo técnico para abatimento na SANEPAR",
        "Localização precisa sem danos ao imóvel",
        "Reparo hidráulico executado na hora (opcional)"
      ],
      process: [
        "Varredura da rede com Geofone Eletrônico",
        "Testes de estanqueidade e pressão",
        "Marcação do ponto exato do problema",
        "Abertura pontual apenas no local do reparo"
      ]
    },
    "hidrojateamento": {
      title: "Hidrojateamento",
      icon: <Droplets size={48} className="text-adp-blue" />,
      heroText: "Limpeza de alta pressão para tubulações industriais e galerias.",
      description: "O hidrojateamento utiliza jatos de água em altíssima velocidade para remover as incrustações mais difíceis, como gordura solidificada, cimento, raízes e detritos industriais. É a solução ideal para limpeza de redes pluviais, caixas de gordura de restaurantes, tubulações industriais e fachadas.",
      benefits: [
        "Restaura o diâmetro original da tubulação",
        "Não utiliza produtos químicos, apenas água",
        "Remove raízes e gorduras petrificadas",
        "Ideal para manutenção preventiva em condomínios"
      ],
      process: [
        "Avaliação da pressão necessária para o serviço",
        "Introdução da mangueira com bico especial",
        "Aplicação do jato d'água em 360 graus",
        "Limpeza final e verificação de fluxo"
      ]
    },
    "limpeza-de-caixa-dagua": {
      title: "Limpeza de Caixa d'Água",
      icon: <Shield size={48} className="text-adp-blue" />,
      heroText: "Água pura e saudável para sua família. Higienização completa.",
      description: "A limpeza da caixa d'água deve ser realizada a cada 6 meses para garantir a qualidade da água consumida e evitar doenças. Nosso processo segue rigorosamente as normas da vigilância sanitária, incluindo o esvaziamento, escovação mecânica, desinfecção com hipoclorito de sódio e testes de potabilidade.",
      benefits: [
        "Eliminação de bactérias, fungos e lodo",
        "Prevenção de doenças transmitidas pela água",
        "Vedação correta da tampa contra insetos",
        "Certificado de execução válido para fiscalização"
      ],
      process: [
        "Fechamento do registro e esvaziamento controlado",
        "Limpeza mecânica das paredes e fundo",
        "Enxágue e desinfecção química",
        "Reabastecimento e verificação de boias"
      ]
    },
    "video-inspecao": {
      title: "Vídeo Inspeção",
      icon: <Camera size={48} className="text-adp-blue" />,
      heroText: "Diagnóstico visual preciso por dentro da tubulação.",
      description: "A vídeo inspeção é a tecnologia mais avançada para diagnosticar problemas complexos em tubulações. Inserimos uma câmera de alta resolução com iluminação LED dentro do cano, permitindo visualizar rachaduras, ligações clandestinas, raízes ou objetos obstrutivos em tempo real, gravando tudo para análise.",
      benefits: [
        "Diagnóstico 100% preciso sem quebrar nada",
        "Localização exata do problema com profundidade",
        "Entrega da gravação em vídeo (DVD/Pen Drive)",
        "Economia de tempo e dinheiro na obra"
      ],
      process: [
        "Introdução da câmera robotizada na tubulação",
        "Navegação e visualização em monitor HD",
        "Gravação do percurso e identificação de falhas",
        "Relatório técnico com as anomalias encontradas"
      ]
    }
  };

  const content = slug ? servicesContent[slug] : null;

  useEffect(() => {
    if (content) {
      document.title = `${content.title} em Curitiba | ADP Desentupidora`;
      window.scrollTo(0, 0);
    }
  }, [slug, content]);

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Service Hero */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-adp-blue opacity-20 skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
               {content.icon}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">
            {content.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
            {content.heroText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href={PHONE_LINK} className="bg-adp-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition shadow-lg flex items-center justify-center gap-2">
               <Phone size={20} /> Solicitar Orçamento
             </a>
             <a href={WHATSAPP_LINK} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2">
               Falar no WhatsApp
             </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Description Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-adp-orange pl-4">
              O que é e como funciona?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {content.description}
            </p>
            
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Tool className="text-adp-blue" />
              Processo de Execução
            </h3>
            <div className="grid gap-4">
              {content.process.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="w-8 h-8 bg-adp-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 font-medium pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <CheckCircle className="text-adp-green" />
                 Vantagens ADP
               </h3>
               <ul className="space-y-4">
                 {content.benefits.map((benefit: string, idx: number) => (
                   <li key={idx} className="flex items-start gap-3">
                     <ArrowRight size={18} className="text-adp-orange mt-1 flex-shrink-0" />
                     <span className="text-gray-600">{benefit}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="bg-adp-blue p-8 rounded-2xl shadow-sm text-white flex flex-col justify-center">
               <h3 className="text-xl font-bold mb-4">Garantia e Segurança</h3>
               <p className="mb-6 opacity-90">
                 Todos os nossos serviços de {content.title.toLowerCase()} acompanham garantia por escrito de até 90 dias.
               </p>
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center gap-2"><Shield size={18} /> Nota Fiscal</li>
                 <li className="flex items-center gap-2"><Clock size={18} /> Atendimento 24h</li>
                 <li className="flex items-center gap-2"><Tool size={18} /> Técnicos Experientes</li>
               </ul>
               <a href={WHATSAPP_LINK} className="bg-white text-adp-blue text-center py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                 Agendar Agora
               </a>
            </div>
          </section>

          <div className="mt-8">
            <Link to="/" className="text-adp-blue font-bold hover:underline flex items-center gap-2">
              &larr; Ver todos os serviços
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <LeadForm />
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4 border-b pb-2">Veja Também</h4>
              <ul className="space-y-3">
                <li className="hover:text-adp-blue transition">
                  <Link to="/servicos/desentupimento-de-esgoto" className="flex items-center gap-2 text-sm text-gray-600">
                    <ArrowRight size={14} /> Desentupimento Esgoto
                  </Link>
                </li>
                <li className="hover:text-adp-blue transition">
                  <Link to="/servicos/caca-vazamentos" className="flex items-center gap-2 text-sm text-gray-600">
                    <ArrowRight size={14} /> Caça Vazamentos
                  </Link>
                </li>
                <li className="hover:text-adp-blue transition">
                  <Link to="/servicos/limpeza-de-fossa" className="flex items-center gap-2 text-sm text-gray-600">
                    <ArrowRight size={14} /> Limpeza de Fossa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;