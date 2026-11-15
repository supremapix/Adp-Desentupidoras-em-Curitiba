import React from 'react';
import { MessageCircle, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY } from '../constants';

interface VideoCTAProps {
  location?: string;
  service?: string;
}

const VideoCTA: React.FC<VideoCTAProps> = ({ location, service }) => {
  const getTitle = () => {
    if (service) return `Equipamentos Técnicos para ${service}`;
    if (location) return `Atendimento Especializado em ${location}`;
    return "Estrutura Operacional ADP Desentupidora";
  };

  const getDescription = () => {
    if (service) {
      return `Para ${service}, informe os sintomas e as condições de acesso. O método, os equipamentos e os limites do atendimento precisam ser definidos conforme a avaliação e o serviço contratado.`;
    }
    if (location) {
      return `Equipes volantes preparadas para atender ${location}. Veículos equipados para desobstrução residencial, predial e comercial com diagnóstico presencial no local.`;
    }
    return "Estrutura técnica própria em Curitiba com equipes preparadas para solucionar desde pequenos entupimentos residenciais até grandes redes coletoras prediais e industriais.";
  };

  return (
    <section className="bg-slate-900 text-white py-12 px-6 sm:px-10 rounded-3xl border border-slate-800 shadow-lg my-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-5">
            <span className="text-blue-400 block kicker font-semibold">
              Equipamentos e Metodologia
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {getTitle()}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              {getDescription()}
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                <span>Descrição do problema e verificação dos pontos de acesso antes da execução</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                <span>Método e equipamentos compatíveis com o serviço e com as condições da instalação</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                <span>Atendimento presencial em {location || 'Curitiba e Região Metropolitana'} com avaliação no local</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a 
                href={PHONE_LINK} 
                className="bg-blue-600 hover:bg-blue-500 text-white py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2.5 transition shadow"
              >
                <Phone size={18} fill="currentColor" />
                <span>Ligar: {PHONE_DISPLAY}</span>
              </a>

              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2.5 transition shadow"
              >
                <MessageCircle size={18} />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Visual Técnico Real Reestruturado */}
          <div className="bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-700 space-y-4">
            <span className="text-slate-400 block pb-2 kicker font-semibold">
              Padrões Técnicos de Atendimento
            </span>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Avaliação Antes da Intervenção</strong>
                  <span className="text-slate-400 text-xs">A possibilidade de usar os acessos existentes depende do estado da instalação. Reparos podem exigir abertura localizada.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Orçamento Antes do Serviço</strong>
                  <span className="text-slate-400 text-xs">O profissional avalia a situação no local e informa o valor com clareza para aprovação antes de executar.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Escopo e Registros do Atendimento</strong>
                  <span className="text-slate-400 text-xs">Confirme no orçamento os registros fornecidos, as condições de garantia e os serviços que não estão incluídos.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 border-t border-slate-700">
              Central Telefônica: <a href={PHONE_LINK} className="text-white font-bold hover:underline">{PHONE_DISPLAY}</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoCTA;
