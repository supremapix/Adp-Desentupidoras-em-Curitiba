import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Shield, 
  ChevronDown, 
  Wrench, 
  Droplets, 
  Truck, 
  Building2, 
  Home as HomeIcon, 
  Factory, 
  AlertCircle, 
  MessageCircle, 
  Clock, 
  HelpCircle,
  Search 
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
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';
import NotFound from './NotFound';

const LocationPage = () => {
  const { type, slug } = useParams<{ type: string; slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Validate location existence
  const locationItem = useMemo(() => {
    if (!type || !slug) return null;
    return ALL_LOCATIONS.find(loc => loc.type === type && loc.slug === slug);
  }, [type, slug]);

  const locationName = locationItem ? locationItem.name : '';
  const isCity = type === 'cidade';

  const context = useMemo(() => {
    if (!locationName) return 'GENERAL_LOCAL';
    const verticalDensity = ['Batel', 'Bigorrilho', 'Champagnat', 'Ecoville', 'Água Verde', 'Cabral', 'Juvevê', 'Centro Cívico', 'Centro', 'Cristo Rei'];
    const industrialZones = ['CIC', 'Tatuquara', 'Pinheirinho', 'Cidade Industrial', 'Fazenda Rio Grande', 'Araucária', 'São José dos Pinhais'];
    const familyResidential = ['Santa Felicidade', 'Jardim das Américas', 'Uberaba', 'Xaxim', 'Boqueirão', 'Bacacheri', 'Boa Vista', 'Mercês', 'Vila Izabel', 'São Braz'];
    const vilasAndConjuntos = ['Vila', 'Conjunto', 'Habitacional', 'Torres', 'Sabará', 'Parolin', 'Nossa Senhora', 'Zumbi'];

    const normalizedName = locationName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (vilasAndConjuntos.some(v => normalizedName.includes(v))) return 'VILA';
    if (industrialZones.some(i => normalizedName.includes(i))) return 'INDUSTRIAL';
    if (verticalDensity.some(b => normalizedName.includes(b))) return 'VERTICAL';
    if (familyResidential.some(r => normalizedName.includes(r))) return 'RESIDENTIAL';
    return isCity ? 'CITY_RMC' : 'GENERAL_LOCAL';
  }, [locationName, isCity]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!locationItem) {
    return <NotFound />;
  }

  const getDynamicContent = () => {
    switch (context) {
      case 'VILA':
        return {
          typeLabel: "Atendimento Comunitário e Residencial",
          subheadline: `Suporte técnico para desentupimento de esgotos, pias, ralos e vasos na região da ${locationName}.`,
          editorial: `A ADP Desentupidora atende moradores da ${locationName} com suporte técnico direto. Entupimentos em áreas residenciais densas exigem desobstrução rápida com sondas rotativas mecânicas que removem gordura e detritos sem quebrar pisos ou danificar as ligações domiciliares.`,
          highlight: `Atendimento ágil para residências, sobrados e comércio local na região de ${locationName}.`,
          icon: <HomeIcon className="text-adp-blue" size={32} />
        };
      case 'VERTICAL':
        return {
          typeLabel: "Especialista em Edifícios e Condomínios",
          subheadline: `Desentupimento de colunas prediais, prumadas e ramais de apartamentos em ${locationName}.`,
          editorial: `Em condomínios e edifícios verticais de ${locationName}, problemas hidráulicos em colunas de esgoto podem afetar múltiplos apartamentos simultaneamente. Nossos técnicos utilizam máquinas desobstrutoras rotativas de alta precisão que operam com nível de ruído controlado, raspando as paredes internas dos tubos e preservando as conexões prediais.`,
          highlight: `Atendimento técnico programado ou emergencial para condomínios residenciais e comerciais em ${locationName}.`,
          icon: <Building2 className="text-adp-blue" size={32} />
        };
      case 'INDUSTRIAL':
        return {
          typeLabel: "Soluções Industriais e Comerciais",
          subheadline: `Hidrojateamento de alta pressão e desentupimento de redes coletoras em ${locationName}.`,
          editorial: `Plantas fabris, galpões logísticos e grandes estabelecimentos comerciais em ${locationName} demandam equipamentos de alta vazão para desobstrução de caixas de decantação, galerias de águas pluviais e redes de efluentes. A ADP opera com hidrojateamento pressurizado e caminhões auto-vácuo para serviços de grande porte.`,
          highlight: `Equipamentos de alta capacidade para redes coletoras e galerias industriais em ${locationName}.`,
          icon: <Factory className="text-adp-blue" size={32} />
        };
      case 'CITY_RMC':
        return {
          typeLabel: "Atendimento na Região Metropolitana",
          subheadline: `Serviços especializados de desentupidora e limpa fossa no município de ${locationName}.`,
          editorial: `A ADP Desentupidora atende residências, comércios e chácaras em ${locationName} a partir de sua base operacional em Curitiba. Disponibilizamos equipes volantes equipadas com máquinas desobstrutoras rotativas e caminhões auto-vácuo para esgotamento técnico de fossas sépticas e limpeza de redes de esgoto.`,
          highlight: `Deslocamento planejado e atendimento volante para residências, empresas e chácaras em ${locationName}.`,
          icon: <Truck className="text-adp-blue" size={32} />
        };
      default:
        return {
          typeLabel: "Atendimento Residencial e Comercial",
          subheadline: `Desobstrução de esgotos, pias, ralos e caça vazamentos no bairro ${locationName}.`,
          editorial: `No bairro ${locationName}, a ADP Desentupidora presta atendimento técnico para solucionar entupimentos domésticos e prediais. Nossa equipe realiza a inspeção no local para definir o maquinário mais adequado, fornecendo orçamento transparente e garantia técnica do serviço.`,
          highlight: `Equipes volantes com atendimento prioritário em todos os endereços de ${locationName}.`,
          icon: <MapPin className="text-adp-blue" size={32} />
        };
    }
  };

  const dynamic = getDynamicContent();

  const localFaqs = [
    {
      q: `Como solicitar atendimento da ADP em ${locationName}?`,
      a: `Basta entrar em contato pelo telefone ou WhatsApp informando o endereço em ${locationName} e o tipo de problema hidráulico. Nossos atendentes direcionam a equipe técnica para avaliação no local.`
    },
    {
      q: `Quais serviços são prestados em ${locationName}?`,
      a: `Atendemos ${locationName} com serviços de desentupimento de esgotos, pias, ralos, vasos sanitários, caixas de gordura, caça vazamentos com geofone, hidrojateamento e limpeza de fossas.`
    },
    {
      q: `Como é feito o diagnóstico no imóvel em ${locationName}?`,
      a: `O técnico inspeciona as caixas de passagem e ralos do imóvel para identificar a localização exata do bloqueio e apresentar o orçamento antes de iniciar o trabalho.`
    }
  ];

  const localSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Desentupidora em ${locationName} - ADP Serviços`,
      "description": `Serviços técnicos de desentupimento de esgoto, pias, ralos e manutenção hidráulica em ${locationName}.`,
      "provider": {
        "@type": "PlumbingService",
        "name": "ADP Desentupidora",
        "telephone": "+554133451194",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": COMPANY_ADDRESS,
          "addressLocality": COMPANY_CITY,
          "addressRegion": COMPANY_STATE
        }
      },
      "areaServed": {
        "@type": isCity ? "City" : "AdministrativeArea",
        "name": locationName
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": localFaqs.map(faq => ({
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
        title={`Desentupidora em ${locationName} | ADP Serviços`}
        description={`Serviços de desentupimento em ${locationName}. Desobstrução de esgoto, pias, ralos, vasos sanitários e caça vazamentos com equipe técnica especializada.`}
        canonicalPath={`/local/${type}/${slug}`}
        schemaData={localSchema}
      />

      {/* Header Local Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden border-b-4 border-adp-orange">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-adp-blue opacity-10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-adp-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <MapPin size={14} /> {dynamic.typeLabel}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight animate-fade-in-up">
                Desentupidora em <span className="text-adp-orange">{locationName}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                {dynamic.subheadline}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <a 
                  href={PHONE_LINK} 
                  className="bg-adp-blue hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3"
                >
                  <Phone size={20} fill="currentColor" /> {PHONE_DISPLAY}
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3"
                >
                  <MessageCircle size={20} /> ORÇAMENTO VIA WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight border-l-8 border-adp-blue pl-4">
               Atendimento Técnico de Desentupimento em {locationName}
             </h2>
             <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
                <p>{dynamic.editorial}</p>
                <p>
                  A <strong>ADP Desentupidora</strong> conta com equipes técnicas volantes preparadas para atender residências, edifícios e estabelecimentos em <strong>{locationName}</strong>, garantindo desobstrução limpa com máquinas rotativas de cabos flexíveis e hidrojateamento.
                </p>
             </div>

             <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-4">
                <Shield className="text-adp-green flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Informações Operacionais</h4>
                  <p className="text-sm text-gray-600">
                    Sede da empresa: {COMPANY_ADDRESS}, {COMPANY_NEIGHBORHOOD}, {COMPANY_CITY} - {COMPANY_STATE}. Atendimento prestado em {locationName} conforme agendamento e disponibilidade das equipes técnicas volantes.
                  </p>
                </div>
             </div>
          </article>

          <VideoCTA location={locationName} />

          {/* Serviços Disponíveis na Região */}
          <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-l-8 border-adp-orange pl-4">
              Serviços Prestados em {locationName}:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {SERVICES.map((s, idx) => (
                <Link 
                  key={idx} 
                  to={`/servicos/${s.slug}`}
                  className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all group block"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-adp-blue transition">
                    {s.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-2">{s.shortDesc}</p>
                  <span className="text-xs font-semibold text-adp-blue flex items-center gap-1">
                    Ver detalhes &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQs Locais */}
          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <HelpCircle className="text-adp-blue" /> Dúvidas Frequentes: {locationName}
            </h3>
            <div className="space-y-3">
              {localFaqs.map((faq, idx) => (
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

          <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-4 justify-between items-center text-sm">
            <Link to="/cobertura" className="text-adp-blue font-bold hover:underline">
              &larr; Ver Todas as Cidades e Bairros Atendidos
            </Link>
            <Link to="/mapa-do-site" className="text-gray-500 hover:text-adp-blue">
              Mapa Geral do Site
            </Link>
          </div>
        </div>

        {/* Sidebar Lateral */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="bg-adp-blue text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black mb-3">Equipe em {locationName}</h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Suporte técnico especializado em desentupimentos residenciais, comerciais e industriais.
              </p>
              <a 
                href={PHONE_LINK} 
                className="block w-full bg-white text-adp-blue py-4 rounded-2xl font-black text-xl text-center hover:bg-gray-100 transition shadow-lg mb-3"
              >
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-center justify-center gap-2 text-xs opacity-90">
                <Clock size={14} /> Atendimento de Emergência
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
