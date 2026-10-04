import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getCityInventory, qualifiedPathsFor } from '../data/metroNeighborhoods';

/**
 * Lista todos os bairros/localidades inventariados de um município.
 * Só cria link para páginas efetivamente implementadas (QUALIFIED_PAGES).
 */
const CityNeighborhoodsHub: React.FC<{ citySlug?: string }> = ({ citySlug }) => {
  const inv = getCityInventory(citySlug);
  if (!inv) return null;
  const withPage = new Set(qualifiedPathsFor(inv.citySlug));
  const groups = Array.from(new Set(inv.localities.map((l) => l.classification)));
  const label = (c: string) =>
    c === 'bairro urbano' ? 'Bairros urbanos' : c === 'bairro rural' ? 'Bairros rurais' : c === 'localidade' ? 'Outras localidades listadas pela Prefeitura' : 'Bairros';

  return (
    <section aria-labelledby="bairros-municipio" className="pt-8 border-t-2 border-slate-900">
      <h2 id="bairros-municipio" className="font-display font-extrabold uppercase text-3xl sm:text-4xl">
        Bairros de {inv.city} atendidos
      </h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        {inv.city} faz parte da área de cobertura da ADP. A lista abaixo segue a fonte municipal indicada. Os nomes destacados têm página própria com orientações; para os demais, o atendimento é o mesmo — basta chamar e informar o endereço.
      </p>
      {groups.map((g) => (
        <div key={g} className="mt-6">
          <h3 className="font-display font-bold uppercase text-xl">{label(g)}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {inv.localities
              .filter((l) => l.classification === g)
              .map((l) =>
                withPage.has(l.slug) ? (
                  <li key={l.slug}>
                    <Link
                      to={`/local/cidade/${inv.citySlug}/${l.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-[#c4161c] text-white font-semibold hover:bg-[#a11218] transition"
                    >
                      {l.name} <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </li>
                ) : (
                  <li key={l.slug} className="px-3 py-2 rounded-md border border-slate-300 bg-white text-slate-800">
                    {l.name}
                  </li>
                )
              )}
          </ul>
        </div>
      ))}
      <p className="mt-6 text-sm text-slate-600">
        Fonte territorial:{' '}
        <a href={inv.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#c4161c]">
          {inv.sourceLabel} <ExternalLink size={12} aria-hidden="true" />
        </a>
        {inv.completeness === 'parcial' ? ' — lista conforme publicada; a fonte não declara o total oficial.' : '.'}
      </p>
    </section>
  );
};

export default CityNeighborhoodsHub;
