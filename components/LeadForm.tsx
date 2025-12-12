import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

const LeadForm = () => {
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
    // Construct WhatsApp Message
    const text = `*Novo Pedido via Site* %0A-----------------------%0A👤 *Nome:* ${formData.name}%0A📱 *Telefone:* ${formData.phone}%0A🏠 *Bairro:* ${formData.location}%0A⚠️ *Problema:* ${formData.problem}%0A⏰ *Urgência:* ${formData.urgency}`;
    window.location.href = `https://wa.me/5541985171966?text=${text}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-t-4 border-adp-orange max-w-lg mx-auto w-full relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-adp-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        RESPOSTA EM 2 MIN
      </div>
      
      <h3 className="text-2xl font-heading font-bold text-adp-blue mb-2 text-center">
        Orçamento Rápido
      </h3>
      <p className="text-gray-500 text-center text-sm mb-6">Preencha e receba prioridade total.</p>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-3 animate-fade-in">
            <p className="font-semibold text-gray-700">Qual o problema?</p>
            <div className="grid grid-cols-2 gap-3">
              {['Entupimento', 'Vazamento', 'Limpeza Caixa', 'Outro'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleNext('problem', opt)}
                  className="p-3 border-2 border-gray-100 rounded-xl hover:border-adp-blue hover:bg-blue-50 transition-colors text-sm font-medium text-gray-700"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
             <p className="font-semibold text-gray-700">Onde você está?</p>
             <input 
               type="text" 
               placeholder="Digite seu Bairro"
               className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-adp-blue outline-none"
               onChange={(e) => setFormData({...formData, location: e.target.value})}
             />
             <button
               type="button"
               disabled={!formData.location}
               onClick={() => setStep(3)}
               className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition disabled:opacity-50"
             >
               Próximo
             </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <p className="font-semibold text-gray-700">Qual a urgência?</p>
            <button
               type="button"
               onClick={() => handleNext('urgency', 'IMEDIATA')}
               className="w-full p-4 border-2 border-adp-red bg-red-50 rounded-xl flex items-center justify-center gap-2 text-adp-red font-bold hover:bg-red-100 transition"
            >
              <AlertTriangle size={20} />
              PRECISO AGORA (Emergência)
            </button>
            <button
               type="button"
               onClick={() => handleNext('urgency', 'Agendamento')}
               className="w-full p-4 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition"
            >
              Posso agendar para depois
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 animate-fade-in">
            <p className="font-semibold text-gray-700">Para onde ligamos?</p>
            <input 
              required
              type="text" 
              placeholder="Seu Nome"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-adp-blue"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              required
              type="tel" 
              placeholder="Seu Telefone / WhatsApp"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-adp-blue"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <button
              type="submit"
              className="w-full bg-adp-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              RECEBER LIGAÇÃO EM 2 MIN
            </button>
            <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
              <CheckCircle size={12} /> Seus dados estão 100% seguros
            </p>
          </div>
        )}
      </form>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className={`h-1.5 rounded-full transition-all ${s <= step ? 'w-8 bg-adp-blue' : 'w-2 bg-gray-200'}`} />
        ))}
      </div>
    </div>
  );
};

export default LeadForm;