import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-20">
      <EnhancedSEO 
        title="Página Não Encontrada | ADP Desentupidora"
        description="A página que você está procurando não existe ou foi movida."
        noindex={true}
      />
      
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border-t-4 border-adp-orange">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={40} className="text-adp-orange" />
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-2">404</h1>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Página não encontrada</h2>
        
        <p className="text-gray-600 mb-8">
          Ops! Parece que o endereço que você tentou acessar não existe. Mas não se preocupe, continuamos atendendo 24h.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="block w-full bg-adp-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Voltar para o Início
          </Link>
          
          <a 
            href={PHONE_LINK} 
            className="block w-full border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Ligar: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;