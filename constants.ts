import { LocationData } from './types';

export const PHONE_DISPLAY = "(41) 3345-1194";
export const PHONE_LINK = "tel:4133451194";
export const WHATSAPP_DISPLAY = "(41) 98517-1966";
export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%20achei%20seu%20site%20no%20Google%20gostaria%20de%20saber%20sobre%3A%20%E2%9E%A1%EF%B8%8F";

export const SERVICES = [
  { title: "Desentupimento de Esgoto", slug: "desentupimento-de-esgoto" },
  { title: "Limpeza de Fossa", slug: "limpeza-de-fossa" },
  { title: "Caça Vazamentos", slug: "caca-vazamentos" },
  { title: "Hidrojateamento", slug: "hidrojateamento" },
  { title: "Limpeza de Caixa d'Água", slug: "limpeza-de-caixa-dagua" },
  { title: "Vídeo Inspeção", slug: "video-inspecao" }
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
  "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da Rua XV", "Alto da XV", 
  "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Batel Soho", 
  "Bigorrilho", "Boa Vista", "Bocaiúva", "Bom Retiro", "Boqueirão", "Butiatuvinha", 
  "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", 
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", 
  "Centro Histórico", "CIC Central", "CIC Norte", "CIC Sul", "Cidade Industrial", "Cristo Rei", 
  "Ecoville", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", 
  "Jardim Botânico", "Jardim das Américas", "Jardim Schaffer", "Jardim Social", "Juvevê", 
  "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", 
  "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", 
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", 
  "São Lourenço", "São Miguel", "Seminário", "Sítio Cercado", "Taboão", "Tanguá", "Tarumã", 
  "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vila Oficinas", "Vista Alegre", 
  "Xaxim", "Vila Hauer", "Vila Fanny", "Vila Guaíra", "Vila Torres", "Vila Parolin", "Vila Sabará",
  "Vila Zumbi", "Vila Verde", "Vila Sandra", "Vila Formosa", "Vila Pantanal", "Vila Audi",
  "Caiuá", "Conjunto Caiuá"
];

export const ALL_LOCATIONS: LocationData[] = [
  ...CITIES.map(c => ({ type: 'cidade' as const, name: c, slug: c.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c') })),
  ...NEIGHBORHOODS.map(n => ({ type: 'bairro' as const, name: n, slug: n.toLowerCase().replace(/ /g, '-').replace(/[áàãâ]/g, 'a').replace(/[éê]/g, 'e').replace(/[í]/g, 'i').replace(/[óõô]/g, 'o').replace(/[úü]/g, 'u').replace(/ç/g, 'c') }))
];