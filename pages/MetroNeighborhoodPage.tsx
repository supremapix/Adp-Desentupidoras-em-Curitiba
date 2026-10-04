import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, ChevronDown, MapPin, ExternalLink } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import NotFound from './NotFound';
import { PHONE_LINK, WHATSAPP_LINK, PHONE_DISPLAY, SERVICES, COMPANY_ADDRESS } from '../constants';
import { getQualifiedPage, getCityInventory, QUALIFIED_PAGES } from '../data/metroNeighborhoods';

const BASE_URL = 'https://adpservicos.app.br';

const MetroNeighborhoodPage: React.FC = () => {
  const { city, bairro } = useParams<{ city: string; bairro: string }>();
  const page = getQualifiedPage(city, bairro);
  const inventory = getCityInventory(city);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!page || !inventory) return <NotFound />;

  const cityName = inventory.city;
  const path = `/local/cidade/${page.citySlug}/${page.slug}`;
  const cityPath = `/local/cidade/${page.citySlug}`;
  const siblings = QUALIFIED_PAGES.filter((p) => p.citySlug === page.citySlug && p.slug !== page.slug);

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Cobertura', item: `${BASE_URL}/cobertura` },
        { '@type': 'ListItem', position: 3, name: cityName, item: `${BASE_URL}${cityPath}` },
        { '@type': 'ListItem', position: 4, name: page.name, item: `${BASE_URL}${path}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Desentupimento e serviços hidráulicos — ${page.name}, ${cityName}`,
      serviceType: 'Desentupimento, caça-vazamento e limpeza de fossa',
      provider: { '@id': `${BASE_URL}/#organization` },
      areaServed: {
        '@type': 'Place',
        name: `${page.name}, ${cityName} - PR`,
        containedInPlace: { '@type': 'City', name: cityName },
      },
      url: `${BASE_URL}${path}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <div className="bg-[#faf6ef] text-slate-900">
      <EnhancedSEO title={page.title} description={page.description} canonicalPath={path} schemaData={schemaData} />

      {/* TOPO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
          <nav aria-label="Trilha de navegação" className="text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link to="/" className="hover:text-white underline-offset-2 hover:underline">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/cobertura" className="hover:text-white underline-offset-2 hover:underline">Cobertura</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to={cityPath} className="hover:text-white underline-offset-2 hover:underline">{cityName}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white font-semibold">{page.name}</li>
            </ol>
          </nav>
          <h1 className="mt-6 font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Desentupidora {page.prep ?? (page.name === 'Cachoeira' || page.name === 'Costeira' ? 'na' : 'no')} {page.name}<span className="sr-only">,</span>{' '}
            <span className="block text-[#ffc629]">{cityName}</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Desentupimento, caça-vazamento e limpeza de fossa com avaliação no local e valor informado antes de começar.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 min-h-[56px] px-6 rounded-lg bg-[#1f9d55] hover:bg-[#178246] text-white text-lg font-bold transition">
              <MessageCircle size={22} aria-hidden="true" /> Chamar no WhatsApp
            </a>
            <a href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-3 min-h-[56px] px-6 rounded-lg border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 text-lg font-bold transition">
              <Phone size={20} aria-hidden="true" /> Ligar {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <div className="faixa-obra h-3" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 space-y-14">
          {/* SOBRE A LOCALIDADE */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl">Sobre o atendimento {page.prep ?? (page.name === 'Cachoeira' || page.name === 'Costeira' ? 'na' : 'no')} {page.name}</h2>
            {page.intro.map((p, i) => (
              <p key={i} className="mt-4 text-lg leading-relaxed text-slate-700">{p}</p>
            ))}
            <dl className="mt-6 border-t-2 border-slate-900">
              {page.facts.map((f) => (
                <div key={f.label} className="grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 py-3 border-b border-slate-300">
                  <dt className="font-semibold text-slate-900">{f.label}</dt>
                  <dd className="text-slate-700">
                    {f.href ? (
                      <a href={f.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#c4161c]">
                        {f.value} <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ) : f.value}
                  </dd>
                </div>
              ))}
            </dl>
            {page.homonyms.length > 0 && (
              <p className="mt-4 text-slate-700">
                Procurando outro bairro com o mesmo nome?{' '}
                {page.homonyms.map((h, i) => (
                  <span key={h.label}>
                    {h.path ? <Link to={h.path} className="font-semibold text-[#c4161c] underline underline-offset-2">{h.label}</Link> : <span className="font-semibold">{h.label}</span>}
                    {i < page.homonyms.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            )}
            <p className="mt-6 text-slate-700">
              <strong>Cobertura:</strong> {cityName} faz parte da área atendida pela ADP. As equipes saem da base em {COMPANY_ADDRESS}, CIC, Curitiba. Não temos filial no município. Data, horário e condições são confirmados no contato.
            </p>
          </section>

          {/* SERVIÇOS */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl">O que podemos avaliar</h2>
            <ul className="mt-6 border-t-2 border-slate-900">
              {SERVICES.map((s) => (
                <li key={s.slug} className="border-b border-slate-300">
                  <Link to={`/servicos/${s.slug}`} className="group flex items-start justify-between gap-4 py-4 hover:text-[#c4161c] transition">
                    <span>
                      <span className="block text-lg font-semibold">{s.title}</span>
                      <span className="block text-slate-600">{s.shortDesc}</span>
                    </span>
                    <ArrowRight size={20} className="mt-1 shrink-0 text-[#c4161c]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* SINTOMAS */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl">Entupimento, vazamento ou baixa pressão?</h2>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">Descreva o que você vê — não precisa saber a causa. Estas pistas ajudam na conversa inicial; a confirmação é feita na avaliação no local.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="border-t-4 border-[#c4161c] pt-4">
                <h3 className="font-display font-bold uppercase text-xl">Pode ser entupimento</h3>
                <p className="mt-2 text-slate-700">Água demora a descer, volta pelo ralo, vaso enche e esvazia devagar, barulho de borbulha ou mau cheiro no ralo.</p>
              </div>
              <div className="border-t-4 border-[#ffc629] pt-4">
                <h3 className="font-display font-bold uppercase text-xl">Pode ser vazamento</h3>
                <p className="mt-2 text-slate-700">Conta de água acima do normal, hidrômetro girando com tudo fechado, manchas de umidade ou piso molhado sem uso de água.</p>
              </div>
              <div className="border-t-4 border-slate-900 pt-4">
                <h3 className="font-display font-bold uppercase text-xl">Pode ser baixa pressão</h3>
                <p className="mt-2 text-slate-700">Água chega fraca na torneira ou no chuveiro, mas escoa normalmente. É uma questão de abastecimento, diferente de entupimento.</p>
              </div>
            </div>
          </section>

          {/* O QUE INFORMAR */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl">O que informar no contato</h2>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                <li>Endereço completo, com município ({cityName}) e ponto de referência.</li>
                <li>Tipo de imóvel: casa, sobrado, apartamento ou comércio.</li>
                <li>Onde está o problema e desde quando.</li>
                <li>Se outras unidades ou vizinhos também foram afetados.</li>
                <li>Se o imóvel usa fossa e onde fica a tampa, se souber.</li>
                <li>Se já foi usado algum produto ou ferramenta.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl">Fotos que ajudam</h2>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                <li>O ralo, a pia ou o vaso com o problema.</li>
                <li>Manchas de umidade em parede, teto ou piso.</li>
                <li>O hidrômetro, se houver suspeita de vazamento.</li>
                <li>A caixa de inspeção, só se já estiver aberta e acessível.</li>
              </ul>
              <p className="mt-4 text-slate-700"><strong>Não</strong> abra tampas pesadas, não entre em caixas ou fossas e não mexa em instalações elétricas para fotografar.</p>
            </div>
          </section>

          {/* CONDOMÍNIO E ORÇAMENTO */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl">Condomínio e acesso</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">Em prédios e condomínios fechados, combine com o síndico ou a portaria a liberação da equipe antes da visita. Se o problema estiver em área comum (coluna, caixa de gordura coletiva, rede do condomínio), a autorização é da administração.</p>
            </div>
            <div>
              <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl">Como funciona</h2>
              <ol className="mt-4 space-y-2 text-slate-700 list-decimal pl-5">
                <li>Você chama pelo WhatsApp ou telefone e descreve o problema.</li>
                <li>Combinamos data e horário conforme a agenda.</li>
                <li>O técnico avalia no local e informa o valor.</li>
                <li>O serviço só começa depois da sua aprovação.</li>
              </ol>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl">Perguntas frequentes</h2>
            <div className="mt-6 border-t-2 border-slate-900">
              {page.faqs.map((faq, idx) => (
                <div key={faq.q} className="border-b border-slate-300">
                  <button type="button" onClick={() => setOpenFaq(openFaq === idx ? null : idx)} aria-expanded={openFaq === idx}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left text-lg font-semibold hover:text-[#c4161c] transition">
                    <span>{faq.q}</span>
                    <ChevronDown size={22} className={`shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#c4161c]' : ''}`} aria-hidden="true" />
                  </button>
                  {/* Resposta sempre presente no HTML (FAQPage = texto visível); apenas recolhida visualmente */}
                  <p className={`pb-6 text-lg text-slate-700 leading-relaxed ${openFaq === idx ? '' : 'hidden'}`}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* LATERAL */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="lg:sticky lg:top-28 space-y-8">
            <div className="bg-slate-900 text-white rounded-xl p-6">
              <p className="font-display font-extrabold uppercase text-2xl">Falar com a ADP</p>
              <p className="mt-2 text-slate-300">Atendimento por pessoas. Confirme disponibilidade e agenda.</p>
              <a href={PHONE_LINK} className="mt-5 flex items-center justify-center gap-2 min-h-[52px] rounded-lg bg-[#c4161c] hover:bg-[#a11218] font-bold">
                <Phone size={18} aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 min-h-[52px] rounded-lg bg-[#1f9d55] hover:bg-[#178246] font-bold">
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp
              </a>
            </div>
            <nav aria-label={`Bairros de ${cityName}`}>
              <p className="font-display font-extrabold uppercase text-xl">{cityName}</p>
              <ul className="mt-3 border-t-2 border-slate-900">
                <li className="border-b border-slate-300">
                  <Link to={cityPath} className="flex items-center gap-2 py-3 font-semibold hover:text-[#c4161c]">
                    <MapPin size={16} className="text-[#c4161c]" aria-hidden="true" /> Todos os bairros de {cityName}
                  </Link>
                </li>
                {siblings.map((s) => (
                  <li key={s.slug} className="border-b border-slate-300">
                    <Link to={`/local/cidade/${s.citySlug}/${s.slug}`} className="block py-3 hover:text-[#c4161c]">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MetroNeighborhoodPage;
