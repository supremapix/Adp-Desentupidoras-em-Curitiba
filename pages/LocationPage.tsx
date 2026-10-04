import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Shield, 
  ChevronDown, 
  Building2, 
  Home as HomeIcon, 
  Factory, 
  Truck, 
  UtensilsCrossed,
  History,
  Clock, 
  HelpCircle,
  Wrench,
  AlertTriangle,
  MessageCircle
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { 
  PHONE_DISPLAY, 
  PHONE_LINK, 
  WHATSAPP_LINK, 
  ALL_LOCATIONS, 
  COMPANY_ADDRESS, 
  COMPANY_NEIGHBORHOOD, 
  COMPANY_CITY, 
  COMPANY_STATE,
  SERVICES 
} from '../constants';
import { getConsolidation } from '../consolidations';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';
import NotFound from './NotFound';
import { BlogCover, BLOG_IMAGES } from '../components/BlogCover';

const ClientRedirect: React.FC<{ to: string }> = ({ to }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(to);
    }
  }, [to]);
  return null;
};

type LocalProfile = 
  | 'HEADQUARTERS_CIC'
  | 'VERTICAL_CONDO'
  | 'GASTRONOMIC_COMMERCIAL'
  | 'INDUSTRIAL_LOGISTIC'
  | 'HISTORICAL_OLD_PIPES'
  | 'SUBURBAN_RURAL_FOSSA'
  | 'METROPOLITAN_RMC'
  | 'RESIDENTIAL_FAMILY_SOBRADOS';

const LocationPage: React.FC = () => {
  const { type, slug } = useParams<{ type: string; slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 1. Verificar se a URL é uma página consolidada com destino canônico
  const consolidation = useMemo(() => {
    if (!type || !slug) return null;
    return getConsolidation(type, slug);
  }, [type, slug]);

  // 2. Localização válida
  const locationItem = useMemo(() => {
    if (!type || !slug) return null;
    return ALL_LOCATIONS.find(loc => loc.type === type && loc.slug === slug);
  }, [type, slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Se a URL estiver consolidada, entrega canonical para o destino e redireciona
  if (consolidation) {
    return (
      <div className="bg-gray-50 min-h-screen py-24 text-center px-4">
        <EnhancedSEO 
          title={`Redirecionando para ${consolidation.targetName} | ADP Desentupidora`}
          description={`Esta página foi consolidada com ${consolidation.targetName}. Você está sendo redirecionado.`}
          canonicalPath={consolidation.targetPath}
          noindex={true}
        />
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-blue-50 text-adp-blue rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
            &rarr;
          </div>
          <h1 className="text-gray-900 mb-2 font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">Redirecionando...</h1>
          <p className="text-gray-600 text-sm mb-6">
            O conteúdo de atendimento desta região foi consolidado na página de <strong>{consolidation.targetName}</strong> ({consolidation.reason}).
          </p>
          <Link 
            to={consolidation.targetPath} 
            className="inline-block bg-adp-blue text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition"
          >
            Acessar {consolidation.targetName}
          </Link>
          <ClientRedirect to={consolidation.targetPath} />
        </div>
      </div>
    );
  }

  // Se não existir nas localizações cadastradas
  if (!locationItem) {
    return <NotFound />;
  }

  const locationName = locationItem.name;
  const isCity = type === 'cidade';

  // 3. Determinação do Perfil Técnico e Arquitetônico Local
  const profile: LocalProfile = useMemo(() => {
    const slugLower = slug?.toLowerCase() || '';

    // Sede Oficial da Empresa
    if (slugLower === 'cic') return 'HEADQUARTERS_CIC';

    // Municípios Metropolitanos
    if (isCity) {
      if (['araucaria', 'fazenda-rio-grande', 'sao-jose-dos-pinhais', 'quatro-barras'].includes(slugLower)) {
        return 'INDUSTRIAL_LOGISTIC';
      }
      return 'METROPOLITAN_RMC';
    }

    // Regiões de Edifícios e Condomínios Verticais
    const verticalCondos = ['batel', 'bigorrilho', 'agua-verde', 'cabral', 'juveve', 'centro-civico', 'cristo-rei', 'mossungue', 'vila-izabel'];
    if (verticalCondos.includes(slugLower)) return 'VERTICAL_CONDO';

    // Polos Gastronômicos e Comerciais
    const gastronomic = ['santa-felicidade', 'merces', 'vista-alegre'];
    if (gastronomic.includes(slugLower)) return 'GASTRONOMIC_COMMERCIAL';

    // Regiões Centrais Históricas e Canos Centenários
    const historical = ['centro', 'sao-francisco', 'reboucas', 'prado-velho', 'alto-da-gloria', 'alto-da-xv'];
    if (historical.includes(slugLower)) return 'HISTORICAL_OLD_PIPES';

    // Polos Industriais de Curitiba
    const industrialCuritiba = ['tatuquara', 'hauer', 'pinheirinho'];
    if (industrialCuritiba.includes(slugLower)) return 'INDUSTRIAL_LOGISTIC';

    // Regiões Semi-rurais / Fossa Séptica
    const septicFossa = ['umbara', 'campo-de-santana', 'caximba', 'ganchinho', 'lamenha-pequena', 'butiatuvinha', 'riviera', 'augusta', 'sao-miguel'];
    if (septicFossa.includes(slugLower)) return 'SUBURBAN_RURAL_FOSSA';

    // Bairros Residenciais de Casas e Sobrados
    return 'RESIDENTIAL_FAMILY_SOBRADOS';
  }, [slug, isCity]);

  // 4. Conteúdo Editorial Especializado por Perfil
  const getEditorialData = () => {
    switch (profile) {
      case 'HEADQUARTERS_CIC':
        return {
          typeLabel: "Sede Operacional e Atendimento Imediato",
          subheadline: `Base operacional da ADP Desentupidora na Rua Luiz Maltaca, 36. Atendimento prioritário no CIC com hidrojateamento e maquinário mecânico.`,
          editorial: `A sede física e matriz operacional da ADP Desentupidora está instalada no bairro CIC (Cidade Industrial de Curitiba), na Rua Luiz Maltaca, 36. Essa localização estratégica permite atendimento prioritário com caminhões de hidrojateamento de alta pressão, bombas de auto-vácuo e equipes volantes que atendem prontamente empresas, plantas fabris na Avenida Juscelino Kubitschek de Oliveira e residências da região.`,
          highlight: `Base própria no CIC: despacho ágil de equipamentos para desentupimento de esgotos industriais, comerciais e residenciais.`,
          icon: <Factory className="text-adp-orange" size={32} />,
          faqs: [
            {
              q: "Por que o atendimento no CIC é mais ágil pela ADP?",
              a: "A base técnica da empresa está instalada no próprio bairro CIC, na Rua Luiz Maltaca, 36. Isso possibilita deslocamento imediato de caminhões combinados e viaturas de apoio para atendimento de residências e indústrias locais."
            },
            {
              q: "A ADP realiza desobstrução de tubulações industriais e caixas separadoras no CIC?",
              a: "Sim. Atendemos indústrias e galpões da CIC com caminhões de hidrojateamento de alta vazão e sucção auto-vácuo, efetuando a limpeza técnica de redes de efluentes, caixas de decantação e galerias pluviais."
            },
            {
              q: "Como solicitar uma avaliação técnica no bairro CIC?",
              a: "Basta entrar em contato pelo telefone (41) 3345-1194 ou WhatsApp. Por estarmos sediados no bairro, direcionamos os técnicos com prontidão para inspeção no local e apresentação de orçamento claro."
            }
          ]
        };

      case 'VERTICAL_CONDO':
        return {
          typeLabel: "Especialista em Condomínios e Prumadas Verticais",
          subheadline: `Desentupimento de colunas prediais, ramais de apartamentos e prumadas de esgoto em ${locationName}.`,
          editorial: `Em condomínios e edifícios verticais de ${locationName}, entupimentos em colunas de esgoto ou de águas servidas afetam múltiplos apartamentos simultaneamente. A ADP Desentupidora atua com máquinas desobstrutoras rotativas de cabos espirais flexíveis de precisão, que realizam a raspagem interna das paredes dos canos através das caixas sifonadas ou pontos de inspeção, sem necessidade de quebra de alvenaria e com baixo nível de ruído para os moradores.`,
          highlight: `Atendimento programado ou emergencial para condomínios residenciais e comerciais em ${locationName}, com emissão de laudo e nota fiscal.`,
          icon: <Building2 className="text-adp-blue" size={32} />,
          faqs: [
            {
              q: `Como é feito o desentupimento em edifícios de ${locationName} sem quebrar pisos ou paredes?`,
              a: `Utilizamos sondas rotativas mecânicas com cabos de aço flexíveis encapados. O equipamento é introduzido por ralos, caixas sifonadas ou visitas da prumada, triturando gordura e detritos diretamente no interior do cano sem danificar conexões prediais.`
            },
            {
              q: `A ADP emite laudo técnico e nota fiscal para condomínios em ${locationName}?`,
              a: `Sim. Emitimos nota fiscal detalhada e laudo descritivo do procedimento executado para prestação de contas junto a síndicos, conselhos fiscais e administradoras de condomínio.`
            },
            {
              q: `O que fazer em caso de refluxo de esgoto em apartamento em ${locationName}?`,
              a: `Recomenda-se fechar o registro local e avisar imediatamente o condomínio para suspender o uso de água nos pavimentos superiores da mesma prumada, contatando nossa equipe para desobstrução técnica da coluna coletora.`
            }
          ]
        };

      case 'GASTRONOMIC_COMMERCIAL':
        return {
          typeLabel: "Soluções para Redes Comerciais e Caixas de Gordura",
          subheadline: `Desobstrução de caixas de gordura, redes de esgoto e ramais de pias para restaurantes e comércios em ${locationName}.`,
          editorial: `Polo reconhecido por seus estabelecimentos gastronômicos e comerciais, ${locationName} apresenta alta demanda por manutenção preventiva em caixas de gordura e ramais de descarte de cozinha. O acúmulo contínuo de óleos vegetais saponificados reduz drasticamente o diâmetro das tubulações. A ADP executa hidrojateamento com bicos rotativos desincrustantes e aspiração técnica, restabelecendo a vazão sem paralisar as atividades comerciais.`,
          highlight: `Atendimento com horários programados para não interromper a operação de restaurantes e comércios em ${locationName}.`,
          icon: <UtensilsCrossed className="text-adp-orange" size={32} />,
          faqs: [
            {
              q: `Como é realizada a limpeza de caixas de gordura em estabelecimentos de ${locationName}?`,
              a: `Realizamos a remoção mecânica e aspiração dos resíduos sólidos e gordurosos acumulados, seguida da raspagem das tubulações afluentes e efluentes para prevenir transbordamentos e mau cheiro.`
            },
            {
              q: `O serviço pode ser executado fora do horário de atendimento ao público?`,
              a: `Sim. Para restaurantes e comércios em ${locationName}, disponibilizamos horários especiais de agendamento antes da abertura ou após o encerramento do expediente.`
            },
            {
              q: `Qual a frequência indicada para manutenção preventiva de caixas de gordura comerciais?`,
              a: `Recomenda-se a limpeza técnica a cada 30 a 60 dias para cozinhas comerciais de médio e grande porte, garantindo conformidade sanitária e evitando entupimentos súbitos.`
            }
          ]
        };

      case 'HISTORICAL_OLD_PIPES':
        return {
          typeLabel: "Tubulações Antigas e Diagnóstico Técnico Cuidadoso",
          subheadline: `Desentupimento técnico em imóveis tradicionais e canalizações antigas no bairro ${locationName}.`,
          editorial: `O bairro ${locationName} abriga construções tradicionais que frequentemente contam com tubulações originais de ferro fundido, cerâmica vitrificada ou PVC de espessuras antigas. Nessas redes, o uso indiscriminado de métodos agressivos pode provocar fraturas em conexões ressecadas. A ADP atua com sondas rotativas mecânicas de torque controlado e inspeção técnica prévia, desobstruindo com total segurança estrutural.`,
          highlight: `Diagnóstico cuidadoso para redes antigas de esgoto e águas pluviais em ${locationName}.`,
          icon: <History className="text-adp-blue" size={32} />,
          faqs: [
            {
              q: `É seguro realizar desentupimento em canos antigos de ferro fundido ou manilhas em ${locationName}?`,
              a: `Sim. Nossos operadores utilizam ponteiras especiais e regulam a velocidade das sondas rotativas para evitar impactos que possam comprometer conexões ou tubulações antigas.`
            },
            {
              q: `Como a ADP remove raízes que invadem encanamentos em ${locationName}?`,
              a: `Em bairros arborizados como ${locationName}, as raízes entram pelas juntas das manilhas. Aplicamos ponteiras cortadoras rotativas de aço que trituram as raízes internamente, devolvendo o escoamento normal.`
            },
            {
              q: `Por que não utilizar produtos químicos cáusticos em canos antigos?`,
              a: `Produtos à base de soda cáustica geram reações térmicas que podem corroer ferro fundido, ressecar plásticos e empedrar a gordura na tubulação. A desobstrução mecânica profissional é o método seguro.`
            }
          ]
        };

      case 'INDUSTRIAL_LOGISTIC':
        return {
          typeLabel: "Hidrojateamento de Alta Pressão e Galerias Industriais",
          subheadline: `Desentupimento e limpeza técnica de redes coletoras industriais, caixas de decantação e galerias em ${locationName}.`,
          editorial: `Com galpões logísticos e plantas industriais expressivas em ${locationName}, a manutenção de redes coletoras de efluentes e águas pluviais de grande diâmetro (150 mm a 400 mm+) requer equipamentos robustos. A ADP Desentupidora opera com caminhões de hidrojateamento de alta pressão e bombas auto-vácuo, realizando a desincrustação de resíduos pesados, areia e efluentes industriais com rapidez.`,
          highlight: `Equipamentos combinados de alta capacidade para galpões, fábricas e pátios logísticos em ${locationName}.`,
          icon: <Factory className="text-adp-orange" size={32} />,
          faqs: [
            {
              q: `Quais equipamentos são empregados em redes industriais em ${locationName}?`,
              a: `Empregamos caminhões de hidrojateamento pressurizado com torpedos de arrasto para galerias de grande vazão, além de caminhões auto-vácuo para esgotamento de caixas separadoras e de decantação.`
            },
            {
              q: `A ADP realiza contratos ou agendamentos periódicos para indústrias em ${locationName}?`,
              a: `Sim. Atendemos indústrias e condomínios logísticos com vistorias programadas preventivas para manter canalizações desobstruídas antes do período de chuvas intensas.`
            },
            {
              q: `Como é feita a limpeza de galerias de águas pluviais obstruídas por terra e brita?`,
              a: `A pressão controlada da água pulverizada pelo bico torpedo desagrega o sedimento compactado e o empurra até a caixa de visita mais próxima, onde os resíduos são aspirados.`
            }
          ]
        };

      case 'SUBURBAN_RURAL_FOSSA':
        return {
          typeLabel: "Limpa Fossa e Desobstrução Residencial",
          subheadline: `Esgotamento técnico de fossas sépticas, sumidouros e desentupimento de redes em ${locationName}.`,
          editorial: `Em áreas com menor adensamento e presença de chácaras ou residências que utilizam sistemas individuais de tratamento de esgoto em ${locationName}, a limpeza periódica de fossas sépticas e caixas de decantação é fundamental para evitar transbordamento e contaminação do solo. A ADP Desentupidora atende a região com caminhões auto-vácuo equipados com mangotes de longo alcance para sucção completa de lodo e efluentes.`,
          highlight: `Caminhão auto-vácuo para esgotamento e transporte técnico de fossas sépticas em ${locationName}.`,
          icon: <Truck className="text-adp-green" size={32} />,
          faqs: [
            {
              q: `Como funciona o serviço de limpa fossa em ${locationName}?`,
              a: `O caminhão auto-vácuo conecta mangotes à tampa de inspeção da fossa, aspirando todo o lodo do fundo e as crostas superficiais, restabelecendo a capacidade de absorção do sumidouro.`
            },
            {
              q: `Com que frequência se deve esgotar uma fossa séptica em ${locationName}?`,
              a: `A recomendação geral é realizar a limpeza a cada 1 a 3 anos, dependendo do volume do reservatório e do número de habitantes no imóvel.`
            },
            {
              q: `Para onde são levados os dejetos recolhidos da fossa?`,
              a: `Os efluentes coletados são encaminhados a estações regulamentadas de tratamento de efluentes, com descarte ecológico certificado.`
            }
          ]
        };

      case 'METROPOLITAN_RMC':
        return {
          typeLabel: "Atendimento Volante na Região Metropolitana",
          subheadline: `Serviços especializados de desentupidora, caça vazamentos e hidrojateamento no município de ${locationName}.`,
          editorial: `A partir de sua sede em Curitiba, a ADP Desentupidora atende o município de ${locationName} com equipes técnicas volantes preparadas para solucionar entupimentos em residências, condomínios e empresas. As viaturas contam com maquinário mecânico rotativo e suporte de caminhões combinados para esgotamento e desobstrução profunda, com deslocamento planejado pelas principais rodovias de ligação.`,
          highlight: `Atendimento técnico programado e emergencial para o município de ${locationName}.`,
          icon: <Truck className="text-adp-blue" size={32} />,
          faqs: [
            {
              q: `Como funciona o atendimento da ADP no município de ${locationName}?`,
              a: `Você entra em contato informando o endereço em ${locationName} e o sintoma da obstrução. Nossa central agenda o deslocamento da equipe técnica volante mais próxima para diagnóstico presencial.`
            },
            {
              q: `Há cobrança de valores ocultos para deslocamento até ${locationName}?`,
              a: `Não. Toda a condição de atendimento e valores são informados de forma transparente antes do início de qualquer serviço pelo técnico no local.`
            },
            {
              q: `Quais serviços da ADP estão disponíveis em ${locationName}?`,
              a: `Todos os serviços: desentupimento de esgotos, pias, ralos, vasos sanitários, caça vazamentos eletrônico com geofone, hidrojateamento e limpeza técnica de fossas.`
            }
          ]
        };

      default: // RESIDENTIAL_FAMILY_SOBRADOS
        return {
          typeLabel: "Atendimento Residencial e Comercial Especializado",
          subheadline: `Desentupimento de pias, ralos, vasos sanitários e redes de esgoto no bairro ${locationName}.`,
          editorial: `No bairro ${locationName}, a ADP Desentupidora atende sobrados, residências térreas e comércios locais que enfrentam bloqueios em ramais de esgoto, caixas de passagem no quintal ou sifões de banheiros e cozinhas. Nossos técnicos utilizam máquinas elétricas rotativas de cabos flexíveis que removem gordura, cabelos e detritos sem danificar os encanamentos nem quebrar pisos.`,
          highlight: `Equipes volantes com atendimento técnico e orçamento transparente em todo o bairro ${locationName}.`,
          icon: <HomeIcon className="text-adp-blue" size={32} />,
          faqs: [
            {
              q: `Como é feita a desobstrução de vasos sanitários e ralos em ${locationName}?`,
              a: `Utilizamos sondas flexíveis de rotação mecânica que transpassam as curvas do encanamento e trituram a obstrução diretamente, sem riscar a louça sanitária nem exigir a retirada desnecessária do vaso.`
            },
            {
              q: `Quanto tempo leva um atendimento de desentupimento residencial em ${locationName}?`,
              a: `A maioria das desobstruções domésticas (pias, ralos ou vasos) é concluída entre 30 e 60 minutos após o diagnóstico técnico inicial do local de bloqueio.`
            },
            {
              q: `Como prevenir o retorno de entupimentos no esgoto doméstico em ${locationName}?`,
              a: `Evite descartar óleo de cozinha na pia, utilize grelhas protetoras nos ralos para reter cabelos e nunca jogue lenços umedecidos ou objetos no vaso sanitário.`
            }
          ]
        };
    }
  };

  const dynamic = getEditorialData();

  const profileCover = useMemo(() => {
    switch (profile) {
      case 'HEADQUARTERS_CIC':
        return BLOG_IMAGES.DIFERENCIAIS_ADP;
      case 'VERTICAL_CONDO':
        return BLOG_IMAGES.MANUTENCAO_PREVENTIVA;
      case 'GASTRONOMIC_COMMERCIAL':
        return BLOG_IMAGES.MAU_CHEIRO;
      case 'INDUSTRIAL_LOGISTIC':
        return BLOG_IMAGES.HIDROJATEAMENTO;
      case 'HISTORICAL_OLD_PIPES':
        return BLOG_IMAGES.HIDROJATEAMENTO;
      case 'SUBURBAN_RURAL_FOSSA':
        return BLOG_IMAGES.CHEGADA_40MIN;
      case 'METROPOLITAN_RMC':
        return BLOG_IMAGES.CHEGADA_40MIN;
      case 'RESIDENTIAL_FAMILY_SOBRADOS':
      default:
        return BLOG_IMAGES.VASO_SANITARIO;
    }
  }, [profile]);

  // 5. Schema.org JSON-LD Específico (Service + WebPage + FAQPage)
  // Nota: Não declara múltiplos LocalBusinesses físicos para evitar falsas filiais
  const localSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://adpservicos.app.br/local/${type}/${slug}#webpage`,
      "url": `https://adpservicos.app.br/local/${type}/${slug}`,
      "name": `Desentupidora em ${locationName} - ADP Serviços`,
      "description": `Serviços técnicos de desentupimento de esgotos, pias, ralos e manutenção hidráulica em ${locationName}.`,
      "inLanguage": "pt-BR",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://adpservicos.app.br" },
          { "@type": "ListItem", "position": 2, "name": "Área de Cobertura", "item": "https://adpservicos.app.br/cobertura" },
          { "@type": "ListItem", "position": 3, "name": locationName, "item": `https://adpservicos.app.br/local/${type}/${slug}` }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Desentupimento em ${locationName}`,
      "serviceType": "Desentupimento e Manutenção Hidráulica",
      "description": `Atendimento técnico de desentupimento de redes coletoras de esgoto, pias, ralos e colunas prediais em ${locationName}.`,
      "provider": {
        "@id": "https://adpservicos.app.br/#organization"
      },
      "areaServed": {
        "@type": isCity ? "City" : "AdministrativeArea",
        "name": locationName
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": dynamic.faqs.map(faq => ({
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
        title={`Desentupidora em ${locationName} | ADP Serviços`}
        description={`Serviços de desentupimento em ${locationName}. Desobstrução técnica de esgoto, pias, ralos e vasos sanitários com máquinas rotativas e hidrojateamento.`}
        canonicalPath={`/local/${type}/${slug}`}
        schemaData={localSchema}
        includeLocalBusiness={false}
      />

      {/* Header Local Hero - Refinado sem AI Slop */}
      <section className="bg-slate-900 text-white pt-14 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 font-semibold text-blue-300 kicker font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                <span>{dynamic.typeLabel}</span>
              </div>
              
              <h1 className="text-white font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                Desentupidora em <span className="text-blue-400">{locationName}</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {dynamic.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href={PHONE_LINK} 
                  className="bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-xl font-bold text-base shadow-md transition flex items-center justify-center gap-3 text-center"
                >
                  <Phone size={18} fill="currentColor" />
                  <span>Ligar: {PHONE_DISPLAY}</span>
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-6 rounded-xl font-bold text-base shadow-md transition flex items-center justify-center gap-3 text-center"
                >
                  <MessageCircle size={18} />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Shield size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Garantia Escrita</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wrench size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Sem Quebra</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Base no CIC</span>
                </div>
              </div>
            </div>

            {/* Imagem de Capa 16:9 Correspondente ao Perfil com Logo Sobreposta */}
            <div className="lg:col-span-5">
              <BlogCover 
                image={profileCover.image}
                alt={profileCover.alt}
                titleAttr={profileCover.titleAttr}
                priority={true}
                className="shadow-xl border border-slate-700/80"
              />
              <div className="mt-2 text-right">
                <span className="text-xs text-slate-400">
                  {profileCover.tag} · Atendimento em {locationName}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="faixa-obra h-3" aria-hidden="true" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          <article className="pt-8 border-t-2 border-slate-900">
             <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-blue-50 rounded-xl text-blue-700">
                 {dynamic.icon}
               </div>
               <div>
                 <span className="text-blue-700 block kicker font-semibold">Diagnóstico no Local</span>
                 <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                   Atendimento Técnico de Desentupimento em {locationName}
                 </h2>
               </div>
             </div>
             
             <div className="text-slate-700 text-base leading-relaxed space-y-4">
                <p>{dynamic.editorial}</p>
                <p>
                  A <strong>ADP Desentupidora</strong> atende residências, edifícios e comércios em <strong>{locationName}</strong> com foco em diagnóstico não invasivo. As desobstruções são realizadas com maquinário mecânico rotativo e hidrojateamento de alta pressão, eliminando incrustações sem danos à alvenaria.
                </p>
             </div>

             <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4">
                <Shield className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Transparência Operacional</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sede da empresa: {COMPANY_ADDRESS}, {COMPANY_NEIGHBORHOOD}, {COMPANY_CITY} - {COMPANY_STATE}. Atendimento prestado em {locationName} por equipes técnicas volantes com avaliação no local antes de iniciar qualquer serviço.
                  </p>
                </div>
             </div>
          </article>

          {/* Seção de Transparência de Preço com Foto 16:9 */}
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
                <span className="text-blue-700 kicker font-semibold">Valores e Condições</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Como é Calculado o Serviço em {locationName}?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {BLOG_IMAGES.PRECO.summary}
                </p>
                <div className="pt-1">
                  <a 
                    href={PHONE_LINK} 
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition"
                  >
                    Consultar Preço: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <VideoCTA location={locationName} />

          {/* Serviços Disponíveis na Região */}
          <section className="pt-8 border-t-2 border-slate-900">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Serviços Prestados em {locationName}:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {SERVICES.map((s, idx) => (
                <Link 
                  key={idx} 
                  to={`/servicos/${s.slug}`}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group block"
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition">
                    {s.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-2">{s.shortDesc}</p>
                  <span className="text-xs font-semibold text-blue-700 flex items-center gap-1">
                    Ver detalhes &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQs Locais Diferenciadas */}
          <section className="pt-8 border-t-2 border-slate-900">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <HelpCircle className="text-blue-700" size={24} />
              <span>Dúvidas Frequentes: {locationName}</span>
            </h3>
            <div className="space-y-3">
              {dynamic.faqs.map((faq, idx) => (
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

          <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4 justify-between items-center text-sm">
            <Link to="/cobertura" className="text-blue-700 font-bold hover:underline">
              &larr; Ver Todas as Cidades e Bairros Atendidos
            </Link>
            <Link to="/mapa-do-site" className="text-slate-500 hover:text-blue-700">
              Mapa Geral do Site
            </Link>
          </div>
        </div>

        {/* Sidebar Lateral */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-md border border-slate-800 space-y-4">
              <span className="text-blue-400 block kicker font-semibold">
                Atendimento Técnico
              </span>
              <h3 className="text-xl font-bold leading-tight">
                Equipe Volante em {locationName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Equipes técnicas preparadas para desentupimentos residenciais, comerciais e industriais com máquinas rotativas e hidrojateamento.
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

export default LocationPage;
