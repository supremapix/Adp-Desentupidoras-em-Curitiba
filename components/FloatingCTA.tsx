import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { PHONE_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from '../constants';

const FloatingCTA: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Barra Fixa Mobile Focada em Idosos e Emergências (Grounded, Estável, Sem Animações Frustrantes) */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-300 p-2.5 shadow-2xl flex items-center gap-2.5 safe-area-pb"
        aria-label="Atendimento Rápido"
      >
        {/* Botão de Ligação Telefônica Direta */}
        <a 
          href={PHONE_LINK}
          className="flex-1 bg-blue-700 active:bg-blue-800 text-white h-13 py-2.5 px-3 rounded-xl flex items-center justify-center gap-2.5 font-bold shadow-sm transition active:scale-98"
          aria-label={`Ligar para o telefone ${PHONE_DISPLAY}`}
        >
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
            <Phone size={18} fill="currentColor" />
          </div>
          <div className="text-left leading-tight">
            <span className="text-[10px] uppercase font-semibold text-blue-100 block">Ligar Agora</span>
            <span className="text-sm font-extrabold text-white whitespace-nowrap">{PHONE_DISPLAY}</span>
          </div>
        </a>

        {/* Botão de WhatsApp */}
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 active:bg-emerald-700 text-white h-13 py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-sm transition active:scale-98"
          aria-label="Conversar no WhatsApp"
        >
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
            <MessageCircle size={18} />
          </div>
          <div className="text-left leading-tight">
            <span className="text-[10px] uppercase font-semibold text-emerald-100 block">Conversar</span>
            <span className="text-sm font-extrabold text-white whitespace-nowrap">WhatsApp</span>
          </div>
        </a>
      </nav>

      {/* 2. Botão Flutuante Desktop (Discreto e Elegante no Canto Inferior Direito) */}
      <aside 
        aria-label="Atendimento Rápido Desktop"
        className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5"
      >
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 text-white rounded-xl shadow-md flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <ArrowUp size={18} />
          </button>
        )}

        <div className="bg-white rounded-2xl p-2.5 shadow-xl border border-slate-200 flex items-center gap-2">
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm transition"
            title={`Ligar para ${PHONE_DISPLAY}`}
          >
            <Phone size={16} fill="currentColor" />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition"
            title="Abrir WhatsApp"
          >
            <MessageCircle size={17} />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default FloatingCTA;
