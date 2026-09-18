import React, { useEffect, useState } from 'react';
// Import Link to resolve the error in the component
import { Link } from 'react-router-dom';
import { Shield, Clock, Phone, MessageCircle, CheckCircle, ChevronDown, Wrench, Droplets, MapPin, Star, Award, Zap } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import LeadForm from '../components/LeadForm';
import VideoCTA from '../components/VideoCTA';

const CuritibaSEOPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Como solicitar um orçamento de desentupimento em Curitiba?",
      a: "Na ADP, você pode solicitar uma avaliação técnica e orçamento através de nossos canais de contato (telefone ou WhatsApp). Nossos técnicos avaliam a situação no local para definir o procedimento adequado."
    },
    {
      q: "Quais serviços de desentupimento são realizados em Curitiba?",
      a: "A ADP Desentupidora atende residências, condomínios e empresas em Curitiba e RMC, prestando serviços de desentupimento de esgoto, pias, ralos, vasos, além de hidrojateamento e vídeo inspeção."
    },
    {
      q: "Como é feito o atendimento em Curitiba e Região?",
      a: "Prestamos atendimento técnico a partir de nossa central localizada no CIC em Curitiba, conforme agendamento e disponibilidade da equipe."
    },
    {
      q: "Há cobrança de taxa de visita?",
      a: "Consulte nossas condições comerciais vigentes para avaliação técnica e orçamento através dos canais de atendimento."
    },
    {
      q: "Os serviços possuem garantia?",
      a: "Sim, os serviços executados possuem garantia técnica conforme as normas aplicáveis e termo específico fornecido na execução."
    }
  ];

  return (
    <div className="bg-white">
      <EnhancedSEO 
        title="Desentupidora em Curitiba | ADP Serviços"
        description="Serviços de desentupimento em Curitiba. Desentupimento de esgoto, pias, vasos e hidrojateamento. Solicite um orçamento!"
        keywords="desentupidora em curitiba, desentupimento em curitiba, desentupidora de esgoto curitiba"
        canonicalPath="/desentupidora-curitiba"
      />

      {/* Hero Master SEO */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden border-b-8 border-adp-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-adp-blue via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-adp-orange/20 text-adp-orange px-6 py-2 rounded-full border border-adp-orange/30 font-black uppercase tracking-widest text-sm">
              <Star size={16} fill="currentColor" /> Atendimento Técnico em Curitiba
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight">
              A Sua <span className="text-adp-blue">Desentupidora em Curitiba</span> de Confiança
            </h1>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">
              Atendimento técnico especializado para residências, condomínios e empresas em Curitiba e Região Metropolitana.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a href={PHONE_LINK} className="bg-adp-blue hover:bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                <Phone size={28} fill="currentColor" /> {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_LINK} className="bg-adp-green hover:bg-green-600 text-white px-12 py-5 rounded-2xl font-black text-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                <MessageCircle size={28} /> ORÇAMENTO VIA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-black text-adp-blue mb-1 group-hover:scale-110 transition-transform">12+ Anos</div>
            <div className="text-gray-500 font-bold text-sm uppercase">Experiência Local</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-black text-adp-blue mb-1 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-gray-500 font-bold text-sm uppercase">Garantia Técnica</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-black text-adp-blue mb-1 group-hover:scale-110 transition-transform">30 Min</div>
            <div className="text-gray-500 font-bold text-sm uppercase">Chegada Rápida</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-black text-adp-blue mb-1 group-hover:scale-110 transition-transform">Visita</div>
            <div className="text-gray-500 font-bold text-sm uppercase">Totalmente Grátis</div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            
            {/* SEO Content Section 1 */}
            <article className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-4xl font-black text-gray-900 mb-8 border-l-8 border-adp-orange pl-6">
                Por que escolher a ADP como sua Desentupidora em Curitiba?
              </h2>
              <p className="text-xl leading-relaxed mb-6">
                Encontrar uma <strong>desentupidora em Curitiba</strong> que seja honesta, rápida e tenha preço justo nem sempre é fácil. A ADP Serviços nasceu para resolver essa dor. Com base própria em Curitiba, atendemos desde pequenos entupimentos domésticos até grandes limpezas industriais com hidrojateamento.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                  <Award className="text-adp-blue mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">Tecnologia de Ponta</h3>
                  <p className="text-sm">Utilizamos máquinas Roto-Rooter K-500 e K-50 que removem a obstrução sem quebrar pisos ou paredes. Limpeza completa e segura.</p>
                </div>
                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                  <Zap className="text-adp-orange mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">Rapidez no Atendimento</h3>
                  <p className="text-sm">Sabemos que um esgoto voltando é uma emergência. Por isso, temos técnicos em todos os bairros de Curitiba agora mesmo.</p>
                </div>
              </div>
            </article>

            {/* Comprehensive FAQ Section */}
            <section className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-200">
              <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">
                Dúvidas Frequentes: Desentupidora em Curitiba
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-left px-8 py-6 font-bold text-gray-800 flex justify-between items-center transition-colors hover:bg-blue-50/50"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown className={`transition-transform duration-300 text-adp-blue ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8 text-gray-600 animate-fade-in-up">
                        <p className="leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <VideoCTA location="Curitiba" />

            {/* Bairros Section */}
            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Onde atendemos em Curitiba?</h2>
              <p className="text-gray-600 mb-8">Nossa <strong>desentupidora curitibana</strong> cobre 100% dos bairros. Confira algumas regiões com atendimento prioritário 30min:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Batel', 'Água Verde', 'Centro', 'Portão', 'CIC', 'Santa Felicidade', 'Boqueirão', 'Sítio Cercado', 'Uberaba', 'Bacacheri', 'Pinheirinho', 'Novo Mundo'].map(b => (
                  <div key={b} className="flex items-center gap-2 bg-white p-4 rounded-xl border border-gray-100 shadow-sm font-bold text-gray-700">
                    <MapPin size={16} className="text-adp-blue" /> {b}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/cobertura" className="text-adp-blue font-black hover:underline">Ver todos os bairros e cidades &rarr;</Link>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-adp-blue text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-3xl font-black mb-4 relative z-10">Precisa Agora?</h3>
                <p className="mb-8 opacity-90 relative z-10 leading-relaxed">Não deixe o problema piorar. Visita grátis e orçamento imediato em Curitiba.</p>
                <a href={PHONE_LINK} className="block w-full bg-white text-adp-blue py-5 rounded-2xl font-black text-2xl text-center hover:bg-gray-100 transition shadow-xl relative z-10">
                  {PHONE_DISPLAY}
                </a>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm opacity-80">
                  <Clock size={16} /> Atendimento 24h
                </div>
              </div>
              <LeadForm />
            </div>
          </aside>
        </div>
      </main>

      {/* SEO Long Tail Content */}
      <section className="bg-gray-900 text-white py-20 border-t-8 border-adp-orange">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-10 italic">O Diferencial da ADP em Curitiba</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-adp-blue rounded-2xl flex items-center justify-center mx-auto"><Droplets size={32} /></div>
              <h4 className="text-xl font-bold">Sem Quebra-Quebra</h4>
              <p className="text-gray-400 text-sm">Tecnologia que localiza e resolve o problema sem danificar sua estrutura hidráulica ou acabamento.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-adp-blue rounded-2xl flex items-center justify-center mx-auto"><Shield size={32} /></div>
              <h4 className="text-xl font-bold">Transparência Total</h4>
              <p className="text-gray-400 text-sm">O preço é passado antes da execução. Você só paga se concordar com o valor técnico avaliado.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-adp-blue rounded-2xl flex items-center justify-center mx-auto"><MapPin size={32} /></div>
              <h4 className="text-xl font-bold">Frota Local</h4>
              <p className="text-gray-400 text-sm">Empresa com base registrada em Curitiba. Não somos agenciadores, somos executores diretos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuritibaSEOPage;