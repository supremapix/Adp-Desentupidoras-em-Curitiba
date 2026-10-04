import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, MapPin, ChevronDown, Wrench, Truck, ClipboardCheck } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { 
  PHONE_LINK, 
  WHATSAPP_LINK, 
  PHONE_DISPLAY, 
  SERVICES,
  COMPANY_ADDRESS,
  COMPANY_NEIGHBORHOOD
} from '../constants';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { BlogArticlesSection } from '../components/BlogCover';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Mapeamento semântico dos serviços para as capas 16:9 com logo overlay
  const serviceCovers: Record<string, { image: string; alt: string }> = {
    "desentupimento-de-esgoto": {
      image: "https://img.supremasite.com.br/adp/blog-chegada-40-minutos-desentupidora-rapida-curitiba-16-92.jpg",
      alt: "Mau cheiro no esgoto em Curitiba - 5 causas comuns e solução ADP"
    },
    "limpeza-de-fossa": {
      image: "https://img.supremasite.com.br/adp/blog-chegada-40-minutos-desentupidora-rapida-curitiba-16-94.jpg",
      alt: "Manutenção preventiva hidráulica em condomínios na RMC Curitiba - ADP"
    },
    "caca-vazamentos": {
      image: "https://img.supremasite.com.br/adp/blog-caca-vazamento-ultrassom-curitiba-16-9.jpg",
      alt: "Caça vazamento com ultrassom em Curitiba - detector eletrônico ADP Encanadores"
    },
    "hidrojateamento": {
      image: "https://img.supremasite.com.br/adp/blog-hidrojateamento-desentupimento-sem-quebrar-16-9.jpg",
      alt: "Desentupimento sem quebrar com hidrojateamento em Curitiba - tecnologia ADP"
    },
    "limpeza-de-caixa-dagua": {
      image: "https://img.supremasite.com.br/adp/blog-chegada-40-minutos-desentupidora-rapida-curitiba-16-93.jpg",
      alt: "Certificado de limpeza de caixa d'água em condomínios Curitiba - ADP Desentupidora"
    },
    "video-inspecao": {
      image: "https://img.supremasite.com.br/adp/blog-chegada-40-minutos-desentupidora-rapida-curitiba-16-91.jpg",
      alt: "Por que escolher a ADP Desentupidora - diferenciais hidráulicos no CIC Curitiba"
    }
  };

  const homeFaqs = [
    {
      q: "Como é calculado o orçamento para desentupimento em Curitiba?",
      a: "O valor é definido após avaliação técnica presencial da tubulação, considerando a extensão do bloqueio, o diâmetro da tubulação e o maquinário necessário (máquina rotativa de cabos flexíveis ou hidrojato). O orçamento detalhado é apresentado para aprovação antes de iniciar o serviço."
    },
    {
      q: "É necessário quebrar pisos ou paredes para desentupir?",
      a: "Na ampla maioria dos casos, não. Nossos técnicos utilizam cabos flexíveis espirais e ponteiras desincrustadoras que percorrem o interior das curvas da tubulação diretamente por ralos ou caixas de inspeção, preservando cerâmicas e alvenaria conforme a avaliação no local."
    },
    {
      q: "Qual a área de atendimento da ADP Desentupidora?",
      a: "Atendemos os 74 bairros oficiais de Curitiba e os municípios da Região Metropolitana, incluindo São José dos Pinhais, Araucária, Colombo, Pinhais, Fazenda Rio Grande e Campo Largo, com equipes técnicas volantes."
    },
    {
      q: "Como é confirmada a conclusão do serviço?",
      a: "O serviço é testado na presença do cliente ao término do procedimento para comprovar o escoamento normal da água, com orientações técnicas e registro do serviço na ordem de atendimento."
    }
  ];

  const sintomas = [
    { texto: 'A pia ou o ralo está escoando devagar', slug: 'desentupimento-de-esgoto' },
    { texto: 'O vaso sanitário entupiu ou está transbordando', slug: 'desentupimento-de-esgoto' },
    { texto: 'Tem mau cheiro vindo do ralo ou da caixa de gordura', slug: 'desentupimento-de-esgoto' },
    { texto: 'A conta de água subiu e você não acha o vazamento', slug: 'caca-vazamentos' },
    { texto: 'A fossa está cheia ou voltando pelo quintal', slug: 'limpeza-de-fossa' },
    { texto: 'A caixa d’água precisa de limpeza', slug: 'limpeza-de-caixa-dagua' },
  ];

  const passos = [
    { icon: MessageCircle, titulo: 'Você chama', texto: 'Mande uma mensagem no WhatsApp ou ligue. Conte o que está acontecendo, com calma — se puder, envie uma foto.' },
    { icon: Truck, titulo: 'A gente vai até aí', texto: 'Um técnico sai da nossa base no CIC e avalia o problema no local, conforme a agenda do dia.' },
    { icon: ClipboardCheck, titulo: 'Você aprova o valor', texto: 'O preço é informado antes de começar. Só executamos o serviço depois da sua aprovação.' },
  ];

  return (
    <div className="bg-[#faf6ef] text-slate-900">
      <EnhancedSEO 
        title="Desentupidora em Curitiba | ADP Serviços Especializados"
        description="Serviços de desentupimento em Curitiba e Região Metropolitana. Desobstrução técnica de esgoto, pias, ralos, vasos e caça vazamentos com diagnóstico preciso."
        keywords="desentupidora curitiba, desentupimento curitiba, desentupidora de esgoto, caca vazamentos curitiba, limpa fossa curitiba"
        canonicalPath="/"
        includeLocalBusiness={true}
      />

      {/* ABERTURA */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
              <span className="inline-block w-8 h-[3px] bg-[#c4161c]" aria-hidden="true" />
              ADP Encanadores · {COMPANY_NEIGHBORHOOD}, Curitiba
            </p>
            <h1 className="mt-4 font-display font-extrabold uppercase leading-[0.95] text-[44px] sm:text-6xl lg:text-7xl text-slate-900">
              Desentupidora em Curitiba
              <span className="block text-[#c4161c]">Entupiu? A gente vai até você.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 max-w-xl">
              Desentupimento de pias, ralos, vasos e esgoto, limpeza de fossa e caça-vazamento em Curitiba e Região Metropolitana. O técnico avalia no local e passa o valor antes de começar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 min-h-[58px] px-7 rounded-lg bg-[#1f9d55] hover:bg-[#178246] text-white text-lg font-bold shadow-[0_4px_0_#11663a] active:translate-y-[2px] active:shadow-[0_2px_0_#11663a] transition">
                <MessageCircle size={22} aria-hidden="true" /> Chamar no WhatsApp
              </a>
              <a href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-3 min-h-[58px] px-7 rounded-lg border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-lg font-bold transition">
                <Phone size={20} aria-hidden="true" /> Ligar {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-[12px_12px_0_#c4161c]">
              <img src="https://img.supremasite.com.br/adp/adp-caminhao.webp" alt="Caminhão de atendimento da ADP Desentupidora em Curitiba"
                width="2048" height="1152" loading="eager" {...({ fetchpriority: "high" } as any)} decoding="async"
                className="w-full h-auto aspect-[16/10] object-cover" />
            </div>
            <div className="absolute -bottom-5 left-4 sm:left-8 rotate-[-3deg] bg-[#ffc629] text-slate-900 font-display font-extrabold uppercase text-lg sm:text-xl px-5 py-2 rounded shadow-md">
              Base no CIC · Curitiba
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DE INFORMAÇÕES */}
      <div className="faixa-obra h-3" aria-hidden="true" />
      <section className="bg-slate-900 text-white">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-[15px] sm:text-base font-semibold">
          <li className="flex items-center gap-2"><MapPin size={18} className="text-[#ffc629] shrink-0" aria-hidden="true" /> {COMPANY_ADDRESS}</li>
          <li className="flex items-center gap-2"><Wrench size={18} className="text-[#ffc629] shrink-0" aria-hidden="true" /> Avaliação no local</li>
          <li className="flex items-center gap-2"><ClipboardCheck size={18} className="text-[#ffc629] shrink-0" aria-hidden="true" /> Valor antes de começar</li>
          <li className="flex items-center gap-2"><Truck size={18} className="text-[#ffc629] shrink-0" aria-hidden="true" /> Curitiba e Região Metropolitana</li>
        </ul>
      </section>

      {/* SINTOMAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-none">O que está acontecendo aí?</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">Escolha o que mais parece com o seu caso. Se não souber explicar, tudo bem: é só chamar que a gente pergunta.</p>
        </div>
        <ul className="lg:col-span-8 border-t-2 border-slate-900">
          {sintomas.map((s) => (
            <li key={s.texto} className="border-b border-slate-300">
              <Link to={`/servicos/${s.slug}`} className="group flex items-center justify-between gap-4 py-5 text-lg sm:text-xl font-semibold hover:text-[#c4161c] transition">
                <span>{s.texto}</span>
                <ArrowRight size={22} className="shrink-0 text-[#c4161c] group-hover:translate-x-1 transition" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-none">Serviços</h2>
            <p className="text-lg text-slate-700 max-w-md">Cada serviço tem uma página com detalhes, perguntas comuns e como funciona o atendimento.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {SERVICES.map((service) => {
              const cover = serviceCovers[service.slug];
              return (
                <Link key={service.slug} to={`/servicos/${service.slug}`} className="group grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-5 items-start">
                  {cover && (
                    <img src={cover.image} alt={cover.alt} width="1280" height="720" loading="lazy" decoding="async"
                      className="w-full aspect-[4/3] object-cover rounded-lg" />
                  )}
                  <div>
                    <h3 className="font-display font-bold uppercase text-2xl leading-tight group-hover:text-[#c4161c] transition">{service.title}</h3>
                    <p className="mt-2 text-slate-700 leading-relaxed">{service.shortDesc}</p>
                    <span className="mt-2 inline-flex items-center gap-1 font-bold text-[#c4161c]">Ver serviço <ArrowRight size={16} aria-hidden="true" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-none max-w-2xl">Como pedir atendimento</h2>
        <ol className="mt-12 grid md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-[3px] bg-[#c4161c]/25" aria-hidden="true" />
          {passos.map((p, i) => (
            <li key={p.titulo} className="relative">
              <div className="w-14 h-14 rounded-full bg-[#c4161c] text-white flex items-center justify-center ring-8 ring-[#faf6ef] relative">
                <p.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display font-bold uppercase text-2xl"><span className="text-[#c4161c]">{i + 1}.</span> {p.titulo}</h3>
              <p className="mt-2 text-lg text-slate-700 leading-relaxed">{p.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* BASE E EQUIPE */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <img src="https://img.supremasite.com.br/adp/adp-desentupidora-equipe-fazendinha.jpg" alt="Técnico da ADP Desentupidora" width="1600" height="1600" loading="lazy" decoding="async"
            className="w-full max-h-[460px] object-cover object-top rounded-xl border-4 border-[#ffc629]" />
          <div>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-none">Saímos do CIC para toda Curitiba</h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Nossa base fica na {COMPANY_ADDRESS}, bairro {COMPANY_NEIGHBORHOOD}. De lá, as equipes atendem os bairros de Curitiba e as cidades da Região Metropolitana. O horário de chegada depende da distância e da agenda do dia — informamos uma previsão quando você chama.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/desentupidora-curitiba" className="inline-flex items-center gap-2 min-h-[52px] px-6 rounded-lg bg-[#ffc629] text-slate-900 font-bold hover:bg-yellow-300 transition">
                Atendimento em Curitiba <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/cobertura" className="inline-flex items-center gap-2 min-h-[52px] px-6 rounded-lg border-2 border-white/70 font-bold hover:bg-white hover:text-slate-900 transition">
                Bairros e cidades atendidos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGOS */}
      <BlogArticlesSection limit={6} title="Dicas e respostas" subtitle="Textos curtos para entender o problema antes de chamar o técnico." />

      {/* PERGUNTAS FREQUENTES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-none">Perguntas frequentes</h2>
        <div className="mt-8 border-t-2 border-slate-900">
          {homeFaqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-300">
              <button type="button" onClick={() => setOpenFaq(openFaq === idx ? null : idx)} aria-expanded={openFaq === idx}
                className="w-full flex items-center justify-between gap-4 py-5 text-left text-lg sm:text-xl font-semibold hover:text-[#c4161c] transition">
                <span>{faq.q}</span>
                <ChevronDown size={22} className={`shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#c4161c]' : ''}`} aria-hidden="true" />
              </button>
              {openFaq === idx && <p className="pb-6 text-lg text-slate-700 leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-[#c4161c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl leading-none">Precisa de um encanador agora?</h2>
            <p className="mt-5 text-xl text-white/90 leading-relaxed">Ligue ou chame no WhatsApp. Atendimento por pessoas, sem robô.</p>
            <a href={PHONE_LINK} className="mt-8 inline-flex items-center gap-3 font-display font-extrabold text-4xl sm:text-5xl hover:text-[#ffc629] transition">
              <Phone size={36} aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <div className="mt-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 min-h-[58px] px-7 rounded-lg bg-white text-slate-900 text-lg font-bold hover:bg-[#ffc629] transition">
                <MessageCircle size={22} className="text-[#1f9d55]" aria-hidden="true" /> Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-white text-slate-900 rounded-xl p-2 sm:p-4 shadow-[10px_10px_0_#1c1a17]">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
