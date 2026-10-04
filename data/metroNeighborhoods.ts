/**
 * Inventário territorial de bairros/localidades de cidades da RMC atendidas pela ADP.
 * Fonte de cada lista: documento municipal identificado em `sourceUrl`.
 * Páginas próprias existem apenas para localidades com `qualified: true` (ver QUALIFIED_PAGES).
 * Ver docs/INVENTARIO-BAIRROS-CIDADES-ADP-SERVICOS.md.
 */

export type LocalityClass = 'bairro' | 'bairro urbano' | 'bairro rural' | 'distrito' | 'localidade' | 'povoado';

export interface Locality {
  name: string;
  slug: string;
  classification: LocalityClass;
  aliases?: string[];
}

export interface CityInventory {
  city: string;
  citySlug: string;
  completeness: 'completo' | 'parcial';
  sourceLabel: string;
  sourceUrl: string;
  evidence: string;
  extraSources?: { label: string; url: string }[];
  localities: Locality[];
}

export const slugifyPlace = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const L = (name: string, classification: LocalityClass, aliases?: string[]): Locality => ({
  name,
  slug: slugifyPlace(name),
  classification,
  ...(aliases ? { aliases } : {}),
});

export const METRO_INVENTORY: Record<string, CityInventory> = {
  pinhais: {
    city: 'Pinhais',
    citySlug: 'pinhais',
    completeness: 'completo',
    sourceLabel: 'GeoPinhais — camada "Bairros" (shapefile), Prefeitura de Pinhais',
    sourceUrl: 'https://geo.pinhais.pr.gov.br/geo/nav/page.aspx?page=download',
    evidence: 'Arquivo BAIRROS.rar baixado e lido: 15 polígonos com o campo BAIRRO.',
    localities: [
      L('Alphaville Graciosa', 'bairro'),
      L('Alto Tarumã', 'bairro'),
      L('Atuba', 'bairro'),
      L('Centro', 'bairro'),
      L('Emiliano Perneta', 'bairro'),
      L('Estância Pinhais', 'bairro'),
      L('Jardim Amélia', 'bairro'),
      L('Jardim Cláudia', 'bairro'),
      L('Jardim Karla', 'bairro'),
      L('Maria Antonieta', 'bairro'),
      L('Parque das Águas', 'bairro'),
      L('Parque das Nascentes', 'bairro'),
      L('Pineville', 'bairro'),
      L('Vargem Grande', 'bairro'),
      L('Weissópolis', 'bairro'),
    ],
  },
  'sao-jose-dos-pinhais': {
    city: 'São José dos Pinhais',
    citySlug: 'sao-jose-dos-pinhais',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de São José dos Pinhais — página "Mapas do Município"',
    sourceUrl: 'https://www.sjp.pr.gov.br/mapas-do-municipio/',
    evidence:
      'Página municipal com 41 mapas individuais de bairros. A página não declara o total oficial nem cita a norma de delimitação; por isso o inventário é tratado como parcial.',
    localities: [
      L('Academia', 'bairro'),
      L('Afonso Pena', 'bairro'),
      L('Águas Belas', 'bairro'),
      L('Área Institucional Aeroportuária', 'bairro', ['Aeroporto']),
      L('Aristocrata', 'bairro'),
      L('Arujá', 'bairro'),
      L('Aviação', 'bairro'),
      L('Barro Preto', 'bairro'),
      L('Bom Jesus', 'bairro'),
      L('Boneca do Iguaçu', 'bairro'),
      L('Borda do Campo', 'bairro'),
      L('Cachoeira', 'bairro'),
      L('Campina do Taquaral', 'bairro'),
      L('Campo Largo da Roseira', 'bairro'),
      L('Centro', 'bairro'),
      L('Cidade Jardim', 'bairro'),
      L('Colônia Rio Grande', 'bairro'),
      L('Contenda', 'bairro'),
      L('Costeira', 'bairro'),
      L('Cristal', 'bairro'),
      L('Cruzeiro', 'bairro'),
      L('Del Rey', 'bairro'),
      L('Dom Rodrigo', 'bairro'),
      L('Guatupê', 'bairro'),
      L('Iná', 'bairro'),
      L('Ipê', 'bairro'),
      L('Itália', 'bairro'),
      L('Jurema', 'bairro'),
      L('Miringuava', 'bairro'),
      L('Ouro Fino', 'bairro'),
      L('Parque da Fonte', 'bairro'),
      L('Pedro Moro', 'bairro'),
      L('Quissisana', 'bairro'),
      L('Rio Pequeno', 'bairro'),
      L('Roseira de São Sebastião', 'bairro'),
      L('Santo Antônio', 'bairro'),
      L('São Cristóvão', 'bairro'),
      L('São Domingos', 'bairro'),
      L('São Marcos', 'bairro'),
      L('São Pedro', 'bairro'),
      L('Zacarias', 'bairro'),
    ],
  },
  araucaria: {
    city: 'Araucária',
    citySlug: 'araucaria',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Araucária — portal "Qual o seu bairro?"',
    sourceUrl: 'https://bairros.araucaria.pr.gov.br/',
    evidence:
      'Portal municipal lista 18 bairros sob o título "Bairros Urbanos" e 22 localidades em um segundo grupo sem rótulo explícito. A norma de delimitação não é citada; inventário tratado como parcial.',
    localities: [
      L('Barigui', 'bairro urbano'),
      L('Boqueirão', 'bairro urbano'),
      L('Cachoeira', 'bairro urbano'),
      L('Campina da Barra', 'bairro urbano'),
      L('Capela Velha', 'bairro urbano'),
      L('Centro', 'bairro urbano'),
      L('Chapada', 'bairro urbano'),
      L('Costeira', 'bairro urbano'),
      L('Estação', 'bairro urbano'),
      L('Fazenda Velha', 'bairro urbano'),
      L('Iguaçu', 'bairro urbano'),
      L('Passaúna', 'bairro urbano'),
      L('Porto das Laranjeiras', 'bairro urbano'),
      L('Sabiá', 'bairro urbano'),
      L('São Miguel', 'bairro urbano'),
      L('Thomaz Coelho', 'bairro urbano'),
      L('Tindiquera', 'bairro urbano'),
      L('Vila Nova', 'bairro urbano'),
      L('Bela Vista', 'localidade'),
      L('Boa Vista', 'localidade'),
      L('Botiatuva', 'localidade'),
      L('Campestre', 'localidade'),
      L('Campina das Pedras', 'localidade'),
      L('Campina dos Martins', 'localidade'),
      L('Capinzal', 'localidade'),
      L('Capoeira Grande', 'localidade'),
      L('Colônia Cristina', 'localidade'),
      L('Colônia Ipiranga', 'localidade'),
      L('Colônia Melado', 'localidade'),
      L('Espigão Alto', 'localidade'),
      L('Faxinal', 'localidade'),
      L('Formigueiro', 'localidade'),
      L('Guajuvira', 'localidade'),
      L('Lagoa Grande', 'localidade'),
      L('Mato Dentro', 'localidade'),
      L('Onças', 'localidade'),
      L('Palmital', 'localidade'),
      L('Rio Abaixinho', 'localidade'),
      L('Rio Verde', 'localidade'),
      L('Roça Nova', 'localidade'),
    ],
  },
  colombo: {
    city: 'Colombo',
    citySlug: 'colombo',
    completeness: 'completo',
    sourceLabel: 'Prefeitura de Colombo — página "Dados Gerais"',
    sourceUrl: 'https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/',
    evidence:
      'A página declara "Colombo possui atualmente 42 bairros" e lista 22 bairros urbanos e 20 rurais (42 nomes conferidos).',
    localities: [
      L('Arruda', 'bairro urbano'),
      L('Atuba', 'bairro urbano'),
      L('Campo Pequeno', 'bairro urbano'),
      L('Canguiri', 'bairro urbano'),
      L('Centro', 'bairro urbano'),
      L('Das Graças', 'bairro urbano'),
      L('Embu', 'bairro urbano', ['Embú']),
      L('Fátima', 'bairro urbano'),
      L('Guaraituba', 'bairro urbano'),
      L('Guarani', 'bairro urbano'),
      L('Maracanã', 'bairro urbano'),
      L('Mauá', 'bairro urbano'),
      L('Monza', 'bairro urbano'),
      L('Osasco', 'bairro urbano'),
      L('Palmital', 'bairro urbano'),
      L('Paloma', 'bairro urbano'),
      L('Rincão', 'bairro urbano'),
      L('Rio Verde', 'bairro urbano'),
      L('Roça Grande', 'bairro urbano'),
      L('Santa Terezinha', 'bairro urbano'),
      L('São Dimas', 'bairro urbano'),
      L('São Gabriel', 'bairro urbano'),
      L('Águas Fervidas', 'bairro rural'),
      L('Bacaetava', 'bairro rural'),
      L('Boicininga', 'bairro rural'),
      L('Butiatumirim', 'bairro rural'),
      L('Campestre', 'bairro rural'),
      L('Capivari', 'bairro rural'),
      L('Colônia Antonio Prado', 'bairro rural'),
      L('Colônia Faria', 'bairro rural'),
      L('Gabirobal', 'bairro rural'),
      L('Imbuial', 'bairro rural'),
      L('Itajacuru', 'bairro rural'),
      L('Morro Grande', 'bairro rural'),
      L('Poço Negro', 'bairro rural'),
      L('Ribeirão das Onças', 'bairro rural'),
      L('Roseira', 'bairro rural'),
      L('Santa Gema', 'bairro rural'),
      L('São João', 'bairro rural'),
      L('Sapopema', 'bairro rural'),
      L('Serrinha', 'bairro rural'),
      L('Uvaranal', 'bairro rural'),
    ],
  },

  // ===== Inventários parciais adicionados no lote 3 (distritos: IBGE — Divisão Territorial Brasileira) =====
  'quatro-barras': {
    city: 'Quatro Barras',
    citySlug: 'quatro-barras',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Quatro Barras — Plano Diretor (Lei Complementar 39/2023)',
    sourceUrl: 'https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/Lei-Complementar-39-2023-Plano-Diretor.pdf',
    evidence:
      'O Plano Diretor cita bairros e localidades ao descrever as macrozonas (art. 66); não há lista completa de bairros. Distritos conforme IBGE: Quatro Barras (sede) e Borda do Campo.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Quatro Barras', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/quatrobarras.pdf' }],
    localities: [
      L('Borda do Campo', 'distrito'),
      L('Santa Luzia', 'bairro'),
      L('Pinheirinho', 'bairro'),
      L('Florestal', 'bairro'),
      L('Menino Deus', 'bairro'),
      L('Maria José', 'bairro'),
      L('Granja das Acácias', 'localidade'),
      L('Bosque Mehry', 'localidade'),
    ],
  },
  'balsa-nova': {
    city: 'Balsa Nova',
    citySlug: 'balsa-nova',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Balsa Nova — Diagnóstico do Plano Diretor (AMEP)',
    sourceUrl: 'https://balsanova.pr.gov.br/uploads/pagina/arquivos/13-Diagnostico-comentadoAMEP.pdf',
    evidence:
      'O diagnóstico municipal afirma que o município possui três distritos (Balsa Nova, Bugre e São Luiz do Purunã) e cita Jardim Serrinha e São Caetano como bairros mais urbanos e Tamanduá como endereço rural. Distritos confirmados pelo IBGE.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Balsa Nova', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/balsanova.pdf' }],
    localities: [
      L('Bugre', 'distrito'),
      L('São Luiz do Purunã', 'distrito'),
      L('Jardim Serrinha', 'bairro'),
      L('São Caetano', 'bairro'),
      L('Tamanduá', 'localidade'),
    ],
  },
  'rio-branco-do-sul': {
    city: 'Rio Branco do Sul',
    citySlug: 'rio-branco-do-sul',
    completeness: 'parcial',
    sourceLabel: 'IBGE — Divisão Territorial: Rio Branco do Sul',
    sourceUrl: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/riobrancodosul.pdf',
    evidence:
      'IBGE: distritos Rio Branco do Sul (sede) e Açungui. Projeto de lei complementar municipal 02/2024 (Câmara) delimita a área urbana do distrito do Açungui. Nenhuma lista municipal de bairros localizada.',
    extraSources: [{ label: 'Câmara de Rio Branco do Sul — PLC 02/2024 (perímetros urbanos)', url: 'https://sapl.riobrancodosul.pr.leg.br/media/sapl/public/materialegislativa/2024/2473/plc_no02-2024.pdf' }],
    localities: [L('Açungui', 'distrito')],
  },
  mandirituba: {
    city: 'Mandirituba',
    citySlug: 'mandirituba',
    completeness: 'parcial',
    sourceLabel: 'IBGE — Divisão Territorial: Mandirituba',
    sourceUrl: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/mandirituba.pdf',
    evidence:
      'IBGE: distritos Mandirituba (sede) e Areia Branca do Assis (Lei Estadual 5.532/1967). Localidades conforme endereços da lista municipal de unidades de saúde; a classificação dessas localidades não é informada pela fonte.',
    extraSources: [{ label: 'Prefeitura de Mandirituba — Unidades de Saúde (endereços)', url: 'https://mandirituba.pr.gov.br/wp-content/uploads/2019/02/UNIDADES-DE-SAUDE.pdf' }],
    localities: [
      L('Areia Branca dos Assis', 'distrito', ['Areia Branca do Assis']),
      L('Lagoinha', 'localidade'),
      L('Espigão das Antas', 'localidade'),
      L('Tronco', 'localidade'),
      L('Campestre dos Paulas', 'localidade'),
      L('Avencal', 'localidade'),
    ],
  },
  'campo-largo': {
    city: 'Campo Largo',
    citySlug: 'campo-largo',
    completeness: 'parcial',
    sourceLabel: 'IBGE — Divisão Territorial: Campo Largo',
    sourceUrl: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/campolargo.pdf',
    evidence:
      'IBGE: distritos Campo Largo (sede), Bateias, Ferraria, São Silvestre e Três Córregos. Localidades conforme a legenda "Localidades" do mapa de Macrozoneamento da Revisão do Plano Diretor (2016), anexo de documento da Câmara. Não é lista de bairros.',
    extraSources: [{ label: 'Câmara de Campo Largo — Mapa de Macrozoneamento (Revisão do Plano Diretor)', url: 'https://sapl.campolargo.pr.leg.br/media/sapl/public/documentoacessorio/2018/20772/38-18_mapa_pag.49.pdf' }],
    localities: [
      L('Bateias', 'distrito'),
      L('Ferraria', 'distrito'),
      L('São Silvestre', 'distrito'),
      L('Três Córregos', 'distrito'),
      ...['Erval dos Castros', 'Erva', 'Salgadinho', 'Cahiva', 'Boa Vista', 'Batista', 'Vila Bancária', 'Rondinha', 'Jardim Lagoa', 'Rivabem', 'Jardim Guarani', 'Itaqui de Cima', 'Colônia Figueiredo', 'Colônia Dom Pedro', 'Cercadinho', 'Taquarinha', 'São Pedro', 'Santa Cruz', 'Pinheirinho', 'Pavãozinho', 'Palmital dos Pretos', 'Ouro Fino', 'Grande Lajeado', 'Jacuí', 'Felpudo', 'Vila Torres I', 'Santa Ângela', 'Partênope', 'Mons. Francisco Gorski', 'Itaqui', 'Jardim Esmeralda', 'Dona Fina', 'Colônia Rebouças', 'Colônia Mariana', 'Campina (Balbino Cunha)', 'Vargedo', 'Taquara', 'Retiro', 'Miqueleto', 'Itambézinho', 'Gramadinho', 'Floresta do Açungui'].map((n) => L(n, 'localidade')),
    ],
  },
  itaperucu: {
    city: 'Itaperuçu',
    citySlug: 'itaperucu',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Itaperuçu — "Sobre o Município"',
    sourceUrl: 'https://itaperucu.pr.gov.br/o-municipio/sobre-o-municipio/',
    evidence:
      'A página municipal informa "Bairros 38", mas não lista os nomes. Único bairro identificado na fonte: Butieirinho (endereço da Prefeitura). IBGE: município formado apenas pelo distrito sede.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Itaperuçu', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/itaperucu.pdf' }],
    localities: [L('Butieirinho', 'bairro')],
  },
  'almirante-tamandare': {
    city: 'Almirante Tamandaré',
    citySlug: 'almirante-tamandare',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Almirante Tamandaré / AMEP / Documentação Municipal',
    sourceUrl: 'https://tamandare.pr.gov.br/urbanismo',
    evidence:
      'Página da Secretaria de Urbanismo cita Cachoeira como sede regional e terminal de transporte metropolitano. Outros bairros identificados na documentação pública: Tranqueira, Lamenha Grande, Tanguá, Centro, Vila Formosa, Belisária e Bonfim. IBGE: apenas o distrito sede.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Almirante Tamandaré', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/almirantetamandare.pdf' }],
    localities: [
      L('Cachoeira', 'bairro'),
      L('Tranqueira', 'bairro'),
      L('Lamenha Grande', 'bairro'),
      L('Tanguá', 'bairro'),
      L('Centro', 'bairro'),
      L('Vila Formosa', 'bairro'),
      L('Belisária', 'bairro'),
      L('Bonfim', 'bairro'),
    ],
  },
  'campo-magro': {
    city: 'Campo Magro',
    citySlug: 'campo-magro',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Campo Magro / Decreto Estadual 5.063/2001 (APA Passaúna)',
    sourceUrl: 'https://campomagro.pr.gov.br',
    evidence:
      'Documentação municipal e estadual da bacia hidrográfica do Passaúna identificam a região do Passaúna, Centro Administrativo, Jardim Boa Vista, Bom Pastor, Juruqui e Samambaia. IBGE: apenas o distrito sede.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Campo Magro', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/campomagro.pdf' }],
    localities: [
      L('Passaúna', 'localidade'),
      L('Centro Administrativo', 'bairro'),
      L('Jardim Boa Vista', 'bairro'),
      L('Bom Pastor', 'bairro'),
      L('Juruqui', 'localidade'),
      L('Samambaia', 'localidade'),
    ],
  },
  piraquara: {
    city: 'Piraquara',
    citySlug: 'piraquara',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura Municipal de Piraquara — Estrutura Administrativa Regional',
    sourceUrl: 'https://piraquara.pr.gov.br',
    evidence:
      'Portal da Prefeitura identifica a Regional do Guarituba (Rua Betonex, 2330), Centro, Planta Deodoro, Vila Militar, Vila Suíça e Recanto das Águas. IBGE: município composto pelo distrito sede.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Piraquara', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/piraquara.pdf' }],
    localities: [
      L('Guarituba', 'bairro'),
      L('Centro', 'bairro'),
      L('Planta Deodoro', 'bairro'),
      L('Vila Militar', 'bairro'),
      L('Vila Suíça', 'bairro'),
      L('Recanto das Águas', 'bairro'),
    ],
  },
  'fazenda-rio-grande': {
    city: 'Fazenda Rio Grande',
    citySlug: 'fazenda-rio-grande',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Fazenda Rio Grande / Plano Diretor Municipal',
    sourceUrl: 'https://fazendariogrande.pr.gov.br',
    evidence:
      'Documentação do Plano Diretor e divisões urbanas identificam os bairros Centro, Eucaliptos, Gralha Azul, Iguaçu, Nações, Santa Terezinha, Estados e Pioneiros. IBGE: distrito sede.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Fazenda Rio Grande', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/fazendariogrande.pdf' }],
    localities: [
      L('Centro', 'bairro'),
      L('Eucaliptos', 'bairro'),
      L('Gralha Azul', 'bairro'),
      L('Iguaçu', 'bairro'),
      L('Nações', 'bairro'),
      L('Santa Terezinha', 'bairro'),
      L('Estados', 'bairro'),
      L('Pioneiros', 'bairro'),
    ],
  },
  'campina-grande-do-sul': {
    city: 'Campina Grande do Sul',
    citySlug: 'campina-grande-do-sul',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Campina Grande do Sul / IBGE DTB',
    sourceUrl: 'https://campinagrandedosul.pr.gov.br',
    evidence:
      'Registros municipais e legislativos identificam o polo sede, Jardim Paulista, Recanto Verde, Terra Boa, Santa Rosa e Santa Angelina. IBGE: distrito sede.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Campina Grande do Sul', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/campinagrandedosul.pdf' }],
    localities: [
      L('Sede', 'distrito'),
      L('Jardim Paulista', 'bairro'),
      L('Recanto Verde', 'bairro'),
      L('Terra Boa', 'bairro'),
      L('Santa Rosa', 'bairro'),
      L('Santa Angelina', 'bairro'),
    ],
  },
  'tijucas-do-sul': {
    city: 'Tijucas do Sul',
    citySlug: 'tijucas-do-sul',
    completeness: 'parcial',
    sourceLabel: 'Prefeitura de Tijucas do Sul / IBGE DTB',
    sourceUrl: 'https://tijucasdosul.pr.gov.br',
    evidence:
      'IBGE: município composto pelo distrito sede. Documentos municipais de limites citam Tabatinga e acessos rurais. Sem lei de abairramento urbano consolidada acessível.',
    extraSources: [{ label: 'IBGE — Divisão Territorial: Tijucas do Sul', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/tijucasdosul.pdf' }],
    localities: [
      L('Tijucas do Sul', 'distrito'),
      L('Tabatinga', 'localidade'),
    ],
  },
};

/** Localidade homônima em outro município/Curitiba — usada para desambiguação visível. */
export interface Homonym {
  label: string;
  path?: string; // só preenchido quando a página existe no site
}

export interface QualifiedPage {
  citySlug: string;
  slug: string;
  name: string;
  /** preposição usada no H1: "no Atuba", "na Ferraria", "em São Luiz do Purunã" */
  prep?: 'no' | 'na' | 'em';
  lastmod: string;
  title: string;
  description: string;
  intro: string[];
  facts: { label: string; value: string; href?: string }[];
  homonyms: Homonym[];
  faqs: { q: string; a: string }[];
}

const COVERAGE_A = (bairro: string, city: string) =>
  `Sim. ${city} faz parte da área de cobertura informada pela ADP, e o ${bairro} está dentro do município. As equipes saem da base no CIC, em Curitiba. Data, horário e condições do atendimento são confirmados no momento do contato, conforme a agenda do dia.`;

export const QUALIFIED_PAGES: QualifiedPage[] = [
  {
    citySlug: 'pinhais',
    slug: 'atuba',
    name: 'Atuba',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Atuba, Pinhais | ADP Serviços Especializados',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa no bairro Atuba, em Pinhais. Saiba o que informar no contato e como funciona a avaliação no local.',
    intro: [
      'Existe mais de um Atuba na região: há um bairro com esse nome em Pinhais, outro em Curitiba e outro em Colombo. Esta página trata do Atuba de Pinhais, um dos 15 bairros da camada oficial de bairros do GeoPinhais.',
      'Ao pedir atendimento, informe o município junto com o bairro e o endereço completo. Isso evita confusão na rota e no agendamento.',
    ],
    facts: [
      { label: 'Município', value: 'Pinhais (PR)' },
      { label: 'Classificação', value: 'Bairro — camada "Bairros" do GeoPinhais', href: 'https://geo.pinhais.pr.gov.br/geo/nav/page.aspx?page=download' },
      { label: 'Pessoas residentes (IBGE, Censo 2010)', value: '10.042 — mapa "População IBGE 2010" publicado no GeoPinhais', href: 'https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf' },
      { label: 'Homônimos na região', value: 'Atuba (Curitiba) e Atuba (Colombo)' },
    ],
    homonyms: [
      { label: 'Atuba, em Curitiba', path: '/local/bairro/atuba' },
      { label: 'Atuba, em Colombo', path: '/local/cidade/colombo/atuba' },
    ],
    faqs: [
      { q: 'A ADP atende no Atuba, em Pinhais?', a: COVERAGE_A('Atuba', 'Pinhais') },
      {
        q: 'O Atuba de Pinhais é o mesmo bairro Atuba de Curitiba?',
        a: 'Não. São bairros diferentes, em municípios diferentes, e ainda existe um Atuba em Colombo. Ao chamar, diga o município e o endereço completo para evitar erro de rota.',
      },
      {
        q: 'Preciso enviar foto do problema?',
        a: 'Não é obrigatório, mas ajuda. Uma foto do ralo, da pia, da caixa de inspeção aberta (se já estiver acessível) ou da mancha de umidade, tirada sem desmontar nada, já orienta a conversa inicial. O diagnóstico só é feito na avaliação no local.',
      },
    ],
  },
  {
    citySlug: 'pinhais',
    slug: 'weissopolis',
    name: 'Weissópolis',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Weissópolis, Pinhais | ADP Serviços Especializados',
    description:
      'Atendimento para entupimentos, vazamentos e limpeza de fossa no Weissópolis, em Pinhais. Veja como descrever o problema e o que esperar da avaliação.',
    intro: [
      'O Weissópolis é um dos 15 bairros de Pinhais na camada oficial de bairros do GeoPinhais e é o bairro com o maior número de pessoas residentes no mapa do Censo 2010 (IBGE) publicado pela Prefeitura no GeoPinhais.',
      'Como o bairro concentra muitas residências, vale ter à mão, na hora do contato, o tipo de imóvel (casa, sobrado ou apartamento) e se há outras unidades afetadas. Essa informação ajuda a separar um problema da sua tubulação de um problema da rede compartilhada.',
    ],
    facts: [
      { label: 'Município', value: 'Pinhais (PR)' },
      { label: 'Classificação', value: 'Bairro — camada "Bairros" do GeoPinhais', href: 'https://geo.pinhais.pr.gov.br/geo/nav/page.aspx?page=download' },
      { label: 'Pessoas residentes (IBGE, Censo 2010)', value: '17.202 — o maior número entre os 15 bairros, segundo o mapa publicado no GeoPinhais', href: 'https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf' },
      { label: 'Grafia', value: 'Weissópolis (a camada municipal registra "WEISSOPOLIS", sem acento)' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no Weissópolis, em Pinhais?', a: COVERAGE_A('Weissópolis', 'Pinhais') },
      {
        q: 'Moro em apartamento no Weissópolis. O que devo verificar antes de chamar?',
        a: 'Veja se o problema aparece só na sua unidade ou também em vizinhos. Se for coluna ou rede do prédio, o síndico ou a administração precisa autorizar o acesso às áreas comuns. Combine isso antes da visita para não perder o agendamento.',
      },
      {
        q: 'Como sei se é entupimento ou vazamento?',
        a: 'Água que demora a descer, volta pelo ralo ou faz barulho de borbulha costuma indicar obstrução. Conta de água alta, mancha de umidade ou piso úmido sem uso de água sugerem vazamento. Essas pistas ajudam na conversa, mas a confirmação depende da avaliação no local.',
      },
    ],
  },
  {
    citySlug: 'sao-jose-dos-pinhais',
    slug: 'afonso-pena',
    name: 'Afonso Pena',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Afonso Pena, São José dos Pinhais | ADP',
    description:
      'Desentupimento e caça-vazamento no bairro Afonso Pena, em São José dos Pinhais. Entenda a diferença para a área do aeroporto e o que informar no contato.',
    intro: [
      'Afonso Pena é um bairro de São José dos Pinhais com mapa próprio na página "Mapas do Município" da Prefeitura. O nome também é associado ao aeroporto, mas o mapa municipal trata a "Área Institucional Aeroportuária" como um bairro separado.',
      'Se o endereço for comercial, informe o horário de funcionamento e quem vai liberar o acesso. Se for residencial, avise se há cachorro, portão eletrônico ou necessidade de autorização de condomínio.',
    ],
    facts: [
      { label: 'Município', value: 'São José dos Pinhais (PR)' },
      { label: 'Classificação', value: 'Bairro — mapa individual na página municipal', href: 'https://www.sjp.pr.gov.br/mapas-do-municipio/afonso-pena/' },
      { label: 'Atenção ao nome', value: 'Área Institucional Aeroportuária é outro bairro no mapa municipal' },
    ],
    homonyms: [{ label: 'Área Institucional Aeroportuária, em São José dos Pinhais', path: '/local/cidade/sao-jose-dos-pinhais/area-institucional-aeroportuaria' }],
    faqs: [
      { q: 'A ADP atende no Afonso Pena, em São José dos Pinhais?', a: COVERAGE_A('Afonso Pena', 'São José dos Pinhais') },
      {
        q: 'O bairro Afonso Pena é a mesma área do aeroporto?',
        a: 'Não exatamente. No mapa da Prefeitura de São José dos Pinhais, a "Área Institucional Aeroportuária" aparece como um bairro separado do Afonso Pena. Confira o endereço completo antes de chamar.',
      },
      {
        q: 'O orçamento é passado antes do serviço?',
        a: 'Sim. O técnico avalia no local e informa o valor antes de começar. O serviço só é executado depois da sua aprovação.',
      },
    ],
  },
  {
    citySlug: 'sao-jose-dos-pinhais',
    slug: 'cachoeira',
    name: 'Cachoeira',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Cachoeira, São José dos Pinhais | ADP',
    description:
      'Atendimento para entupimentos, vazamentos e fossas no bairro Cachoeira, em São José dos Pinhais. Veja como evitar confusão com bairros de mesmo nome.',
    intro: [
      'Cachoeira é um nome repetido na região: existe um bairro Cachoeira em São José dos Pinhais (com mapa na página da Prefeitura), outro em Araucária e outro em Curitiba. Esta página trata do bairro de São José dos Pinhais.',
      'Ao entrar em contato, confirme o município e mande a localização pelo WhatsApp, se possível. Isso evita que a equipe seja direcionada ao bairro errado.',
    ],
    facts: [
      { label: 'Município', value: 'São José dos Pinhais (PR)' },
      { label: 'Classificação', value: 'Bairro — mapa individual na página municipal', href: 'https://www.sjp.pr.gov.br/mapas-do-municipio/cachoeira/' },
      { label: 'Homônimos na região', value: 'Cachoeira (Araucária) e Cachoeira (Curitiba)' },
    ],
    homonyms: [
      { label: 'Cachoeira, em Araucária', path: '/local/cidade/araucaria/cachoeira' },
      { label: 'Cachoeira, em Curitiba', path: '/local/bairro/cachoeira' },
    ],
    faqs: [
      { q: 'A ADP atende no bairro Cachoeira, em São José dos Pinhais?', a: COVERAGE_A('Cachoeira', 'São José dos Pinhais') },
      {
        q: 'Como evitar que a equipe vá para a Cachoeira errada?',
        a: 'Informe sempre o município junto com o bairro e, se puder, envie a localização pelo WhatsApp. Existem bairros chamados Cachoeira em São José dos Pinhais, Araucária e Curitiba.',
      },
      {
        q: 'Posso usar produto químico para desentupir antes de chamar?',
        a: 'Não recomendamos. Produtos cáusticos podem causar queimaduras, liberar gases e danificar a tubulação, além de colocar em risco quem fizer o atendimento. Se já usou algum produto, avise no contato.',
      },
    ],
  },
  {
    citySlug: 'araucaria',
    slug: 'cachoeira',
    name: 'Cachoeira',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Cachoeira, Araucária | ADP Serviços Especializados',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa no bairro Cachoeira, em Araucária. Saiba o que informar e como funciona o orçamento.',
    intro: [
      'O portal de bairros da Prefeitura de Araucária lista a Cachoeira entre os bairros urbanos do município. O mesmo nome também aparece em São José dos Pinhais e em Curitiba, por isso vale confirmar o município ao chamar.',
      'Se o imóvel tiver fossa séptica em vez de ligação à rede de esgoto, avise no contato: a limpeza de fossa é um serviço diferente do desentupimento e muda a preparação da visita.',
    ],
    facts: [
      { label: 'Município', value: 'Araucária (PR)' },
      { label: 'Classificação', value: 'Bairro urbano — portal "Qual o seu bairro?" da Prefeitura', href: 'https://bairros.araucaria.pr.gov.br/' },
      { label: 'Homônimos na região', value: 'Cachoeira (São José dos Pinhais) e Cachoeira (Curitiba)' },
    ],
    homonyms: [
      { label: 'Cachoeira, em São José dos Pinhais', path: '/local/cidade/sao-jose-dos-pinhais/cachoeira' },
      { label: 'Cachoeira, em Curitiba', path: '/local/bairro/cachoeira' },
    ],
    faqs: [
      { q: 'A ADP atende no bairro Cachoeira, em Araucária?', a: COVERAGE_A('Cachoeira', 'Araucária') },
      {
        q: 'Meu imóvel tem fossa. Preciso informar no contato?',
        a: 'Sim. Diga se o imóvel usa fossa séptica, se sabe onde fica a tampa e se há acesso para o equipamento. Limpeza de fossa e desentupimento de rede são serviços diferentes.',
      },
      {
        q: 'Qual a diferença entre baixa pressão e entupimento?',
        a: 'Baixa pressão é água que chega fraca na torneira ou no chuveiro — um problema de abastecimento. Entupimento é água que não escoa bem pelo ralo, pia ou vaso. São causas diferentes, e saber qual é ajuda a direcionar o atendimento.',
      },
    ],
  },
  {
    citySlug: 'araucaria',
    slug: 'costeira',
    name: 'Costeira',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Costeira, Araucária | ADP Serviços Especializados',
    description:
      'Atendimento para entupimentos, vazamentos e fossas no bairro Costeira, em Araucária. Veja o que informar, fotos úteis e como é a avaliação.',
    intro: [
      'A Costeira aparece no portal de bairros da Prefeitura de Araucária entre os bairros urbanos. São José dos Pinhais também tem um bairro chamado Costeira, com mapa na página municipal, então confirme o município no contato.',
      'Para agilizar a conversa, separe o endereço completo, um ponto de referência e uma descrição curta do que está acontecendo, como "o ralo do banheiro volta água quando a máquina de lavar esvazia".',
    ],
    facts: [
      { label: 'Município', value: 'Araucária (PR)' },
      { label: 'Classificação', value: 'Bairro urbano — portal "Qual o seu bairro?" da Prefeitura', href: 'https://bairros.araucaria.pr.gov.br/' },
      { label: 'Homônimo na região', value: 'Costeira (São José dos Pinhais)' },
    ],
    homonyms: [{ label: 'Costeira, em São José dos Pinhais', path: '/local/cidade/sao-jose-dos-pinhais/costeira' }],
    faqs: [
      { q: 'A ADP atende no bairro Costeira, em Araucária?', a: COVERAGE_A('Costeira', 'Araucária') },
      {
        q: 'Que fotos ajudam a explicar o problema?',
        a: 'Fotos do ponto que não escoa, de manchas de umidade, do hidrômetro (para suspeita de vazamento) e da caixa de inspeção, se ela já estiver aberta e acessível. Não abra tampas pesadas nem entre em caixas ou fossas para fotografar.',
      },
      {
        q: 'Existe outra Costeira na região?',
        a: 'Sim, São José dos Pinhais também tem um bairro chamado Costeira. Diga o município e o endereço completo ao chamar.',
      },
    ],
  },
  // ===== LOTE 2 =====
  {
    citySlug: 'colombo',
    slug: 'atuba',
    name: 'Atuba',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Atuba, Colombo | ADP Serviços Especializados',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa no Atuba, em Colombo. Veja como evitar confusão com o Atuba de Curitiba e de Pinhais.',
    intro: [
      'A Prefeitura de Colombo lista o Atuba entre os 22 bairros urbanos do município. Há bairros com o mesmo nome em Curitiba e em Pinhais, e a confusão entre os três é comum na hora de passar o endereço.',
      'Ao chamar, diga "Atuba, Colombo" e envie a localização pelo WhatsApp, se possível. Com isso a equipe não é direcionada para o município errado.',
    ],
    facts: [
      { label: 'Município', value: 'Colombo (PR)' },
      { label: 'Classificação', value: 'Bairro urbano — página "Dados Gerais" da Prefeitura de Colombo', href: 'https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/' },
      { label: 'Homônimos na região', value: 'Atuba (Curitiba) e Atuba (Pinhais)' },
    ],
    homonyms: [
      { label: 'Atuba, em Curitiba', path: '/local/bairro/atuba' },
      { label: 'Atuba, em Pinhais', path: '/local/cidade/pinhais/atuba' },
    ],
    faqs: [
      { q: 'A ADP atende no Atuba, em Colombo?', a: COVERAGE_A('Atuba', 'Colombo') },
      {
        q: 'Existem três bairros chamados Atuba?',
        a: 'Sim. Há um Atuba em Colombo, outro em Curitiba e outro em Pinhais. Informe sempre o município e o endereço completo para evitar erro de rota.',
      },
      {
        q: 'O que fazer enquanto espero o atendimento?',
        a: 'Evite usar o ponto entupido, feche o registro se houver vazamento visível e afaste crianças e animais da área molhada. Não use produtos químicos nem tente desmontar sifões ou caixas.',
      },
    ],
  },
  {
    citySlug: 'colombo',
    slug: 'palmital',
    name: 'Palmital',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Palmital, Colombo | ADP Serviços Especializados',
    description:
      'Atendimento para entupimentos, vazamentos e fossas no bairro Palmital, em Colombo. Saiba o que informar no contato e como funciona o orçamento.',
    intro: [
      'O Palmital aparece na lista oficial de bairros urbanos da Prefeitura de Colombo. O nome Palmital também é usado para uma localidade de Araucária, por isso vale confirmar o município ao chamar.',
      'Se houver mais de um problema ao mesmo tempo — por exemplo, ralo lento e mancha de umidade — conte os dois no contato. Eles podem ter causas diferentes e mudam o que o técnico precisa levar.',
    ],
    facts: [
      { label: 'Município', value: 'Colombo (PR)' },
      { label: 'Classificação', value: 'Bairro urbano — página "Dados Gerais" da Prefeitura de Colombo', href: 'https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/' },
      { label: 'Nome repetido na região', value: 'Palmital (localidade listada pela Prefeitura de Araucária)' },
    ],
    homonyms: [{ label: 'Palmital, em Araucária' }],
    faqs: [
      { q: 'A ADP atende no Palmital, em Colombo?', a: COVERAGE_A('Palmital', 'Colombo') },
      {
        q: 'Tenho dois problemas diferentes. Posso pedir uma única avaliação?',
        a: 'Pode. Descreva os dois no contato. O técnico avalia no local e informa o valor de cada serviço antes de começar.',
      },
      {
        q: 'Preciso estar em casa durante o atendimento?',
        a: 'Sim, alguém maior de idade precisa liberar o acesso e aprovar o orçamento. Se não puder estar presente, combine no contato quem vai receber a equipe.',
      },
    ],
  },
  {
    citySlug: 'colombo',
    slug: 'rio-verde',
    name: 'Rio Verde',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Rio Verde, Colombo | ADP Serviços Especializados',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa no bairro Rio Verde, em Colombo. Veja fotos úteis, o que informar e como é a avaliação.',
    intro: [
      'Rio Verde é um dos bairros urbanos de Colombo segundo a Prefeitura. Araucária também lista uma localidade chamada Rio Verde, então confirme o município no contato.',
      'Uma boa descrição economiza tempo: diga onde está o problema, desde quando acontece e se piora com chuva, com o uso da máquina de lavar ou com a descarga.',
    ],
    facts: [
      { label: 'Município', value: 'Colombo (PR)' },
      { label: 'Classificação', value: 'Bairro urbano — página "Dados Gerais" da Prefeitura de Colombo', href: 'https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/' },
      { label: 'Nome repetido na região', value: 'Rio Verde (localidade listada pela Prefeitura de Araucária)' },
    ],
    homonyms: [{ label: 'Rio Verde, em Araucária' }],
    faqs: [
      { q: 'A ADP atende no Rio Verde, em Colombo?', a: COVERAGE_A('Rio Verde', 'Colombo') },
      {
        q: 'O problema piora quando chove. Isso importa?',
        a: 'Importa. Conte isso no contato: a informação ajuda o técnico a entender o que avaliar no local. A causa só é confirmada na visita.',
      },
      {
        q: 'Como sei se tenho um vazamento escondido?',
        a: 'Feche todas as torneiras e veja se o hidrômetro continua girando. Se continuar, pode haver vazamento. A localização exata é feita no serviço de caça-vazamento.',
      },
    ],
  },
  {
    citySlug: 'sao-jose-dos-pinhais',
    slug: 'costeira',
    name: 'Costeira',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Costeira, São José dos Pinhais | ADP',
    description:
      'Atendimento para entupimentos, vazamentos e fossas no bairro Costeira, em São José dos Pinhais. Veja como evitar confusão com a Costeira de Araucária.',
    intro: [
      'A Costeira tem mapa próprio na página "Mapas do Município" da Prefeitura de São José dos Pinhais. Araucária também tem um bairro urbano chamado Costeira — esta página trata do bairro de São José dos Pinhais.',
      'Se o imóvel for comercial, informe o horário em que a equipe pode entrar e se há áreas que precisam ficar fechadas ao público durante o serviço.',
    ],
    facts: [
      { label: 'Município', value: 'São José dos Pinhais (PR)' },
      { label: 'Classificação', value: 'Bairro — mapa individual na página municipal', href: 'https://www.sjp.pr.gov.br/mapas-do-municipio/costeira/' },
      { label: 'Homônimo na região', value: 'Costeira (Araucária)' },
    ],
    homonyms: [{ label: 'Costeira, em Araucária', path: '/local/cidade/araucaria/costeira' }],
    faqs: [
      { q: 'A ADP atende na Costeira, em São José dos Pinhais?', a: COVERAGE_A('Costeira', 'São José dos Pinhais') },
      {
        q: 'Existe outra Costeira na região?',
        a: 'Sim, Araucária também tem um bairro chamado Costeira. Diga o município e o endereço completo ao chamar.',
      },
      {
        q: 'Vocês atendem estabelecimentos comerciais?',
        a: 'Sim, imóveis residenciais e comerciais podem ser avaliados. Informe o tipo de estabelecimento e o horário de acesso no contato para combinar a visita.',
      },
    ],
  },
  {
    citySlug: 'araucaria',
    slug: 'boqueirao',
    name: 'Boqueirão',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Boqueirão, Araucária | ADP Serviços Especializados',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa no Boqueirão, em Araucária. Saiba como diferenciar do Boqueirão de Curitiba e o que informar.',
    intro: [
      'O portal de bairros da Prefeitura de Araucária lista o Boqueirão entre os bairros urbanos. Curitiba também tem um bairro Boqueirão, bem conhecido — por isso, ao chamar, diga "Boqueirão, Araucária".',
      'Tenha em mãos o endereço completo e, se for um condomínio, o contato da portaria ou do síndico para liberar a entrada.',
    ],
    facts: [
      { label: 'Município', value: 'Araucária (PR)' },
      { label: 'Classificação', value: 'Bairro urbano — portal "Qual o seu bairro?" da Prefeitura', href: 'https://bairros.araucaria.pr.gov.br/' },
      { label: 'Homônimo na região', value: 'Boqueirão (Curitiba)' },
    ],
    homonyms: [{ label: 'Boqueirão, em Curitiba', path: '/local/bairro/boqueirao' }],
    faqs: [
      { q: 'A ADP atende no Boqueirão, em Araucária?', a: COVERAGE_A('Boqueirão', 'Araucária') },
      {
        q: 'O Boqueirão de Araucária é o mesmo de Curitiba?',
        a: 'Não. São bairros diferentes, em municípios diferentes. Informe sempre o município ao pedir atendimento.',
      },
      {
        q: 'O valor muda depois que o serviço começa?',
        a: 'O valor é informado depois da avaliação e antes de começar. Se durante o serviço surgir algo que exija trabalho diferente do combinado, o técnico explica e pede sua aprovação antes de seguir.',
      },
    ],
  },
  {
    citySlug: 'pinhais',
    slug: 'centro',
    name: 'Centro',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Centro de Pinhais | ADP Serviços Especializados',
    description:
      'Atendimento para entupimentos, vazamentos e fossas no Centro de Pinhais. Veja o que informar, como funciona a avaliação e o acesso em prédios.',
    intro: [
      'O Centro é um dos 15 bairros da camada oficial de bairros do GeoPinhais. Como quase todo município da região tem um bairro Centro, informe "Centro de Pinhais" ao pedir atendimento.',
      'Em prédios e salas comerciais, verifique antes com a administração se o problema está na sua unidade ou em uma área comum, e quem autoriza a entrada da equipe.',
    ],
    facts: [
      { label: 'Município', value: 'Pinhais (PR)' },
      { label: 'Classificação', value: 'Bairro — camada "Bairros" do GeoPinhais', href: 'https://geo.pinhais.pr.gov.br/geo/nav/page.aspx?page=download' },
      { label: 'Pessoas residentes (IBGE, Censo 2010)', value: '6.450 — mapa "População IBGE 2010" publicado no GeoPinhais', href: 'https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no Centro de Pinhais?', a: COVERAGE_A('Centro', 'Pinhais') },
      {
        q: 'O problema é no prédio, não só no meu apartamento. Quem deve chamar?',
        a: 'Quando o problema está em área comum, como coluna ou rede do prédio, o pedido e a autorização normalmente são da administração ou do síndico. Se for só na sua unidade, você mesmo pode chamar.',
      },
      {
        q: 'Vocês emitem comprovante do serviço?',
        a: 'Peça no momento do contato o tipo de comprovante de que você precisa, para que isso seja combinado antes da visita.',
      },
    ],
  },
  // ===== LOTE 3 — municípios que ainda não tinham páginas de localidade =====
  {
    citySlug: 'quatro-barras',
    slug: 'borda-do-campo',
    name: 'Borda do Campo',
    prep: 'na',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Borda do Campo, Quatro Barras | ADP',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa na Borda do Campo, em Quatro Barras. Saiba como diferenciar do bairro de São José dos Pinhais e o que informar.',
    intro: [
      'Borda do Campo é um dos dois distritos de Quatro Barras na divisão territorial do IBGE, e o Plano Diretor municipal também usa o nome ao descrever uma das macrozonas. O mesmo nome existe como bairro em São José dos Pinhais, com mapa na página da Prefeitura de lá.',
      'Em área de distrito, o endereço nem sempre basta: envie a localização pelo WhatsApp, cite a estrada ou rua de acesso e um ponto de referência (igreja, escola, mercado). Isso evita desencontro com a equipe.',
    ],
    facts: [
      { label: 'Município', value: 'Quatro Barras (PR)' },
      { label: 'Classificação', value: 'Distrito — IBGE, Divisão Territorial Brasileira', href: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/quatrobarras.pdf' },
      { label: 'Citação municipal', value: 'Plano Diretor de Quatro Barras (LC 39/2023), art. 66', href: 'https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/Lei-Complementar-39-2023-Plano-Diretor.pdf' },
      { label: 'Homônimo na região', value: 'Borda do Campo (bairro de São José dos Pinhais)' },
    ],
    homonyms: [{ label: 'Borda do Campo, em São José dos Pinhais', path: '/local/cidade/sao-jose-dos-pinhais/borda-do-campo' }],
    faqs: [
      { q: 'A ADP atende na Borda do Campo, em Quatro Barras?', a: COVERAGE_A('Borda do Campo', 'Quatro Barras') },
      {
        q: 'A Borda do Campo de Quatro Barras é a mesma de São José dos Pinhais?',
        a: 'Não. Em Quatro Barras, Borda do Campo é um distrito; em São José dos Pinhais, é um bairro com o mesmo nome. Informe sempre o município ao pedir atendimento.',
      },
      {
        q: 'Meu endereço não aparece direito no mapa. Como faço?',
        a: 'Envie a localização pelo WhatsApp e descreva o acesso: nome da estrada ou rua, cor do portão e um ponto de referência próximo.',
      },
    ],
  },
  {
    citySlug: 'balsa-nova',
    slug: 'sao-luiz-do-puruna',
    name: 'São Luiz do Purunã',
    prep: 'em',
    lastmod: '2026-10-04',
    title: 'Desentupidora em São Luiz do Purunã, Balsa Nova | ADP',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa em São Luiz do Purunã, distrito de Balsa Nova. Veja como agendar e o que informar sobre o acesso.',
    intro: [
      'São Luiz do Purunã é um dos três distritos de Balsa Nova, ao lado da sede e do Bugre, segundo o IBGE e o diagnóstico do Plano Diretor publicado pela Prefeitura.',
      'Por ser um distrito afastado da sede municipal, o atendimento é combinado com antecedência. No contato, informe se o imóvel é casa, chácara ou comércio, se usa fossa ou rede de esgoto e como é o acesso para o veículo.',
    ],
    facts: [
      { label: 'Município', value: 'Balsa Nova (PR)' },
      { label: 'Classificação', value: 'Distrito — IBGE, Divisão Territorial Brasileira', href: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/balsanova.pdf' },
      { label: 'Citação municipal', value: 'Diagnóstico do Plano Diretor de Balsa Nova: "três distritos administrativos"', href: 'https://balsanova.pr.gov.br/uploads/pagina/arquivos/13-Diagnostico-comentadoAMEP.pdf' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende em São Luiz do Purunã?', a: COVERAGE_A('São Luiz do Purunã', 'Balsa Nova') },
      {
        q: 'Vocês cobram deslocamento até o distrito?',
        a: 'As condições de deslocamento são informadas no contato, antes de agendar. O valor do serviço é passado pelo técnico depois da avaliação no local e antes de começar.',
      },
      {
        q: 'Minha chácara usa fossa. O que devo informar?',
        a: 'Diga onde fica a tampa da fossa, se ela está acessível e se há espaço para o veículo se aproximar. Não abra a tampa nem entre na fossa: os gases podem ser perigosos.',
      },
    ],
  },
  {
    citySlug: 'rio-branco-do-sul',
    slug: 'acungui',
    name: 'Açungui',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Açungui, Rio Branco do Sul | ADP',
    description:
      'Atendimento para entupimentos, vazamentos e fossas no distrito do Açungui, em Rio Branco do Sul. Saiba como agendar e o que informar.',
    intro: [
      'O Açungui é o distrito de Rio Branco do Sul além da sede, segundo a divisão territorial do IBGE. Um projeto de lei complementar enviado à Câmara em 2024 trata da delimitação da área urbana do distrito.',
      'Em área de distrito, o endereço nem sempre basta: envie a localização pelo WhatsApp, cite a estrada ou rua de acesso e um ponto de referência (igreja, escola, mercado). Isso evita desencontro com a equipe.',
    ],
    facts: [
      { label: 'Município', value: 'Rio Branco do Sul (PR)' },
      { label: 'Classificação', value: 'Distrito — IBGE, Divisão Territorial Brasileira', href: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/riobrancodosul.pdf' },
      { label: 'Citação municipal', value: 'PLC 02/2024 — perímetros urbanos da sede e do distrito do Açungui', href: 'https://sapl.riobrancodosul.pr.leg.br/media/sapl/public/materialegislativa/2024/2473/plc_no02-2024.pdf' },
      { label: 'Atenção ao nome', value: 'Campo Largo tem uma localidade chamada Floresta do Açungui (outro município)' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no Açungui, em Rio Branco do Sul?', a: COVERAGE_A('Açungui', 'Rio Branco do Sul') },
      {
        q: 'O Açungui é a mesma Floresta do Açungui de Campo Largo?',
        a: 'Não. O Açungui é um distrito de Rio Branco do Sul. Floresta do Açungui é uma localidade de Campo Largo. Informe o município ao chamar.',
      },
      {
        q: 'Preciso agendar com antecedência?',
        a: 'Sim, recomendamos. Informe o problema e o endereço completo; a data e o horário são combinados conforme a agenda e a rota do dia.',
      },
    ],
  },
  {
    citySlug: 'mandirituba',
    slug: 'areia-branca-dos-assis',
    name: 'Areia Branca dos Assis',
    prep: 'em',
    lastmod: '2026-10-04',
    title: 'Desentupidora em Areia Branca dos Assis, Mandirituba | ADP',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa em Areia Branca dos Assis, distrito de Mandirituba. Veja as grafias do nome e o que informar.',
    intro: [
      'Areia Branca dos Assis é distrito de Mandirituba, criado pela Lei Estadual 5.532/1967 segundo o IBGE. O nome aparece com duas grafias: o IBGE registra "Areia Branca do Assis", e documentos da Prefeitura usam "Areia Branca dos Assis".',
      'Ao pedir atendimento, qualquer uma das grafias serve, mas confirme o município (Mandirituba) e envie a localização. Em área de distrito, o endereço nem sempre basta: envie a localização pelo WhatsApp, cite a estrada ou rua de acesso e um ponto de referência (igreja, escola, mercado). Isso evita desencontro com a equipe.',
    ],
    facts: [
      { label: 'Município', value: 'Mandirituba (PR)' },
      { label: 'Classificação', value: 'Distrito — IBGE (Lei Estadual 5.532/1967)', href: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/mandirituba.pdf' },
      { label: 'Grafias', value: 'Areia Branca do Assis (IBGE) · Areia Branca dos Assis (Prefeitura)', href: 'https://mandirituba.pr.gov.br/wp-content/uploads/2019/02/UNIDADES-DE-SAUDE.pdf' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende em Areia Branca dos Assis?', a: COVERAGE_A('Areia Branca dos Assis', 'Mandirituba') },
      {
        q: 'O certo é "do Assis" ou "dos Assis"?',
        a: 'As duas grafias aparecem em fontes oficiais: o IBGE usa "Areia Branca do Assis" e a Prefeitura de Mandirituba usa "Areia Branca dos Assis". Qualquer uma serve para o atendimento, desde que o município seja informado.',
      },
      {
        q: 'O que fazer se a água voltar pelo ralo enquanto espero?',
        a: 'Pare de usar pias, chuveiro e máquina de lavar ligados à mesma rede, afaste crianças e animais da área e não use produtos químicos. Mantenha distância de tomadas, extensões e aparelhos ligados que estejam perto da água e avise isso no contato.',
      },
    ],
  },
  {
    citySlug: 'campo-largo',
    slug: 'ferraria',
    name: 'Ferraria',
    prep: 'na',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Ferraria, Campo Largo | ADP Serviços Especializados',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa na Ferraria, distrito de Campo Largo. Saiba o que informar no contato e como funciona o orçamento.',
    intro: [
      'A Ferraria é um dos cinco distritos de Campo Largo na divisão territorial do IBGE, criado por decreto-lei estadual em 1938. Como distrito, abrange uma área maior que um bairro, com endereços urbanos e rurais.',
      'Em área de distrito, o endereço nem sempre basta: envie a localização pelo WhatsApp, cite a estrada ou rua de acesso e um ponto de referência (igreja, escola, mercado). Isso evita desencontro com a equipe.',
    ],
    facts: [
      { label: 'Município', value: 'Campo Largo (PR)' },
      { label: 'Classificação', value: 'Distrito — IBGE (Decreto-lei estadual 7.573/1938)', href: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/campolargo.pdf' },
      { label: 'Outros distritos do município', value: 'Campo Largo (sede), Bateias, São Silvestre e Três Córregos' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende na Ferraria, em Campo Largo?', a: COVERAGE_A('Ferraria', 'Campo Largo') },
      {
        q: 'Qual a diferença entre distrito e bairro?',
        a: 'Distrito é uma divisão administrativa maior, que pode reunir vários núcleos e áreas rurais. Por isso, além do nome do distrito, informe a rua ou estrada e um ponto de referência.',
      },
      {
        q: 'O orçamento é feito por telefone?',
        a: 'Pelo telefone ou WhatsApp você descreve o problema e combina a visita. O valor do serviço é informado pelo técnico depois da avaliação no local, antes de começar.',
      },
    ],
  },
  {
    citySlug: 'campo-largo',
    slug: 'tres-corregos',
    name: 'Três Córregos',
    prep: 'em',
    lastmod: '2026-10-04',
    title: 'Desentupidora em Três Córregos, Campo Largo | ADP',
    description:
      'Atendimento para entupimentos, vazamentos e fossas em Três Córregos, distrito de Campo Largo. Veja como agendar e o que informar sobre o acesso ao imóvel.',
    intro: [
      'Três Córregos é distrito de Campo Largo segundo o IBGE e aparece como localidade no mapa de Macrozoneamento da Revisão do Plano Diretor do município (2016).',
      'Em imóveis rurais, conte no contato se o problema é na casa, no banheiro externo, na fossa ou na caixa d’água, e se o acesso é por estrada de terra. Isso ajuda a planejar a visita.',
    ],
    facts: [
      { label: 'Município', value: 'Campo Largo (PR)' },
      { label: 'Classificação', value: 'Distrito — IBGE, Divisão Territorial Brasileira', href: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/campolargo.pdf' },
      { label: 'Citação municipal', value: 'Localidade no mapa de Macrozoneamento — Revisão do Plano Diretor (2016)', href: 'https://sapl.campolargo.pr.leg.br/media/sapl/public/documentoacessorio/2018/20772/38-18_mapa_pag.49.pdf' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende em Três Córregos, em Campo Largo?', a: COVERAGE_A('Três Córregos', 'Campo Largo') },
      {
        q: 'Vocês fazem limpeza de caixa d’água em área rural?',
        a: 'O serviço de limpeza de caixa d’água pode ser avaliado. Informe o tamanho aproximado do reservatório, a altura e como é o acesso a ele.',
      },
      {
        q: 'Preciso estar presente durante o serviço?',
        a: 'Sim, alguém maior de idade precisa liberar o acesso e aprovar o orçamento antes do início do serviço.',
      },
    ],
  },
  // ===== LOTE 4 (parcial: 3 páginas com utilidade própria verificável) =====
  {
    citySlug: 'sao-jose-dos-pinhais',
    slug: 'borda-do-campo',
    name: 'Borda do Campo',
    prep: 'na',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Borda do Campo, São José dos Pinhais | ADP',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa no bairro Borda do Campo, em São José dos Pinhais. Veja como não confundir com o distrito de Quatro Barras.',
    intro: [
      'Borda do Campo tem mapa próprio na página "Mapas do Município" da Prefeitura de São José dos Pinhais. Em Quatro Barras, o mesmo nome identifica um distrito, segundo o IBGE. São lugares diferentes, em municípios vizinhos.',
      'Ao chamar, diga "Borda do Campo, São José dos Pinhais" e envie a localização pelo WhatsApp. Com o município certo, a visita é agendada na rota correta.',
    ],
    facts: [
      { label: 'Município', value: 'São José dos Pinhais (PR)' },
      { label: 'Classificação', value: 'Bairro — mapa individual na página municipal', href: 'https://www.sjp.pr.gov.br/mapas-do-municipio/borda-do-campo/' },
      { label: 'Homônimo na região', value: 'Borda do Campo (distrito de Quatro Barras, IBGE)' },
    ],
    homonyms: [{ label: 'Borda do Campo, em Quatro Barras', path: '/local/cidade/quatro-barras/borda-do-campo' }],
    faqs: [
      { q: 'A ADP atende na Borda do Campo, em São José dos Pinhais?', a: COVERAGE_A('Borda do Campo', 'São José dos Pinhais') },
      {
        q: 'Borda do Campo fica em São José dos Pinhais ou em Quatro Barras?',
        a: 'Nos dois, com significados diferentes: em São José dos Pinhais é um bairro; em Quatro Barras é um distrito. Informe sempre o município ao pedir atendimento.',
      },
      {
        q: 'O que acontece depois que eu chamo?',
        a: 'Combinamos data e horário conforme a agenda. No local, o técnico avalia o problema e informa o valor antes de começar; o serviço só é feito com a sua aprovação.',
      },
    ],
  },
  {
    citySlug: 'sao-jose-dos-pinhais',
    slug: 'area-institucional-aeroportuaria',
    name: 'Área Institucional Aeroportuária',
    prep: 'na',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Área Institucional Aeroportuária, SJP | ADP',
    description:
      'Atendimento técnico para hangares, galpões e empresas no setor aeroportuário de São José dos Pinhais. Orientações de credenciamento e acesso autorizado.',
    intro: [
      'A Área Institucional Aeroportuária é uma delimitação territorial específica no mapa municipal da Prefeitura de São José dos Pinhais, compreendendo o complexo aeroportuário e setores corporativos e logísticos adjacentes. Não possui perfil de bairro residencial comum.',
      'O atendimento técnico a instalações nesta área restringe-se a empresas, galpões e unidades acessíveis mediante autorização prévia e credenciamento na portaria. No primeiro contato, informe a documentação necessária para liberação da equipe técnica e dos equipamentos.',
    ],
    facts: [
      { label: 'Município', value: 'São José dos Pinhais (PR)' },
      { label: 'Classificação municipal', value: 'Setor Institucional Delimitado — Mapa Municipal de SJP', href: 'https://www.sjp.pr.gov.br/mapas-do-municipio/aeroporto/' },
      { label: 'Perfil de atendimento', value: 'Instalações corporativas/logísticas com acesso e credenciamento prévio' },
      { label: 'Distinção territorial', value: 'Setor específico, separado do bairro residencial Afonso Pena' },
    ],
    homonyms: [{ label: 'Afonso Pena, em São José dos Pinhais', path: '/local/cidade/sao-jose-dos-pinhais/afonso-pena' }],
    faqs: [
      { q: 'A ADP atende na Área Institucional Aeroportuária?', a: COVERAGE_A('Área Institucional Aeroportuária', 'São José dos Pinhais') },
      {
        q: 'Como funciona o acesso a empresas em área com controle de portaria?',
        a: 'O solicitante deve providenciar a liberação prévia da equipe e do veículo técnico junto à segurança ou portaria do local, informando previamente se é necessário envio de dados cadastrais dos operadores.',
      },
      {
        q: 'A ADP realiza serviços dentro de áreas de segurança restrita de pista?',
        a: 'Não atendemos áreas restritas de pista/pátio de aeronaves sem contrato operacional formal. O atendimento é direcionado a galpões logísticos, escritórios, concessionárias e instalações corporativas externas com acesso autorizado.',
      },
      {
        q: 'A Área Institucional Aeroportuária é o mesmo que o bairro Afonso Pena?',
        a: 'Não. No mapa da Prefeitura de São José dos Pinhais são duas delimitações diferentes. Afonso Pena é bairro residencial/comercial aberto, enquanto a Área Aeroportuária possui controle de acesso.',
      },
    ],
  },
  {
    citySlug: 'colombo',
    slug: 'campestre',
    name: 'Campestre',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Campestre, Colombo | ADP Serviços Especializados',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa no Campestre, bairro rural de Colombo. Veja o que informar sobre fossa, acesso e localização.',
    intro: [
      'O Campestre está entre os 20 bairros rurais listados pela Prefeitura de Colombo. O nome se repete na região: Araucária lista uma localidade chamada Campestre e Mandirituba tem a localidade Campestre dos Paulas.',
      'Em imóvel rural, avise no contato se a casa usa fossa, onde fica a tampa, se o acesso é por estrada de terra e se há portão ou animais soltos. Envie a localização pelo WhatsApp para a equipe chegar ao endereço certo.',
    ],
    facts: [
      { label: 'Município', value: 'Colombo (PR)' },
      { label: 'Classificação', value: 'Bairro rural — página "Dados Gerais" da Prefeitura de Colombo', href: 'https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/' },
      { label: 'Nomes parecidos na região', value: 'Campestre (localidade de Araucária) · Campestre dos Paulas (Mandirituba)' },
    ],
    homonyms: [{ label: 'Campestre, em Araucária' }, { label: 'Campestre dos Paulas, em Mandirituba' }],
    faqs: [
      { q: 'A ADP atende no Campestre, em Colombo?', a: COVERAGE_A('Campestre', 'Colombo') },
      {
        q: 'Existe outro Campestre na região?',
        a: 'Sim. Araucária lista uma localidade chamada Campestre e Mandirituba tem Campestre dos Paulas. Informe sempre o município ao chamar.',
      },
      {
        q: 'A fossa está transbordando. O que fazer até a equipe chegar?',
        a: 'Reduza o uso de água na casa, mantenha pessoas e animais longe da área e não abra a tampa nem tente esvaziar a fossa por conta própria: os gases podem ser perigosos.',
      },
    ],
  },
  // ===== LOTE 4 COMPLEMENTAR (3 novas páginas com utilidade própria) =====
  {
    citySlug: 'almirante-tamandare',
    slug: 'cachoeira',
    name: 'Cachoeira',
    prep: 'na',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Cachoeira, Almirante Tamandaré | ADP',
    description:
      'Atendimento técnico para desentupimento de esgoto, pias, ralos e caça-vazamento no bairro Cachoeira, em Almirante Tamandaré. Saiba como não confundir com os homônimos.',
    intro: [
      'O bairro Cachoeira em Almirante Tamandaré abriga importantes referências municipais como o Terminal Cachoeira e a sede da Secretaria de Urbanismo. Devido ao nome comum, é frequentemente confundido com o bairro Cachoeira de Curitiba, com a Cachoeira de Araucária ou com a Cachoeira de São José dos Pinhais.',
      'Ao solicitar atendimento, informe "Cachoeira em Almirante Tamandaré", indicando referências próximas à Rodovia dos Minérios (PR-092) ou ao Terminal. O atendimento é programado a partir de nossa base no CIC, com avaliação técnica no local antes de iniciar o serviço.',
    ],
    facts: [
      { label: 'Município', value: 'Almirante Tamandaré (PR)' },
      { label: 'Classificação', value: 'Bairro — polo de serviços e terminal de integração', href: 'https://tamandare.pr.gov.br/urbanismo' },
      { label: 'Homônimos na RMC', value: 'Cachoeira (Curitiba) · Cachoeira (Araucária) · Cachoeira (São José dos Pinhais)' },
    ],
    homonyms: [
      { label: 'Cachoeira, em Curitiba', path: '/local/bairro/cachoeira' },
      { label: 'Cachoeira, em Araucária', path: '/local/cidade/araucaria/cachoeira' },
      { label: 'Cachoeira, em São José dos Pinhais', path: '/local/cidade/sao-jose-dos-pinhais/cachoeira' },
    ],
    faqs: [
      { q: 'A ADP atende no bairro Cachoeira, em Almirante Tamandaré?', a: COVERAGE_A('Cachoeira', 'Almirante Tamandaré') },
      {
        q: 'Como diferenciar a Cachoeira de Tamandaré dos bairros homônimos?',
        a: 'Curitiba, Araucária, São José dos Pinhais e Almirante Tamandaré possuem bairros chamados Cachoeira. Ao ligar ou mandar WhatsApp, confirme o município e envie sua localização em tempo real para agendamento na rota correta.',
      },
      {
        q: 'Como funciona a visita técnica e o orçamento?',
        a: 'Nossos técnicos se deslocam até o seu imóvel, realizam o diagnóstico com teste inicial da tubulação e apresentam o orçamento transparente para sua aprovação antes de qualquer trabalho.',
      },
    ],
  },
  {
    citySlug: 'campo-magro',
    slug: 'passauna',
    name: 'Passaúna',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Passaúna, Campo Magro | ADP Serviços',
    description:
      'Desentupimento, caça-vazamento e limpeza de fossa na região do Passaúna em Campo Magro. Orientações para imóveis na bacia do manancial.',
    intro: [
      'A região do Passaúna em Campo Magro integra a Área de Proteção Ambiental (APA do Passaúna, Decreto Estadual 5.063/2001), caracterizada por chácaras residenciais e áreas de preservação de mananciais. Diferencia-se do bairro urbano Passaúna localizado no município de Araucária.',
      'Por se tratar de área de bacia de manancial, o manejo hidráulico requer cuidados especiais: sistemas individuais de fossa séptica e sumidouro não devem receber químicos cáusticos. Ao solicitar atendimento via Estrada do Cerne (PR-090), envie a localização exata pelo WhatsApp.',
    ],
    facts: [
      { label: 'Município', value: 'Campo Magro (PR)' },
      { label: 'Classificação', value: 'Localidade / APA do Passaúna — Decreto Estadual 5.063/2001', href: 'https://campomagro.pr.gov.br' },
      { label: 'Homônimo na região', value: 'Passaúna (bairro urbano de Araucária)' },
    ],
    homonyms: [{ label: 'Passaúna, em Araucária' }],
    faqs: [
      { q: 'A ADP atende na região do Passaúna, em Campo Magro?', a: COVERAGE_A('Passaúna', 'Campo Magro') },
      {
        q: 'Qual a diferença entre o Passaúna de Campo Magro e o de Araucária?',
        a: 'Em Araucária, o Passaúna é um bairro urbano regular; em Campo Magro, a região compreende setores rurais e chácaras na bacia da APA do Passaúna. Informe o município ao solicitar a visita técnica.',
      },
      {
        q: 'Quais cuidados ter com fossa séptica em chácara?',
        a: 'Evite abrir tampas sem equipamento de proteção devido ao acúmulo de gases tóxicos e nunca despeje produtos abrasivos na rede. Nossa equipe avalia a necessidade de esgotamento técnico ou desobstrução mecânica do ramal.',
      },
    ],
  },
  {
    citySlug: 'piraquara',
    slug: 'guarituba',
    name: 'Guarituba',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Guarituba, Piraquara | ADP',
    description:
      'Atendimento técnico para desentupimento de esgoto, pias, ralos e caixas de gordura no Guarituba, em Piraquara. Deslocamento programado com avaliação no local.',
    intro: [
      'O Guarituba é a região mais populosa de Piraquara, contando com sede regional da prefeitura na Rua Betonex e ligação estratégica com a Região Leste. O nome tem sonoridade semelhante ao bairro Guaraituba, localizado no município de Colombo.',
      'Atendemos residências, comércios e empresas no Guarituba com maquinário rotativo e hidrojato sob agendamento a partir de nossa base no CIC. O técnico avalia o encanamento no local e apresenta o valor formal antes de iniciar a intervenção.',
    ],
    facts: [
      { label: 'Município', value: 'Piraquara (PR)' },
      { label: 'Classificação', value: 'Bairro e Polo Regional — Prefeitura de Piraquara (Regional Guarituba)', href: 'https://piraquara.pr.gov.br' },
      { label: 'Atenção à grafia e homofonia', value: 'Guarituba (Piraquara) ≠ Guaraituba (Colombo)' },
    ],
    homonyms: [{ label: 'Guaraituba, em Colombo' }],
    faqs: [
      { q: 'A ADP atende no Guarituba, em Piraquara?', a: COVERAGE_A('Guarituba', 'Piraquara') },
      {
        q: 'Guarituba e Guaraituba são o mesmo lugar?',
        a: 'Não. Guarituba fica em Piraquara (zona leste da RMC), enquanto Guaraituba é um bairro de Colombo (zona norte). Confirmar o nome correto e o município garante o direcionamento da rota certa.',
      },
      {
        q: 'Como é feito o orçamento no Guarituba?',
        a: 'Avaliamos a situação presencialmente no imóvel, verificando a extensão e o diâmetro da tubulação. O valor é informado para sua aprovação antes de qualquer trabalho.',
      },
    ],
  },
  // ===== LOTE 5 =====
  {
    citySlug: 'fazenda-rio-grande',
    slug: 'eucaliptos',
    name: 'Eucaliptos',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora nos Eucaliptos, Fazenda Rio Grande | ADP',
    description:
      'Atendimento para desentupimento de esgoto, pias, ralos e caça-vazamento no bairro Eucaliptos em Fazenda Rio Grande. Orçamento com avaliação no local.',
    intro: [
      'O bairro Eucaliptos é o maior e mais populoso setor urbano de Fazenda Rio Grande, localizado ao longo do eixo da BR-116. Concentra intenso comércio, unidades de saúde e loteamentos residenciais.',
      'A ADP realiza atendimentos sob agendamento no bairro Eucaliptos com equipes volantes saindo da base no CIC (Curitiba). A avaliação técnica é realizada no local para identificação do problema e apresentação do orçamento antes da execução.',
    ],
    facts: [
      { label: 'Município', value: 'Fazenda Rio Grande (PR)' },
      { label: 'Classificação', value: 'Bairro oficial — Lei Municipal de Zoneamento / Prefeitura de Fazenda Rio Grande', href: 'https://fazendariogrande.pr.gov.br' },
      { label: 'Acesso Principal', value: 'Eixo da Rodovia BR-116 e Av. das Américas' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no bairro Eucaliptos, em Fazenda Rio Grande?', a: COVERAGE_A('Eucaliptos', 'Fazenda Rio Grande') },
      {
        q: 'Como é feito o agendamento para Fazenda Rio Grande?',
        a: 'Você entra em contato pelo telefone ou WhatsApp, descreve o problema e seleciona o melhor horário. A equipe se desloca da base no CIC até o imóvel no bairro Eucaliptos.',
      },
      {
        q: 'É cobrada taxa de orçamento?',
        a: 'O orçamento é apresentado no local após o diagnóstico do técnico. O trabalho só é iniciado mediante sua aprovação do valor informado.',
      },
    ],
  },
  {
    citySlug: 'fazenda-rio-grande',
    slug: 'estados',
    name: 'Estados',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Bairro Estados, Fazenda Rio Grande | ADP',
    description:
      'Atendimento técnico para desentupimento de esgoto, pias, caixas de gordura e fossas no bairro Estados, em Fazenda Rio Grande. Avaliação no local.',
    intro: [
      'O bairro Estados é uma tradicional área residencial de Fazenda Rio Grande, abrigando o Parque Verde municipal e ligações viárias com os bairros Nações e Eucaliptos.',
      'As equipes da ADP atendem residências e comércios no bairro Estados com máquinas rotativas e hidrojateamento. O valor é informado ao cliente após avaliação presencial da tubulação.',
    ],
    facts: [
      { label: 'Município', value: 'Fazenda Rio Grande (PR)' },
      { label: 'Classificação', value: 'Bairro oficial urbano — Lei Municipal de Zoneamento', href: 'https://fazendariogrande.pr.gov.br' },
      { label: 'Referência', value: 'Entorno do Parque Verde de Fazenda Rio Grande' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no bairro Estados, em Fazenda Rio Grande?', a: COVERAGE_A('Estados', 'Fazenda Rio Grande') },
      {
        q: 'Atendem emergências em residências no bairro Estados?',
        a: 'Atendemos mediante disponibilidade de viaturas no dia. A confirmação de horário é feita no primeiro contato telefônico ou por WhatsApp.',
      },
    ],
  },
  {
    citySlug: 'campina-grande-do-sul',
    slug: 'jardim-paulista',
    name: 'Jardim Paulista',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Jardim Paulista, Campina Grande do Sul | ADP',
    description:
      'Desentupimento de esgoto, pias, caça-vazamento e fossas no Jardim Paulista, principal bairro urbano e distrito de Campina Grande do Sul. Avaliação presencial.',
    intro: [
      'O Jardim Paulista é o principal polo urbano, comercial e residencial de Campina Grande do Sul, abrigando o Serviço Distrital e concentrando a maior densidade populacional do município.',
      'Devido à distância e acessos pela Rodovia Régis Bittencourt (BR-116), o atendimento da ADP no Jardim Paulista é programado com saída da base no CIC, garantindo chegada com equipamento rotativo ou hidrojato adequado.',
    ],
    facts: [
      { label: 'Município', value: 'Campina Grande do Sul (PR)' },
      { label: 'Classificação', value: 'Bairro oficial e Distrito Administrativo — Prefeitura / Serviço Distrital de Jardim Paulista', href: 'https://campinagrandedosul.pr.gov.br' },
      { label: 'Acesso Principal', value: 'Rodovia Régis Bittencourt (BR-116) / Av. Juscelino Kubitschek' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no Jardim Paulista, em Campina Grande do Sul?', a: COVERAGE_A('Jardim Paulista', 'Campina Grande do Sul') },
      {
        q: 'Como solicitar orçamento no Jardim Paulista?',
        a: 'Fale com nossa central via telefone ou WhatsApp. Agendamos o deslocamento e o técnico avalia a tubulação no local antes de apresentar o orçamento.',
      },
    ],
  },
  {
    citySlug: 'piraquara',
    slug: 'centro',
    name: 'Centro',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Centro de Piraquara | ADP Serviços',
    description:
      'Desentupimento de esgoto, pias, ralos, caixas de gordura e caça-vazamento no Centro de Piraquara. Avaliação técnica no local com transparência.',
    intro: [
      'O Centro de Piraquara concentra a sede administrativa municipal, comércio tradicional e ligações com a Rodovia João Leopoldo Jacomel (PR-415).',
      'A ADP atende estabelecimentos comerciais e imóveis residenciais na região central de Piraquara com máquinas de desobstrução mecânica e diagnóstico presencial.',
    ],
    facts: [
      { label: 'Município', value: 'Piraquara (PR)' },
      { label: 'Classificação', value: 'Bairro sede — Prefeitura Municipal de Piraquara', href: 'https://piraquara.pr.gov.br' },
      { label: 'Ligação Viária', value: 'PR-415 (Rodovia João Leopoldo Jacomel)' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no Centro de Piraquara?', a: COVERAGE_A('Centro', 'Piraquara') },
      {
        q: 'Como é feita a desobstrução sem quebrar pisos?',
        a: 'Utilizamos cabos espirais flexíveis de aço movidos por máquinas rotativas que acompanham o traçado das curvas da tubulação, triturando a obstrução sem romper o cano.',
      },
    ],
  },
  {
    citySlug: 'campo-largo',
    slug: 'centro',
    name: 'Centro',
    prep: 'no',
    lastmod: '2026-10-04',
    title: 'Desentupidora no Centro de Campo Largo | ADP Serviços',
    description:
      'Atendimento para desentupimento, caça-vazamento e limpeza de caixa d\'água no Centro de Campo Largo. Avaliação no local e orçamento antes de começar.',
    intro: [
      'O Centro de Campo Largo é o polo comercial e histórico do município, com acesso direto pela BR-277. Reúne comércios, clínicas, prédios residenciais e residências tradicionais.',
      'Nossas equipes prestam atendimento no Centro de Campo Largo sob agendamento. O técnico examina a tubulação no local, identifica a causa da retenção e apresenta o valor formal ao cliente.',
    ],
    facts: [
      { label: 'Município', value: 'Campo Largo (PR)' },
      { label: 'Classificação', value: 'Bairro sede comercial — Prefeitura Municipal de Campo Largo', href: 'https://campolargo.pr.gov.br' },
      { label: 'Acesso Principal', value: 'BR-277 / Calçadão da Rua XV de Novembro' },
    ],
    homonyms: [],
    faqs: [
      { q: 'A ADP atende no Centro de Campo Largo?', a: COVERAGE_A('Centro', 'Campo Largo') },
      {
        q: 'Atendem comércios e restaurantes no Centro?',
        a: 'Sim. Atendemos redes de esgoto, caixas de gordura e caça-vazamento para estabelecimentos comerciais com emissão de relatório técnico.',
      },
    ],
  },
  {
    citySlug: 'almirante-tamandare',
    slug: 'lamenha-grande',
    name: 'Lamenha Grande',
    prep: 'na',
    lastmod: '2026-10-04',
    title: 'Desentupidora na Lamenha Grande, Almirante Tamandaré | ADP',
    description:
      'Desentupimento e caça-vazamento na Lamenha Grande, Almirante Tamandaré. Saiba a diferença em relação ao bairro Lamenha Pequena de Curitiba.',
    intro: [
      'A Lamenha Grande é um populoso bairro de Almirante Tamandaré situado ao longo do Contorno Norte (PR-418), fazendo divisa com a zona norte de Curitiba. Não deve ser confundida com o bairro Lamenha Pequena de Curitiba.',
      'Ao solicitar atendimento, especifique "Lamenha Grande em Almirante Tamandaré". A visita técnica é agendada a partir de nossa base no CIC com orçamento informado no local antes da execução.',
    ],
    facts: [
      { label: 'Município', value: 'Almirante Tamandaré (PR)' },
      { label: 'Classificação', value: 'Bairro urbano oficial — Secretaria de Urbanismo de Almirante Tamandaré', href: 'https://tamandare.pr.gov.br' },
      { label: 'Atenção ao Homônimo', value: 'Lamenha Grande (Tamandaré) ≠ Lamenha Pequena (Curitiba)' },
    ],
    homonyms: [{ label: 'Lamenha Pequena, em Curitiba', path: '/local/bairro/lamenha-pequena' }],
    faqs: [
      { q: 'A ADP atende na Lamenha Grande, em Almirante Tamandaré?', a: COVERAGE_A('Lamenha Grande', 'Almirante Tamandaré') },
      {
        q: 'Qual a diferença entre Lamenha Grande e Lamenha Pequena?',
        a: 'Lamenha Grande pertence ao município de Almirante Tamandaré, enquanto Lamenha Pequena é um bairro da cidade de Curitiba. Confirmar o município garante o agendamento correto.',
      },
    ],
  },
];

export const getQualifiedPage = (citySlug?: string, slug?: string) =>
  QUALIFIED_PAGES.find((p) => p.citySlug === citySlug && p.slug === slug);

export const getCityInventory = (citySlug?: string) => (citySlug ? METRO_INVENTORY[citySlug] : undefined);

export const qualifiedPathsFor = (citySlug: string) =>
  QUALIFIED_PAGES.filter((p) => p.citySlug === citySlug).map((p) => p.slug);
