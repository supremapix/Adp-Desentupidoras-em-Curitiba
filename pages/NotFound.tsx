import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Phone, Wrench, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK, SERVICES } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-16">
      <EnhancedSEO 
        title="Página Não Encontrada (404) | ADP Desentupidora Curitiba"
        description="A página ou endereço acessado não foi encontrado. Retorne à página inicial ou navegue pelos nossos serviços de desentupimento em Curitiba."
        noindex={true}
      />
      
      <div className="max-w-lg w-full bg-white p-8 md:p-10 rounded-3xl shadow-xl text-center border-t-4 border-adp-orange">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-adp-orange">
          <AlertTriangle size={32} />
        </div>
        
        <span className="text-sm font-bold text-adp-orange uppercase tracking-widest block mb-1">
          Erro 404
        </span>
        <h1 className="text-gray-900 mb-3 font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
          Página Não Encontrada
        </h1>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          O endereço que você tentou acessar não existe, foi modificado ou está temporariamente indisponível. Utilize as opções abaixo para encontrar o que precisa:
        </p>

        <div className="space-y-3 mb-8">
          <Link 
            to="/" 
            className="w-full bg-adp-blue text-white font-bold py-3.5 px-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm shadow-md"
          >
            <Home size={18} />
            Voltar para a Página Inicial
          </Link>
          
          <Link 
            to="/cobertura" 
            className="w-full bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2 text-sm"
          >
            <MapPin size={18} className="text-adp-orange" />
            Consultar Bairros e Cidades Atendidas
          </Link>

          <a 
            href={PHONE_LINK} 
            className="w-full border-2 border-adp-blue text-adp-blue font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition flex items-center justify-center gap-2 text-sm"
          >
            <Phone size={18} />
            Ligar para Central: {PHONE_DISPLAY}
          </a>
        </div>

        <div className="pt-6 border-t border-gray-100 text-left">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
            Nossos Principais Serviços:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {SERVICES.slice(0, 4).map(s => (
              <Link key={s.slug} to={`/servicos/${s.slug}`} className="text-adp-blue hover:underline truncate">
                • {s.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
