import React from 'react';
import { MessageCircle, Phone, CheckCircle, Play } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK } from '../constants';

interface VideoCTAProps {
  location?: string;
  service?: string;
}

const VideoCTA: React.FC<VideoCTAProps> = ({ location, service }) => {
  // Logic to customize text based on context
  const getTitle = () => {
    if (service) return `Veja a Tecnologia Utilizada no ${service}`;
    if (location) return `Atendimento Rápido e Moderno em ${location}`;
    return "Veja a ADP Desentupidora em Ação";
  };

  const getDescription = () => {
    if (service) return `Confira no vídeo como realizamos o ${service} com equipamentos de alta tecnologia que não quebram seu piso. Solução limpa e garantida.`;
    if (location) return `Estamos com equipes prontas para atender ${location}. Assista ao vídeo e veja nossa estrutura de atendimento emergencial.`;
    return "Assista ao vídeo e comprove a qualidade dos nossos serviços. Utilizamos tecnologia de ponta para resolver seu problema em minutos.";
  };

  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900 z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-adp-blue opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-white space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-adp-orange/20 text-adp-orange px-4 py-1 rounded-full border border-adp-orange/30 text-sm font-bold animate-pulse">
              <Play size={14} fill="currentColor" />
              Vídeo Demonstrativo
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-black leading-tight">
              {getTitle()}
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {getDescription()}
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-adp-green flex-shrink-0" />
                <span>Equipamentos de Hidrojateamento e Roto Rooter</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-adp-green flex-shrink-0" />
                <span>Técnicos uniformizados e frota própria</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-adp-green flex-shrink-0" />
                <span>Garantia total por escrito no serviço</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-green-900/50 transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="fill-current" size={24} />
                Orçamento WhatsApp
              </a>
              <a 
                href={PHONE_LINK}
                className="flex-1 bg-white hover:bg-gray-100 text-adp-blue py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="fill-current" size={24} />
                Ligar Agora
              </a>
            </div>
          </div>

          {/* Video Container */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black aspect-video group">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/jJ0WJqgXZ3k?rel=0&modestbranding=1" 
                title="ADP Desentupidora em Ação" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Assista como resolvemos problemas de entupimento com segurança.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoCTA;