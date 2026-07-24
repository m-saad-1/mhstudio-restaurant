export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Restaurante" | "Hotéis" | "Bar" | "Restaurant" | "Hotels"; // Keeping english types for safety if used elsewhere, but changing visual labels if needed. Wait, in types it's better to keep original english literals to not break code unless we also update it. Let's keep original literals: "Restaurant" | "Hotels" | "Bar".
  clientType: string;
  shortDescription: string;
  overview: string;
  industry: string;
  technologies: string[];
  features: string[];
  image: string;
  imageAlt: string;
  liveHref: string;
  performance: string;
  results: string[];
  challenge: string;
  goals: string[];
  design: string;
  development: string;
};

export const siteConfig = {
  name: "MhStudio",
  tagline: "Sites personalizados premium e soluções de IA para empresas modernas.",
  description:
    "A MhStudio projeta e desenvolve sites de alto desempenho focados em conversão, com vitrines digitais, integrações inteligentes e assistentes de IA personalizados.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "saad@mhstudios.online",
  whatsappHref: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/+923429842565",
  calendarHref: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "https://calendly.com/mhstudio/30min",
  phoneLabel: "Consulta via WhatsApp",
};

export const navigationItems: NavItem[] = [
  { label: "Trabalhos", href: "/work" },
  { label: "Serviços", href: "/services" },
  { label: "Processo", href: "/process" },
  { label: "Sobre", href: "/about" },
  { label: "Preços", href: "/pricing" },
  { label: "Contato", href: "/contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "/contact#contact-methods" },
  { label: "LinkedIn", href: "/contact#contact-methods" },
  { label: "Behance", href: "/contact#contact-methods" },
];

export const trustedIndustries = [
  "Alta Gastronomia",
  "Restaurantes Casuais",
  "Cafés e Bistrôs",
  "Bares e Pubs",
  "Pizzarias",
  "Churrascarias",
  "Sushibares",
];

export const industries = [
  "Alta Gastronomia",
  "Restaurantes Casuais",
  "Café",
  "Bar & Grill",
  "Pizzaria",
  "Churrascaria",
  "Sushibar",
  "Fast Casual",
  "Padaria",
  "Bistrô",
  "Food Truck",
  "Catering",
];

export type IndustryShowcaseItem = {
  label: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export const industryShowcaseItems: IndustryShowcaseItem[] = [
  {
    label: "Restaurantes e Bistrôs",
    image: "/images/restaurant.avif",
    alt: "Ambiente acolhedor de bistrô e pratos de culinária empratados.",
    objectPosition: "center center",
  },
  {
    label: "Alta Gastronomia",
    image: "/images/fine_dining.avif",
    alt: "Mesa de restaurante elegante com pratos empratados e iluminação ambiente acolhedora.",
    objectPosition: "center center",
  },
  {
    label: "Restaurantes Casuais",
    image: "/images/casual_dining.avif",
    alt: "Espaçosa área de mesas de restaurante casual e exibição de alimentos.",
    objectPosition: "center center",
  },
  {
    label: "Cafés e Cafeterias",
    image: "/images/coffee_shop.avif",
    alt: "Barista de cafeteria preparando bebidas especiais.",
    objectPosition: "center center",
  },
  {
    label: "Bares e Vida Noturna",
    image: "/images/bar_nightlife.avif",
    alt: "Cena vibrante de bar com coquetéis e iluminação acolhedora.",
    objectPosition: "center center",
  },
  {
    label: "Grupos de Restaurantes",
    image: "/images/restaurant_group.avif",
    alt: "Apresentação premium de marca de restaurante com várias localizações.",
    objectPosition: "center center",
  },
];

export const stats: Metric[] = [
  {
    label: "Projetos Concluídos",
    value: 6,
    suffix: "+",
    description: "Sites premium projetados e lançados para restaurantes e marcas de alimentos.",
  },
  {
    label: "Anos de Experiência",
    value: 4,
    suffix: "+",
    description: "Criando experiências digitais de refeições de alto desempenho.",
  },
  {
    label: "Proprietários Satisfeitos",
    value: 6,
    suffix: "+",
    description: "Donos de restaurantes desfrutando de reservas perfeitas e aumento de pedidos.",
  },
  {
    label: "Tipos de Estabelecimento",
    value: 8,
    suffix: "+",
    description: "Desde alta gastronomia e restaurantes casuais até bares, cafés e padarias.",
  },
  {
    label: "Tecnologias Utilizadas",
    value: 12,
    suffix: "+",
    description: "Ferramentas modernas escolhidas por velocidade, menus online e integrações de reserva.",
  },
];

export const whyChooseItems = [
  {
    title: "Velocidade e Desempenho",
    problem: "Os clientes não vão esperar um menu lento carregar.",
    solution: "A MhStudio constrói páginas ultrarrápidas e leves para que os clientes possam visualizar seu menu e reservar mesas instantaneamente, mesmo em conexões móveis ruins.",
  },
  {
    title: "Menus Focados em Dispositivos Móveis",
    problem: "A maioria dos clientes procura o seu restaurante pelo celular.",
    solution: "Nossos menus digitais e fluxos de reserva são projetados especificamente para telas sensíveis ao toque, garantindo uma experiência de reserva perfeita em qualquer lugar.",
  },
  {
    title: "SEO Local e Mapas",
    problem: "Um site bonito é inútil se clientes famintos não conseguem encontrá-lo.",
    solution: "Implementamos marcação de esquema local avançada e integrações do Google Maps para garantir que você tenha uma classificação alta quando as pessoas pesquisarem comida perto delas.",
  },
  {
    title: "Menus Autogerenciados",
    problem: "Você não deveria precisar de um desenvolvedor para alterar um preço ou adicionar um especial.",
    solution: "Projetamos painéis de administração simples e intuitivos que permitem atualizar pratos, preços e anúncios em tempo real, sem a necessidade de habilidades técnicas.",
  },
  {
    title: "Assistentes Movidos a IA",
    problem: "Perder consultas de reserva durante horários de pico custa receita.",
    solution: "Integramos recepcionistas inteligentes de IA que lidam com assistência a reservas, respondem perguntas frequentes sobre opções dietéticas e registram consultas 24/7.",
  },
  {
    title: "Vitrines de Alimentos Deslumbrantes",
    problem: "Fotos de baixa qualidade ou mal exibidas tornam sua comida pouco apetitosa.",
    solution: "Construímos galerias visuais premium e vitrines que destacam sua arte culinária, ambiente interno e a história da sua marca.",
  },
];

export const serviceCards = [
  {
    title: "Sites Modernos para Restaurantes",
    description: "Construções de sites personalizados e responsivos que mostram sua marca, experiência gastronômica e localizações.",
    features: ["Layout da história da marca", "Pronto para várias localizações", "Design responsivo fluido"],
    icon: "monitor-smartphone",
  },
  {
    title: "Menus Online Interativos",
    description: "Menus digitais rápidos e otimizados para dispositivos móveis que facilitam a navegação por pratos e preços para os clientes.",
    features: ["Navegação por categorias", "Filtros dietéticos (ex.: Vegano, Sem Glúten)", "Atualizações dinâmicas de preços"],
    icon: "utensils-crossed",
  },
  {
    title: "Sistemas de Reserva Online",
    description: "Conexão fácil ao OpenTable, Resy ou fluxos de reserva personalizados para manter as mesas reservadas.",
    features: ["Widgets diretos da plataforma", "Formulários de consulta de reserva personalizados", "Perguntas frequentes sobre reservas"],
    icon: "calendar",
  },
  {
    title: "Assistentes de IA para Restaurantes",
    description: "Assistentes inteligentes de IA por chat e WhatsApp para responder FAQs sobre ingredientes, automatizar respostas e ajudar com reservas 24/7.",
    features: ["Integração de IA do WhatsApp", "Suporte automatizado a reservas", "Respostas para FAQs do menu"],
    icon: "bot",
  },
  {
    title: "Galeria e Vitrines de Alimentos",
    description: "Fotografia de alimentos deslumbrante e layouts de galeria interna projetados para cativar os hóspedes.",
    features: ["Carregamento rápido de imagens", "Sobreposições de galeria Lightbox", "Destaques do ambiente"],
    icon: "images",
  },
  {
    title: "Eventos e Anúncios",
    description: "Promova menus de fim de ano, degustações de vinho, opções de refeições privadas e eventos locais.",
    features: ["Banners de anúncios", "Construtores de menus especiais", "Fluxos de reserva de eventos privados"],
    icon: "megaphone",
  },
  {
    title: "SEO Local e Classificações no Mapa",
    description: "Otimização técnica de pesquisa para que seu restaurante apareça em primeiro lugar quando os clientes pesquisarem nas proximidades.",
    features: ["Otimização do Google Business", "Marcação de esquema para menus/horários", "Segmentação de palavras-chave locais"],
    icon: "map-pinned",
  },
  {
    title: "Otimização de Desempenho",
    description: "Melhorias focadas em velocidade garantindo que suas páginas carreguem instantaneamente, mesmo em dados de celular.",
    features: ["Pontuação de Core Web Vitals de 95+", "Compressão avançada de imagens", "Transições de página instantâneas"],
    icon: "zap",
  },
  {
    title: "Hospedagem e Implantação",
    description: "Configuração completa de hospedagem em nuvem, conexão de domínio personalizado, configuração de segurança SSL e lançamento em produção perfeito.",
    features: ["Configuração de hospedagem e domínio", "Implantação e configuração SSL", "Lançamento em produção e suporte"],
    icon: "server-cog",
  },
  {
    title: "Manutenção e Suporte do Site",
    description: "Suporte contínuo para atualizar seus menus, preços, horários e anúncios sem demora.",
    features: ["Atualizações de conteúdo no mesmo dia", "Backups regulares e verificações de integridade", "Monitoramento de segurança"],
    icon: "wrench",
  },
];

export const serviceSections = [
  {
    title: "Sites Modernos para Restaurantes",
    description: "Construções de sites personalizados e responsivos que mostram sua marca, experiência gastronômica e localizações.",
    points: ["Layout da história da marca", "Pronto para várias localizações", "Design responsivo fluido"],
    icon: "monitor-smartphone",
  },
  {
    title: "Menus Online Interativos",
    description: "Menus digitais rápidos e otimizados para dispositivos móveis que facilitam a navegação por pratos e preços para os clientes.",
    points: ["Navegação por categorias", "Filtros dietéticos (ex.: Vegano, Sem Glúten)", "Atualizações dinâmicas de preços"],
    icon: "utensils-crossed",
  },
  {
    title: "Sistemas de Reserva Online",
    description: "Conexão fácil ao OpenTable, Resy ou fluxos de reserva personalizados para manter as mesas reservadas.",
    points: ["Widgets diretos da plataforma", "Formulários de consulta de reserva personalizados", "Perguntas frequentes sobre reservas"],
    icon: "calendar",
  },
  {
    title: "Assistentes de IA para Restaurantes",
    description: "Assistentes inteligentes de IA por chat e WhatsApp para responder FAQs sobre ingredientes, automatizar respostas e ajudar com reservas 24/7.",
    points: ["Integração de IA do WhatsApp", "Suporte automatizado a reservas", "Respostas para FAQs do menu"],
    icon: "bot",
  },
  {
    title: "Assistente de IA do WhatsApp",
    description: "Conecte um assistente de IA personalizado diretamente ao seu WhatsApp para lidar com assistência a reservas, consultas de menu e perguntas de clientes.",
    points: ["Integração com API do WhatsApp", "Respostas automatizadas a clientes", "Suporte para menu e ingredientes"],
    icon: "message-circle-more",
  },
  {
    title: "Galeria e Vitrines de Alimentos",
    description: "Fotografia de alimentos deslumbrante e layouts de galeria interna projetados para cativar os hóspedes.",
    points: ["Carregamento rápido de imagens", "Sobreposições de galeria Lightbox", "Destaques do ambiente"],
    icon: "images",
  },
  {
    title: "Eventos e Anúncios",
    description: "Promova menus de fim de ano, degustações de vinho, opções de refeições privadas e eventos locais.",
    points: ["Banners de anúncios", "Construtores de menus especiais", "Fluxos de reserva de eventos privados"],
    icon: "megaphone",
  },
  {
    title: "SEO Local e Classificações no Mapa",
    description: "Otimização técnica de pesquisa para que seu restaurante apareça em primeiro lugar quando os clientes pesquisarem nas proximidades.",
    points: ["Otimização do Google Business", "Marcação de esquema para menus/horários", "Segmentação de palavras-chave locais"],
    icon: "map-pinned",
  },
  {
    title: "Otimização de Desempenho",
    description: "Melhorias focadas em velocidade garantindo que suas páginas carreguem instantaneamente, mesmo em dados de celular.",
    points: ["Pontuação de Core Web Vitals de 95+", "Compressão avançada de imagens", "Transições de página instantâneas"],
    icon: "zap",
  },
  {
    title: "Hospedagem e Implantação",
    description: "Configuração completa de hospedagem, roteamento de domínio personalizado, configuração de certificado SSL, lançamento em produção e suporte dedicado pós-lançamento.",
    points: ["Configuração de hospedagem", "Conexão de domínio", "Implantação", "Configuração SSL", "Lançamento em produção", "Suporte pós-lançamento"],
    icon: "server-cog",
  },
  {
    title: "Manutenção e Suporte do Site",
    description: "Suporte contínuo para atualizar seus menus, preços, horários e anúncios sem demora.",
    points: ["Atualizações de conteúdo no mesmo dia", "Backups regulares e verificações de integridade", "Monitoramento de segurança"],
    icon: "wrench",
  },
];

export const websiteFeatures = [
  { title: "Construtor de Menus Interativos", description: "Seções de conteúdo facilmente estruturadas para comida, bebidas e especiais do dia.", icon: "utensils-crossed" },
  { title: "Reservas Online", description: "Integração perfeita com OpenTable, Resy ou sistemas de calendário personalizados.", icon: "calendar" },
  { title: "Assistente de Restaurante IA", description: "Recepcionistas inteligentes por chat para responder a perguntas sobre ingredientes e auxiliar nas reservas 24 horas por dia.", icon: "bot" },
  { title: "Experiência Focada em Dispositivos Móveis", description: "Legibilidade e navegação perfeitas em smartphones, onde mais de 80% dos clientes te encontram.", icon: "smartphone" },
  { title: "Esquema de SEO Local", description: "Marcação Schema.json pré-configurada para itens de menu, horários de funcionamento e localização.", icon: "search-check" },
  { title: "Integração do Google Maps", description: "Mapas integrados e responsivos para guiar os clientes direto à sua porta.", icon: "map-pinned" },
  { title: "Prova Social e Avaliações", description: "Exibição para avaliações do Google, estrelas do Yelp e depoimentos de clientes.", icon: "star" },
  { title: "Desempenho Rápido", description: "Tempos de carregamento ultrarrápidos garantindo que os clientes não abandonem seu site antes de ver o menu.", icon: "zap" },
  { title: "Galeria de Alimentos e Ambiente", description: "Belas grades de lightbox para mostrar o empratamento, o design de interiores e a equipe.", icon: "images" },
  { title: "Eventos e Anúncios", description: "Banners e cartões para noites de vinho, especiais de brunch e horários de feriados.", icon: "megaphone" },
  { title: "Hospedagem Segura e SSL", description: "Implantação robusta em redes de nuvem modernas, mantendo seu site seguro e online.", icon: "server-cog" },
  { title: "CMS Autogerenciado", description: "Painel simples para alterar preços, horários ou pratos em menos de dois minutos.", icon: "layout-dashboard" },
  { title: "Inscrições em Newsletters", description: "Formulários integrados para aumentar sua lista de e-mails para marketing e anúncios.", icon: "mail" },
];

export const processSteps = [
  {
    step: "01",
    title: "Descoberta",
    description: "Aprendemos sobre sua marca, especialidades de menu, localização e metas de reserva dos clientes.",
    bullets: ["Metas do restaurante", "Perfil do cliente", "Identidade da marca"],
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Estruturamos o menu online, os caminhos de reserva e mapeamos as páginas de localização.",
    bullets: ["Arquitetura de menu", "Fluxos de reserva", "Posicionamento de CTAs"],
  },
  {
    step: "03",
    title: "Design",
    description: "Criamos um sistema visual premium que destaca seus pratos e captura o ambiente do salão de refeições.",
    bullets: ["Branding visual", "Preparação para fotografia", "Layout de menu móvel"],
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description: "Construímos suas páginas responsivas personalizadas, otimizamos imagens e integramos sistemas de reserva.",
    bullets: ["Menus de carregamento rápido", "Reservas de terceiros", "Estrutura de SEO local"],
  },
  {
    step: "05",
    title: "Testes",
    description: "Testamos interações do menu, fluxos de reserva, desempenho da página e layout em dispositivos móveis.",
    bullets: ["Teste de usabilidade do menu", "Verificações de reserva", "Otimização de desempenho"],
  },
  {
    step: "06",
    title: "Lançamento",
    description: "Seu site entra no ar com sincronização do Google Maps, análises e suporte de menu autogerenciado.",
    bullets: ["Conexão de domínio", "Configuração de análises", "Entrega do painel"],
  },
];

export const technologyGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend e CMS", items: ["Node.js", "Express.js", "APIs REST", "Sanity CMS", "Payload CMS", "Strapi", "API WordPress"] },
  { title: "Bancos de Dados e Armazenamento", items: ["MongoDB", "PostgreSQL", "Supabase", "Prisma ORM", "Redis"] },
  { title: "IA e Automação", items: ["IA Gemini", "API OpenAI", "Assistentes por Chat de IA", "Reservas Automatizadas", "Análise Dietética", "Bots de Resposta ao Cliente"] },
  { title: "Ferramentas e Integrações", items: ["Git", "GitHub", "Vercel", "Cloudflare", "Cloudinary", "API OpenTable", "API Resy", "Perfil de Empresa do Google"] },
];

export const faqs = [
  {
    question: "Quanto tempo leva para criar um site para restaurante?",
    answer:
      "Um site padrão de restaurante leva de 2 a 4 semanas, enquanto grupos maiores que exigem suporte para várias localizações ou recursos avançados de reserva com IA levam de 4 a 6 semanas.",
  },
  {
    question: "Vocês podem redesenhar o site atual do nosso restaurante?",
    answer:
      "Sim. Podemos atualizar designs desatualizados, otimizar seu menu para visualização móvel e migrar para uma plataforma moderna e mais rápida para melhorar as taxas de conversão de reservas.",
  },
  {
    question: "Vocês oferecem suporte e manutenção pós-lançamento?",
    answer:
      "Absolutamente. Oferecemos pacotes de manutenção contínua para lidar com alterações regulares de cardápio, horários de feriados, atualizações de preços e verificações técnicas de desempenho.",
  },
  {
    question: "Poderei gerenciar a plataforma após o lançamento?",
    answer:
      "Sim. Fornecemos um painel de controle simples e intuitivo para que você ou sua equipe possam atualizar itens do menu, preços, fotos e anunciar eventos especiais em minutos.",
  },
  {
    question: "Vocês lidam com hospedagem e implantação na nuvem?",
    answer:
      "Sim. Configuramos ambientes de hospedagem rápidos, seguros e prontos para produção em redes modernas como Vercel e Cloudflare, com certificados SSL.",
  },
  {
    question: "Como vocês garantem que o produto tenha um bom desempenho?",
    answer:
      "O desempenho é fundamental para visitantes móveis. Otimizamos todas as imagens de seus pratos, escrevemos um código enxuto e garantimos velocidades de página quase perfeitas para que os clientes continuem engajados.",
  },
  {
    question: "Vocês podem integrar nossos sistemas de reserva e agendamento existentes?",
    answer:
      "Sim. Podemos integrar perfeitamente widgets ou conectar APIs do OpenTable, Resy, SevenRooms ou ferramentas padrão de reserva de calendário diretamente ao seu layout.",
  },
];

export const leftFaqs = [
  {
    question: "Você pode criar um site que atenda a várias localizações?",
    answer:
      "Sim. Construímos sistemas centralizados que apresentam todas as localizações do seu restaurante, incluindo menus específicos, links de reserva localizados e detalhes do Google Maps para cada filial.",
  },
  {
    question: "Como funciona o Assistente de Reserva com IA?",
    answer:
      "Nossos assistentes de IA podem ser integrados ao seu site ou WhatsApp. Eles respondem a perguntas dos clientes sobre horários, estacionamento ou ingredientes do menu e os ajudam a reservar mesas instantaneamente.",
  },
  {
    question: "Nosso menu online carregará rápido em redes móveis lentas?",
    answer:
      "Sim. Usamos otimização agressiva de imagens e técnicas modernas de geração estática, o que significa que seus menus digitais carregam em milissegundos, mesmo em conexões móveis lentas.",
  },
];

export const pricingPackages = [
  {
    name: "Lançamento",
    price: "$199",
    originalPrice: "$299",
    summary: "Perfeito para pequenas empresas, cafés, bistrôs ou startups que precisam de uma presença digital moderna e de alto desempenho com um menu digital.",
    includes: [
      "Até 5 Páginas",
      "Menu Digital Interativo / Vitrine",
      "Layout Responsivo com Foco Móvel",
      "Formulários de Contato e Consultas",
      "Orientação para Domínio e Hospedagem",
      "Implantação e Configuração de SSL",
      "SEO Técnico Básico e Esquema",
      "Integração com Google Maps",
      "Otimização de Desempenho",
      "Suporte por 30 Dias"
    ],
    ctaText: "Ver Detalhes",
    timeline: "1-2 semanas",
    modalDetails: [
      {
        category: "Design e Páginas",
        features: ["UI moderna e personalizada", "Menu digital focado em dispositivos móveis", "Início, Menu/Serviços, Sobre, Galeria, Contato"]
      },
      {
        category: "Implantação e Configuração",
        features: ["Conexão de domínio e orientação de hospedagem", "Configuração de segurança SSL e implantação", "Google Maps e formulários de contato", "Clique para Ligar / Clique para Email"]
      },
      {
        category: "SEO e Velocidade",
        features: ["Configuração básica de SEO técnico", "Marcação de esquema local", "Compressão de imagens para carregamento rápido"]
      },
      {
        category: "Suporte",
        features: ["Suporte gratuito por 30 dias", "Pequenas atualizações de conteúdo e preços"]
      }
    ]
  },
  {
    name: "Crescimento",
    price: "$399",
    originalPrice: "$499",
    summary: "Ideal para restaurantes em crescimento e marcas modernas que buscam automatizar reservas, capturar avaliações e integrar suporte de IA aos clientes.",
    includes: [
      "Tudo no Lançamento",
      "Sistema de Reserva Interativo",
      "Assistente de IA para Menu e FAQ",
      "Integração com WhatsApp",
      "Configuração e Rastreamento de Análise",
      "Exibição de Avaliações do Google",
      "Configuração de Melhores Práticas de Segurança",
      "SEO Local Avançado",
      "Suporte por 45 Dias"
    ],
    featured: true,
    ctaText: "Ver Detalhes",
    timeline: "2-4 semanas",
    modalDetails: [
      {
        category: "Plataforma Aprimorada",
        features: ["Até 10 Páginas", "UI/UX avançada com animações suaves", "Eventos privados e sistema de consulta", "Destaque de especiais"]
      },
      {
        category: "IA e Integrações",
        features: ["Assistente de Chat IA para reservas e suporte a FAQs", "Integração com WhatsApp para comunicação instantânea", "Widgets de reserva integrados", "Sincronização ao vivo de Avaliações do Google", "Configuração de análise e rastreamento de conversão"]
      },
      {
        category: "SEO, Segurança e Desempenho",
        features: ["Otimização de SEO local avançada", "Configuração de melhores práticas de segurança", "Conformidade com os Core Web Vitals", "Hospedagem de mídia CDN"]
      },
      {
        category: "Suporte",
        features: ["Suporte Premium por 45 dias", "Atualizações prioritárias de menu e preços"]
      }
    ]
  },
  {
    name: "Escala com IA",
    price: "$999",
    originalPrice: "$1999",
    summary: "Projetado para empresas premium e marcas que buscam assistentes recepcionistas de IA totalmente personalizados, fluxos de reserva automatizados e integrações de pedidos avançadas.",
    includes: [
      "Tudo no Crescimento",
      "Assistente Recepcionista de IA Personalizado",
      "Fluxos de Reserva Automatizados",
      "Integração com Pedidos Online / POS",
      "Suporte a Múltiplos Idiomas",
      "Otimização de Desempenho de Alta Velocidade (98+ Vitals)",
      "Painel de Análise de Administração",
      "Pacote de Manutenção de Site",
      "Suporte por 60 Dias"
    ],
    ctaText: "Ver Detalhes",
    timeline: "4-6 semanas",
    modalDetails: [
      {
        category: "Recursos Premium",
        features: ["Páginas Ilimitadas", "Transições de movimento personalizadas", "Vitrines interativas", "Suporte a menu em vários idiomas"]
      },
      {
        category: "IA Personalizada Avançada",
        features: ["Recepcionista IA Personalizada (treinada em sua marca e dados)", "Reserva automatizada e verificação de leads", "Alertas SMS e e-mail"]
      },
      {
        category: "Integrações e Pedidos",
        features: ["Integração de Pedidos Online e POS (Toast, Square, etc.)", "Configuração de CRM do cliente", "Painel de Análise de Administração"]
      },
      {
        category: "Desempenho e Suporte",
        features: ["Ajuste de desempenho dedicado (98+ Core Web Vitals)", "Manutenção e Suporte do Site", "Suporte Prioritário por 60 Dias", "Edições de menu no mesmo dia"]
      }
    ]
  },
  {
    name: "Enterprise",
    price: "Orçamento Personalizado",
    summary: "Soluções digitais personalizadas para grupos de várias localizações, redes de franquias, hotéis de luxo e plataformas corporativas complexas.",
    includes: [
      "Escopo Personalizado para Múltiplas Localizações",
      "Design de Plataforma Corporativa",
      "Pedidos Online Conectados ao POS",
      "Administração de Franquia Centralizada",
      "Gerente de Conta Dedicado",
      "SLA de Prioridade 24/7 e Parceria"
    ],
    ctaText: "Entre em Contato",
    timeline: "Cronograma personalizado",
    modalDetails: [
      {
        category: "Plataforma do Grupo",
        features: ["Roteamento em várias localizações", "Microsites de franquia", "Gerenciador de conteúdo centralizado", "Seções corporativas de alto padrão"]
      },
      {
        category: "POS e Pedidos",
        features: ["Fluxo de pedidos conectado ao POS", "Integrações com plataformas de entrega", "Pipeline de catering e eventos"]
      },
      {
        category: "IA e Fluxos de Trabalho Personalizados",
        features: ["Sistema de despacho de IA em várias localizações", "Suporte de reserva com IA de voz", "Análises corporativas personalizadas"]
      },
      {
        category: "Suporte",
        features: ["Gerente de Conta Dedicado", "Suporte SLA de prioridade 24/7", "Avaliações mensais de desempenho e segurança"]
      }
    ]
  }
];

export const contactFaqs = [
  {
    question: "O que devo preparar antes de agendar uma consulta?",
    answer:
      "Traga a história do seu restaurante, o conceito do cardápio, fotografias de alimentos se disponíveis, links para sites que você admira e sua previsão para inauguração ou lançamento.",
  },
  {
    question: "Vocês criam sites para restaurantes de localização única ou food trucks?",
    answer:
      "Sim. Desenhamos e construímos sites de todos os tamanhos—seja você um bistrô de bairro único, um food truck local ou um grupo expansivo de hospitalidade com várias localizações.",
  },
  {
    question: "O que acontece depois de enviar o formulário de contato?",
    answer:
      "Agendaremos uma rápida chamada de descoberta para discutir o estilo do seu menu, os requisitos de reserva, as preferências de design e definir um cronograma claro para o seu lançamento.",
  },
];

export const aboutValues = [
  "Contação de histórias gastronômica que traduz a sua atmosfera física para a tela.",
  "Desempenho móvel que garante que os hóspedes possam ver seu menu instantaneamente em qualquer lugar.",
  "Sistemas automatizados perfeitos que mantêm suas mesas ocupadas sem distrair sua equipe.",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "savor-fine-dining",
    title: "Savor Fine Dining",
    category: "Restaurant",
    clientType: "Alta Gastronomia",
    shortDescription: "Um site elegante de alta gastronomia projetado para exibir uma experiência culinária premium, reservas e um ambiente elegante.",
    overview:
      "A Savor Fine Dining exigia uma presença online altamente sofisticada que refletisse a arte de seus pratos e simplificasse o processo de reserva para a sua clientela exclusiva.",
    industry: "Restaurante",
    technologies: ["Next.js", "Tailwind CSS", "Animações", "API de Reserva"],
    features: ["Galerias visuais imersivas", "Fluxo de reserva simplificado", "Exibições de menus sazonais", "Experiência otimizada para dispositivos móveis"],
    image: "/images/Savorfinedining.avif",
    imageAlt: "Pré-visualização do site do Savor Fine Dining exibindo apresentações culinárias elegantes e recursos de reserva.",
    liveHref: "https://savordining.vercel.app",
    performance: "100/100 na Pontuação do Core Web Vitals",
    results: ["Aumento em reservas exclusivas de mesas", "Aprimorada elegância da marca digital", "Reservas móveis sem atritos"],
    challenge: "Traduzir uma experiência gastronômica física de alto nível em uma plataforma digital rápida e visualmente deslumbrante.",
    goals: ["Exibir arte culinária", "Simplificar reservas VIP", "Elevar a percepção digital da marca"],
    design: "Layout minimalista e elegante com imagens de alta resolução e tipografia sofisticada para refletir um ambiente premium.",
    development:
      "Construído com foco em desempenho e transições suaves, integrando uma API de reserva perfeita enquanto mantém resultados impecáveis do Core Web Vitals.",
  },
  {
    slug: "momofuku",
    title: "Momofuku",
    category: "Restaurant",
    clientType: "Grupo de Restaurantes",
    shortDescription: "Um site moderno de grupo de restaurantes destacando ofertas culinárias, envios para todo o país e narrativa da marca.",
    overview:
      "O Momofuku precisava de uma plataforma digital robusta capaz de lidar com várias localizações, integração de envio em âmbito nacional e transmitir sua identidade de marca exclusiva.",
    industry: "Restaurante",
    technologies: ["Next.js", "Tailwind CSS", "E-commerce", "Análise"],
    features: ["Roteamento para várias localizações", "Integração nacional de envio", "Contação imersiva da história da marca", "Reservas focadas em dispositivos móveis"],
    image: "/images/momofuku-new.avif",
    imageAlt: "Pré-visualização do site do restaurante Momofuku mostrando design moderno, fotografia culinária e navegação.",
    liveHref: "https://www.momofuku.com/",
    performance: "98/100 na Pontuação do Core Web Vitals",
    results: ["Aumento nas vendas de envio online", "Maiores taxas de conversão de reservas", "Gerenciamento simplificado de várias localizações"],
    challenge: "Consolidar uma complexa gama de restaurantes, produtos e histórias de marca em uma única e coesa experiência de usuário, sem sobrecarga visual.",
    goals: ["Unificar a presença da marca", "Aumentar a receita nacional com envio", "Simplificar o processo de reservas"],
    design: "Tipografia arrojada, imagens de alto contraste e layout editorial que reflete a autoridade culinária da marca.",
    development:
      "Uma abordagem de arquitetura headless foi usada para desacoplar o front-end buscando velocidade, ao mesmo tempo em que integrava sistemas de backend complexos para reservas e e-commerce.",
  },
  {
    slug: "the-cheesecake-factory",
    title: "The Cheesecake Factory",
    category: "Restaurant",
    clientType: "Rede de Restaurantes Casuais",
    shortDescription: "Site de restaurante enfatizando pedidos online, menus expansivos, sobremesas exclusivas e cartões de presente.",
    overview:
      "O The Cheesecake Factory precisava de uma experiência digital ampla, mas de fácil navegação, para mostrar seu grande menu e impulsionar pedidos online.",
    industry: "Restaurante",
    technologies: ["Next.js", "Tailwind CSS", "Integração de API", "SEO"],
    features: ["Menu massivo e dinâmico", "Fluxo de pedidos online", "Compra de cartão de presente", "Buscador de locais"],
    image: "/images/thecheesecakefactory-new.avif",
    imageAlt: "Site The Cheesecake Factory mostrando sobremesas, menus e pedidos.",
    liveHref: "https://www.thecheesecakefactory.com/",
    performance: "95/100 na Pontuação do Core Web Vitals",
    results: ["Melhoria na velocidade de carregamento", "Aumento nas vendas de cartões", "Pedidos online simplificados"],
    challenge: "Estruturar um menu enorme e diversificado em um formato rápido e legível em dispositivos móveis.",
    goals: ["Otimizar a legibilidade", "Impulsionar vendas online", "Aprimorar SEO local"],
    design: "Cores convidativas com navegação clara e categorizada.",
    development:
      "Foco na otimização de imagens para centenas de itens de menu e conexão de API.",
  },
  {
    slug: "four-seasons",
    title: "Four Seasons",
    category: "Hotels",
    clientType: "Hospitalidade de Luxo",
    shortDescription: "Um site de hospitalidade de luxo com foco em reservas sofisticadas, experiências de jatos particulares e vilas exclusivas.",
    overview:
      "O Four Seasons precisava de uma experiência digital incrivelmente premium.",
    industry: "Hotéis",
    technologies: ["Next.js", "Tailwind CSS", "API de Reservas", "Desempenho"],
    features: ["Busca global", "Fluxo de reserva premium", "Jatos privados", "Vídeos"],
    image: "/images/fourseason.avif",
    imageAlt: "Site Four Seasons de luxo.",
    liveHref: "https://www.fourseasons.com/",
    performance: "99/100 na Pontuação do Core Web Vitals",
    results: ["Mais reservas diretas", "Alto engajamento", "Marca digital elevada"],
    challenge: "Equilibrar alta resolução com velocidade.",
    goals: ["Reservas VIP", "Destacar luxo", "UX móvel perfeita"],
    design: "Elegância e minimalismo.",
    development:
      "Cache de borda avançado.",
  },
  {
    slug: "sparrow-italia",
    title: "Sparrow Italia",
    category: "Restaurant",
    clientType: "Alta Gastronomia",
    shortDescription: "Site de luxo exibindo culinária italiana, prêmios e coquetéis premium.",
    overview:
      "O Sparrow Italia queria uma presença tão requintada quanto seus pratos.",
    industry: "Restaurante",
    technologies: ["Next.js", "Tailwind CSS", "Animações", "SEO"],
    features: ["Animações de rolagem", "Menu elegante", "Consultas VIP", "Prêmios"],
    image: "/images/sparrowitlia.avif",
    imageAlt: "Sparrow Italia",
    liveHref: "https://sparrowitalia.com/",
    performance: "96/100 na Pontuação do Core Web Vitals",
    results: ["Mais consultas VIP", "Maior valor por mesa", "Marca forte"],
    challenge: "Criar atmosfera digital exclusiva.",
    goals: ["Experiência sofisticada", "Reservas premium", "Mostrar gastronomia"],
    design: "Escuro e luxuoso.",
    development:
      "Micro-animações CSS e carregamento sob demanda.",
  },
  {
    slug: "big-chill-bar",
    title: "Big Chill Bar",
    category: "Bar",
    clientType: "Vida Noturna",
    shortDescription: "Site de bar para eventos, esportes ao vivo e reservas privadas.",
    overview:
      "O Big Chill Bar precisava de uma plataforma de alta energia.",
    industry: "Bar",
    technologies: ["Next.js", "Tailwind CSS", "Gestão de Eventos", "Formulários"],
    features: ["Calendário dinâmico", "Reserva de espaço", "Esportes", "Pop-ups"],
    image: "/images/big_chill.avif",
    imageAlt: "Big Chill Bar",
    liveHref: "https://www.bigchillbar.com/",
    performance: "97/100 na Pontuação do Core Web Vitals",
    results: ["Mais eventos fechados", "Maior público", "Gestão fácil"],
    challenge: "Muitos eventos que mudam rapidamente.",
    goals: ["Aumentar reservas de espaço", "Programação clara", "Atmosfera vibrante"],
    design: "Cores fortes e vivas.",
    development:
      "Painel de controle para gerenciar a agenda.",
  },
  {
    slug: "restaurant-ai-receptionist-chatbot",
    title: "Assistente IA para Restaurantes",
    category: "Restaurant",
    clientType: "Integração de IA",
    shortDescription: "Um chatbot recepcionista IA que automatiza reservas e tira dúvidas.",
    overview:
      "Uma demo de como a IA pode ajudar o seu negócio.",
    industry: "IA",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "IA Gemini", "Tailwind CSS"],
    features: ["Reservas", "Dúvidas sobre alergias", "SMS/Email", "Chatbot online"],
    image: "/images/Multi-vertical-Ai-receptionist-chatbot.avif",
    imageAlt: "Demo do assistente IA.",
    liveHref: "https://multireceptionai.vercel.app/",
    performance: "100/100 na Pontuação do Core Web Vitals",
    results: ["Zero chamadas perdidas", "Respostas na hora", "Menos telefone tocando"],
    challenge: "Respostas precisas do menu.",
    goals: ["Suporte imediato", "Qualificar reservas", "Eficiência"],
    design: "Interface de mensagens escura e limpa.",
    development:
      "Integração rápida com a API do Gemini.",
  },
];

export const portfolioFilters = [
  "Todos",
  "Restaurant",
  "Hotels",
  "Bar",
] as const;
