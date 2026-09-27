import { toSlug } from './constants';

export interface ConsolidationRule {
  fromPath: string;
  targetPath: string;
  targetName: string;
  reason: string;
}

/**
 * 71 Bairros redundantes, sub-divisões e vilas consolidadas com seus bairros oficiais de Curitiba
 */
export const CONSOLIDATED_BAIRROS: Record<string, { targetSlug: string; targetName: string; reason: string }> = {
  // Variações e redundâncias de nomes
  "alto-da-rua-xv": { targetSlug: "alto-da-xv", targetName: "Alto da XV", reason: "Denominação oficial padronizada pelo IPPUC" },
  "batel-soho": { targetSlug: "batel", targetName: "Batel", reason: "Sub-região comercial integrada ao bairro Batel" },
  "boqueirao-de-baixo": { targetSlug: "boqueirao", targetName: "Boqueirão", reason: "Subdivisão informal integrada ao bairro Boqueirão" },
  "boqueirao-de-cima": { targetSlug: "boqueirao", targetName: "Boqueirão", reason: "Subdivisão informal integrada ao bairro Boqueirão" },
  "centro-historico": { targetSlug: "centro", targetName: "Centro", reason: "Região histórica central integrada aos bairros Centro e São Francisco" },
  "cic-norte": { targetSlug: "cic", targetName: "CIC", reason: "Setor integrado ao bairro Cidade Industrial de Curitiba (CIC)" },
  "cic-central": { targetSlug: "cic", targetName: "CIC", reason: "Setor integrado ao bairro Cidade Industrial de Curitiba (CIC)" },
  "cic-sul": { targetSlug: "cic", targetName: "CIC", reason: "Setor integrado ao bairro Cidade Industrial de Curitiba (CIC)" },
  "cidade-industrial": { targetSlug: "cic", targetName: "CIC", reason: "Página canônica unificada sob a sigla oficial CIC (sede da empresa)" },
  "ecoville": { targetSlug: "mossungue", targetName: "Mossunguê", reason: "Denominação comercial do bairro oficial Mossunguê" },
  "jardim-schaffer": { targetSlug: "bom-retiro", targetName: "Bom Retiro", reason: "Loteamento residencial inserido no bairro Bom Retiro" },
  "tangua": { targetSlug: "taboao", targetName: "Taboão", reason: "Área de parque inserida entre Taboão e Pilarzinho" },
  "vila-oficinas": { targetSlug: "cajuru", targetName: "Cajuru", reason: "Polo ferroviário histórico integrado ao bairro Cajuru" },

  // Vilas e micro-conjuntos habitacionais
  "vila-parolin": { targetSlug: "parolin", targetName: "Parolin", reason: "Comunidade situada no bairro Parolin" },
  "vila-torres": { targetSlug: "prado-velho", targetName: "Prado Velho", reason: "Comunidade situada no bairro Prado Velho" },
  "vila-sabara": { targetSlug: "cic", targetName: "CIC", reason: "Núcleo habitacional situado na CIC" },
  "vila-zumbi": { targetSlug: "colombo", targetName: "Colombo", reason: "Comunidade situada no município metropolitano de Colombo" },
  "abranches-de-baixo": { targetSlug: "barreirinha", targetName: "Barreirinha", reason: "Setor limítrofe consolidado no eixo norte Barreirinha/Pilarzinho" },
  "abranches-de-cima": { targetSlug: "barreirinha", targetName: "Barreirinha", reason: "Setor limítrofe consolidado no eixo norte Barreirinha/Pilarzinho" },
  "vila-nossa-senhora-da-luz": { targetSlug: "cic", targetName: "CIC", reason: "Conjunto histórico situado na CIC" },
  "vila-tecnologica": { targetSlug: "cic", targetName: "CIC", reason: "Núcleo habitacional situado na CIC" },
  "vila-verde": { targetSlug: "cic", targetName: "CIC", reason: "Núcleo habitacional situado na CIC" },
  "vila-sao-jose": { targetSlug: "cajuru", targetName: "Cajuru", reason: "Vila residencial integrada ao Cajuru" },
  "vila-santa-helena": { targetSlug: "cajuru", targetName: "Cajuru", reason: "Vila residencial integrada ao Cajuru" },
  "vila-industrial": { targetSlug: "cic", targetName: "CIC", reason: "Área integrada à Cidade Industrial (CIC)" },
  "vila-conquista": { targetSlug: "cic", targetName: "CIC", reason: "Núcleo habitacional situado na CIC" },
  "vila-uniao": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Vila residencial integrada ao bairro Uberaba" },
  "vila-nova-esperanca": { targetSlug: "sitio-cercado", targetName: "Sítio Cercado", reason: "Loteamento integrado ao Sítio Cercado" },
  "vila-osternack": { targetSlug: "sitio-cercado", targetName: "Sítio Cercado", reason: "Núcleo habitacional integrado ao Sítio Cercado" },
  "vila-nova": { targetSlug: "novo-mundo", targetName: "Novo Mundo", reason: "Vila residencial integrada ao Novo Mundo" },
  "vila-sao-domingos": { targetSlug: "cajuru", targetName: "Cajuru", reason: "Vila residencial integrada ao Cajuru" },
  "vila-audi-uniao": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Vila residencial integrada ao Uberaba" },
  "vila-becker": { targetSlug: "tatuquara", targetName: "Tatuquara", reason: "Loteamento integrado ao Tatuquara" },
  "vila-copel": { targetSlug: "pinheirinho", targetName: "Pinheirinho", reason: "Área residencial integrada ao Pinheirinho" },
  "vila-eletrosul": { targetSlug: "pinheirinho", targetName: "Pinheirinho", reason: "Área residencial integrada ao Pinheirinho" },
  "vila-trabalhador": { targetSlug: "cic", targetName: "CIC", reason: "Núcleo habitacional situado na CIC" },
  "vila-sao-joao": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Vila residencial integrada ao Uberaba" },
  "vila-sao-miguel": { targetSlug: "sao-miguel", targetName: "São Miguel", reason: "Vila residencial integrada ao bairro São Miguel" },
  "vila-santo-antonio": { targetSlug: "boqueirao", targetName: "Boqueirão", reason: "Vila residencial integrada ao Boqueirão" },
  "vila-nova-primavera": { targetSlug: "tatuquara", targetName: "Tatuquara", reason: "Loteamento integrado ao Tatuquara" },
  "vila-araucaria": { targetSlug: "cic", targetName: "CIC", reason: "Área limítrofe integrada à CIC" },
  "vila-concordia": { targetSlug: "pinheirinho", targetName: "Pinheirinho", reason: "Loteamento integrado ao Pinheirinho" },
  "vila-sao-judas-tadeu": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Vila residencial integrada ao Uberaba" },
  "vila-sao-mateus": { targetSlug: "sitio-cercado", targetName: "Sítio Cercado", reason: "Vila residencial integrada ao Sítio Cercado" },
  "vila-sao-pedro": { targetSlug: "xaxim", targetName: "Xaxim", reason: "Vila residencial integrada ao Xaxim" },
  "vila-sao-marcos": { targetSlug: "sitio-cercado", targetName: "Sítio Cercado", reason: "Loteamento integrado ao Sítio Cercado" },
  "vila-sao-paulo": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Vila residencial integrada ao Uberaba" },
  "vila-industrial-oeste": { targetSlug: "cic", targetName: "CIC", reason: "Setor industrial integrado à CIC" },
  "vila-industrial-norte": { targetSlug: "cic", targetName: "CIC", reason: "Setor industrial integrado à CIC" },
  "conjunto-sabara": { targetSlug: "cic", targetName: "CIC", reason: "Conjunto habitacional situado na CIC" },
  "conjunto-caiua": { targetSlug: "cic", targetName: "CIC", reason: "Conjunto habitacional situado na CIC" },
  "conjunto-vitoria-regia": { targetSlug: "cic", targetName: "CIC", reason: "Conjunto habitacional situado na CIC" },
  "conjunto-nova-esperanca": { targetSlug: "sitio-cercado", targetName: "Sítio Cercado", reason: "Conjunto habitacional integrado ao Sítio Cercado" },
  "conjunto-industrial": { targetSlug: "cic", targetName: "CIC", reason: "Conjunto habitacional situado na CIC" },
  "conjunto-uniao": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Conjunto habitacional integrado ao Uberaba" },
  "conjunto-osternack": { targetSlug: "sitio-cercado", targetName: "Sítio Cercado", reason: "Conjunto habitacional integrado ao Sítio Cercado" },
  "conjunto-parigot-de-souza": { targetSlug: "sitio-cercado", targetName: "Sítio Cercado", reason: "Conjunto habitacional integrado ao Sítio Cercado" },
  "conjunto-habitacional-vila-verde": { targetSlug: "cic", targetName: "CIC", reason: "Conjunto habitacional situado na CIC" },
  "vila-reno": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Vila residencial integrada ao Uberaba" },
  "vila-audi": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Vila residencial integrada ao Uberaba" },
  "vila-barigui": { targetSlug: "cic", targetName: "CIC", reason: "Área residencial situada na CIC" },
  "vila-pantanal": { targetSlug: "boqueirao", targetName: "Boqueirão", reason: "Comunidade situada no Boqueirão" },
  "vila-sandra": { targetSlug: "campo-comprido", targetName: "Campo Comprido", reason: "Comunidade situada entre Campo Comprido e CIC" },
  "vila-formosa": { targetSlug: "novo-mundo", targetName: "Novo Mundo", reason: "Vila residencial integrada ao Novo Mundo" },
  "caiua": { targetSlug: "cic", targetName: "CIC", reason: "Região do Caiuá integrada à CIC" },
  "carmo": { targetSlug: "boqueirao", targetName: "Boqueirão", reason: "Região do Santuário do Carmo integrada ao Boqueirão" },
  "portao-velho": { targetSlug: "portao", targetName: "Portão", reason: "Subdivisão informal integrada ao bairro Portão" },
  "guaira-velho": { targetSlug: "guaira", targetName: "Guaíra", reason: "Subdivisão informal integrada ao bairro Guaíra" },
  "uberaba-de-cima": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Subdivisão informal integrada ao bairro Uberaba" },
  "uberaba-de-baixo": { targetSlug: "uberaba", targetName: "Uberaba", reason: "Subdivisão informal integrada ao bairro Uberaba" },
  "sao-braz-velho": { targetSlug: "sao-braz", targetName: "São Braz", reason: "Subdivisão informal integrada ao bairro São Braz" }
};

/**
 * Cidades consolidadas:
 * - Curitiba -> unificada na landing principal canônica /desentupidora-curitiba
 * - 17 municípios periféricos distantes da RMC -> consolidados em /cobertura com atendimento sob consulta
 */
export const CONSOLIDATED_CITIES: Record<string, { targetPath: string; targetName: string; reason: string }> = {
  "curitiba": { targetPath: "/desentupidora-curitiba", targetName: "Curitiba", reason: "Unificação na landing page canônica e principal da capital" },
  "adrianopolis": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (130 km) - atendimento programado sob consulta" },
  "agudos-do-sul": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (65 km) - atendimento programado sob consulta" },
  "balsa-nova": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (50 km) - atendimento programado sob consulta" },
  "bocaiuva-do-sul": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (45 km) - atendimento programado sob consulta" },
  "campo-do-tenente": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (90 km) - atendimento programado sob consulta" },
  "cerro-azul": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (95 km) - atendimento programado sob consulta" },
  "contenda": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (45 km) - atendimento programado sob consulta" },
  "doutor-ulysses": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (135 km) - atendimento programado sob consulta" },
  "itaperucu": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (35 km) - atendimento programado sob consulta" },
  "lapa": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (70 km) - atendimento programado sob consulta" },
  "mandirituba": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (45 km) - atendimento programado sob consulta" },
  "pien": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (85 km) - atendimento programado sob consulta" },
  "quitandinha": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (65 km) - atendimento programado sob consulta" },
  "rio-branco-do-sul": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (35 km) - atendimento programado sob consulta" },
  "rio-negro": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (105 km) - atendimento programado sob consulta" },
  "tijucas-do-sul": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (60 km) - atendimento programado sob consulta" },
  "tunas-do-parana": { targetPath: "/cobertura", targetName: "Área de Cobertura RMC", reason: "Município periférico (75 km) - atendimento programado sob consulta" }
};

/**
 * 11 Municípios Metropolitanos Principais com atendimento diário comprovado
 */
export const CONFIRMED_METROPOLITAN_CITIES = [
  "São José dos Pinhais",
  "Pinhais",
  "Araucária",
  "Colombo",
  "Campo Largo",
  "Fazenda Rio Grande",
  "Almirante Tamandaré",
  "Piraquara",
  "Quatro Barras",
  "Campina Grande do Sul",
  "Campo Magro"
];

/**
 * Retorna o destino de consolidação de uma URL local ou null se ela for canônica e indexável.
 */
export function getConsolidation(type: string, slug: string): { targetPath: string; targetName: string; reason: string } | null {
  if (type === 'bairro') {
    const bairroMatch = CONSOLIDATED_BAIRROS[slug];
    if (bairroMatch) {
      // Se o destino for colombo (ex: vila-zumbi), redireciona para /local/cidade/colombo
      if (bairroMatch.targetSlug === 'colombo') {
        return {
          targetPath: '/local/cidade/colombo',
          targetName: 'Colombo',
          reason: bairroMatch.reason
        };
      }
      return {
        targetPath: `/local/bairro/${bairroMatch.targetSlug}`,
        targetName: bairroMatch.targetName,
        reason: bairroMatch.reason
      };
    }
  }

  if (type === 'cidade') {
    const cityMatch = CONSOLIDATED_CITIES[slug];
    if (cityMatch) {
      return cityMatch;
    }
  }

  return null;
}

/**
 * Retorna todas as regras de redirecionamento 301 para configuração de servidor e hospedagem estática
 */
export function getAllRedirectRules(): ConsolidationRule[] {
  const rules: ConsolidationRule[] = [];

  for (const [slug, data] of Object.entries(CONSOLIDATED_BAIRROS)) {
    const target = data.targetSlug === 'colombo' ? '/local/cidade/colombo' : `/local/bairro/${data.targetSlug}`;
    rules.push({
      fromPath: `/local/bairro/${slug}`,
      targetPath: target,
      targetName: data.targetName,
      reason: data.reason
    });
  }

  for (const [slug, data] of Object.entries(CONSOLIDATED_CITIES)) {
    rules.push({
      fromPath: `/local/cidade/${slug}`,
      targetPath: data.targetPath,
      targetName: data.targetName,
      reason: data.reason
    });
  }

  return rules;
}
