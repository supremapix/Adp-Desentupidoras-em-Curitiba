import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, MessageCircle, ZoomIn, ZoomOut, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, WHATSAPP_DISPLAY, SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSeniorText, setIsSeniorText] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(true);

  useEffect(() => {
    // Carrega preferência de tamanho de texto
    const saved = localStorage.getItem('adp_senior_text') === 'true';
    if (saved) {
      setIsSeniorText(true);
      document.documentElement.classList.add('senior-large-text');
    }
  }, []);

  const toggleSeniorText = () => {
    const nextState = !isSeniorText;
    setIsSeniorText(nextState);
    localStorage.setItem('adp_senior_text', String(nextState));
    if (nextState) {
      document.documentElement.classList.add('senior-large-text');
    } else {
      document.documentElement.classList.remove('senior-large-text');
    }
  };

  return (
    <>
      {/* Barra Superior de Utilidade e Acessibilidade (Alto Contraste) */}
      <div className="bg-slate-900 text-slate-200 py-2 px-4 text-xs sm:text-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            <span>Central Técnica no CIC · Atendimento Volante em Curitiba e Região Metropolitana</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Botão de Acessibilidade com Alto Contraste para Idosos */}
            <button
              onClick={toggleSeniorText}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition font-bold text-xs border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Aumentar ou diminuir o tamanho da letra do site para facilitar a leitura"
              aria-label="Ajustar tamanho da letra para idosos"
            >
              {isSeniorText ? <ZoomOut size={15} /> : <ZoomIn size={15} />}
              <span>{isSeniorText ? 'Letra Normal' : 'Aumentar Letra (Idosos)'}</span>
            </button>

            <a 
              href={PHONE_LINK} 
              className="hidden sm:inline-flex items-center gap-1.5 font-bold text-white hover:text-blue-300 transition"
              title={`Ligar para ${PHONE_DISPLAY}`}
            >
              <Phone size={14} fill="currentColor" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal Refinado */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Dignificada e Institucional */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xl tracking-tight shadow-sm group-hover:bg-blue-900 transition">
                ADP
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  ADP Desentupidora
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">
                  Serviços Técnicos e Hidráulicos no CIC
                </span>
              </div>
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex space-x-7 items-center text-sm font-semibold text-slate-700">
              <div className="relative group">
                <button 
                  className="flex items-center gap-1.5 py-2 hover:text-blue-700 transition focus:outline-none"
                  aria-expanded="false"
                >
                  <span>Serviços</span>
                  <ChevronDown size={15} className="text-slate-400 group-hover:text-blue-700 transition" />
                </button>
                {/* Dropdown Desktop */}
                <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <div className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Especialidades Técnicas
                  </div>
                  {SERVICES.map((service) => (
                    <Link 
                      key={service.slug}
                      to={`/servicos/${service.slug}`}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition font-medium"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/desentupidora-curitiba" className="hover:text-blue-700 transition py-2">Curitiba</Link>
              <Link to="/cobertura" className="hover:text-blue-700 transition py-2">Área de Cobertura</Link>
              <Link to="/como-funciona" className="hover:text-blue-700 transition py-2">Como Funciona</Link>
              <Link to="/duvidas" className="hover:text-blue-700 transition py-2">Dúvidas Frequentes</Link>
            </nav>

            {/* Controles da Direita */}
            <div className="flex items-center gap-3">
              {/* Telefone Direto Desktop */}
              <a 
                href={PHONE_LINK} 
                className="hidden sm:inline-flex items-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition active:scale-95"
              >
                <Phone size={17} fill="currentColor" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              {/* Botão de Chamada Imediata Mobile (Ícone e Número Legível) */}
              <a 
                href={PHONE_LINK}
                className="sm:hidden flex items-center gap-1.5 bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm"
                aria-label="Ligar para a central agora"
              >
                <Phone size={16} fill="currentColor" />
                <span>Ligar</span>
              </a>

              {/* Botão do Menu Mobile com Rótulo Claro para Idosos */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-slate-50 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold text-sm shadow-sm"
                aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <>
                    <X size={22} className="text-slate-900" />
                    <span className="text-xs uppercase tracking-wider font-extrabold">Fechar</span>
                  </>
                ) : (
                  <>
                    <Menu size={22} className="text-slate-900" />
                    <span className="text-xs uppercase tracking-wider font-extrabold">Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Especialmente Projetado para Idosos */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-100 border-t border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-4">
              
              {/* Bloco 1: Ações Principais de Contato (Botões Grandes com Letra Legível) */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Atendimento Rápido sem Robôs</span>
                  <span className="text-emerald-700 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    Atendente Real
                  </span>
                </div>

                {/* Botão de Ligação com Letra Grande para Idosos */}
                <a 
                  href={PHONE_LINK}
                  className="flex items-center gap-3.5 w-full bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-xl shadow-md transition active:scale-98"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} fill="currentColor" className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wide font-semibold text-blue-100">Toque aqui para ligar</div>
                    <div className="text-xl sm:text-2xl font-black text-white">{PHONE_DISPLAY}</div>
                  </div>
                </a>

                {/* Botão de WhatsApp */}
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-xl shadow-md transition active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wide font-semibold text-emerald-100">Mandar mensagem no WhatsApp</div>
                    <div className="text-base font-bold text-white">{WHATSAPP_DISPLAY}</div>
                  </div>
                </a>
              </div>

              {/* Bloco 2: Acessibilidade e Tamanho da Letra */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <ZoomIn size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Tamanho da Letra</div>
                    <div className="text-xs text-slate-500">Aumentar para facilitar a leitura</div>
                  </div>
                </div>
                <button
                  onClick={toggleSeniorText}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
                    isSeniorText 
                      ? 'bg-blue-700 text-white border-blue-700 shadow-sm' 
                      : 'bg-slate-100 text-slate-800 border-slate-300'
                  }`}
                >
                  {isSeniorText ? '✓ Letra Grande Ativada' : 'Aumentar Letra'}
                </button>
              </div>

              {/* Bloco 3: Links de Navegação com Alvos de Toque Confortáveis (≥ 52px de altura) */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 shadow-sm">
                
                <Link 
                  to="/" 
                  className="flex items-center justify-between p-4 text-base sm:text-lg font-bold text-slate-800 hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Página Inicial</span>
                  <ArrowRight size={18} className="text-slate-400" />
                </Link>

                {/* Seletor Desdobrável de Serviços */}
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full p-4 text-base sm:text-lg font-bold text-slate-800 hover:bg-slate-50 transition text-left"
                    aria-expanded={isServicesOpen}
                  >
                    <span>Nossos Serviços Técnicos</span>
                    <ChevronDown size={20} className={`text-slate-400 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isServicesOpen && (
                    <div className="bg-slate-50 px-4 py-2 space-y-1.5 border-t border-slate-100">
                      {SERVICES.map((service) => (
                        <Link 
                          key={service.slug}
                          to={`/servicos/${service.slug}`}
                          className="block py-3 px-3 text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-white transition"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          • {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/desentupidora-curitiba" 
                  className="flex items-center justify-between p-4 text-base sm:text-lg font-bold text-slate-800 hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Atendimento em Curitiba</span>
                  <ArrowRight size={18} className="text-slate-400" />
                </Link>

                <Link 
                  to="/cobertura" 
                  className="flex items-center justify-between p-4 text-base sm:text-lg font-bold text-slate-800 hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Cidades e Bairros Atendidos</span>
                  <ArrowRight size={18} className="text-slate-400" />
                </Link>

                <Link 
                  to="/como-funciona" 
                  className="flex items-center justify-between p-4 text-base sm:text-lg font-bold text-slate-800 hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Como Funciona o Serviço</span>
                  <ArrowRight size={18} className="text-slate-400" />
                </Link>

                <Link 
                  to="/duvidas" 
                  className="flex items-center justify-between p-4 text-base sm:text-lg font-bold text-slate-800 hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Perguntas Frequentes (Dúvidas)</span>
                  <ArrowRight size={18} className="text-slate-400" />
                </Link>

                <Link 
                  to="/mapa-do-site" 
                  className="flex items-center justify-between p-4 text-base sm:text-lg font-bold text-slate-800 hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Mapa do Site</span>
                  <ArrowRight size={18} className="text-slate-400" />
                </Link>
              </div>

              {/* Botão de Fechar Claro na Base para Evitar que Idosos Fiquem Presos */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-4 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold text-base transition text-center shadow-sm"
              >
                ✕ Fechar Menu e Voltar ao Site
              </button>

            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
