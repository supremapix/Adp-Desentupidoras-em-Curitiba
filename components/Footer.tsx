import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, HelpCircle, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, ArrowUp, Heart } from 'lucide-react';
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-200 border-t-[6px] border-[#c4161c] pb-32 lg:pb-8">
      
      {/* 1. Seção Especial de Navegação Acolhedora para Idosos e Aposentados */}
      <div className="bg-slate-850 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8 bg-[#24211d]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="items-center gap-2 text-blue-300 kicker font-semibold">
                  <HeartHandshake size={15} />
                  <span>Atendimento Humanizado · Idosos e Aposentados</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Precisa de ajuda com encanamento? Fale com nossa equipe com calma
                </h3>
                
                <p className="text-slate-300 text-base leading-relaxed font-light">
                  Sabemos que um vazamento ou cano entupido gera preocupação. Nossos atendentes conversam com você com paciência, explicam como é feita a visita técnica e garantem que o valor seja aprovado por escrito antes de qualquer trabalho.
                </p>

                {/* 4 Passos Claros e Objetivos */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
                  <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">1. Você liga sem pressa</strong>
                      Atendentes reais, sem menus eletrônicos confusos.
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">2. Explica o problema</strong>
                      Pia de cozinha, ralo do banheiro, vaso ou esgoto.
                    </div>
                  </div>

                  <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">3. Orçamento no local</strong>
                      O técnico avalia e informa o valor antes de começar.
                    </div>
                  </div>

                  <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">4. Serviço sem quebra</strong>
                      Equipamentos rotativos e garantia técnica por escrito.
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação Imediata com Letra Grande para Idosos */}
              <div className="lg:col-span-5 flex flex-col gap-3.5">
                <a 
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-3.5 bg-blue-600 hover:bg-blue-500 text-white p-5 rounded-2xl shadow-lg transition active:scale-98 text-center group"
                  title={`Ligar agora para ${PHONE_DISPLAY}`}
                >
                  <Phone size={26} fill="currentColor" className="text-white flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-blue-100 block text-sm font-semibold">Toque para Ligar por Telefone</span>
                    <span className="text-2xl sm:text-3xl font-black text-white leading-tight">{PHONE_DISPLAY}</span>
                  </div>
                </a>

                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3.5 bg-emerald-600 hover:bg-emerald-500 text-white p-4.5 rounded-2xl shadow-lg transition active:scale-98 text-center"
                  title={`Mandar mensagem no WhatsApp: ${WHATSAPP_DISPLAY}`}
                >
                  <MessageCircle size={24} className="text-white flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-emerald-100 block text-sm font-semibold">Falar pelo WhatsApp</span>
                    <span className="text-lg sm:text-xl font-bold text-white leading-tight">{WHATSAPP_DISPLAY}</span>
                  </div>
                </a>

                <div className="text-center text-xs text-slate-400 pt-1">
                  Atendimento direto no CIC com equipes volantes para toda Curitiba e RMC.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 2. Navegação Completa e Dados Corporativos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Coluna 1: Empresa e Base Física */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://img.supremasite.com.br/adp/logomarca-adp-encanadores-cic-em-curitiba.webp" alt="Logomarca ADP Encanadores - Desentupidora no CIC em Curitiba" width="64" height="64" loading="lazy" decoding="async" className="w-16 h-16 object-contain bg-white rounded-full p-1 shrink-0" />
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

          {/* Coluna 2: Serviços Especializados */}
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

          {/* Coluna 3: Navegação e Regiões */}
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
                  <span>Perguntas Frequentes (FAQ)</span>
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

          {/* Coluna 4: Segurança, Garantia e Acesso Rápido */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              Garantia e Segurança
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Todos os atendimentos contam com equipe identificada, equipamentos mecânicos não destrutivos e emissão de comprovante e garantia técnica do serviço executado.
            </p>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1.5">
              <span className="font-bold text-white block">Atendimento por Equipes Volantes</span>
              <p>Deslocamento ágil sob consulta prévia de rota para toda a capital e municípios da RMC.</p>
            </div>
            
            {/* Botão de Retornar ao Topo para Idosos */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition border border-slate-700"
              >
                <ArrowUp size={15} />
                <span>Voltar ao Topo da Página</span>
              </button>
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
      <SupremaCredit />
    </footer>
  );
};

// Crédito do desenvolvedor — exibido no rodapé de todas as páginas (paleta ADP: vermelho + amarelo)
export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-white/10 flex justify-center items-center">
      <div className="bg-black/40 border border-white/10 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_15px_rgba(196,22,28,0.25)]">
        <p className="text-stone-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span>
          <Heart
            size={14}
            aria-hidden="true"
            className="text-red-500 fill-red-500 motion-safe:animate-[pulse_1.5s_infinite] shrink-0 drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]"
          />
          <span className="opacity-90">por</span>
          <a
            id="developer-suprema-link"
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:outline-offset-2"
          >
            Suprema Sites Express
            <img
              src="https://img.supremamidia.com/suprema-img.png"
              alt="Suprema"
              width="18"
              height="18"
              loading="lazy"
              className="h-[18px] w-auto inline select-none shrink-0 drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
