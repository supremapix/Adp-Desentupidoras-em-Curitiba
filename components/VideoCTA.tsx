import React from 'react';
import { MessageCircle, Phone, CheckCircle, Play } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK } from '../constants';

interface VideoCTAProps {
  location?: string;
  service?: string;
}

const VideoCTA: React.FC<VideoCTAProps> = ({ location, service }) => {
  const getTitle = () => {
    if (service) return `Tecnologia ADP para ${service}`;
    if (location) return `Desentupidora 24h em ${location}`;
    return "Conheça a ADP Desentupidora";
  };

  const getDescription = () => {
    if (service) return `Assista como o ${service} é realizado pela nossa equipe. Utilizamos equipamentos de última geração para desobstruir sem quebrar nada, garantindo rapidez e limpeza total no seu imóvel.`;
    if (location) return `Atendimento imediato em ${location}. Nossa base móvel chega em até 30 minutos com equipamentos prontos para qualquer emergência hidráulica. Assista ao vídeo e veja nossa estrutura.`;
    return "Veja porque somos referência em Curitiba e Região. Tecnologia, transparência e o melhor preço da cidade em serviços de desentupimento.";
  };

  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden rounded-3xl my-12 mx-4">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-adp-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Play size={12} fill="currentColor" /> Vídeo Exclusivo
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black">
              {getTitle()}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {getDescription()}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-adp-green" size={18} /> Equipamentos Roto Rooter (K-500)
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-adp-green" size={18} /> Hidrojateamento de Alta Pressão
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-adp-green" size={18} /> Técnicos Especialistas em {location || 'Curitiba'}
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <MessageCircle size={20} /> Orçamento Online
              </a>
              <a href={PHONE_LINK} className="flex-1 bg-adp-blue hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <Phone size={20} /> Ligar Agora
              </a>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/jJ0WJqgXZ3k?autoplay=0&mute=0&rel=0" 
              title="ADP Desentupidora Video" 
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