import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, HelpCircle, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  PHONE_DISPLAY, 
  PHONE_LINK, 
  WHATSAPP_LINK, 
  WHATSAPP_DISPLAY,
  SERVICES,
  COMPANY_ADDRESS,
  COMPANY_NEIGHBORHOOD,
  COMPANY_CITY,
  COMPANY_STATE,
  COMPANY_POSTAL_CODE
} from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      
      {/* 1. Seção Especial para Idosos e Atendimento Rápido */}
      <div className="bg-blue-900/60 border-b border-blue-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-blue-700/50 shadow-xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              
              <div className="lg:col-span-2 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <ShieldCheck size={16} /> Atendimento Humanizado e Transparente
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Precisa de ajuda com um entupimento? Fale com a gente
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                  Nosso atendente conversa com você com calma, entende a situação da sua residência e explica todo o procedimento antes de qualquer agendamento.
                </p>

                {/* Passo a Passo Simples para Idosos */}
                <div className="grid sm:grid-cols-3 gap-3 pt-3 text-xs sm:text-sm text-slate-300">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <strong className="text-white block mb-0.5">1. Você liga ou escreve</strong>
                    Sem burocracia nem robôs complicados.
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <strong className="text-white block mb-0.5">2. Informa o problema</strong>
                    Pia, ralo, vaso sanitário ou rede de esgoto.
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <strong className="text-white block mb-0.5">3. Avaliação no local</strong>
                    O técnico avalia e informa o valor antes de iniciar.
                  </div>
                </div>
              </div>

              {/* Botões de Ação Imediata com Letra Grande */}
              <div className="flex flex-col gap-3.5">
                <a 
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white p-4 sm:p-5 rounded-2xl shadow-lg transition active:scale-98 text-center group"
                >
                  <Phone size={24} fill="currentColor" className="text-white flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-wider text-blue-100 block font-semibold">Ligar por Telefone</span>
                    <span className="text-xl sm:text-2xl font-black text-white leading-tight">{PHONE_DISPLAY}</span>
                  </div>
                </a>

                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-2xl shadow-lg transition active:scale-98 text-center"
                >
                  <MessageCircle size={22} className="text-white flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-wider text-emerald-100 block font-semibold">Mandar Mensagem no WhatsApp</span>
                    <span className="text-base sm:text-lg font-bold text-white">{WHATSAPP_DISPLAY}</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 2. Conteúdo Institucional e Links Confortáveis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Coluna 1: Empresa e Base Física */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                ADP
              </div>
              <span className="font-bold text-xl text-white">ADP Desentupidora</span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Atendimento técnico especializado em desentupimento de esgotos, pias, ralos, fossas sépticas e caça vazamentos em Curitiba e Região Metropolitana.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Sede Própria:</strong> {COMPANY_ADDRESS}, {COMPANY_NEIGHBORHOOD}, {COMPANY_CITY} - {COMPANY_STATE} (CEP {COMPANY_POSTAL_CODE})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span>contato@adpservicos.app.br</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Serviços Principais */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              Serviços Especializados
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link 
                    to={`/servicos/${service.slug}`} 
                    className="text-slate-300 hover:text-white transition flex items-center gap-1.5 py-1"
                  >
                    <ArrowRight size={13} className="text-blue-400" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Navegação do Site e Regiões */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              Navegação e Locais
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/desentupidora-curitiba" className="text-slate-300 hover:text-white transition flex items-center gap-1.5 py-1">
                  <ArrowRight size={13} className="text-blue-400" />
                  <span>Central Curitiba</span>
                </Link>
              </li>
              <li>
                <Link to="/cobertura" className="text-slate-300 hover:text-white transition flex items-center gap-1.5 py-1">
                  <ArrowRight size={13} className="text-blue-400" />
                  <span>Cidades e Bairros Atendidos</span>
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-slate-300 hover:text-white transition flex items-center gap-1.5 py-1">
                  <ArrowRight size={13} className="text-blue-400" />
                  <span>Como Funciona o Serviço</span>
                </Link>
              </li>
              <li>
                <Link to="/duvidas" className="text-slate-300 hover:text-white transition flex items-center gap-1.5 py-1">
                  <ArrowRight size={13} className="text-blue-400" />
                  <span>Perguntas Frequentes</span>
                </Link>
              </li>
              <li>
                <Link to="/mapa-do-site" className="text-slate-300 hover:text-white transition flex items-center gap-1.5 py-1">
                  <ArrowRight size={13} className="text-blue-400" />
                  <span>Mapa Completo do Site</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Informações Úteis para Idosos */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              Segurança e Garantia
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Todos os atendimentos contam com equipe identificada, equipamentos mecânicos não destrutivos e emissão de comprovante e garantia técnica do serviço executado.
            </p>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1.5">
              <span className="font-bold text-white block">Atendimento por Equipes Volantes</span>
              <p>Deslocamento sob agendamento e triagem técnica para toda a capital e municípios da RMC.</p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ADP Desentupidora. Todos os direitos reservados.
          </div>
          <div>
            Base Operacional: Rua Luiz Maltaca, 36, CIC, Curitiba - PR.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
