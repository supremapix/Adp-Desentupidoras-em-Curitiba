import React, { useState } from 'react';
import { Shield, Clock, Banknote, PenTool, CheckCircle, Droplets, MapPin, ChevronDown, Phone, Search } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { CITIES, NEIGHBORHOODS, PHONE_LINK, WHATSAPP_LINK } from '../constants';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import VideoCTA from '../components/VideoCTA';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const generateWhatsappLink = (serviceName: string) => {
    const text = `Olá, gostaria de um orçamento para *${serviceName}*. Vi no site da ADP.`;
    return `https://api.whatsapp.com/send?phone=5541985171966&text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="overflow-hidden">
      <EnhancedSEO 
        title="Desentupidora em Curitiba 24 Horas | Visita Grátis | ADP"
        description="Líder em Desentupimento em Curitiba. Chegamos em 30 min! Desentupidora de esgoto, pia, vaso e caça vazamentos. Atendimento 24h, preço justo e garantia."
        keywords="desentupidora curitiba, desentupidora 24 horas, desentupimento curitiba, caça vazamentos curitiba, limpa fossa curitiba, desentupidora centro curitiba, desentupidora preço"
        canonicalPath="/"
      />

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
                <span className="text-sm font-medium">Equipes de plantão em Curitiba agora</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight text-shadow">
                Desentupidora em Curitiba: <span className="text-adp-orange">Chegamos em 30 Minutos</span>
              </h1>
              
              <h2 className="text-xl text-blue-100 font-light max-w-lg">
                Atendimento 24h com garantia por escrito. Resolvemos entupimentos de esgoto, pias e vasos com preço justo e sem quebrar nada.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={PHONE_LINK} className="flex-1 bg-adp-blue hover:bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/50 transition-transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone className="fill-current" size={20} />
                  LIGAR (41) 3345-1194
                </a>
                <a href={WHATSAPP_LINK} className="flex-1 bg-[#25D366] hover:bg-green-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/50 transition-transform hover:scale-105">
                  ORÇAMENTO WHATSAPP
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-300 pt-4">
                <div className="flex items-center gap-1"><Shield size={16} className="text-adp-orange" /> Garantia até 90 Dias</div>
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
           <span className="font-bold text-xl text-gray-400">10.000+ Clientes Satisfeitos</span>
           <div className="font-heading font-bold text-xl text-gray-500">Condomínios</div>
           <div className="font-heading font-bold text-xl text-gray-500">Indústrias</div>
           <div className="font-heading font-bold text-xl text-gray-500">Residências</div>
           <div className="font-heading font-bold text-xl text-gray-500">Comércios</div>
           <div className="flex text-yellow-500">★★★★★ <span className="text-gray-400 ml-2 text-sm font-normal">(4.9/5 Avaliações)</span></div>
        </div>
      </div>

      {/* PROBLEM IDENTIFICATION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Qual problema você precisa resolver?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Identifique o problema abaixo e veja como a ADP Desentupidora resolve imediatamente.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Pia Entupida", desc: "Água parada ou descendo devagar? Resolvemos na hora.", color: "blue", icon: <Droplets /> },
               { title: "Vaso Entupido", desc: "Risco de transbordamento? Atendimento prioritário.", color: "red", icon: <Clock /> },
               { title: "Esgoto Voltando", desc: "Mau cheiro e sujeira? Limpeza completa da rede.", color: "orange", icon: <PenTool /> },
               { title: "Conta Alta", desc: "Sua conta subiu muito? Detectamos o vazamento.", color: "green", icon: <Search /> }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-adp-blue group cursor-pointer" onClick={() => window.location.href = WHATSAPP_LINK}>
                 <div className={`w-14 h-14 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className="text-gray-500 mb-6 text-sm">{item.desc}</p>
                 <span className="text-adp-blue font-bold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform">Solicitar Técnico &rarr;</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* VIDEO CTA SECTION */}
      <VideoCTA location="Curitiba e Região" />

      {/* VALUE PROPOSITION GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/600/600?random=1" 
                alt="Técnico Desentupidora ADP Curitiba" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                loading="lazy"
                width="600"
                height="500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-adp-blue max-w-xs">
                 <p className="font-bold text-gray-800 text-lg mb-1">Chegada em 30min</p>
                 <p className="text-sm text-gray-500">Equipes em todos os bairros de Curitiba para atendimento rápido.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Por que a ADP é a Melhor Desentupidora de Curitiba?</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Clock className="text-adp-blue" />, title: "Rapidez Total", desc: "Chegamos em 30 minutos em qualquer bairro." },
                  { icon: <Shield className="text-adp-blue" />, title: "Garantia Escrita", desc: "Até 90 dias de garantia em todos os serviços." },
                  { icon: <Banknote className="text-adp-blue" />, title: "Preço Justo", desc: "Cobramos o valor correto, sem surpresas no final." },
                  { icon: <CheckCircle className="text-adp-blue" />, title: "Equipe Própria", desc: "Técnicos treinados, uniformizados e identificados." }
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
                <a href={WHATSAPP_LINK} className="inline-block bg-adp-orange text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition">Solicitar Visita Grátis Agora</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES WITH WHATSAPP LINK INTEGRATION */}
      <section className="py-20 bg-gray-900 text-white" id="servicos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-heading font-bold text-white mb-4">Nossos Serviços de Desentupimento</h2>
             <p className="text-gray-400">Soluções completas para casas, apartamentos, comércios e indústrias.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { name: "Desentupimento de Esgoto", price: "90,00" },
               { name: "Limpeza de Caixa d'Água", price: "180,00" },
               { name: "Caça Vazamentos", price: "200,00" },
               { name: "Hidrojateamento", price: "250,00" }
             ].map((srv, i) => (
               <a 
                 key={i} 
                 href={generateWhatsappLink(srv.name)}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-adp-blue transition group relative overflow-hidden transform hover:-translate-y-1"
               >
                 {i === 0 && <div className="absolute top-3 right-3 bg-adp-orange text-xs font-bold px-2 py-1 rounded text-white">MAIS PEDIDO</div>}
                 <h3 className="text-xl font-bold mb-4">{srv.name}</h3>
                 <ul className="text-gray-400 text-sm space-y-2 mb-6">
                   <li>• Visita técnica grátis</li>
                   <li>• Orçamento sem compromisso</li>
                   <li>• Sem quebrar piso</li>
                 </ul>
                 <div className="flex items-end justify-between border-t border-gray-700 pt-4">
                    <div>
                      <span className="text-xs text-gray-500 block">A partir de</span>
                      <span className="text-xl font-bold text-white">R$ {srv.price}</span>
                    </div>
                    <div className="bg-[#25D366] p-2 rounded-full group-hover:scale-110 transition flex items-center gap-1 text-xs px-3 font-bold text-white">
                       <span>Orçamento</span>
                       <ChevronDown className="-rotate-90" size={16} />
                    </div>
                 </div>
               </a>
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
                  { step: "1", title: "Ligue Agora", text: "Atendimento 24h pelo telefone ou WhatsApp." },
                  { step: "2", title: "Visita Grátis", text: "Técnico chega em 30 min no seu endereço." },
                  { step: "3", title: "Orçamento", text: "Avaliamos e passamos o valor na hora." },
                  { step: "4", title: "Problema Resolvido", text: "Execução imediata, limpeza e garantia." }
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
           <h2 className="text-3xl font-bold mb-6">Problema de Entupimento ou Vazamento?</h2>
           <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <p className="text-xl mb-4">⚠️ Vazamentos e entupimentos podem causar danos estruturais e <strong>prejuízos de milhares de reais</strong> se não resolvidos hoje.</p>
              <p className="text-lg">Não espere o problema piorar. Nossa visita é gratuita!</p>
           </div>
           <a href={PHONE_LINK} className="inline-block bg-white text-adp-orange px-10 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition shadow-xl uppercase">
             Pare de Perder Dinheiro - Ligue Agora
           </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Perguntas Frequentes sobre Desentupimento</h2>
          <div className="space-y-4">
            {[
              { q: "Qual o preço de desentupidora em Curitiba?", a: "O preço varia conforme a complexidade do entupimento. Nossa visita técnica é totalmente gratuita em Curitiba e Região. O técnico avalia o problema e passa o orçamento na hora, a partir de R$ 90,00." },
              { q: "Vocês atendem domingos e feriados?", a: "Sim! A ADP Desentupidora funciona 24 horas por dia, 7 dias por semana, inclusive sábados, domingos e feriados, sem taxa extra de visita." },
              { q: "Aceitam cartão de crédito?", a: "Sim, aceitamos todos os cartões de crédito, débito, PIX e dinheiro. Parcelamos serviços de maior valor para facilitar para você." },
              { q: "O serviço tem garantia?", a: "Sim, oferecemos garantia de 30 a 90 dias por escrito. Se o entupimento voltar dentro do prazo de garantia, refazemos o serviço sem custo." },
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
           <h2 className="text-2xl font-bold mb-8 text-center">Desentupidora em Todos os Bairros de Curitiba e Região</h2>
           
           <div className="mb-8">
             <h3 className="font-bold text-adp-blue mb-4 border-b pb-2">Atendimento na Região Metropolitana</h3>
             <div className="flex flex-wrap gap-2">
               {CITIES.map((city) => (
                 <Link 
                    key={city} 
                    to={`/local/cidade/${city.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c')}`}
                    className="text-xs bg-gray-100 hover:bg-adp-blue hover:text-white px-3 py-1 rounded transition-colors"
                    title={`Desentupidora em ${city}`}
                 >
                   Desentupidora em {city}
                 </Link>
               ))}
             </div>
           </div>

           <div>
             <h3 className="font-bold text-adp-blue mb-4 border-b pb-2">Atendimento nos Bairros de Curitiba</h3>
             <div className="h-64 overflow-y-auto pr-2 custom-scrollbar">
               <div className="flex flex-wrap gap-2">
                 {NEIGHBORHOODS.map((neighborhood) => (
                   <Link 
                      key={neighborhood} 
                      to={`/local/bairro/${neighborhood.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c')}`}
                      className="text-xs bg-gray-50 text-gray-600 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
                      title={`Desentupidora no bairro ${neighborhood}`}
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