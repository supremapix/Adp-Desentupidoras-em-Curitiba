import React from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { PHONE_LINK, WHATSAPP_LINK } from '../constants';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Bottom - Phone & WhatsApp */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
        <a 
          href={PHONE_LINK}
          className="bg-adp-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 flex items-center justify-center animate-bounce"
          aria-label="Ligar Agora"
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
        <a 
          href={WHATSAPP_LINK}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Chamar no WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </div>

      {/* Right Bottom - Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 bg-gray-800 text-white p-3 rounded-lg shadow-lg hover:bg-gray-700 transition-all opacity-80 hover:opacity-100"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default FloatingCTA;