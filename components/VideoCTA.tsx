import React from 'react';
import { MessageCircle, Phone, CheckCircle, Play } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY } from '../constants';

interface VideoCTAProps {
  location?: string;
  service?: string;
}

const VideoCTA: React.FC<VideoCTAProps> = ({ location, service }) => {
  const getTitle = () => {
    if (service) return `Tecnologia ADP para ${service}`;
    if (location) return `Desentupidora em ${location}`;
    return "Conheça a ADP Desentupidora";
  };

  const getDescription = () => {
    if (service) {
      return `Conheça como o serviço de ${service} é realizado por nossa equipe técnica. Utilizamos equipamentos modernos para desobstrução sem quebra-quebra, visando rapidez, limpeza e restauração completa da vazão no seu imóvel.`;
    }
    if (location) {
      return `Atendimento especializado em ${location}. Nossas equipes volantes atendem a região com equipamentos adequados para desobstruções emergenciais e manutenções preventivas em residências, condomínios e empresas.`;
    }
    return "Conheça a estrutura da ADP Desentupidora em Curitiba e Região Metropolitana. Diagnóstico preciso, equipamentos profissionais e transparência técnica em todos os atendimentos.";
  };

  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden rounded-3xl my-12 mx-4">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-adp-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Play size={12} fill="currentColor" /> Vídeo Institucional
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black">
              {getTitle()}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {getDescription()}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-adp-green" size={18} /> Equipamentos rotativos com molas espirais
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-adp-green" size={18} /> Hidrojateamento com água em alta pressão
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-adp-green" size={18} /> Equipes técnicas preparadas para {location || 'Curitiba e Região'}
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-[#25D366] hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MessageCircle size={20} /> Orçamento via WhatsApp
              </a>
              <a 
                href={PHONE_LINK} 
                className="flex-1 bg-adp-blue hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Phone size={20} /> Ligar: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/jJ0WJqgXZ3k?autoplay=0&mute=0&rel=0" 
              title="ADP Desentupidora Video Institucional" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCTA;
