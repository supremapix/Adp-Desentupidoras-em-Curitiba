import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, MessageCircle, ZoomIn, ZoomOut, Check, ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, WHATSAPP_DISPLAY, SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSeniorText, setIsSeniorText] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      {/* Barra Superior de Utilidade e Acessibilidade */}
      <div className="bg-slate-900 text-slate-200 py-2 px-4 text-xs sm:text-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>Central Técnica em Curitiba e Região Metropolitana</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Botão de Acessibilidade: Aumentar Letra para Idosos */}
            <button
              onClick={toggleSeniorText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition font-medium text-xs border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Aumentar ou diminuir o tamanho da letra do site"
              aria-label="Ajustar tamanho da letra"
            >
              {isSeniorText ? <ZoomOut size={14} /> : <ZoomIn size={14} />}
              <span>{isSeniorText ? 'Tamanho Padrão' : 'Letra Maior'}</span>
            </button>

            <a 
              href={PHONE_LINK} 
              className="hidden sm:inline-flex items-center gap-1.5 font-bold text-white hover:text-blue-300 transition"
            >
              <Phone size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Dignificada e Profissional */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xl tracking-tight shadow-sm group-hover:bg-blue-900 transition">
                ADP
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  ADP Desentupidora
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">
                  Serviços Técnicos e Hidráulicos
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
                    Especialidades
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
              <Link to="/cobertura" className="hover:text-blue-700 transition py-2">Área de Atendimento</Link>
              <Link to="/como-funciona" className="hover:text-blue-700 transition py-2">Como Funciona</Link>
              <Link to="/duvidas" className="hover:text-blue-700 transition py-2">Dúvidas Frequentes</Link>
            </nav>

            {/* Controles da Direita */}
            <div className="flex items-center gap-3">
              {/* Telefone Direto Desktop */}
              <a 
                href={PHONE_LINK} 
                className="hidden sm:inline-flex items-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition transform active:scale-95"
              >
                <Phone size={17} fill="currentColor" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              {/* Botão de Chamada Imediata Mobile (Ícone e Número para Idosos) */}
              <a 
                href={PHONE_LINK}
                className="sm:hidden flex items-center gap-1.5 bg-blue-700 text-white px-3.5 py-2 rounded-xl font-bold text-xs shadow-sm"
                aria-label="Ligar para a central"
              >
                <Phone size={15} fill="currentColor" />
                <span>Ligar</span>
              </a>

              {/* Botão do Menu Mobile com Texto Explícito para Idosos */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 text-slate-800 bg-slate-50 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold text-sm"
                aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <>
                    <X size={20} className="text-slate-900" />
                    <span className="text-xs uppercase tracking-wider">Fechar</span>
                  </>
                ) : (
                  <>
                    <Menu size={20} className="text-slate-900" />
                    <span className="text-xs uppercase tracking-wider">Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Especialmente Projetado para Idosos e Situações de Emergência */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-50 border-t border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-4">
              
              {/* Bloco 1: Ações Principais de Contato (Botões Grandes e Constrastantes) */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Atendimento por Telefone ou WhatsApp
                </span>

                {/* Botão de Ligação com Letra Grande */}
                <a 
                  href={PHONE_LINK}
                  className="flex items-center gap-3 w-full bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-xl shadow-md transition active:scale-98"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} fill="currentColor" className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wide font-semibold text-blue-100">Toque para Ligar Agora</div>
                    <div className="text-xl sm:text-2xl font-black text-white">{PHONE_DISPLAY}</div>
                  </div>
                </a>

                {/* Botão de WhatsApp */}
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-xl shadow-md transition active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wide font-semibold text-emerald-100">Falar no WhatsApp</div>
                    <div className="text-base font-bold text-white">{WHATSAPP_DISPLAY}</div>
                  </div>
                </a>
              </div>

              {/* Bloco 2: Acessibilidade (Controle de Tamanho da Letra) */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ZoomIn size={18} className="text-slate-600" />
                  <div>
                    <div className="text-sm font-bold text-slate-800">Tamanho da Letra</div>
                    <div className="text-xs text-slate-500">Aumente para facilitar a leitura</div>
                  </div>
                </div>
                <button
                  onClick={toggleSeniorText}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition border ${
                    isSeniorText 
                      ? 'bg-blue-700 text-white border-blue-700' 
                      : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  {isSeniorText ? '✓ Letra Ampliada' : 'Aumentar'}
                </button>
              </div>

              {/* Bloco 3: Links de Navegação com Alvos de Toque Confortáveis (≥ 50px de altura) */}
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
                  >
                    <span>Nossos Serviços</span>
                    <ChevronDown size={20} className={`text-slate-400 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isServicesOpen && (
                    <div className="bg-slate-50 px-4 py-2 space-y-1 border-t border-slate-100">
                      {SERVICES.map((service) => (
                        <Link 
                          key={service.slug}
                          to={`/servicos/${service.slug}`}
                          className="block py-3 px-3 text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-white transition"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          &bull; {service.title}
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
                  <span>Como Funciona o Atendimento</span>
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
              </div>

              {/* Botão de Fechar Claro na Base */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold text-sm transition"
              >
                Voltar à Página
              </button>

            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
