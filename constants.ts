import { LocationData } from './types';

export const COMPANY_NAME = "ADP Desentupidora";
export const COMPANY_LEGAL_NAME = "ADP Serviços de Desentupimento";
export const COMPANY_ADDRESS = "Rua Luiz Maltaca, 36";
export const COMPANY_NEIGHBORHOOD = "CIC";
export const COMPANY_CITY = "Curitiba";
export const COMPANY_STATE = "PR";
export const COMPANY_POSTAL_CODE = "81310-020";
export const COMPANY_COUNTRY = "BR";
export const COMPANY_GEO = {
  latitude: -25.4950,
  longitude: -49.3300
};

export const PHONE_DISPLAY = "(41) 3345-1194";
export const PHONE_LINK = "tel:4133451194";
export const WHATSAPP_DISPLAY = "(41) 98517-1966";
export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%20achei%20seu%20site%20no%20Google%20gostaria%20de%20saber%20sobre%3A%20%E2%9E%A1%EF%B8%8F";

export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface ServiceItem {
  title: string;
  slug: string;
  shortDesc: string;
}

export const SERVICES: ServiceItem[] = [
  { 
    title: "Desentupimento de Esgoto", 
    slug: "desentupimento-de-esgoto",
    shortDesc: "Desobstrução técnica de redes coletoras, ramais e tubulações de esgoto residencial e comercial."
  },
  { 
    title: "Limpeza de Fossa", 
    slug: "limpeza-de-fossa",
    shortDesc: "Esgotamento e limpeza técnica de fossas sépticas, sumidouros e caixas de decantação com caminhão auto-vácuo."
  },
  { 
    title: "Caça Vazamentos", 
    slug: "caca-vazamentos",
    shortDesc: "Localização precisa de vazamentos não visíveis em tubulações pressurizadas através de geofone eletrônico."
  },
  { 
    title: "Hidrojateamento", 
    slug: "hidrojateamento",
    shortDesc: "Limpeza profunda e desincrustação de redes com jatos de água em alta pressão."
  },
  { 
    title: "Limpeza de Caixa d'Água", 
    slug: "limpeza-de-caixa-dagua",
    shortDesc: "Higienização e desinfecção periódica de reservatórios de água conforme padrões sanitários."
  },
  { 
    title: "Vídeo Inspeção", 
    slug: "video-inspecao",
    shortDesc: "Diagnóstico por câmera robotizada interna para verificação estrutural e localização de obstruções."
  }
];

export const CITIES: string[] = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", 
  "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", 
  "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", 
  "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", 
  "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", 
  "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const NEIGHBORHOODS: string[] = [
  // Bairros Oficiais e Regiões de Curitiba
  "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da Rua XV", "Alto da XV", 
  "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Batel Soho", 
  "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Boqueirão de Baixo", "Boqueirão de Cima",
  "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", 
  "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", 
  "Centro Cívico", "Centro Histórico", "CIC", "CIC Norte", "CIC Central", "CIC Sul", 
  "Cidade Industrial", "Cristo Rei", "Ecoville", "Fanny", "Fazendinha", "Ganchinho", 
  "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Schaffer", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", 
  "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", 
  "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", 
  "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", 
  "Seminário", "Sítio Cercado", "Taboão", "Tanguá", "Tarumã", "Tatuquara", "Tingui", 
  "Uberaba", "Umbará", "Vila Izabel", "Vila Oficinas", "Vista Alegre", "Xaxim",
  
  // Vilas e Conjuntos Específicos
  "Vila Parolin", "Vila Torres", "Vila Sabará", "Vila Zumbi", "Abranches de Baixo", 
  "Abranches de Cima", "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Verde", 
  "Vila São José", "Vila Santa Helena", "Vila Industrial", "Vila Conquista", "Vila União", 
  "Vila Nova Esperança", "Vila Osternack", "Vila Nova", "Vila São Domingos", "Vila Audi União", 
  "Vila Becker", "Vila Copel", "Vila Eletrosul", "Vila Trabalhador", "Vila São João", 
  "Vila São Miguel", "Vila Santo Antônio", "Vila Nova Primavera", "Vila Araucária", 
  "Vila Concórdia", "Vila São Judas Tadeu", "Vila São Mateus", "Vila São Pedro", 
  "Vila São Marcos", "Vila São Paulo", "Vila Industrial Oeste", "Vila Industrial Norte",
  
  // Conjuntos Habitacionais
  "Conjunto Sabará", "Conjunto Caiuá", "Conjunto Vitória Régia", "Conjunto Nova Esperança", 
  "Conjunto Industrial", "Conjunto União", "Conjunto Osternack", "Conjunto Parigot de Souza",
  "Conjunto Habitacional Vila Verde", "Vila Reno", "Vila Audi", "Vila Barigui", "Vila Pantanal",
  "Vila Sandra", "Vila Formosa", "Caiuá", "Carmo", "Portão Velho", "Guaíra Velho", 
  "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho"
];

export const ALL_LOCATIONS: LocationData[] = [
  ...CITIES.map(c => ({ 
    type: 'cidade' as const, 
    name: c, 
    slug: toSlug(c) 
  })),
  ...NEIGHBORHOODS.map(n => ({ 
    type: 'bairro' as const, 
    name: n, 
    slug: toSlug(n) 
  }))
];
