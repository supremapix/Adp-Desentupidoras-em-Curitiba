import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Shield, 
  Clock, 
  Droplets, 
  Camera, 
  Truck, 
  Wrench, 
  HelpCircle, 
  ChevronDown, 
  MessageCircle 
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { PHONE_LINK, WHATSAPP_LINK, PHONE_DISPLAY, SERVICES } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';
import NotFound from './NotFound';

interface ServiceDetail {
  seoTitle: string;
  seoDesc: string;
  seoKeywords: string;
  title: string;
  icon: React.ReactNode;
  heroText: string;
  description: string;
  causes: string[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesContent: Record<string, ServiceDetail> = {
    "desentupimento-de-esgoto": {
      seoTitle: "Desentupimento de Esgoto em Curitiba | ADP Desentupidora",
      seoDesc: "Desentupimento de rede de esgoto em Curitiba e Região Metropolitana. Desobstrução com máquinas rotativas e hidrojato sem quebrar pisos. Orçamento no local.",
      seoKeywords: "desentupimento esgoto curitiba, desentupidora de esgoto, desobstrução de esgoto curitiba, cano entupido curitiba",
      title: "Desentupimento de Esgoto",
      icon: <Droplets size={44} className="text-adp-blue" />,
      heroText: "Desobstrução técnica de redes coletoras, ramais de pias, ralos e vasos sanitários em Curitiba e Região Metropolitana.",
      description: "O entupimento de redes de esgoto é um problema que requer intervenção técnica para evitar o refluxo de dejetos, contaminação ambiental e odores no imóvel. A ADP Desentupidora atua com máquinas desobstrutoras rotativas dotadas de cabos espirais flexíveis de aço e hidrojateamento de alta pressão, que removem incrustações de gordura, lodo e raízes sem necessidade de quebra de pisos ou paredes.",
      causes: [
        "Acúmulo de gordura e resíduos de alimentos em ramais de cozinha",
        "Descarte inadequado de papel higiênico, absorventes ou objetos no vaso",
        "Infiltração de raízes de árvores em tubulações enterradas",
        "Declive insuficiente ou falhas no assentamento da canalização"
      ],
      benefits: [
        "Restauração do fluxo normal da rede de esgoto",
        "Eliminação de odores e refluxos insalubres",
        "Execução sem quebra de alvenaria na grande maioria dos casos",
        "Garantia técnica do serviço prestado com emissão de laudo"
      ],
      process: [
        { step: "01", title: "Inspeção Inicial", desc: "Avaliação técnica do ponto de refluxo e identificação da caixa de inspeção correspondente." },
        { step: "02", title: "Definição do Maquinário", desc: "Escolha da sonda rotativa adequada ou acionamento de hidrojateamento conforme o diâmetro." },
        { step: "03", title: "Desobstrução e Raspagem", desc: "Passagem dos cabos rotativos para triturar o bloqueio e desincrustar as paredes do cano." },
        { step: "04", title: "Teste de Fluxo", desc: "Liberação de água em abundância para certificar o escoamento contínuo e sem retenções." }
      ],
      faqs: [
        {
          q: "Como saber se o problema é no esgoto interno ou na rede pública?",
          a: "Se o refluxo ocorre em múltiplos pontos baixos do imóvel (ralos e caixas de gordura), o bloqueio pode estar na ligação externa com a rede pública. Nossos técnicos realizam a verificação da caixa de inspeção para apontar onde reside a obstrução."
        },
        {
          q: "Qual equipamento é utilizado no desentupimento de esgoto?",
          a: "Empregamos máquinas desentupidoras rotativas com cabos espirais de aço e ponteiras específicas para corte de raízes e gordura, além de hidrojateamento para redes de diâmetro superior."
        },
        {
          q: "O procedimento danifica os canos de PVC?",
          a: "Não. Os cabos e pontas são desenvolvidos para deslizar pelas curvas de tubulações de PVC e manilhas de barro sem furar ou quebrar os encanamentos estruturais."
        }
      ]
    },
    "limpeza-de-fossa": {
      seoTitle: "Limpeza de Fossa em Curitiba e Região | Caminhão Auto Vácuo | ADP",
      seoDesc: "Limpeza e esgotamento de fossa séptica em Curitiba e RMC. Caminhão auto vácuo de alta sucção com transporte e destinação técnica de resíduos.",
      seoKeywords: "limpeza de fossa curitiba, limpa fossa curitiba, esgotamento de fossa septica, caminhao auto vacuo curitiba",
      title: "Limpeza de Fossa Séptica",
      icon: <Truck size={44} className="text-adp-blue" />,
      heroText: "Esgotamento técnico de fossas sépticas, sumidouros e caixas de gordura com caminhão auto-vácuo em Curitiba e RMC.",
      description: "Fossas sépticas e sumidouros acumulam resíduos sólidos e pastosos que diminuem a capacidade de decantação do sistema, podendo gerar transbordamentos e infiltrações no solo. A ADP Desentupidora possui caminhões equipados com potentes bombas de sucção a vácuo, realizando a retirada segura e a correta destinação dos efluentes sanitários.",
      causes: [
        "Atingimento da capacidade máxima de lodo sedimentado na fossa",
        "Impermeabilização do fundo do sumidouro por camada de gordura",
        "Uso excessivo de desinfetantes que eliminam as bactérias digestoras",
        "Períodos de chuvas intensas elevando o lençol freático regional"
      ],
      benefits: [
        "Prevenção contra transbordamentos de efluentes no terreno",
        "Desobstrução do sistema de drenagem e retorno do fluxo sanitário",
        "Coleta e transporte em caminhões tanque estanques e seguros",
        "Atendimento a residências, condomínios, chácaras e indústrias"
      ],
      process: [
        { step: "01", title: "Abertura e Ventilação", desc: "Abertura cuidadosa da tampa da fossa para dissipação de gases acumulados." },
        { step: "02", title: "Conexão dos Mangotes", desc: "Acoplamento de mangotes de alta sucção da bomba do caminhão ao compartimento." },
        { step: "03", title: "Sucção dos Resíduos", desc: "Esgotamento da fase líquida e pastosa sedimentada no fundo da fossa." },
        { step: "04", title: "Transporte do Efluente", desc: "Fechamento do sistema e transporte dos resíduos recolhidos em caminhão tanque homologado." }
      ],
      faqs: [
        {
          q: "Com qual frequência a fossa séptica deve ser esgotada?",
          a: "Em média, recomenda-se a limpeza anual ou bianual, dependendo do volume do reservatório e da quantidade de usuários no imóvel."
        },
        {
          q: "Vocês atendem chácaras e áreas rurais na Região Metropolitana?",
          a: "Sim, atendemos municípios de toda a Região Metropolitana de Curitiba, inclusive condomínios de chácaras e propriedades rurais com acesso para caminhão."
        }
      ]
    },
    "caca-vazamentos": {
      seoTitle: "Caça Vazamentos em Curitiba | Detecção com Geofone | ADP",
      seoDesc: "Localização precisa de vazamentos não visíveis em Curitiba. Geofone eletrônico para detectar vazamentos em canos embutidos sem quebrar o imóvel.",
      seoKeywords: "caca vazamentos curitiba, deteccao de vazamento, geofone curitiba, conta de agua alta curitiba",
      title: "Caça Vazamentos Especializado",
      icon: <Wrench size={44} className="text-adp-blue" />,
      heroText: "Detecção acústica de vazamentos não visíveis em tubulações pressurizadas para solucionar contas de água elevadas.",
      description: "Uma conta de água com aumento anormal ou o ponteiro do hidrômetro girando sem torneiras abertas é indício claro de vazamento oculto. A ADP Desentupidora utiliza geofones eletrônicos ultrassensíveis para escutar o ruído característico de escape de água sob pressão, permitindo identificar o local exato da ruptura sem quebra-quebra generalizado.",
      causes: [
        "Ruptura de conexões soldáveis em ramais enterrados",
        "Movimentação do solo ou acomodação estrutural de paredes",
        "Válvulas de descarga ou caixas acopladas com passagem contínua",
        "Ressecamento de tubulações antigas submetidas a alta pressão da rede"
      ],
      benefits: [
        "Identificação pontual da ruptura sem demolição de pisos ou paredes",
        "Economia direta com a contenção do desperdício de água potável",
        "Laudo técnico descritivo do ponto identificado",
        "Possibilidade de execução do reparo hidráulico pontual"
      ],
      process: [
        { step: "01", title: "Teste de Estanqueidade", desc: "Bloqueio de pontos de consumo e monitoramento do hidrômetro para comprovar a perda." },
        { step: "02", title: "Varredura com Geofone", desc: "Aplicação do sensor acústico de solo sobre as linhas da canalização pressurizada." },
        { step: "03", title: "Demarcação do Ponto", desc: "Sinalização exata do local com maior emissão sonora de vazamento." },
        { step: "04", title: "Laudo ou Reparo", desc: "Emissão de parecer técnico e execução de abertura localizada para conserto caso solicitado." }
      ],
      faqs: [
        {
          q: "Como o geofone consegue encontrar o vazamento dentro da parede ou do chão?",
          a: "A água que vaza sob pressão emite uma vibração acústica de frequência característica. O geofone amplifica esse sinal e filtra ruídos externos, permitindo ao técnico isolar o ponto exato de vazamento."
        },
        {
          q: "O serviço de caça-vazamento inclui o conserto?",
          a: "O serviço básico compreende a localização e demarcação precisa do ponto com laudo técnico. O reparo hidráulico pontual pode ser realizado pela própria equipe mediante orçamento prévio aprovado."
        }
      ]
    },
    "hidrojateamento": {
      seoTitle: "Hidrojateamento em Curitiba | Alta Pressão | ADP Desentupidora",
      seoDesc: "Hidrojateamento de alta pressão para redes coletoras, galerias pluviais e caixas de gordura industriais em Curitiba e RMC. Limpeza profunda.",
      seoKeywords: "hidrojateamento curitiba, limpeza alta pressao esgoto, hidrojato tubulacao curitiba, desobstrucao hidrojateamento",
      title: "Hidrojateamento de Alta Pressão",
      icon: <Droplets size={44} className="text-adp-blue" />,
      heroText: "Desincrustação profunda com água em alta pressão para tubulações de grande diâmetro e redes coletoras.",
      description: "Para tubulações industriais, caixas de gordura de restaurantes e galerias de condomínios onde há acúmulo severo de graxa e resíduos endurecidos, o hidrojateamento é o método mais eficaz. A água pressurizada limpa toda a circunferência interna da tubulação, restaurando o diâmetro original do cano sem a utilização de agentes químicos abrasivos.",
      causes: [
        "Incrustações espessas de gordura animal e vegetal petrificada",
        "Assoreamento de redes pluviais por areia, terra e detritos de obras",
        "Resíduos industriais decantados em ramais coletores de fábricas",
        "Entupimentos recorrentes que sondas mecânicas não lavam totalmente"
      ],
      benefits: [
        "Limpeza integral em 360 graus das paredes internas da tubulação",
        "Solução ecológica que utiliza exclusivamente água sob pressão",
        "Apropriado para redes coletoras e galerias prediais de grande extensão",
        "Redução drástica da frequência de novas obstruções"
      ],
      process: [
        { step: "01", title: "Aferição de Pressão", desc: "Ajuste da bomba pressurizadora de acordo com o material da tubulação." },
        { step: "02", title: "Inserção do Bico Técnico", desc: "Introdução da mangueira especial com bicos propulsores multidirecionais." },
        { step: "03", title: "Varredura e Desincrustação", desc: "Avanço autopropelido do bico cortando placas de gordura e arrastando sedimentos." },
        { step: "04", title: "Enxágue e Validação", desc: "Fluxo abundante de água para garantir canalização 100% desobstruída." }
      ],
      faqs: [
        {
          q: "Qual a diferença entre hidrojateamento e máquina desentupidora rotativa?",
          a: "A máquina rotativa utiliza cabos de aço que perfuram e removem o tampão pontual. O hidrojateamento lava e desincrusta as paredes do cano por completo, sendo ideal para redes gordurosas ou de diâmetro maior."
        },
        {
          q: "O hidrojateamento pode ser feito em apartamentos?",
          a: "Geralmente é indicado para redes coletoras térreas, garagens, galerias pluviais e caixas de gordura condominiais, devido ao porte das mangueiras de alta pressão."
        }
      ]
    },
    "limpeza-de-caixa-dagua": {
      seoTitle: "Limpeza de Caixa d'Água em Curitiba | Higienização ADP",
      seoDesc: "Limpeza e desinfecção de caixas d'água e reservatórios em Curitiba. Serviço especializado para residências, condomínios e empresas.",
      seoKeywords: "limpeza de caixa de agua curitiba, higienizacao reservatorio curitiba, limpar caixa dagua curitiba",
      title: "Limpeza de Caixa d'Água",
      icon: <Shield size={44} className="text-adp-blue" />,
      heroText: "Higienização técnica e desinfecção de caixas e reservatórios de água potável em Curitiba e Região Metropolitana.",
      description: "A potabilidade da água que abastece residências e condomínios depende diretamente da manutenção dos reservatórios. Com o tempo, acumulam-se biofilmes, lodo e poeira no fundo e nas laterais da caixa d'água. A ADP Desentupidora realiza a higienização física e química com desinfecção apropriada, preservando a saúde dos consumidores.",
      causes: [
        "Sedimentação natural de partículas minerais trazidas pela rede de abastecimento",
        "Formação de biofilme bacteriano nas paredes do reservatório",
        "Falhas de vedação da tampa permitindo entrada de poeira e insetos",
        "Intervalos superiores a seis meses sem esgotamento e desinfecção"
      ],
      benefits: [
        "Preservação da qualidade da água e saúde dos moradores",
        "Remoção completa de biofilmes, lodo e incrustações no fundo",
        "Inspeção e regulagem da boia de nível e conexões do reservatório",
        "Comprovante do serviço de higienização técnica"
      ],
      process: [
        { step: "01", title: "Fechamento e Esvaziamento", desc: "Isolamento do registro de entrada e esvaziamento controlado deixando lâmina de água." },
        { step: "02", title: "Escovação Mecânica", desc: "Lavagem das paredes e fundo do reservatório com escovas de cerdas macias sem químicos agressivos." },
        { step: "03", title: "Desinfecção Sanitária", desc: "Aplicação dosada de solução bactericida e tempo de contato adequado." },
        { step: "04", title: "Enxágue e Abastecimento", desc: "Descarte da água de limpeza, enxágue final e liberação para reabastecimento normal." }
      ],
      faqs: [
        {
          q: "Com que frequência devo realizar a limpeza da caixa d'água?",
          a: "Os órgãos de vigilância sanitária recomendam a higienização a cada 6 meses tanto para residências quanto para condomínios e estabelecimentos comerciais."
        },
        {
          q: "São utilizados produtos químicos tóxicos?",
          a: "Não. É realizada limpeza mecânica e desinfecção com solução apropriada de hipoclorito em dosagem segura, seguida de enxágue completo."
        }
      ]
    },
    "video-inspecao": {
      seoTitle: "Vídeo Inspeção de Esgoto em Curitiba | Câmera para Canos | ADP",
      seoDesc: "Vídeo inspeção robotizada de tubulações em Curitiba. Câmera de alta resolução para filmagem interna de redes de esgoto sem quebrar nada.",
      seoKeywords: "video inspecao esgoto curitiba, filmagem tubulacao curitiba, inspecao camera esgoto curitiba",
      title: "Vídeo Inspeção de Tubulações",
      icon: <Camera size={44} className="text-adp-blue" />,
      heroText: "Filmagem interna com câmera de alta resolução para diagnóstico visual preciso de redes de esgoto e canalizações.",
      description: "Quando uma tubulação sofre entupimentos frequentes ou há suspeita de rompimento estrutural sob lajes e pisos, a vídeo inspeção é o método mais avançado de diagnóstico. Uma microcâmera com iluminação LED percorre o interior do encanamento, transmitindo imagens em alta definição que revelam rachaduras, ligações irregulares ou desabamento do cano.",
      causes: [
        "Entupimentos crônicos e repetitivos na mesma tubulação",
        "Suspeita de esmagamento ou quebra de tubulação sob garagens ou calçadas",
        "Necessidade de mapear o traçado de ramais enterrados desconhecidos",
        "Verificação técnica pós-obra para validar integridade da rede"
      ],
      benefits: [
        "Localização milimétrica do defeito com indicação da profundidade",
        "Eliminação da quebra desnecessária de revestimentos e alvenarias",
        "Gravação digital da filmagem para análise do cliente e engenharia",
        "Laudo técnico visual com fotos e descrição das irregularidades"
      ],
      process: [
        { step: "01", title: "Acesso à Rede", desc: "Introdução da haste com câmera através de ralos, vasos ou caixas de inspeção." },
        { step: "02", title: "Navegação e Gravação", desc: "Avanço da sonda iluminada registrando imagens em tempo real em monitor." },
        { step: "03", title: "Mapeamento das Anomalias", desc: "Marcação da metragem exata e da profundidade de eventuais rachaduras ou bloqueios." },
        { step: "04", title: "Entrega do Parecer", desc: "Disponibilização do vídeo e orientação técnica para solução direcionada." }
      ],
      faqs: [
        {
          q: "Qual a vantagem de fazer a vídeo inspeção antes de consertar o cano?",
          a: "A filmagem mostra exatamente onde e qual é o problema (rachadura, raiz, objeto preso ou deformação). Com isso, abre-se o piso apenas sobre o local exato necessário, economizando em obras."
        },
        {
          q: "A câmera passa em canos de pequeno diâmetro?",
          a: "Sim, dispomos de cabos de sondagem com cabeçotes articulados capazes de inspecionar canalizações a partir de 50mm de diâmetro."
        }
      ]
    }
  };

  const content = slug ? servicesContent[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If slug is not recognized, return 404
  if (!content || !slug) {
    return <NotFound />;
  }

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${content.title} - ADP Desentupidora Curitiba`,
      "description": content.description,
      "provider": {
        "@type": "PlumbingService",
        "name": "ADP Desentupidora Curitiba",
        "telephone": "+554133451194"
      },
      "areaServed": {
        "@type": "City",
        "name": "Curitiba"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title={content.seoTitle}
        description={content.seoDesc}
        keywords={content.seoKeywords}
        canonicalPath={`/servicos/${slug}`}
        schemaData={serviceSchema}
      />

      {/* Service Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden border-b-4 border-adp-orange">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-adp-blue opacity-15 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
               {content.icon}
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
            {content.title} em Curitiba
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            {content.heroText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={PHONE_LINK} 
              className="bg-adp-blue hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={20} fill="currentColor" /> Ligar: {PHONE_DISPLAY}
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Descrição Detalhada */}
          <article className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-8 border-adp-blue pl-4">
              O que é o serviço de {content.title}?
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {content.description}
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Causas Mais Comuns Deste Problema
            </h3>
            <ul className="space-y-3 mb-8">
              {content.causes.map((cause, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-adp-red flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">✕</div>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
              Vantagens do Atendimento ADP
            </h3>
            <ul className="space-y-3 mb-8">
              {content.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-adp-green flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Processo Passo a Passo */}
          <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-l-8 border-adp-orange pl-4">
              Metodologia de Execução: Passo a Passo
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {content.process.map((p, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="text-3xl font-black text-adp-blue/40 block mb-2">{p.step}</span>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ do Serviço */}
          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HelpCircle className="text-adp-blue" /> Dúvidas Frequentes sobre {content.title}
            </h2>
            <div className="space-y-3">
              {content.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className={`transition-transform duration-300 text-adp-blue flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <VideoCTA service={content.title} />

          {/* Outros Serviços */}
          <section className="pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Outros Serviços Prestados pela ADP:</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICES.filter(s => s.slug !== slug).map(other => (
                <Link
                  key={other.slug}
                  to={`/servicos/${other.slug}`}
                  className="p-3 bg-white rounded-xl border border-gray-200 text-sm font-medium text-adp-blue hover:border-adp-blue transition flex items-center justify-between"
                >
                  <span>{other.title}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Lateral */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="bg-adp-blue text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black mb-3">Solicitar {content.title}</h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Atendimento técnico em Curitiba e Região Metropolitana. Diagnóstico presencial e orçamento transparente.
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
                Chamar no WhatsApp
              </a>
            </div>
            <LeadForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServicePage;
