import React from 'react';
import { BookOpen, ArrowRight, Shield, Clock, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PHONE_LINK, WHATSAPP_LINK, PHONE_DISPLAY, WHATSAPP_DISPLAY } from '../constants';

export interface BlogArticle {
  id: number;
  title: string;
  image: string;
  alt: string;
  titleAttr?: string;
  summary: string;
  tag: string;
  relatedServiceSlug?: string;
}

export const ADP_LOGO_OVERLAY = "https://img.supremasite.com.br/adp/adp-logo-padrao-120x120.png";

/**
 * Mapeamento canônico das 10 imagens 16:9 com SEO Local correto para Curitiba e CIC
 */
export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 1,
    title: "Qual o Preço de um Serviço de Desentupidora em Curitiba e Região?",
    image: "https://img.supremasite.com.br/adp/blog-preco-servico-desentupidora-curitiba-16-9.jpg",
    alt: "Qual o preço de um serviço de desentupidora em Curitiba e região - orçamento transparente ADP no CIC",
    titleAttr: "preço desentupidora curitiba - ADP",
    summary: "Entenda como é calculada a desobstrução técnica: diâmetro do cano, extensão do bloqueio e tipo de maquinário. Orçamento no local sem surpresas.",
    tag: "Valores e Orçamento",
    relatedServiceSlug: "desentupimento-de-esgoto"
  },
  {
    id: 2,
    title: "Desentupimento Sem Quebrar em Curitiba: Conheça o Hidrojateamento",
    image: "https://img.supremasite.com.br/adp/blog-hidrojateamento-desentupimento-sem-quebrar-16-9.jpg",
    alt: "Desentupimento sem quebrar com hidrojateamento em Curitiba - tecnologia ADP",
    summary: "A água pressurizada limpa e raspa as paredes internas da tubulação eliminando placas de gordura sem danificar pisos ou cerâmicas.",
    tag: "Tecnologia Hidrojato",
    relatedServiceSlug: "hidrojateamento"
  },
  {
    id: 3,
    title: "Caça Vazamento com Ultrassom: Onde Encontrar em Curitiba e Região",
    image: "https://img.supremasite.com.br/adp/blog-caca-vazamento-ultrassom-curitiba-16-9.jpg",
    alt: "Caça vazamento com ultrassom em Curitiba - detector eletrônico ADP Encanadores",
    summary: "Localização acústica precisa de vazamentos não visíveis em canos pressurizados com geofone digital, evitando quebra-quebra desnecessário.",
    tag: "Detecção Eletrônica",
    relatedServiceSlug: "caca-vazamentos"
  },
  {
    id: 4,
    title: "Manutenção Preventiva em Condomínios na RMC: Economize Evitando Emergências",
    image: "https://img.supremasite.com.br/adp/blog-manutencao-preventiva-condominios-rmc-16-9.jpg",
    alt: "Manutenção preventiva hidráulica em condomínios na RMC Curitiba - ADP",
    summary: "Prumadas prediais e colunas verticais demandam rotina preventiva para evitar transbordamentos em apartamentos térreos e prejuízos coletivos.",
    tag: "Condomínios e Prédios",
    relatedServiceSlug: "desentupimento-de-esgoto"
  },
  {
    id: 5,
    title: "A Importância do Certificado de Limpeza de Caixa d'Água em Condomínios",
    image: "https://img.supremasite.com.br/adp/blog-certificado-limpeza-caixa-dagua-condominios-16-9.jpg",
    alt: "Certificado de limpeza de caixa d'água em condomínios Curitiba - ADP Desentupidora",
    summary: "Higienização técnica e desinfecção periódica de reservatórios atendendo às exigências sanitárias com emissão de laudo técnico oficial.",
    tag: "Saúde e Sanepar",
    relatedServiceSlug: "limpeza-de-caixa-dagua"
  },
  {
    id: 6,
    title: "Mau Cheiro no Esgoto em Curitiba? 5 Causas Comuns e Como Resolver",
    image: "https://img.supremasite.com.br/adp/blog-mau-cheiro-esgoto-causas-curitiba-16-9.jpg",
    alt: "Mau cheiro no esgoto em Curitiba - 5 causas comuns e solução ADP",
    summary: "Gases que retornam por ralos e pias costumam indicar sifonamento seco, ressecamento de anéis ou caixas de gordura sobrecarregadas.",
    tag: "Diagnóstico Hidráulico",
    relatedServiceSlug: "desentupimento-de-esgoto"
  },
  {
    id: 7,
    title: "Desentupimento 24h em Curitiba: Quando Chamar a Emergência?",
    image: "https://img.supremasite.com.br/adp/blog-desentupimento-24h-emergencia-curitiba-16-9.jpg",
    alt: "Desentupimento 24h emergência em Curitiba CIC - atendimento rápido ADP",
    summary: "O que fazer em casos de transbordamento de esgoto, refluxo sanitário ou retenção geral em residências e empresas fora do horário comercial.",
    tag: "Emergência Hidráulica",
    relatedServiceSlug: "desentupimento-de-esgoto"
  },
  {
    id: 8,
    title: "3 Maneiras de Desentupir Vaso Sanitário (e Quando Chamar a ADP)",
    image: "https://img.supremasite.com.br/adp/blog-3-maneiras-desentupir-vaso-sanitario-adp-16-9.jpg",
    alt: "Como desentupir vaso sanitário - 3 maneiras e quando chamar ADP Desentupidora",
    summary: "Diferença entre métodos manuais com desentupidor de borracha e quando a obstrução mecânica profunda exige sondas rotativas industriais.",
    tag: "Dicas Práticas",
    relatedServiceSlug: "desentupimento-de-esgoto"
  },
  {
    id: 9,
    title: "Chegada em 40 Minutos: A Desentupidora Mais Rápida de Curitiba",
    image: "https://img.supremasite.com.br/adp/blog-chegada-40-minutos-desentupidora-rapida-curitiba-16-9.jpg",
    alt: "Chegada em 40 minutos - desentupidora mais rápida de Curitiba - ADP CIC",
    summary: "Logística estratégica com base no bairro CIC e viaturas volantes distribuídas para deslocamento rápido aos bairros da capital e RMC.",
    tag: "Agilidade Operacional",
    relatedServiceSlug: "desentupimento-de-esgoto"
  },
  {
    id: 10,
    title: "Por Que Escolher a ADP? Nossos Diferenciais em Serviços Hidráulicos",
    image: "https://img.supremasite.com.br/adp/blog-por-que-escolher-adp-diferenciais-hidraulicos-16-9.jpg",
    alt: "Por que escolher a ADP Desentupidora - diferenciais hidráulicos no CIC Curitiba",
    summary: "Sede física registrada no CIC, frota própria de caminhões combinados, técnicos treinados, garantia técnica por escrito e transparência total.",
    tag: "Qualidade Comprovada",
    relatedServiceSlug: "video-inspecao"
  }
];

export const BLOG_IMAGES = {
  PRECO: BLOG_ARTICLES[0],
  HIDROJATEAMENTO: BLOG_ARTICLES[1],
  CACA_VAZAMENTO: BLOG_ARTICLES[2],
  MANUTENCAO_PREVENTIVA: BLOG_ARTICLES[3],
  CERTIFICADO_CAIXA_DAGUA: BLOG_ARTICLES[4],
  MAU_CHEIRO: BLOG_ARTICLES[5],
  EMERGENCIA_24H: BLOG_ARTICLES[6],
  VASO_SANITARIO: BLOG_ARTICLES[7],
  CHEGADA_40MIN: BLOG_ARTICLES[8],
  DIFERENCIAIS_ADP: BLOG_ARTICLES[9]
};

interface BlogCoverProps {
  image: string;
  alt: string;
  titleAttr?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Componente padrão de capa com logo sobreposta via CSS
 * Obedece às regras:
 * - <img> com loading="lazy" (ou "eager" se priority) e decoding="async"
 * - Proporção 16:9 (1280x720)
 * - Alt semântico obrigatório
 * - Logo adp-logo-padrao-120x120.png sobreposta no canto inferior direito (20px de margem)
 * - srcset para responsividade
 */
export const BlogCover: React.FC<BlogCoverProps> = ({
  image,
  alt,
  titleAttr,
  className = "",
  priority = false
}) => {
  return (
    <figure className={`blog-cover relative overflow-hidden rounded-2xl aspect-video bg-slate-900 shadow-sm ${className}`}>
      <img 
        src={image} 
        srcSet={`${image} 1280w`}
        sizes="(max-width: 768px) 100vw, 1280px"
        alt={alt}
        title={titleAttr || alt}
        width={1280}
        height={720}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-full object-cover block transition-transform duration-300 hover:scale-[1.01]"
      />
      <img 
        src={ADP_LOGO_OVERLAY} 
        className="logo-overlay absolute bottom-5 right-5 w-[60px] h-[60px] bg-white rounded-full p-[5px] shadow-md object-contain z-10 pointer-events-none" 
        alt="ADP Desentupidora"
        width={60}
        height={60}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
};

export const BlogArticlesSection: React.FC<{ limit?: number; title?: string; subtitle?: string }> = ({
  limit,
  title = "Guias Técnicos e Orientações para Curitiba e Região",
  subtitle = "Artigos práticos desenvolvidos pelos técnicos da ADP Desentupidora para esclarecer métodos de desobstrução, cuidados com encanamento e transparência em valores."
}) => {
  const articles = limit ? BLOG_ARTICLES.slice(0, limit) : BLOG_ARTICLES;

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="artigos-tecnicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Editorial Refinado */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <BookOpen size={14} className="text-blue-700" />
            <span>Conteúdo Técnico e Esclarecimentos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* Grade com os 10 Artigos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article 
              key={art.id} 
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Capa Padrão 16:9 com Logo Sobreposta */}
                <BlogCover 
                  image={art.image} 
                  alt={art.alt} 
                  titleAttr={art.titleAttr}
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-700 uppercase tracking-wider">{art.tag}</span>
                    <span>Curitiba · CIC</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition">
                    {art.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              {/* Ações Diretas */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition"
                  title={`Tirar dúvidas sobre: ${art.title}`}
                >
                  <MessageCircle size={15} />
                  <span>Dúvida no WhatsApp</span>
                </a>

                <a 
                  href={PHONE_LINK}
                  className="font-semibold text-slate-600 hover:text-blue-700 flex items-center gap-1 transition"
                  title={`Ligar para central: ${PHONE_DISPLAY}`}
                >
                  <Phone size={13} />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bloco de Atendimento Humanizado (Acolhimento para Idosos) */}
        <div className="mt-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-bold uppercase tracking-wider text-emerald-700">
              <CheckCircle2 size={16} />
              <span>Atendimento Direto e Paciente</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Tem alguma dúvida sobre o encanamento ou valores?
            </h4>
            <p className="text-slate-600 text-sm max-w-2xl">
              Nossa central técnica no CIC atende com atenção para entender sua necessidade, explicar como funciona a máquina desentupidora e fornecer uma estimativa clara.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <a 
              href={PHONE_LINK} 
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition active:scale-95"
            >
              <Phone size={16} fill="currentColor" />
              <span>Ligar: {PHONE_DISPLAY}</span>
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition active:scale-95"
            >
              <MessageCircle size={16} />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogCover;
