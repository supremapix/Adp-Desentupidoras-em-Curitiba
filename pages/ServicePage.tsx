import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Shield, 
  Droplets, 
  Camera, 
  Truck, 
  Wrench, 
  HelpCircle, 
  ChevronDown, 
  MessageCircle,
  FileCheck,
  MapPin,
  Clock
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { PHONE_LINK, WHATSAPP_LINK, PHONE_DISPLAY, WHATSAPP_DISPLAY, SERVICES, COMPANY_ADDRESS, COMPANY_NEIGHBORHOOD } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';
import NotFound from './NotFound';
import { BlogCover, BLOG_IMAGES, BlogArticle } from '../components/BlogCover';

interface ServiceDetail {
  seoTitle: string;
  seoDesc: string;
  seoKeywords: string;
  title: string;
  icon: React.ReactNode;
  heroText: string;
  description: string;
  coverImage: BlogArticle;
  secondaryImage: BlogArticle;
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
      icon: <Droplets size={36} className="text-blue-700" />,
      heroText: "Desobstrução técnica de redes coletoras, ramais de pias, ralos e vasos sanitários em Curitiba e Região Metropolitana.",
      description: "O entupimento de redes de esgoto é um problema que requer intervenção técnica para evitar o refluxo de dejetos, contaminação ambiental e odores no imóvel. A ADP Desentupidora atua com máquinas desobstrutoras rotativas dotadas de cabos espirais flexíveis de aço e hidrojateamento de alta pressão, que removem incrustações de gordura, lodo e raízes sem necessidade de quebra de pisos ou paredes.",
      coverImage: BLOG_IMAGES.EMERGENCIA_24H,
      secondaryImage: BLOG_IMAGES.VASO_SANITARIO,
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
      icon: <Truck size={36} className="text-blue-700" />,
      heroText: "Esgotamento técnico de fossas sépticas, sumidouros e caixas de gordura com caminhão auto-vácuo em Curitiba e RMC.",
      description: "Fossas sépticas e sumidouros acumulam resíduos sólidos e pastosos que diminuem a capacidade de decantação do sistema, podendo gerar transbordamentos e infiltrações no solo. A ADP Desentupidora possui caminhões equipados com potentes bombas de sucção a vácuo, realizando a retirada segura e a correta destinação dos efluentes sanitários.",
      coverImage: BLOG_IMAGES.MANUTENCAO_PREVENTIVA,
      secondaryImage: BLOG_IMAGES.CHEGADA_40MIN,
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
      icon: <Wrench size={36} className="text-blue-700" />,
      heroText: "Detecção acústica de vazamentos não visíveis em tubulações pressurizadas para solucionar contas de água elevadas.",
      description: "Uma conta de água com aumento anormal ou o ponteiro do hidrômetro girando sem torneiras abertas é indício claro de vazamento oculto. A ADP Desentupidora utiliza geofones eletrônicos ultrassensíveis para escutar o ruído característico de escape de água sob pressão, permitindo identificar o local exato da ruptura sem quebra-quebra generalizado.",
      coverImage: BLOG_IMAGES.CACA_VAZAMENTO,
      secondaryImage: BLOG_IMAGES.PRECO,
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
      icon: <Droplets size={36} className="text-blue-700" />,
      heroText: "Desincrustação profunda com água em alta pressão para tubulações de grande diâmetro e redes coletoras.",
      description: "Para tubulações industriais, caixas de gordura de restaurantes e galerias de condomínios onde há acúmulo severo de graxa e resíduos endurecidos, o hidrojateamento é o método mais eficaz. A água pressurizada limpa toda a circunferência interna da tubulação, restaurando o diâmetro original do cano sem a utilização de agentes químicos abrasivos.",
      coverImage: BLOG_IMAGES.HIDROJATEAMENTO,
      secondaryImage: BLOG_IMAGES.DIFERENCIAIS_ADP,
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
      icon: <Shield size={36} className="text-blue-700" />,
      heroText: "Higienização técnica e desinfecção de caixas e reservatórios de água potável em Curitiba e Região Metropolitana.",
      description: "A potabilidade da água que abastece residências e condomínios depende diretamente da manutenção dos reservatórios. Com o tempo, acumulam-se biofilmes, lodo e poeira no fundo e nas laterais da caixa d'água. A ADP Desentupidora realiza a higienização física e química com desinfecção apropriada, preservando a saúde dos consumidores.",
      coverImage: BLOG_IMAGES.CERTIFICADO_CAIXA_DAGUA,
      secondaryImage: BLOG_IMAGES.MANUTENCAO_PREVENTIVA,
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
      icon: <Camera size={36} className="text-blue-700" />,
      heroText: "Filmagem interna com câmera de alta resolução para diagnóstico visual preciso de redes de esgoto e canalizações.",
      description: "Quando uma tubulação sofre entupimentos frequentes ou há suspeita de rompimento estrutural sob lajes e pisos, a vídeo inspeção é o método mais avançado de diagnóstico. Uma microcâmera com iluminação LED percorre o interior do encanamento, transmitindo imagens em alta definição que revelam rachaduras, ligações irregulares ou desabamento do cano.",
      coverImage: BLOG_IMAGES.DIFERENCIAIS_ADP,
      secondaryImage: BLOG_IMAGES.HIDROJATEAMENTO,
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
        "@type": "Plumber",
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
    <div className="bg-slate-50 min-h-screen">
      <EnhancedSEO 
        title={content.seoTitle}
        description={content.seoDesc}
        keywords={content.seoKeywords}
        canonicalPath={`/servicos/${slug}`}
        schemaData={serviceSchema}
      />

      {/* Hero do Serviço - Refinado, sem AI Slop */}
      <section className="bg-slate-900 text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Texto e Ações */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 font-semibold text-blue-300 kicker font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                <span>Base no CIC · Atendimento Volante em Curitiba e RMC</span>
              </div>
              
              <h1 className="text-white font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                {content.title} em Curitiba
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {content.heroText}
              </p>

              {/* Ações de Contato em Destaque (Acessíveis para Idosos) */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
                  <span>Orçamento no WhatsApp</span>
                </a>
              </div>

              {/* Indicadores de Credibilidade */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Shield size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Avaliação no Local</span>
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

            {/* Imagem de Capa do Serviço em 16:9 com Logo Sobreposta */}
            <div className="lg:col-span-5">
              <BlogCover 
                image={content.coverImage.image}
                alt={content.coverImage.alt}
                titleAttr={content.coverImage.titleAttr}
                priority={true}
                className="shadow-xl border border-slate-700/80"
              />
              <div className="mt-2 text-right">
                <span className="text-xs text-slate-400">
                  {content.coverImage.tag} · ADP Curitiba
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="faixa-obra h-3" aria-hidden="true" />

      {/* Conteúdo Principal com Barra Lateral */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Descrição Detalhada */}
          <article className="pt-8 border-t-2 border-slate-900">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Como Funciona o Serviço de {content.title}
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-8">
              {content.description}
            </p>

            {/* Segunda Capa 16:9 Dentro do Artigo com Alt Semântico e Logo Sobreposta */}
            <div className="my-8">
              <BlogCover 
                image={content.secondaryImage.image}
                alt={content.secondaryImage.alt}
                titleAttr={content.secondaryImage.titleAttr}
                className="shadow-sm border border-slate-200"
              />
              <p className="text-xs text-slate-500 mt-2 text-center italic">
                {content.secondaryImage.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span>Causas Frequentes do Problema</span>
                </h3>
                <ul className="space-y-3">
                  {content.causes.map((cause, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="text-amber-700 font-bold mt-0.5">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <span>Diferenciais ADP no Atendimento</span>
                </h3>
                <ul className="space-y-3">
                  {content.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle size={17} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Seção de Transparência de Preço com a Imagem Canônica de Orçamento */}
          <section className="pt-8 border-t-2 border-slate-900">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <BlogCover 
                  image={BLOG_IMAGES.PRECO.image}
                  alt={BLOG_IMAGES.PRECO.alt}
                  titleAttr={BLOG_IMAGES.PRECO.titleAttr}
                  className="shadow-sm"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <span className="text-blue-700 kicker font-semibold">Transparência Total</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Como é Calculado o Preço do Desentupimento?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {BLOG_IMAGES.PRECO.summary} Nossos técnicos avaliam a situação no local e apresentam a proposta formal antes de iniciar qualquer serviço.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a 
                    href={PHONE_LINK} 
                    className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition"
                  >
                    Consultar Valores: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Processo Passo a Passo */}
          <section className="pt-8 border-t-2 border-slate-900">
            <div className="mb-6 space-y-1">
              <span className="text-blue-700 kicker font-semibold">Etapas Técnicas</span>
              <h2 className="text-2xl font-bold text-slate-900">
                Como Executamos o Serviço Passo a Passo
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {content.process.map((p, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-bold text-blue-700 font-mono block mb-1">{p.step}</span>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{p.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ do Serviço */}
          <section className="pt-8 border-t-2 border-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="text-blue-700" size={24} />
              <span>Dúvidas Frequentes sobre {content.title}</span>
            </h2>
            <div className="space-y-3">
              {content.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-100 transition"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="pr-4 text-base">{faq.q}</span>
                    <ChevronDown className={`transition-transform duration-200 text-blue-700 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <VideoCTA service={content.title} />

          {/* Outros Serviços Especializados */}
          <section className="pt-4 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Outras Especialidades ADP:</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICES.filter(s => s.slug !== slug).map(other => (
                <Link
                  key={other.slug}
                  to={`/servicos/${other.slug}`}
                  className="p-3 bg-white rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:border-blue-300 transition flex items-center justify-between"
                >
                  <span>{other.title}</span>
                  <ArrowRight size={14} className="text-blue-600" />
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Lateral com Contato Direto e Acessível */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            
            {/* Bloco de Atendimento Imediato */}
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-md border border-slate-800 space-y-4">
              <span className="text-blue-400 block kicker font-semibold">
                Atendimento Técnico no Local
              </span>
              <h3 className="text-xl font-bold leading-tight">
                Solicitar {content.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Atendemos Curitiba e todos os municípios metropolitanos com viaturas volantes e equipamentos adequados.
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
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <div><strong>Base:</strong> {COMPANY_ADDRESS}, {COMPANY_NEIGHBORHOOD}</div>
                <div>Garantia técnica comprovada em ordem de serviço.</div>
              </div>
            </div>

            <LeadForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServicePage;
