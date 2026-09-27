import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_DISPLAY } from '../constants';

const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    problem: '',
    location: '',
    urgency: '',
    name: '',
    phone: ''
  });

  const handleNext = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Novo Pedido via Site* %0A-----------------------%0A👤 *Nome:* ${formData.name}%0A📱 *Telefone:* ${formData.phone}%0A🏠 *Bairro:* ${formData.location}%0A⚠️ *Problema:* ${formData.problem}%0A⏰ *Urgência:* ${formData.urgency}`;
    window.location.href = `https://wa.me/5541985171966?text=${text}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-200/90 max-w-lg mx-auto w-full">
      <div className="text-center mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
          Orçamento Transparente
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Solicitar Avaliação Técnica
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Preencha abaixo para receber suporte técnico no seu bairro.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <p className="font-semibold text-sm sm:text-base text-slate-800">
              1. Qual o tipo de problema no encanamento?
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                'Esgoto / Caixa', 
                'Pia / Ralo', 
                'Vaso Sanitário', 
                'Caça Vazamento'
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleNext('problem', opt)}
                  className="p-3.5 border border-slate-200 rounded-xl hover:border-blue-600 hover:bg-blue-50/60 transition-colors text-sm font-semibold text-slate-700 text-left flex items-center justify-between"
                >
                  <span>{opt}</span>
                  <ArrowRight size={14} className="text-slate-400" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="font-semibold text-sm sm:text-base text-slate-800">
              2. Em qual bairro ou cidade fica o imóvel?
            </p>
            <input 
              type="text" 
              placeholder="Ex: Batel, Portão, CIC, Araucária..."
              className="w-full p-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-900 text-sm sm:text-base"
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
              >
                Voltar
              </button>
              <button
                type="button"
                disabled={!formData.location.trim()}
                onClick={() => setStep(3)}
                className="w-2/3 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold text-sm transition disabled:opacity-40"
              >
                Avançar
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="font-semibold text-sm sm:text-base text-slate-800">
              3. Qual a urgência do atendimento?
            </p>
            <button
              type="button"
              onClick={() => handleNext('urgency', 'EMERGENCIAL')}
              className="w-full p-4 border border-red-200 bg-red-50/70 rounded-xl flex items-center justify-center gap-2.5 text-red-700 font-bold hover:bg-red-100 transition text-sm"
            >
              <AlertTriangle size={18} />
              <span>Preciso com Urgência</span>
            </button>
            <button
              type="button"
              onClick={() => handleNext('urgency', 'Programado')}
              className="w-full p-3.5 border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition text-sm text-center"
            >
              Desejo agendar com calma
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-2 text-slate-400 text-xs hover:text-slate-600 text-center"
            >
              Voltar
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3.5">
            <p className="font-semibold text-sm sm:text-base text-slate-800">
              4. Seus dados de contato para retorno:
            </p>
            <input 
              required
              type="text" 
              placeholder="Seu Nome Completo"
              className="w-full p-3.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base text-slate-900"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              autoFocus
            />
            <input 
              required
              type="tel" 
              placeholder="Seu Telefone ou WhatsApp com DDD"
              className="w-full p-3.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base text-slate-900"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-base transition shadow-md flex items-center justify-center gap-2 active:scale-98"
            >
              <Send size={18} />
              <span>Enviar Pedido de Atendimento</span>
            </button>
            <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Seus dados são protegidos e usados apenas para o atendimento.</span>
            </p>
          </div>
        )}
      </form>

      {/* Indicador de Passos Simples */}
      <div className="flex justify-center gap-2 mt-5">
        {[1, 2, 3, 4].map(s => (
          <div 
            key={s} 
            className={`h-1.5 rounded-full transition-all ${s <= step ? 'w-6 bg-blue-700' : 'w-2 bg-slate-200'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default LeadForm;
