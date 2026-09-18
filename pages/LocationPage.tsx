
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
// Fix: Added MessageCircle to the imported components from lucide-react
import { Phone, CheckCircle, Clock, MapPin, Shield, ChevronDown, Wrench, Droplets, Truck, Building2, Home as HomeIcon, Factory, Sparkles, AlertCircle, MessageCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const LocationPage = () => {
  const { type, slug } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const formatName = (str: string | undefined) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const locationName = formatName(slug);
  const isCity = type === 'cidade';

  const context = useMemo(() => {
    const verticalDensity = ['Batel', 'Bigorrilho', 'Champagnat', 'Ecoville', 'Agua Verde', 'Cabral', 'Juveve', 'Centro Civico', 'Centro', 'Cristo Rei'];
    const industrialZones = ['CIC', 'Tatuquara', 'Pinheirinho', 'Cidade Industrial', 'Fazenda Rio Grande', 'Araucaria', 'Sao Jose dos Pinhais', 'Industrial'];
    const familyResidential = ['Santa Felicidade', 'Jardim das Americas', 'Uberaba', 'Xaxim', 'Boqueirao', 'Bacacheri', 'Boa Vista', 'Merces', 'Vila Izabel', 'Sao Braz'];
    const vilasAndConjuntos = ['Vila', 'Conjunto', 'Habitacional', 'Torres', 'Sabara', 'Parolin', 'Nossa Senhora', 'Zumbi'];

    const normalizedName = locationName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (vilasAndConjuntos.some(v => normalizedName.includes(v))) return 'VILA';
    if (industrialZones.some(i => normalizedName.includes(i))) return 'INDUSTRIAL';
    if (verticalDensity.some(b => normalizedName.includes(b))) return 'VERTICAL';
    if (familyResidential.some(r => normalizedName.includes(r))) return 'RESIDENTIAL';
    return isCity ? 'CITY_RMC' : 'GENERAL_LOCAL';
  }, [locationName, isCity]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationName]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getDynamicContent = () => {
    const base = { location: locationName, cta: `Técnico em ${locationName} Agora` };
    switch (context) {
      case 'VILA':
        return {
          ...base,
          typeLabel: "Atendimento Comunitário 24h",
          headline: `Desentupidora em ${locationName}: Preço Popular e Visita Grátis`,
          intro: `Atendemos a região da ${locationName} com agilidade total e condições especiais. Sabemos da urgência de resolver entupimentos em áreas densas.`,
          detailText: `Para moradores da ${locationName}, oferecemos o serviço de desentupimento mais rápido da região. Seja em residências ou pequenos comércios, nossa equipe chega em minutos para desentupir vasos, pias e ralos com o menor preço garantido.`,
          icon: <AlertCircle className="text-adp-red" />,
          localRef: "Atendimento emergencial prioritário na Vila/Conjunto " + locationName
        };
      case 'VERTICAL':
        return {
          ...base,
          typeLabel: "Especialista em Edifícios",
          headline: `Desentupidora em ${locationName}: Líder em Prédios e Condomínios`,
          intro: `O ${locationName} exige um atendimento de elite para sistemas hidráulicos verticais. Atendemos condomínios com rapidez, silêncio e eficiência total.`,
          detailText: `Especialistas em desentupimento de colunas e ramais de pias em apartamentos no ${locationName}. Utilizamos tecnologia K-50 para desobstrução sem ruído excessivo, respeitando as normas dos condomínios da região.`,
          icon: <Building2 className="text-adp-blue" />,
          localRef: "Atendimento prioritário para síndicos e administradoras no bairro " + locationName
        };
      case 'INDUSTRIAL':
        return {
          ...base,
          typeLabel: "Soluções Industriais",
          headline: `Hidrojateamento e Desentupimento Industrial em ${locationName}`,
          intro: `Soluções robustas para indústrias e galpões de ${locationName}. Equipamentos de alta pressão para redes coletoras complexas.`,
          detailText: `Operamos em ${locationName} (incluindo todo o CIC e arredores) com frota de caminhões de alta potência. Realizamos limpeza de caixas de gordura industriais e galerias de grande porte com certificados.`,
          icon: <Factory className="text-adp-blue" />,
          localRef: "Certificações NR-33 e NR-35 para trabalhos industriais em " + locationName
        };
      case 'CITY_RMC':
        return {
          ...base,
          typeLabel: "Região Metropolitana",
          headline: `Desentupidora em ${locationName} | Atendimento 24h | Visita Grátis`,
          intro: `Atendimento completo em toda a cidade de ${locationName}. Chegamos rápido com caminhão limpa fossa e equipamentos modernos.`,
          detailText: `Para residências e empresas de ${locationName}, oferecemos a solução definitiva em esgoto e hidrojateamento. Preço justo e rapidez de base local. Não cobramos taxa de visita em ${locationName}.`,
          icon: <Truck className="text-adp-blue" />,
          localRef: "Referência em esgotamento de fossa e desentupimento em " + locationName
        };
      default:
        return {
          ...base,
          typeLabel: "Plantão Regional 24h",
          headline: `Desentupidora Profissional em ${locationName} | Visita Grátis`,
          intro: `Referência absoluta em ${locationName} por agilidade e preço honesto. Visita técnica gratuita e orçamento sem compromisso agora.`,
          detailText: `Com base móvel estacionada estrategicamente próxima a ${locationName}, garantimos chegada em até 30 minutos. Atendimento emergencial para qualquer tipo de entupimento com garantia total por escrito.`,
          icon: <Sparkles className="text-adp-blue" />,
          localRef: "Suporte 24 horas em todos os endereços de " + locationName
        };
    }
  };

  const content = getDynamicContent();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Desentupimento em ${locationName} - ADP Desentupidora`,
    "description": `Serviços de desentupimento e manutenção hidráulica em ${locationName}. Atendimento prestado pela ADP Desentupidora (sede em Curitiba).`,
    "provider": {
      "@type": "PlumbingService",
      "name": "ADP Desentupidora",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Luiz Maltaca, 36",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "81310-020",
        "addressCountry": "BR"
      },
      "telephone": "4133451194"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": locationName
    },
    "url": `https://adpservicos.app.br/local/${type}/${slug}`
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title={`Desentupidora em ${locationName} | ADP Desentupidora`}
        description={`Serviços de desentupimento em ${locationName}. Atendimento para esgoto, pias, ralos e vasos conforme disponibilidade técnica a partir de nossa base em Curitiba.`}
        canonicalPath={`/local/${type}/${slug}`}
        schemaData={localSchema}
      />

      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden border-b-4 border-adp-orange">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-adp-blue opacity-10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-adp-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <MapPin size={14} /> Atendimento em {locationName}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight animate-fade-in-up">
                Desentupidora em <span className="text-adp-orange">{locationName}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                A ADP realiza atendimento em {locationName} para serviços de desentupimento e manutenção hidráulica, conforme disponibilidade da equipe a partir de nossa sede em Curitiba (CIC).
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a href={PHONE_LINK} className="bg-adp-blue hover:bg-blue-600 text-white px-8 md:px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <Phone size={24} fill="currentColor" /> {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} className="bg-[#25D366] hover:bg-green-600 text-white px-8 md:px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <MessageCircle size={24} /> ORÇAMENTO VIA WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
             <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight border-l-8 border-adp-blue pl-6">
               Desentupimento e Manutenção em {locationName}
             </h2>
             <div className="prose text-gray-600 text-lg leading-relaxed space-y-6 max-w-none">
                <p>A <strong>ADP Desentupidora</strong> atende a região de <strong>{locationName}</strong> prestando serviços essenciais de desbstrução de redes de esgoto, pias, ralos, vasos sanitários e caça vazamentos.</p>
                <p>Nossa equipe técnica atua com equipamentos rotativos e hidrojateamento a partir de nossa central em Curitiba (CIC), garantindo suporte profissional para residências e comércios na área.</p>
             </div>
             <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Shield className="text-adp-green" size={20} /> Informações de Atendimento
                </h4>
                <p className="text-sm text-gray-500">Sede da empresa: Rua Luiz Maltaca, 36, CIC, Curitiba - PR. Atendimento prestado em {locationName} conforme agendamento e disponibilidade técnica.</p>
             </div>
          </article>

          <VideoCTA location={locationName} />

          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
              <div className="h-2 w-10 bg-adp-orange"></div> Atendimento em {locationName} agora:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { t: "Esgoto e Pias", d: "Desentupimento completo com máquinas rotativas.", i: <Droplets /> },
                 { t: "Vasos e Ralos", d: "Soluções rápidas sem danificar cerâmicas.", i: <Wrench /> },
                 { t: "Limpeza de Fossa", d: "Esgotamento técnico com caminhão auto-vácuo.", i: <Truck /> },
                 { t: "Vazamentos", d: "Geofone eletrônico para detectar vazamentos ocultos.", i: <Search /> }
               ].map((serv, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-adp-blue mb-6 group-hover:bg-adp-blue group-hover:text-white transition-colors">
                      {serv.i}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{serv.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{serv.d}</p>
                 </div>
               ))}
            </div>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <Link to="/mapa-do-site" className="text-adp-blue font-bold hover:underline flex items-center gap-2">
              &larr; Ver Mapa Completo do Site e Localidades
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
             <LeadForm />
             <div className="bg-adp-blue text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
               <h4 className="text-2xl font-black mb-2">Plantão em {locationName}</h4>
               <p className="text-sm mb-8 opacity-90">Atendimento prioritário em {locationName} com chegada em até 30 minutos.</p>
               <a href={PHONE_LINK} className="block w-full bg-white text-adp-blue py-4 rounded-2xl font-black text-2xl text-center hover:bg-gray-100 transition shadow-lg">
                 {PHONE_DISPLAY}
               </a>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Helper for search icon that was missing in previous imports
const Search = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default LocationPage;
