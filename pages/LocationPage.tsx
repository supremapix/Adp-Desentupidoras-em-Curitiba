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

  // Motor de Contexto Local: Classifica o perfil da região para injetar textos específicos
  const context = useMemo(() => {
    const verticalDensity = ['Batel', 'Bigorrilho', 'Champagnat', 'Ecoville', 'Agua Verde', 'Cabral', 'Juveve', 'Centro Civico', 'Centro', 'Cristo Rei'];
    const industrialZones = ['CIC', 'Tatuquara', 'Pinheirinho', 'Cidade Industrial', 'Fazenda Rio Grande', 'Araucaria', 'Sao Jose dos Pinhais'];
    const familyResidential = ['Santa Felicidade', 'Jardim das Americas', 'Uberaba', 'Xaxim', 'Boqueirao', 'Bacacheri', 'Boa Vista', 'Merces', 'Vila Izabel', 'Sao Braz'];

    if (verticalDensity.some(b => locationName.includes(b))) return 'VERTICAL';
    if (industrialZones.some(i => locationName.includes(i))) return 'INDUSTRIAL';
    if (familyResidential.some(r => locationName.includes(r))) return 'RESIDENTIAL';
    return isCity ? 'CITY_RMC' : 'GENERAL_LOCAL';
  }, [locationName, isCity]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationName]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getDynamicContent = () => {
    const base = {
      location: locationName,
      cta: `Técnico em ${locationName} Agora`
    };

    switch (context) {
      case 'VERTICAL':
        return {
          ...base,
          typeLabel: "Especialista em Edifícios",
          headline: `Desentupidora de Prédios e Apartamentos no ${locationName}`,
          intro: `O ${locationName} possui uma das maiores densidades verticais da região. Entupimentos em colunas de esgoto e ramais de pia em apartamentos exigem técnica e equipamentos silenciosos.`,
          detailText: `Atendemos condomínios de alto padrão no ${locationName} com máquinas K-50 e K-500 que operam com baixo ruído, garantindo a desobstrução de colunas sem danificar a estrutura hidráulica ou incomodar os vizinhos. Nossa equipe conhece os projetos das principais construtoras do bairro e está pronta para agir rápido.`,
          icon: <Building2 className="text-adp-blue" />,
          localRef: "Atendimento preferencial para Síndicos e Administradoras de Condomínios no " + locationName
        };
      case 'INDUSTRIAL':
        return {
          ...base,
          typeLabel: "Soluções Industriais",
          headline: `Desentupidora Industrial e Hidrojateamento em ${locationName}`,
          intro: `Para as zonas industriais e logísticas de ${locationName}, oferecemos equipamentos de alta potência capazes de limpar galerias de grande diâmetro e redes coletoras complexas.`,
          detailText: `Operamos em ${locationName} com caminhões de Hidrojateamento de Alta Pressão e sistemas de sucção auto-vácuo. Somos certificados para realizar a limpeza de caixas de gordura industriais, fossas sépticas de galpões e manutenção preventiva em cozinhas industriais da região, fornecendo laudo técnico e certificado de destinação de resíduos.`,
          icon: <Factory className="text-adp-blue" />,
          localRef: "Equipes treinadas para normas de segurança NR-33 e NR-35 na região de " + locationName
        };
      case 'RESIDENTIAL':
        return {
          ...base,
          typeLabel: "Atendimento Residencial",
          headline: `Sua Casa em ${locationName} Livre de Entupimentos 24h`,
          intro: `O ${locationName} é um bairro tradicionalmente residencial, com muitas casas e sobrados que possuem redes pluviais e de esgoto integradas que entopem com raízes e detritos.`,
          detailText: `Nossos técnicos para o ${locationName} são especialistas em desentupimento de ralos de quintal, pias de cozinha e vasos sanitários. Utilizamos máquinas rotativas que navegam pelas curvas dos canos residenciais de ${locationName} sem a necessidade de quebrar calçadas ou jardins. Limpeza rápida e solução definitiva para o conforto da sua família.`,
          icon: <HomeIcon className="text-adp-blue" />,
          localRef: "Viatura de plantão circulando nas principais ruas do " + locationName
        };
      case 'CITY_RMC':
        return {
          ...base,
          typeLabel: "Região Metropolitana",
          headline: `Desentupidora e Limpa Fossa em ${locationName} (Plantão 24h)`,
          intro: `Atendemos todos os bairros e distritos de ${locationName} com agilidade, oferecendo desde desentupimentos simples até esgotamento de fossas com caminhão próprio.`,
          detailText: `Para os moradores e empresários de ${locationName}, a ADP garante o deslocamento imediato. Possuímos uma base estratégica próxima que permite aos nossos caminhões de limpa fossa chegarem a qualquer ponto de ${locationName} em poucos minutos. Atendimento para residências urbanas e áreas industriais da cidade com preço de capital.`,
          icon: <Truck className="text-adp-blue" />,
          localRef: "Referência em esgotamento de fossa e limpeza de redes em toda a cidade de " + locationName
        };
      default:
        return {
          ...base,
          typeLabel: "Plantão Local 24h",
          headline: `Desentupidora em ${locationName}: Orçamento Grátis e Imediato`,
          intro: `A ADP é a desentupidora líder em ${locationName} pela transparência e rapidez. Nossa equipe técnica está a poucos minutos do seu endereço.`,
          detailText: `Com mais de uma década de experiência atendendo ${locationName}, resolvemos qualquer bloqueio em redes de esgoto, pias, ralos ou vasos. Não cobramos taxa de visita em ${locationName} e passamos o preço exato após a avaliação técnica. Garantia total por escrito de até 90 dias em todos os serviços executados.`,
          icon: <Sparkles className="text-adp-blue" />,
          localRef: "Técnico especialista disponível agora para " + locationName
        };
    }
  };

  const content = getDynamicContent();

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title={`Desentupidora em ${locationName} 24h | Atendimento em 30min | ADP`}
        description={`Melhor Desentupidora em ${locationName}. Desentupimento de esgoto, pias, vasos e caça vazamentos. Orçamento grátis em ${locationName}. Equipe local, ligue já!`}
        keywords={`desentupidora ${locationName}, desentupimento ${locationName}, encanador ${locationName}, limpa fossa ${locationName}, preço desentupidora ${locationName}`}
        canonicalPath={`/local/${type}/${slug}`}
      />

      {/* Hero Section Localizado */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-adp-blue opacity-10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-adp-blue/20 text-adp-blue border border-adp-blue/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <MapPin size={14} /> Unidade Móvel: {locationName}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight">
                Desentupidora em <span className="text-adp-orange">{locationName}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                {content.intro} Chegamos em <strong>30 minutos</strong> com orçamento gratuito e solução na hora.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a href={PHONE_LINK} className="bg-adp-blue hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <Phone size={24} fill="currentColor" /> {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} className="bg-[#25D366] hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <Sparkles size={24} /> VISITA GRÁTIS
                </a>
              </div>
            </div>
            
            {/* Widget de Status Rápido */}
            <div className="hidden lg:block w-96">
               <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="bg-adp-orange p-3 rounded-2xl text-white">
                      <Clock size={32} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-adp-orange uppercase tracking-tighter">Status Atual</p>
                      <p className="text-2xl font-black">LIVRE EM {locationName.toUpperCase()}</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-adp-green" size={18} /> <span>Técnico a 15min de você</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-adp-green" size={18} /> <span>Equipamento K-500 em mãos</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-adp-green" size={18} /> <span>Orçamento sem compromisso</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Conteúdo Contextual Localizado */}
          <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative">
             <div className="absolute top-10 right-10 opacity-5">
                {/* Fix: Casting to React.ReactElement<any> to allow 'size' property */}
                {React.cloneElement(content.icon as React.ReactElement<any>, { size: 140 })}
             </div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight border-l-8 border-adp-blue pl-6">
               {content.headline}
             </h2>
             <div className="prose text-gray-600 text-lg leading-relaxed space-y-6 max-w-none">
                <p>
                  A <strong>ADP Desentupidora</strong> é a empresa mais recomendada em <strong>{locationName}</strong> pela qualidade do atendimento e garantia de solução definitiva. 
                  {content.detailText}
                </p>
                <p>
                  Diferente de encanadores comuns, possuímos equipamentos profissionais que permitem identificar o ponto exato da obstrução em {locationName}. Através da <strong>Vídeo Inspeção</strong>, podemos filmar o interior dos canos e mostrar o problema para o cliente, garantindo total transparência no diagnóstico.
                </p>
             </div>
             
             <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="text-adp-orange" /> {content.typeLabel}
                </h4>
                <p className="text-sm text-gray-500">{content.localRef}</p>
             </div>
          </article>

          {/* Vídeo CTA Dinâmico */}
          <VideoCTA location={locationName} />

          {/* Grid de Serviços Populares na Região */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-12 bg-adp-orange"></div>
              <h3 className="text-2xl font-bold text-gray-900">Serviços Disponíveis em {locationName}:</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { t: "Desentupimento de Esgoto", d: "Limpeza técnica de ramais e redes principais em residências e empresas.", i: <Droplets /> },
                 { t: "Caça Vazamentos", d: "Localização eletrônica com geofone para reduzir a conta de água na região.", i: <Wrench /> },
                 { t: "Limpeza de Fossa", d: "Esgotamento técnico com descarte ecológico em Curitiba e Região.", i: <Truck /> },
                 { t: "Desentupimento de Pia e Vaso", d: "Solução imediata para bloqueios domésticos com máquinas Roto Rooter.", i: <Building2 /> }
               ].map((serv, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group border-b-4 hover:border-adp-blue">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-adp-blue mb-6 group-hover:bg-adp-blue group-hover:text-white transition-colors">
                      {serv.i}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{serv.t} em {locationName}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{serv.d}</p>
                    <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center gap-2 text-adp-blue font-bold text-sm">
                      Pedir Orçamento Agora &rarr;
                    </a>
                 </div>
               ))}
            </div>
          </section>

          {/* FAQ Localizada e Contextual */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <ChevronDown className="text-adp-orange" /> Tire suas Dúvidas sobre {locationName}
            </h3>
            <div className="space-y-2">
               {[
                 { q: `Qual o valor da taxa de visita em ${locationName}?`, a: `Nenhuma. A ADP Desentupidora não cobra taxa de visita em ${locationName}. Nosso técnico avalia o problema no local sem custo e passa o orçamento na hora.` },
                 { q: `Vocês atendem de madrugada em ${locationName}?`, a: `Sim! Mantemos o plantão 24h ativo em ${locationName}, incluindo domingos e feriados. Emergências hidráulicas não têm hora para acontecer e nós estamos sempre prontos.` },
                 { q: `Quanto tempo dura a garantia no ${locationName}?`, a: `Oferecemos garantia por escrito de 30 a 90 dias, dependendo do serviço executado. Se o problema voltar no período de garantia, refazemos o serviço sem custo adicional.` }
               ].map((item, i) => (
                 <div key={i} className="border-b border-gray-100 last:border-0">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full text-left py-6 font-bold text-gray-800 flex justify-between items-center group"
                    >
                      <span className="group-hover:text-adp-blue transition-colors">{item.q}</span>
                      <ChevronDown className={`text-adp-blue transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                    </button>
                    {openFaq === i && (
                      <div className="pb-6 text-gray-600 leading-relaxed animate-fade-in-up">
                        {item.a}
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <Link to="/cobertura" className="text-adp-blue font-bold hover:underline flex items-center gap-2">
              &larr; Ver todos os bairros e cidades atendidas
            </Link>
          </div>
        </div>

        {/* Sidebar Lateral de Alta Conversão */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
             <LeadForm />
             
             {/* Banner Urgência */}
             <div className="bg-adp-red text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                 <Clock size={80} />
               </div>
               <h4 className="text-2xl font-black mb-2">Emergência em {locationName}?</h4>
               <p className="text-sm mb-8 opacity-90">Temos técnicos agora circulando pela região. Atendimento imediato para esgoto voltando ou vazamentos.</p>
               <a href={PHONE_LINK} className="block w-full bg-white text-adp-red py-5 rounded-2xl font-black text-2xl text-center hover:bg-gray-100 transition shadow-xl transform active:scale-95">
                 {PHONE_DISPLAY}
               </a>
             </div>

             {/* Selos de Confiança */}
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <Shield className="mx-auto text-adp-green mb-4" size={48} />
                <h5 className="font-bold text-gray-900 mb-2">Empresa Licenciada</h5>
                <p className="text-sm text-gray-500 leading-relaxed">Operamos em {locationName} seguindo todas as normas ambientais da Sanepar e IAP.</p>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LocationPage;