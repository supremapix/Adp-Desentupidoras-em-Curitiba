import React, { useEffect } from 'react';
import { Heart, Globe } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import VideoCTA from '../components/VideoCTA';
import EnhancedSEO from '../components/EnhancedSEO';

const SupremaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
      <EnhancedSEO 
        title="Suprema Sites Express | Desenvolvimento Web"
        description="Desenvolvimento de landing pages e portais de alta performance e conversão."
        canonicalPath="/suprema-sites"
        noindex={true}
      />

      <div className="max-w-4xl w-full px-4 text-center">
        <Heart size={48} className="text-red-500 mx-auto mb-4 animate-pulse fill-red-500" />
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
          Suprema Sites Express
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Especialistas em desenvolvimento de páginas e portais otimizados para busca orgânica local, conversão e velocidade de carregamento.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Diferenciais Técnicos de Desenvolvimento</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Otimização para Dispositivos Móveis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Arquitetura de SEO Técnico e Estrutura Semântica</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Geração de Dados Estruturados Schema.org</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Pré-renderização e HTML Estático para Rastreamento</span>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://www.supremasite.com.br/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-adp-blue font-bold text-sm hover:underline"
              >
                <Globe size={16} /> Visite o site oficial da Suprema Sites &rarr;
              </a>
            </div>
          </div>
          
          <div>
            <LeadForm />
          </div>
        </div>
        
        <VideoCTA location="Nossos Projetos" />
      </div>
    </div>
  );
};

export default SupremaPage;
