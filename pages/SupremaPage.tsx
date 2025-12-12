import React from 'react';
import { Heart, Globe, MessageCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const SupremaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20">
      <div className="max-w-4xl w-full px-4 text-center">
        <Heart size={64} className="text-red-500 mx-auto mb-6 animate-pulse" fill="#ef4444" />
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Suprema Sites Express
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Especialistas em desenvolvimento de Landing Pages de Alta Conversão. 
          Criamos máquinas de vendas para prestadores de serviços que funcionam 24h por dia.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Por que nossos sites vendem mais?</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</span>
                <span>Otimização Extrema para Mobile</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</span>
                <span>Foco Total em SEO Local</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</span>
                <span>Gatilhos Mentais de Urgência</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</span>
                <span>Velocidade de Carregamento &lt; 2s</span>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://www.supremasite.com.br/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                <Globe size={20} /> Visite nosso site oficial
              </a>
            </div>
          </div>
          
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupremaPage;