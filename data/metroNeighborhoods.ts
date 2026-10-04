/**
 * Inventário territorial de bairros/localidades de cidades da RMC atendidas pela ADP.
 * Fonte de cada lista: documento municipal identificado em `sourceUrl`.
 * Páginas próprias existem apenas para localidades com `qualified: true` (ver QUALIFIED_PAGES).
 * Ver docs/INVENTARIO-BAIRROS-CIDADES-ADP-SERVICOS.md.
 */

export type LocalityClass = 'bairro' | 'bairro urbano' | 'bairro rural' | 'distrito' | 'localidade';

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
    homonyms: [],
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
];

export const getQualifiedPage = (citySlug?: string, slug?: string) =>
  QUALIFIED_PAGES.find((p) => p.citySlug === citySlug && p.slug === slug);

export const getCityInventory = (citySlug?: string) => (citySlug ? METRO_INVENTORY[citySlug] : undefined);

export const qualifiedPathsFor = (citySlug: string) =>
  QUALIFIED_PAGES.filter((p) => p.citySlug === citySlug).map((p) => p.slug);
