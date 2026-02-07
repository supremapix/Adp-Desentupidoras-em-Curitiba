import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, MapPin, Shield, ChevronDown, Wrench, Droplets, Truck, Building2, Home as HomeIcon, Factory, Sparkles } from 'lucide-react';
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
    const industrialZones = ['CIC', 'Tatuquara', 'Pinheirinho', 'Cidade Industrial', 'Fazenda Rio Grande', 'Araucaria', 'Sao Jose dos Pinhais'];
    const familyResidential = ['Santa Felicidade', 'Jardim das Americas', 'Uberaba', 'Xaxim', 'Boqueirao', 'Bacacheri', 'Boa Vista', 'Merces', 'Vila Izabel', 'Sao Braz'];

    const normalizedName = locationName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (verticalDensity.some(b => normalizedName.includes(b))) return 'VERTICAL';
    if (industrialZones.some(i => normalizedName.includes(i))) return 'INDUSTRIAL';
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
      case 'VERTICAL':
        return {
          ...base,
          typeLabel: "Especialista em Edifícios",
          headline: `Desentupidora em ${locationName}: Líder em Prédios e Condomínios`,
          intro: `O ${locationName} exige um atendimento de elite para sistemas hidráulicos verticais. Atendemos condomínios com rapidez, silêncio e eficiência total.`,
          detailText: `Especialistas em desentupimento de colunas e ramais de pias em apartamentos no ${locationName}. Utilizamos tecnologia K-50 para desobstrução sem ruído excessivo, respeitando as normas dos condomínios de alto padrão da região.`,
          icon: <Building2 className="text-adp-blue" />,
          localRef: "Atendimento prioritário para síndicos e administradoras no bairro " + locationName
        };
      case 'INDUSTRIAL':
        return {
          ...base,
          typeLabel: "Soluções Industriais",
          headline: `Hidrojateamento e Desentupimento Industrial em ${locationName}`,
          intro: `Soluções robustas para indústrias e galpões de ${locationName}. Equipamentos de alta pressão (Hidrojato) para redes coletoras complexas.`,
          detailText: `Operamos em ${locationName} com frota de caminhões de alta potência. Realizamos limpeza de caixas de gordura industriais e galerias de grande porte com emissão de certificado de destinação de resíduos.`,
          icon: <Factory className="text-adp-blue" />,
          localRef: "Certificações NR-33 e NR-35 para trabalhos em espaços confinados em " + locationName
        };
      case 'RESIDENTIAL':
        return {
          ...base,
          typeLabel: "Atendimento Residencial",
          headline: `Desentupidora Residencial 24h em ${locationName}`,
          intro: `No ${locationName}, somos a primeira escolha das famílias para desentupir pias, ralos e vasos sanitários com preço justo e limpeza.`,
          detailText: `Equipes dedicadas ao ${locationName} que não quebram pisos nem azulejos. Utilizamos máquinas rotativas profissionais que resolvem o problema de forma limpa e com garantia por escrito.`,
          icon: <HomeIcon className="text-adp-blue" />,
          localRef: "Técnicos de plantão agora mesmo nas ruas do bairro " + locationName
        };
      case 'CITY_RMC':
        return {
          ...base,
          typeLabel: "Região Metropolitana",
          headline: `Desentupidora em ${locationName} | Atendimento 24h | Visita Grátis`,
          intro: `Atendimento completo em toda a cidade de ${locationName}. Chegamos rápido com caminhão limpa fossa e equipamentos de desentupimento.`,
          detailText: `Para residências e empresas de ${locationName}, oferecemos a solução definitiva em esgoto e hidrojateamento. Preço de capital e rapidez de base local. Não cobramos taxa de visita em ${locationName}.`,
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
    "@type": "PlumbingService",
    "name": `ADP Desentupidora ${locationName}`,
    "description": `Melhor desentupidora em ${locationName}. Atendimento 24h para desentupimento de esgoto, pias, vasos e caça vazamentos.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": isCity ? locationName : "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "telephone": "4133451194",
    "url": `https://adpdesentupidora.com.br/local/${type}/${slug}`
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title={`Desentupidora em ${locationName} 24h | Chegada em 30min | ADP`}
        description={`Precisando de Desentupidora em ${locationName}? Atendimento emergencial para esgoto, pias e vasos. Visita grátis e orçamento na hora em ${locationName}. Ligue já!`}
        keywords={`desentupidora ${locationName}, desentupimento ${locationName}, limpa fossa ${locationName}, caça vazamentos ${locationName}, encanador ${locationName}`}
        canonicalPath={`/local/${type}/${slug}`}
        schemaData={localSchema}
      />

      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-adp-blue opacity-10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-adp-blue/20 text-adp-blue border border-adp-blue/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <MapPin size={14} /> Atendimento Local: {locationName}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight animate-fade-in-up">
                Desentupidora em <span className="text-adp-orange">{locationName}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                {content.intro} Equipe técnica certificada com chegada prevista em até <strong>30 minutos</strong> no seu endereço.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a href={PHONE_LINK} className="bg-adp-blue hover:bg-blue-600 text-white px-8 md:px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <Phone size={24} fill="currentColor" /> {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} className="bg-[#25D366] hover:bg-green-600 text-white px-8 md:px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <Sparkles size={24} /> VISITA GRÁTIS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
             <div className="absolute top-10 right-10 opacity-5">
                {React.cloneElement(content.icon as React.ReactElement<any>, { size: 140 })}
             </div>
             <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight border-l-8 border-adp-blue pl-6">
               {content.headline}
             </h2>
             <div className="prose text-gray-600 text-lg leading-relaxed space-y-6 max-w-none">
                <p>A <strong>ADP Desentupidora</strong> é referência de qualidade e transparência em <strong>{locationName}</strong>. {content.detailText}</p>
                <p>Nossos equipamentos de <strong>Vídeo Inspeção</strong> garantem que o cliente veja o problema real por dentro dos canos antes da execução, eliminando qualquer dúvida e assegurando que a solução seja definitiva. Atendemos com ética, passando o valor fixo antes de iniciar qualquer execução em {locationName}.</p>
             </div>
             <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Shield className="text-adp-green" size={20} /> Certificado de Garantia Local
                </h4>
                <p className="text-sm text-gray-500">{content.localRef}</p>
             </div>
          </article>

          <VideoCTA location={locationName} />

          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
              <div className="h-2 w-10 bg-adp-orange"></div> Serviços Disponíveis Agora em {locationName}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { t: "Desentupimento de Esgoto", d: "Limpeza técnica de ramais e redes principais obstruídas.", i: <Droplets /> },
                 { t: "Caça Vazamentos", d: "Detecção eletrônica precisa para economia real na conta de água.", i: <Wrench /> },
                 { t: "Limpeza de Fossa", d: "Esgotamento técnico com caminhão próprio e descarte legalizado.", i: <Truck /> },
                 { t: "Desentupimento de Pia", d: "Solução limpa e imediata para bloqueios em cozinhas e ralos.", i: <Building2 /> }
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

          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8">Dúvidas Frequentes sobre {locationName}</h3>
            <div className="space-y-2">
               {[
                 { q: `A visita técnica em ${locationName} é gratuita?`, a: `Sim! Em todos os endereços de ${locationName}, a visita para avaliação e orçamento não possui custo algum. Você só paga se aprovar o serviço.` },
                 { q: `Quanto tempo leva para chegar em ${locationName}?`, a: `Nossa média de chegada para chamados em ${locationName} é de 30 a 45 minutos, pois mantemos unidades volantes circulando na região.` },
                 { q: `Qual o tempo de garantia para serviços em ${locationName}?`, a: `Oferecemos garantia legal de 90 dias por escrito, com emissão de nota fiscal e certificado de execução após o serviço.` }
               ].map((item, i) => (
                 <div key={i} className="border-b border-gray-100 last:border-0">
                    <button onClick={() => toggleFaq(i)} className="w-full text-left py-6 font-bold text-gray-800 flex justify-between items-center group">
                      <span className="group-hover:text-adp-blue transition-colors">{item.q}</span>
                      <ChevronDown className={`text-adp-blue transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && <div className="pb-6 text-gray-600 leading-relaxed animate-fade-in-up">{item.a}</div>}
                 </div>
               ))}
            </div>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <Link to="/cobertura" className="text-adp-blue font-bold hover:underline flex items-center gap-2">
              &larr; Ver todos os locais de atendimento em Curitiba e Região
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
             <LeadForm />
             <div className="bg-adp-red text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                 <Clock size={80} />
               </div>
               <h4 className="text-2xl font-black mb-2">Emergência em {locationName}?</h4>
               <p className="text-sm mb-8 opacity-90">Temos um técnico agora circulando pela região de {locationName}. Atendimento prioritário 24 horas.</p>
               <a href={PHONE_LINK} className="block w-full bg-white text-adp-red py-4 rounded-2xl font-black text-2xl text-center hover:bg-gray-100 transition shadow-lg">
                 {PHONE_DISPLAY}
               </a>
             </div>
             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
               <Shield className="text-adp-green mx-auto mb-4" size={48} />
               <h4 className="font-bold text-gray-900 mb-2">Empresa Licenciada</h4>
               <p className="text-sm text-gray-500">Atuamos seguindo todas as normas da Vigilância Sanitária e IAP.</p>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LocationPage;