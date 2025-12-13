import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, MapPin, Shield } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const LocationPage = () => {
  const { type, slug } = useParams();
  
  // Convert slug back to readable name (approximate)
  const formatName = (str: string | undefined) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const locationName = formatName(slug);
  const isCity = type === 'cidade';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationName]);

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ADP Desentupidora em ${locationName}`,
    "areaServed": {
      "@type": isCity ? "City" : "Place",
      "name": locationName
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO 
        title={`Desentupidora em ${locationName} | Atendimento 24h e Chegada em 30min`}
        description={`Precisa de Desentupidora em ${locationName}? A ADP chega em 30 minutos. Desentupimento de esgoto, pias e vasos com garantia. Orçamento grátis.`}
        keywords={`desentupidora ${locationName}, desentupimento ${locationName}, encanador ${locationName}`}
        canonicalPath={`/local/${type}/${slug}`}
        schemaData={locationSchema}
      />

      {/* Mini Hero */}
      <div className="bg-adp-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-2">
            {isCity ? 'Região Metropolitana' : 'Bairros de Curitiba'}
          </p>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-6">
            Desentupidora em <span className="text-adp-orange">{locationName}</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Equipe técnica pronta para atender {locationName} em até 30 minutos. 
            Serviço rápido, limpo e com garantia.
          </p>
          <div className="flex justify-center gap-4">
             <a href={PHONE_LINK} className="bg-white text-adp-blue px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
               Ligar Agora
             </a>
             <a href={WHATSAPP_LINK} className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition">
               WhatsApp
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
              Atendimento de Emergência em {locationName}
            </h2>
            <div className="prose text-gray-600 mb-6">
              <p className="mb-4">
                Moradores e empresas de <strong>{locationName}</strong> agora contam com a estrutura completa da ADP Desentupidora. 
                Sabemos que problemas hidráulicos não têm hora para acontecer, por isso mantemos equipes estratégicas próximas à região para garantir o menor tempo de resposta do mercado.
              </p>
              <p>
                Chegamos ao local em minutos, realizamos o diagnóstico preciso sem custo e resolvemos o problema de forma definitiva. 
                Seja um entupimento simples em pia ou um problema complexo na rede de esgoto, temos a tecnologia certa para {locationName}.
              </p>
            </div>
            <img 
              src={`https://picsum.photos/800/400?random=${Math.floor(Math.random() * 100)}`} 
              alt={`Atendimento em ${locationName}`} 
              className="w-full h-64 object-cover rounded-lg mb-6"
              loading="lazy"
            />
          </section>

          {/* Section 2: Services */}
          <section>
            <h3 className="text-xl font-bold mb-6">Serviços mais solicitados em {locationName}</h3>
            <div className="grid md:grid-cols-2 gap-4">
               {[
                 "Desentupimento de Vaso Sanitário",
                 "Limpeza de Caixa de Gordura",
                 "Hidrojateamento de Alta Pressão",
                 "Caça Vazamentos Ocultos",
                 "Desentupimento de Pias e Ralos",
                 "Limpeza de Fossa Séptica"
               ].map((svc, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                   <CheckCircle size={20} className="text-adp-green flex-shrink-0" />
                   <span className="font-medium">{svc}</span>
                 </div>
               ))}
            </div>
          </section>

          {/* Section 3: Why Choose Us */}
          <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-adp-orange">
             <h2 className="text-2xl font-bold mb-4">Por que escolher a ADP em {locationName}?</h2>
             <p className="text-gray-600 mb-6">
               Nossa reputação foi construída com base na confiança e na transparência. 
               Ao contratar a ADP, você tem a certeza de um serviço executado por profissionais treinados, frota própria e equipamentos de última geração.
               Não cobramos taxa de visita para {locationName} e oferecemos garantia de até 90 dias em todos os serviços.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded">
                   <Clock className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">Chegada Rápida</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                   <Shield className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">Garantia Total</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                   <MapPin className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">Local</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                   <Phone className="mx-auto text-adp-blue mb-2" />
                   <div className="font-bold text-sm">24 Horas</div>
                </div>
             </div>
          </section>

          {/* Accordion FAQ Local */}
          <section>
            <h3 className="text-xl font-bold mb-6">Dúvidas Comuns em {locationName}</h3>
            <div className="space-y-4">
               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <h4 className="font-bold mb-2">Quanto tempo demora para chegar em {locationName}?</h4>
                 <p className="text-gray-600">Devido à nossa logística estratégica, o tempo médio de chegada em {locationName} é de 30 minutos após o chamado.</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <h4 className="font-bold mb-2">Vocês atendem condomínios em {locationName}?</h4>
                 <p className="text-gray-600">Sim, temos condições especiais e contratos de manutenção preventiva para condomínios e empresas da região.</p>
               </div>
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
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h4 className="font-bold text-gray-800 mb-2">Precisa de Ajuda Agora?</h4>
              <p className="text-sm text-gray-500 mb-4">Plantão técnico ativo em {locationName}</p>
              <a href={PHONE_LINK} className="block w-full bg-adp-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition mb-2">
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