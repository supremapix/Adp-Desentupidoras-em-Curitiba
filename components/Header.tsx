import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from '../constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top Bar Emergency */}
      <div className="bg-adp-red text-white py-2 px-4 text-center text-sm font-bold animate-pulse">
        🚨 EMERGÊNCIA 24H: Atendimento Prioritário em Toda Curitiba e Região
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-adp-blue text-white p-2 rounded font-heading font-black text-2xl tracking-tighter">
                ADP
              </div>
              <span className="font-bold text-gray-800 hidden sm:block">
                Desentupidora
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-gray-600 hover:text-adp-blue font-medium">Serviços</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-adp-blue font-medium">Como Funciona</a>
              <a href="#locais" className="text-gray-600 hover:text-adp-blue font-medium">Cobertura</a>
              <a href="#faq" className="text-gray-600 hover:text-adp-blue font-medium">Dúvidas</a>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a 
                href={PHONE_LINK} 
                className="hidden md:flex items-center gap-2 bg-adp-blue text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
              >
                <Phone size={18} fill="currentColor" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#servicos" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#locais" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Área de Atendimento</a>
              <a href="#contato" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <div className="mt-4 px-3">
                 <a 
                  href={PHONE_LINK} 
                  className="flex w-full items-center justify-center gap-2 bg-adp-blue text-white px-4 py-3 rounded-lg font-bold"
                >
                  <Phone size={18} fill="currentColor" />
                  LIGAR AGORA
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;