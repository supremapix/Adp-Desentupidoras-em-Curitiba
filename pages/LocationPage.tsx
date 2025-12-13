import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, MapPin, Shield, ChevronDown } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const LocationPage = () => {
  const { type, slug } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Convert slug back to readable name (approximate)
  const formatName = (str: string | undefined) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const locationName = formatName(slug);
  const isCity = type === 'cidade';
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaq(null);
  }, [locationName]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dynamic SEO Data
  const pageTitle = `Desentupidora em ${locationName} 24h | Chegada em 30min | ADP`;
  const pageDesc = `Precisa de Desentupidora em ${locationName}? A ADP tem equipe de plantão no seu bairro. Desentupimento de esgoto, pia e vaso com preço justo. Visita Grátis.`;
  const pageKeywords = `desentupidora ${locationName}, desentupimento ${locationName}, encanador ${locationName}, limpa fossa ${locationName}, caça vazamentos ${locationName}`;

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ADP Desentupidora ${locationName}`,
    "telephone": "+554133451194",
    "areaServed": {
      "@type": isCity ? "City" : "Place",
      "name": locationName
    },
    "priceRange": "$$",
    "description": pageDesc
  };

  const faqItems = [
    { 
      q: `Quanto tempo demora para chegar em ${locationName}?`, 
      a: `Como temos equipes posicionadas estrategicamente, nosso tempo médio de chegada em ${locationName} é de apenas 30 minutos após o seu chamado.` 
    },
    { 
      q: `Vocês atendem condomínios e empresas em ${locationName}?`, 
      a: `Sim, atendemos residências, comércios e oferecemos contratos especiais para condomínios em ${locationName} com manutenção preventiva.` 
    },
    {
      q: "Qual o valor da visita para orçamento?",
      a: "A visita técnica é totalmente gratuita para toda a região de Curitiba, incluindo " + locationName + ". O orçamento é passado na hora, sem compromisso."
    },
    {
      q: "Aceitam cartão e emitem nota fiscal?",
      a: "Sim, aceitamos todos os cartões, PIX e emitimos nota fiscal para todos os serviços realizados em " + locationName + "."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title={pageTitle}
        description={pageDesc}
        keywords={pageKeywords}
        canonicalPath={`/local/${type}/${slug}`}
        schemaData={locationSchema}
      />

      {/* Mini Hero */}
      <div className="bg-adp-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-2">
            {isCity ? 'Atendimento na Região Metropolitana' : 'Atendimento nos Bairros de Curitiba'}
          </p>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-6">
            Desentupidora em <span className="text-adp-orange">{locationName}</span>
          </h1>
          <h2 className="text-lg max-w-2xl mx-auto mb-8 font-light">
            Equipe técnica de plantão para atender <strong>{locationName}</strong> em até 30 minutos. 
            Serviço rápido, limpo e com garantia por escrito.
          </h2>
          <div className="flex justify-center gap-4">
             <a href={PHONE_LINK} className="bg-white text-adp-blue px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
               Ligar Agora
             </a>
             <a href={WHATSAPP_LINK} className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
               WhatsApp 24h
             </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Section 1 */}
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Atendimento de Emergência 24 Horas em {locationName}
            </h2>
            <div className="prose text-gray-600 mb-6 text-lg leading-relaxed">
              <p className="mb-4">
                Moradores e empresas de <strong>{locationName}</strong> agora contam com a estrutura completa da ADP Desentupidora. 
                Sabemos que problemas hidráulicos não têm hora para acontecer, por isso mantemos equipes estratégicas próximas à região para garantir o menor tempo de resposta do mercado.
              </p>
              <p>
                Chegamos ao seu endereço em <strong>{locationName}</strong> em minutos, realizamos o diagnóstico preciso sem custo e resolvemos o problema de forma definitiva. 
                Seja um entupimento simples em pia, vaso sanitário ou um problema complexo na rede de esgoto, temos a tecnologia certa (Roto Rooter e Hidrojato) para resolver sem quebrar pisos.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-adp-blue">
              <p className="text-adp-blue font-bold">📍 Base móvel próxima a {locationName} pronta para atendimento imediato.</p>
            </div>
          </section>

          {/* Video Section Injected */}
          <VideoCTA location={locationName} />

          {/* Section 2: Services */}
          <section>
            <h3 className="text-xl font-bold mb-6">Serviços de Desentupimento em {locationName}</h3>
            <div className="grid md:grid-cols-2 gap-4">
               {[
                 `Desentupimento de Vaso em ${locationName}`,
                 `Limpeza de Caixa de Gordura em ${locationName}`,
                 "Hidrojateamento de Alta Pressão",
                 "Caça Vazamentos Ocultos",
                 `Desentupimento de Pias em ${locationName}`,
                 "Limpeza de Fossa Séptica"
               ].map((svc, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:border-adp-blue transition">
                   <CheckCircle size={20} className="text-adp-green flex-shrink-0" />
                   <span className="font-medium text-gray-700">{svc}</span>
                 </div>
               ))}
            </div>
          </section>

          {/* Section 3: Why Choose Us */}
          <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-adp-orange">
             <h3 className="text-2xl font-bold mb-4">Por que escolher a ADP Desentupidora em {locationName}?</h3>
             <p className="text-gray-600 mb-6">
               Nossa reputação foi construída com base na confiança e na transparência. 
               Ao contratar a ADP, você tem a certeza de um serviço executado por profissionais treinados, frota própria e equipamentos de última geração.
               <strong> Não cobramos taxa de visita para {locationName}</strong> e oferecemos garantia de até 90 dias em todos os serviços.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded hover:bg-white hover:shadow-md transition">
                   <Clock className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">Chegada Rápida</div>
                </div>
                <div className="p-4 bg-gray-50 rounded hover:bg-white hover:shadow-md transition">
                   <Shield className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">Garantia Total</div>
                </div>
                <div className="p-4 bg-gray-50 rounded hover:bg-white hover:shadow-md transition">
                   <MapPin className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">Atendemos {locationName}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded hover:bg-white hover:shadow-md transition">
                   <Phone className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">Plantão 24h</div>
                </div>
             </div>
          </section>

          {/* Accordion FAQ Local */}
          <section>
            <h3 className="text-xl font-bold mb-6">Dúvidas Comuns em {locationName}</h3>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-4 font-bold text-gray-800 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition"
                  >
                    <span className="pr-4">{item.q}</span>
                    <ChevronDown className={`flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`px-6 text-gray-600 bg-gray-50 transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8">
            <Link to="/" className="text-adp-blue font-bold hover:underline">&larr; Voltar para a Página Inicial</Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <LeadForm />
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-2">Precisa de Ajuda em {locationName}?</h4>
              <p className="text-sm text-gray-500 mb-4">Plantão técnico ativo agora na sua região.</p>
              <a href={PHONE_LINK} className="block w-full bg-adp-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition mb-2 shadow-md">
                {PHONE_DISPLAY}
              </a>
              <p className="text-xs text-gray-400">Atendimento 24h, 7 dias por semana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;