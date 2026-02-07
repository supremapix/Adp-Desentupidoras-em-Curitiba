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

  // Motor de Contexto Local Avançado
  const context = useMemo(() => {
    const highDensity = ['Batel', 'Bigorrilho', 'Champagnat', 'Ecoville', 'Agua Verde', 'Cabral', 'Juveve', 'Centro Civico', 'Centro', 'Cristo Rei'];
    const industrialZones = ['CIC', 'Tatuquara', 'Pinheirinho', 'Cidade Industrial', 'Fazenda Rio Grande', 'Araucaria', 'Sao Jose dos Pinhais'];
    const residentialZones = ['Santa Felicidade', 'Jardim das Americas', 'Uberaba', 'Xaxim', 'Boqueirao', 'Bacacheri', 'Boa Vista', 'Merces', 'Vila Izabel'];

    if (highDensity.some(b => locationName.includes(b))) return 'HIGH_DENSITY';
    if (industrialZones.some(i => locationName.includes(i))) return 'INDUSTRIAL';
    if (residentialZones.some(r => locationName.includes(r))) return 'RESIDENTIAL';
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
      cta: `Chamar Técnico em ${locationName}`
    };

    switch (context) {
      case 'HIGH_DENSITY':
        return {
          ...base,
          typeLabel: "Bairro de Alta Densidade",
          headline: `Líder em Desentupimento de Prédios e Apartamentos no ${locationName}`,
          intro: `O ${locationName} é conhecido por sua infraestrutura vertical e sofisticação. Entupimentos em colunas de prédios e pias de apartamentos aqui exigem uma empresa que opere com total silêncio, limpeza e técnica.`,
          detailText: `Atendemos condomínios residenciais e comerciais no ${locationName} com equipamentos de baixa emissão de ruído. Nossa especialidade em colunas de esgoto e ramais de pia garante que o serviço seja feito sem sujar áreas comuns ou causar transtornos aos vizinhos. Conhecemos os projetos hidráulicos da região e estamos prontos para atuar em prédios clássicos e modernos.`,
          icon: <Building2 className="text-adp-blue" />,
          localRef: "Atendimento especializado em áreas de condomínios e centros comerciais."
        };
      case 'INDUSTRIAL':
        return {
          ...base,
          typeLabel: "Zona Industrial e Logística",
          headline: `Desentupidora Industrial e de Grande Porte em ${locationName}`,
          intro: `Devido ao forte perfil industrial e logístico de ${locationName}, a ADP oferece soluções robustas para desobstrução de galerias, pátios e redes coletoras de grande diâmetro.`,
          detailText: `Seja na Cidade Industrial (CIC) ou nas zonas de logística de ${locationName}, operamos com caminhões de Hidrojateamento de Alta Pressão e sistemas de sucção auto-vácuo. Fornecemos certificados de destinação de resíduos e realizamos manutenção preventiva em cozinhas industriais e redes de esgoto sanitário de larga escala, garantindo que sua operação não pare por problemas hidráulicos.`,
          icon: <Factory className="text-adp-blue" />,
          localRef: "Equipamentos pesados para atender fábricas, galpões e transportadoras."
        };
      case 'RESIDENTIAL':
        return {
          ...base,
          typeLabel: "Zona Residencial Familiar",
          headline: `Sua Casa em ${locationName} Livre de Entupimentos 24h`,
          intro: `O ${locationName} possui um perfil familiar com muitas casas e sobrados. Entupimentos de rede pluvial (chuva) ou esgoto doméstico são comuns e exigem solução rápida para evitar danos ao jardim e pisos.`,
          detailText: `Nossa equipe para o ${locationName} utiliza máquinas Roto-Rooter com cabos flexíveis que navegam por curvas complexas de canos residenciais sem a necessidade de escavações. Atendemos desde as residências tradicionais de Santa Felicidade até os novos sobrados do Jardim das Américas e Xaxim. Chegamos rápido e deixamos tudo limpo, protegendo seu patrimônio.`,
          icon: <HomeIcon className="text-adp-blue" />,
          localRef: "Foco em residências e sobrados com solução limpa e sem quebra-quebra."
        };
      case 'CITY_RMC':
        return {
          ...base,
          typeLabel: "Região Metropolitana",
          headline: `Desentupidora e Limpa Fossa em ${locationName} com Chegada Rápida`,
          intro: `Atendemos toda a cidade de ${locationName} com frota própria para esgotamento de fossas e desentupimento de redes urbanas e rurais.`,
          detailText: `Moradores de ${locationName} e regiões vizinhas podem contar com a ADP para serviços de Limpeza de Fossa Séptica e desentupimento de esgoto em geral. Mesmo em áreas mais afastadas do centro de ${locationName}, garantimos o deslocamento imediato de nossos caminhões auto-vácuo. Serviço certificado, com descarte correto e garantia por escrito para sua tranquilidade.`,
          icon: <Truck className="text-adp-blue" />,
          localRef: "Atendimento completo para residências, chácaras e comércios da cidade."
        };
      default:
        return {
          ...base,
          typeLabel: "Atendimento Especializado",
          headline: `Referência em Desentupimento em ${locationName}`,
          intro: `A ADP é a escolha certa para quem busca rapidez e preço justo em ${locationName}. Atendemos qualquer tipo de entupimento hidráulico com tecnologia de ponta.`,
          detailText: `Com mais de 10 anos de experiência atendendo ${locationName}, nossa empresa se destaca pela transparência. Realizamos a vídeo inspeção para mostrar o problema real e passamos o orçamento na hora, sem taxas de visita. Seja no comércio local ou na sua residência, nossa solução é definitiva e garantida.`,
          icon: <Sparkles className="text-adp-blue" />,
          localRef: "Visita técnica gratuita em todos os endereços da região."
        };
    }
  };

  const content = getDynamicContent();

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title={`Desentupidora em ${locationName} 24h | Atendimento em 30min | ADP`}
        description={`Precisando de Desentupidora em ${locationName}? Resolvemos entupimentos de esgoto, pias e vasos. Visita grátis e garantia em ${locationName}. Chame a ADP AGORA!`}
        keywords={`desentupidora ${locationName}, desentupimento ${locationName}, encanador ${locationName}, limpa fossa ${locationName}, preço desentupidora ${locationName}`}
        canonicalPath={`/local/${type}/${slug}`}
      />

      {/* Header Localizado */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-adp-blue opacity-10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-adp-blue/20 text-adp-blue border border-adp-blue/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <MapPin size={14} /> Atendimento Local: {locationName}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight">
                Desentupidora em <span className="text-adp-orange">{locationName}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                {content.intro} Equipes de prontidão para chegar no seu endereço em até <strong>30 minutos</strong>.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a href={PHONE_LINK} className="bg-adp-blue hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <Phone size={24} fill="currentColor" /> {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} className="bg-[#25D366] hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                  <Sparkles size={24} /> ORÇAMENTO GRÁTIS
                </a>
              </div>
            </div>
            <div className="hidden lg:block w-96">
               <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="bg-adp-orange p-3 rounded-2xl text-white">
                      <Clock size={32} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-adp-orange uppercase">Chegada Rápida</p>
                      <p className="text-2xl font-black">30 Minutos</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-adp-green" size={18} /> <span>Visita Grátis em {locationName}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-adp-green" size={18} /> <span>Preço Fechado na Hora</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-adp-green" size={18} /> <span>Garantia de até 90 Dias</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Conteúdo Contextual Local */}
          <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative">
             <div className="absolute top-10 right-10 opacity-10">
                {React.cloneElement(content.icon as React.ReactElement, { size: 120 })}
             </div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight border-l-8 border-adp-blue pl-6">
               {content.headline}
             </h2>
             <div className="prose text-gray-600 text-lg leading-relaxed space-y-6 max-w-none">
                <p>
                  A <strong>ADP Desentupidora</strong> consolidou-se como a principal escolha para moradores e empresas de <strong>{locationName}</strong> devido ao nosso compromisso com a agilidade e o preço justo. 
                  {content.detailText}
                </p>
                <p>
                  Nossa base operacional volante em <strong>{locationName}</strong> está equipada com tecnologia de vídeo-inspeção e máquinas rotativas de diversas potências, permitindo desobstruir desde pias domésticas até galerias industriais complexas sem quebrar pisos ou azulejos.
                </p>
             </div>
             
             <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="text-adp-orange" /> {content.typeLabel}
                </h4>
                <p className="text-sm text-gray-500">{content.localRef}</p>
             </div>
          </article>

          {/* Vídeo com Contexto Local */}
          <VideoCTA location={locationName} />

          {/* Serviços Populares na Região */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">O que resolvemos hoje em {locationName}:</h3>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { t: "Desentupimento de Esgoto", d: "Limpeza de ramais e redes principais obstruídas.", i: <Droplets /> },
                 { t: "Caça Vazamentos", d: "Detecção eletrônica precisa para economia na conta de água.", i: <Wrench /> },
                 { t: "Limpeza de Fossa", d: "Esgotamento técnico com caminhão auto-vácuo próprio.", i: <Truck /> },
                 { t: "Vídeo Inspeção", d: "Filmagem interna para diagnóstico exato sem quebra.", i: <Building2 /> }
               ].map((serv, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-adp-blue mb-6 group-hover:bg-adp-blue group-hover:text-white transition-colors">
                      {serv.i}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{serv.t} em {locationName}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{serv.d}</p>
                    <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center gap-2 text-adp-blue font-bold text-sm">
                      Orçamento via WhatsApp &rarr;
                    </a>
                 </div>
               ))}
            </div>
          </section>

          {/* FAQ Dinâmica */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Perguntas sobre Atendimento em {locationName}</h3>
            <div className="space-y-2">
               {[
                 { q: `Quanto custa a visita em ${locationName}?`, a: `Zero. Nossa visita para diagnóstico e orçamento em ${locationName} é 100% gratuita. Você só paga pelo serviço se aprovar o valor na hora.` },
                 { q: `Vocês atendem aos domingos em ${locationName}?`, a: `Sim! Mantemos o plantão 24h ativo todos os dias do ano em ${locationName}, incluindo domingos e feriados nacionais.` },
                 { q: `O serviço tem garantia por escrito?`, a: `Sim. Ao finalizar o trabalho em ${locationName}, emitimos o certificado de garantia de até 90 dias e a nota fiscal de serviço.` }
               ].map((item, i) => (
                 <div key={i} className="border-b border-gray-100 last:border-0">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full text-left py-6 font-bold text-gray-800 flex justify-between items-center group"
                    >
                      <span className="group-hover:text-adp-blue transition-colors">{item.q}</span>
                      <ChevronDown className={`text-adp-blue transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="pb-6 text-gray-600 leading-relaxed animate-fade-in">
                        {item.a}
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <Link to="/cobertura" className="text-adp-blue font-bold hover:underline">
              &larr; Ver outras cidades e bairros atendidos
            </Link>
          </div>
        </div>

        {/* Lateral de Conversão */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
             <LeadForm />
             
             <div className="bg-adp-red text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                 <Clock size={80} />
               </div>
               <h4 className="text-2xl font-black mb-2">Emergência em {locationName}?</h4>
               <p className="text-sm mb-8 opacity-90">Temos um técnico agora mesmo na sua região. Ligue e solicite prioridade.</p>
               <a href={PHONE_LINK} className="block w-full bg-white text-adp-red py-4 rounded-2xl font-black text-2xl text-center hover:bg-gray-100 transition shadow-lg transform active:scale-95">
                 {PHONE_DISPLAY}
               </a>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <Shield className="mx-auto text-adp-green mb-4" size={48} />
                <h5 className="font-bold text-gray-900 mb-2">Empresa Certificada</h5>
                <p className="text-sm text-gray-500">Operamos com todas as licenças ambientais e nota fiscal.</p>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LocationPage;