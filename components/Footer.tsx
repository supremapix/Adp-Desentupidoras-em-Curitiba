import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, CITIES, SERVICES } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-adp-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <div className="bg-adp-blue text-white w-fit px-3 py-1 rounded font-heading font-black text-2xl tracking-tighter mb-4">
                ADP
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Referência em desentupimento e caça vazamentos em Curitiba e Região. 
              Tecnologia de ponta, atendimento 24 horas e garantia total de satisfação.
            </p>
            <div className="flex gap-4">
              <a href={WHATSAPP_LINK} className="bg-gray-800 p-2 rounded-full hover:bg-adp-blue transition"><Facebook size={20} /></a>
              <a href={WHATSAPP_LINK} className="bg-gray-800 p-2 rounded-full hover:bg-adp-blue transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2">Serviços Rápidos</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link to={`/servicos/${service.slug}`} className="hover:text-adp-blue transition">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Coverage */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2">Atendimento</h4>
            <ul className="space-y-2 text-sm columns-2">
              {CITIES.slice(0, 14).map(city => (
                <li key={city}><span className="hover:text-white cursor-default">{city}</span></li>
              ))}
            </ul>
            <Link to="/" className="text-adp-orange text-sm font-bold mt-4 inline-block hover:underline">Ver todos os locais &rarr;</Link>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2">Fale Conosco</h4>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_LINK} className="flex items-center gap-3 hover:text-white group">
                  <div className="bg-adp-blue p-2 rounded-lg group-hover:scale-110 transition">
                    <Phone size={18} fill="currentColor" className="text-white" />
                  </div>
                  <span className="font-bold text-lg">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@adpdesentupidora.com.br" className="flex items-center gap-3 hover:text-white">
                  <Mail size={18} />
                  <span>contato@adpdesentupidora.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Base Operacional: Curitiba - PR (Atendimento Volante)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-500">
            &copy; 2025 ADP Desentupidora. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 group">
            <span className="text-gray-500">Desenvolvido com</span>
            <Heart size={14} className="text-red-500 animate-pulse fill-red-500" />
            <span className="text-gray-500">pela</span>
            <Link to="/suprema-sites" className="font-bold text-gray-300 hover:text-adp-orange transition">
              Suprema Sites Express
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;