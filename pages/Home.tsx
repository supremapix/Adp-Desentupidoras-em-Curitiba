import React, { useState } from 'react';
import { Shield, Clock, Banknote, PenTool, CheckCircle, Droplets, MapPin, ChevronDown, Phone, Search } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { CITIES, NEIGHBORHOODS, PHONE_LINK, WHATSAPP_LINK } from '../constants';
import { Link } from 'react-router-dom';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 opacity-10 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-adp-orange opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Técnicos disponíveis agora em Curitiba</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight text-shadow">
                Entupimento Resolvido em <span className="text-adp-orange">30 Minutos</span> ou Menos
              </h1>
              
              <p className="text-xl text-blue-100 font-light max-w-lg">
                Atendimento 24h com garantia por escrito. Chegamos rápido, resolvemos limpo e cobramos um preço justo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={PHONE_LINK} className="flex-1 bg-adp-blue hover:bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/50 transition-transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone className="fill-current" size={20} />
                  LIGAR (41) 3345-1194
                </a>
                <a href={WHATSAPP_LINK} className="flex-1 bg-[#25D366] hover:bg-green-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/50 transition-transform hover:scale-105">
                  CHAMAR WHATSAPP
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-300 pt-4">
                <div className="flex items-center gap-1"><Shield size={16} className="text-adp-orange" /> Garantia 90 Dias</div>
                <div className="flex items-center gap-1"><Clock size={16} className="text-adp-orange" /> Plantão 24h</div>
                <div className="flex items-center gap-1"><MapPin size={16} className="text-adp-orange" /> Curitiba e Região</div>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
               <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="bg-white py-8 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <span className="font-bold text-xl text-gray-400">10.000+ Atendimentos</span>
           {/* Placeholder Logos */}
           <div className="font-heading font-bold text-xl text-gray-500">Condomínios</div>
           <div className="font-heading font-bold text-xl text-gray-500">Indústrias</div>
           <div className="font-heading font-bold text-xl text-gray-500">Residências</div>
           <div className="font-heading font-bold text-xl text-gray-500">Comércios</div>
           <div className="flex text-yellow-500">★★★★★ <span className="text-gray-400 ml-2 text-sm font-normal">(4.9/5 Google)</span></div>
        </div>
      </div>

      {/* PROBLEM IDENTIFICATION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Qual é a sua Emergência?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Identifique o problema abaixo e veja como podemos resolver imediatamente.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Pia Entupida", desc: "Água não desce ou volta cheiro ruim?", color: "blue", icon: <Droplets /> },
               { title: "Vaso Transbordando", desc: "Risco de sujeira e contaminação.", color: "red", icon: <Clock /> },
               { title: "Caixa de Gordura", desc: "Cheiro forte e retorno no ralo.", color: "orange", icon: <PenTool /> },
               { title: "Conta Alta", desc: "Possível vazamento oculto na rede.", color: "green", icon: <Search /> }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-adp-blue group cursor-pointer">
                 <div className={`w-14 h-14 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className="text-gray-500 mb-6 text-sm">{item.desc}</p>
                 <span className="text-adp-blue font-bold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform">Resolver Agora &rarr;</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/600/600?random=1" 
                alt="Técnico Desentupidora ADP" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-adp-blue max-w-xs">
                 <p className="font-bold text-gray-800 text-lg mb-1">Chegada em 30min</p>
                 <p className="text-sm text-gray-500">Temos equipes espalhadas estrategicamente pelos bairros.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Por que Curitiba confia na ADP?</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Clock className="text-adp-blue" />, title: "Rapidez", desc: "Atendimento imediato, sem enrolação." },
                  { icon: <Shield className="text-adp-blue" />, title: "Garantia", desc: "Até 90 dias de garantia em contrato." },
                  { icon: <Banknote className="text-adp-blue" />, title: "Preço Justo", desc: "Orçamento prévio sem surpresas." },
                  { icon: <CheckCircle className="text-adp-blue" />, title: "Técnicos", desc: "Profissionais uniformizados e treinados." }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-blue-50 p-3 rounded-lg h-fit">{feat.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feat.title}</h4>
                      <p className="text-gray-600 text-sm">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a href={WHATSAPP_LINK} className="inline-block bg-adp-orange text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition">Solicitar Visita Grátis</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES WITH PRICING INDICATOR */}
      <section className="py-20 bg-gray-900 text-white" id="servicos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-heading font-bold text-white mb-4">Nossos Serviços Especializados</h2>
             <p className="text-gray-400">Soluções completas para residencial, comercial e industrial.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { name: "Desentupimento de Esgoto", price: "90,00" },
               { name: "Limpeza de Caixa d'Água", price: "180,00" },
               { name: "Caça Vazamentos", price: "200,00" },
               { name: "Hidrojateamento", price: "250,00" }
             ].map((srv, i) => (
               <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-adp-blue transition group relative overflow-hidden">
                 {i === 0 && <div className="absolute top-3 right-3 bg-adp-orange text-xs font-bold px-2 py-1 rounded text-white">MAIS PEDIDO</div>}
                 <h3 className="text-xl font-bold mb-4">{srv.name}</h3>
                 <ul className="text-gray-400 text-sm space-y-2 mb-6">
                   <li>• Visita técnica grátis</li>
                   <li>• Equipamento moderno</li>
                   <li>• Sem quebrar piso</li>
                 </ul>
                 <div className="flex items-end justify-between border-t border-gray-700 pt-4">
                    <div>
                      <span className="text-xs text-gray-500 block">A partir de</span>
                      <span className="text-xl font-bold text-white">R$ {srv.price}</span>
                    </div>
                    <button className="bg-adp-blue p-2 rounded-full group-hover:bg-white group-hover:text-adp-blue transition">
                      <ChevronDown className="-rotate-90" size={20} />
                    </button>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold">Como Funciona o Atendimento</h2>
           </div>
           <div className="relative">
             {/* Line */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "1", title: "Contato", text: "Você liga ou manda WhatsApp." },
                  { step: "2", title: "Visita", text: "Técnico chega em 30 min." },
                  { step: "3", title: "Orçamento", text: "Avaliação e preço na hora." },
                  { step: "4", title: "Solução", text: "Serviço feito e garantia." }
                ].map((s, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center md:text-left">
                    <div className="w-12 h-12 bg-adp-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto md:mx-0">
                      {s.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                    <p className="text-gray-500 text-sm">{s.text}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* URGENCY CALCULATOR SECTION */}
      <section className="py-16 bg-adp-orange text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-6">Quanto tempo você vai esperar com este problema?</h2>
           <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <p className="text-xl mb-4">⚠️ A cada hora, um vazamento simples pode desperdiçar <strong>até 50 litros de água</strong>.</p>
              <p className="text-lg">Isso pode significar <strong>R$ 300,00 a mais</strong> na sua conta no fim do mês.</p>
           </div>
           <a href={PHONE_LINK} className="inline-block bg-white text-adp-orange px-10 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition shadow-xl uppercase">
             Pare de Perder Dinheiro - Ligue Agora
           </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Quanto custa o serviço?", a: "O valor depende da complexidade. Nossa visita é grátis e o orçamento é passado na hora, sem compromisso, a partir de R$ 90,00." },
              { q: "Vocês atendem de madrugada?", a: "Sim! Temos plantão 24 horas todos os dias, inclusive domingos e feriados." },
              { q: "Aceitam cartão de crédito?", a: "Aceitamos todos os cartões, PIX e dinheiro. Parcelamos serviços maiores." },
              { q: "Fazem sujeira?", a: "Não. Utilizamos equipamentos modernos de hidrojateamento e sucção que resolvem sem quebra-quebra." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 font-bold text-gray-800 flex justify-between items-center focus:outline-none"
                >
                  {item.q}
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 text-gray-600 bg-gray-50 transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE LINKS (SEO) */}
      <section className="py-16 bg-white border-t border-gray-200" id="locais">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-2xl font-bold mb-8 text-center">Atendimento em toda Curitiba e Região</h2>
           
           <div className="mb-8">
             <h3 className="font-bold text-adp-blue mb-4 border-b pb-2">Cidades da Região Metropolitana</h3>
             <div className="flex flex-wrap gap-2">
               {CITIES.map((city) => (
                 <Link 
                    key={city} 
                    to={`/local/cidade/${city.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c')}`}
                    className="text-xs bg-gray-100 hover:bg-adp-blue hover:text-white px-3 py-1 rounded transition-colors"
                 >
                   Desentupidora em {city}
                 </Link>
               ))}
             </div>
           </div>

           <div>
             <h3 className="font-bold text-adp-blue mb-4 border-b pb-2">Bairros de Curitiba</h3>
             <div className="h-64 overflow-y-auto pr-2 custom-scrollbar">
               <div className="flex flex-wrap gap-2">
                 {NEIGHBORHOODS.map((neighborhood) => (
                   <Link 
                      key={neighborhood} 
                      to={`/local/bairro/${neighborhood.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c')}`}
                      className="text-xs bg-gray-50 text-gray-600 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
                   >
                     {neighborhood}
                   </Link>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;