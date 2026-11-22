import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const SANITATION_PATH = '/guias/historia-do-saneamento';
const base = 'https://adpservicos.app.br';
const url = base + SANITATION_PATH;
const title = 'História do saneamento: da Roma antiga a Curitiba | ADP';
const description = 'Conheça histórias das redes de água e esgoto: Roma antiga, o Grande Fedor de Londres, Curitiba e a moderna inspeção de tubulações.';
const og = base + '/images/historia-saneamento-og.jpg';
const sources = [
  ['Turismo de Roma: Cloaca Maxima', 'https://www.turismoroma.it/en/node/1029'],
  ['Parlamento britânico: debate registrado em 25 de junho de 1858', 'https://hansard.parliament.uk/Commons/1858-06-25/debates/478b52c5-f46f-49cf-9e1e-7bd9e7d2302f/CommonsChamber'],
  ['Crossness Pumping Station: história da estação preservada', 'https://crossness.org.uk/who-we-are/'],
  ['Sanepar: linha do tempo do saneamento no Paraná', 'https://www.sanepar.com.br/nossa-historia'],
  ['Sanepar: o encanamento que chegou à Praça Zacarias', 'https://www.sanepar.com.br/noticias/primeiro-encanamento-de-agua-do-parana-completa-155-anos'],
  ['Agência ambiental dos EUA: limpeza e inspeção de redes coletoras', 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P10053G5.TXT'],
];
const milestones = [
  { time: 'Roma antiga', title: 'Um canal sob a cidade', body: 'A Cloaca Maxima reúne fases de um antigo sistema de drenagem na região do Fórum Romano. A tradição atribui trechos iniciais aos Tarquínios, mas as estruturas foram modificadas ao longo dos séculos.' },
  { time: 'Londres, 1858–1865', title: 'O cheiro entrou no Parlamento', body: 'Em 1858, a poluição do Tâmisa dominou o debate. Joseph Bazalgette liderou o projeto dos novos coletores; em 1865, a estação de bombeamento de Crossness entrou em operação.' },
  { time: 'Curitiba, 1871', title: 'Água encanada até um chafariz', body: 'O encanamento projetado por Antônio Rebouças Filho levava água de uma nascente até o chafariz da Praça Zacarias. Levar água ao espaço público não era o mesmo que conectá-la a todas as casas.' },
  { time: 'Curitiba, 1908', title: 'Abastecimento e esgoto ganham escala', body: 'A Sanepar registra a inauguração do sistema que levava água dos Mananciais da Serra ao Reservatório Alto São Francisco e a entrada em operação das Instalações Bacterianas de coleta e tratamento de esgoto.' },
  { time: 'Inspeção contemporânea', title: 'Uma câmera ajuda a investigar o que não se vê', body: 'Inspeção por vídeo permite registrar a parte interna de trechos acessíveis. Limpeza, desobstrução e reparo têm propósitos diferentes; um método não serve para todo defeito.' },
];
const icons = ['M3 20h18M5 20V9l7-5 7 5v11m-11 0v-4a4 4 0 0 1 8 0v4','M3 20h18m-16-4h14M5 16V8m14 8V8m-7 8V4m-7 8h14','M12 3s-6 7-6 11a6 6 0 1 0 12 0c0-4-6-11-6-11z','M3 12h7v-5h7v5h4m-18 5h18','M4 6h12v12H4z m12 4 4-2v8l-4-2m-8 0h4'];
const org = { '@type': 'Organization', name: 'ADP Serviços', url: base + '/' };
const graph = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Article', headline: 'História do saneamento: da Roma antiga a Curitiba', description, image: og, author: org, publisher: org, inLanguage: 'pt-BR', datePublished: '2026-11-22', dateModified: '2026-11-22', mainEntityOfPage: url, citation: sources.map(([, href]) => href) },
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: base + '/' }, { '@type': 'ListItem', position: 2, name: 'História do saneamento', item: url }] },
]};
const photo = (name: string, alt: string, caption: string, eager = false) => <figure className="my-7 overflow-hidden rounded-xl border border-slate-200 bg-white" data-history-motion><img className="block h-auto w-full" src={`/images/historia-saneamento-${name}.webp`} alt={alt} width={1200} height={800} loading={eager ? 'eager' : 'lazy'} decoding="async"/><figcaption className="px-4 py-3 text-sm text-slate-700">{caption}</figcaption></figure>;

export default function SanitationHistory() {
  const content = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!content.current || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof Element.prototype.animate !== 'function') return;
    const watcher = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      watcher.unobserve(entry.target);
      entry.target.animate([{ opacity: 0.75, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 400, easing: 'ease-out' });
    }), { threshold: 0.12 });
    content.current.querySelectorAll('[data-history-motion]').forEach((element) => watcher.observe(element));
    return () => watcher.disconnect();
  }, []);
  return <><Helmet><title>{title}</title><meta name="description" content={description}/><meta name="robots" content="index,follow,max-image-preview:large"/><link rel="canonical" href={url}/><meta property="og:type" content="article"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={url}/><meta property="og:image" content={og}/><meta property="og:image:alt" content="Ilustração do interior de uma antiga galeria de drenagem"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">{JSON.stringify(graph)}</script></Helmet>
    <article ref={content} className="mx-auto max-w-4xl px-5 py-12 leading-relaxed text-slate-900 lg:py-16">
      <nav aria-label="Caminho da página" className="mb-5 text-sm text-slate-700"><Link className="underline" to="/">Início</Link> / <span aria-current="page">História do saneamento</span></nav>
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-red-700">Guia histórico · ADP Serviços</p>
      <h1 className="mb-5 text-4xl font-black leading-tight lg:text-5xl">História do saneamento: da Roma antiga a Curitiba</h1>
      <p className="text-xl text-slate-700">Um canal debaixo do Fórum Romano, um rio que incomodou o Parlamento britânico e um chafariz no centro de Curitiba ajudam a contar uma história pouco visível: como as cidades aprenderam a levar água e a lidar com o esgoto.</p>
      <p className="mt-4 text-sm text-slate-700">Publicado em 22/11/2026 pela ADP Serviços, empresa do setor. As fontes externas não representam parceria ou endosso.</p>
      {photo('antigo', 'Galeria abobadada de alvenaria com canal de drenagem', 'Ilustração de uma galeria antiga. Não é uma fotografia da Cloaca Maxima.', true)}
      <h2 className="mb-4 mt-8 text-3xl font-bold">Cinco momentos da história do saneamento</h2>
      <ol className="grid gap-4 sm:grid-cols-2">{milestones.map((m, i) => <li key={m.time} data-history-motion className="rounded-xl border border-slate-200 bg-slate-50 p-5"><span className="mb-2 flex items-center gap-2 font-bold text-red-800"><svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true" focusable="false" className="rounded-lg bg-red-100 p-1"><path d={icons[i]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>{m.time}</span><h3 className="mb-1 text-xl font-bold">{m.title}</h3><p>{m.body}</p></li>)}</ol>
      <h2 className="mb-4 mt-8 text-3xl font-bold">Da drenagem ao saneamento moderno</h2>
      <p className="mb-3">A existência de um canal antigo não significa que havia água tratada, coleta domiciliar universal ou tratamento de esgoto. Em Londres, o debate de 1858 registrou que galerias conduziam efluentes ao próprio Tâmisa. Coletar e transportar resíduos, portanto, não é o mesmo que tratá-los.</p>
      <p className="mb-3">A história de Curitiba também separa funções. O chafariz tornou a água acessível em um ponto público. Décadas depois, abastecimento e coleta de esgoto passaram a ter sistemas próprios. Ainda hoje, conservar a tubulação do imóvel e operar a rede pública são atividades distintas. Se o problema parecer externo ao imóvel, confirme a responsabilidade com a administração ou concessionária.</p>
      {photo('rede', 'Galeria urbana de esgoto em alvenaria em construção histórica', 'Ilustração da construção de redes urbanas em alvenaria; não representa obra histórica específica.')}
      <h2 className="mb-4 mt-8 text-3xl font-bold">O que uma rede moderna permite investigar</h2>
      <p className="mb-3">Quando um ponto isolado escoa devagar, a causa pode ser local. Se vários ralos voltam ao mesmo tempo ou o problema reaparece, explique à equipe quais ambientes foram afetados, em que hora e se há outras unidades com o mesmo sintoma. Isso orienta a avaliação sem concluir, só pelo relato, onde está a obstrução.</p>
      <p>Vídeo inspeção e limpeza não são intercambiáveis. A câmera pode documentar a condição de um trecho acessível; o hidrojateamento pode ser indicado para algumas situações de limpeza, conforme a tubulação e o diagnóstico. Não misture produtos químicos nem abra galerias ou poços de visita. Se houver água de esgoto voltando, evite contato e procure avaliação.</p>
      {photo('inspecao', 'Técnico do lado de fora usando equipamento de vídeo para inspeção de tubulação', 'Ilustração de vídeo inspeção feita de um ponto externo. Não representa uma equipe ou atendimento real da ADP.')}
      <h2 className="mb-4 mt-8 text-3xl font-bold">Fontes para continuar a leitura</h2>
      <ul className="list-disc space-y-2 pl-6">{sources.map(([label, href]) => <li key={href}><a className="text-red-800 underline underline-offset-2" href={href}>{label}</a></li>)}</ul>
      <p className="mt-8"><Link to="/duvidas" className="font-bold text-red-800 underline underline-offset-2">Veja as dúvidas frequentes da ADP</Link> · <Link to="/cobertura" className="font-bold text-red-800 underline underline-offset-2">Consulte a área de atendimento</Link></p>
    </article></>;
}
