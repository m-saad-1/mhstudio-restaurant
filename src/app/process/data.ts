import { type LucideIcon } from "lucide-react";

export const corePhases = [
  {
    step: "01",
    title: "Descoberta e Estratégia",
    tagline: "Entenda a sua marca.",
    description: "Começamos aprendendo sobre a marca do seu restaurante, conceito culinário, localização e metas de reserva dos hóspedes. Esta etapa garante que cada decisão técnica esteja alinhada aos seus objetivos de negócios.",
    activities: ["Consulta de conceito", "Mapeamento do perfil do cliente", "Pesquisa de menu da concorrência", "Verificação de plataforma de terceiros", "Roteiro do projeto", "Estimativa de lançamento"],
    icon: "search"
  },
  {
    step: "02",
    title: "Planejamento e Arquitetura",
    tagline: "Estruture o caminho do cliente.",
    description: "Antes de escrever o código, estruturamos o seu menu digital, definimos o caminho da reserva e mapeamos as páginas de localização para otimizar a conversão de usuários.",
    activities: ["Arquitetura do menu", "Fluxos de usuário de reserva", "Layouts de página de localização", "Estratégia de palavras-chave SEO", "Priorização de recursos", "Coleta de conteúdo"],
    icon: "layers"
  },
  {
    step: "03",
    title: "Design",
    tagline: "Capture a atmosfera.",
    description: "Criamos um sistema visual premium que destaca sua arte culinária, mostra o espaço do seu salão de refeições e torna a reserva intuitiva.",
    activities: ["Design de identidade visual", "Protótipos de menu móvel", "Estilo de galeria de comida", "Seleção de tipografia", "Revisão e feedback do cliente"],
    icon: "palette"
  },
  {
    step: "04",
    title: "Desenvolvimento",
    tagline: "Construa com velocidade.",
    description: "Traduzimos os designs em páginas responsivas e de carregamento rápido e integramos widgets de reserva, menus digitais e ferramentas de IA de restaurante personalizadas.",
    activities: ["Frontend de carregamento rápido", "Codificação de menu digital", "Integração de sistema de reservas", "Configuração de IA do restaurante", "Configuração de análises"],
    icon: "code-xml"
  },
  {
    step: "05",
    title: "Testes e Otimização",
    tagline: "Checkouts perfeitos.",
    description: "Testamos minuciosamente a navegação do menu, os formulários de reserva, o desempenho da página e o layout móvel antes de entrar ao vivo.",
    activities: ["Teste de usabilidade do menu", "Validação do fluxo de reservas", "Verificação de capacidade de resposta móvel", "Otimização de carregamento de imagem", "Verificação de saúde de SEO local"],
    icon: "shield-check"
  },
  {
    step: "06",
    title: "Lançamento e Crescimento",
    tagline: "Dê as boas-vindas aos hóspedes online.",
    description: "Seu site entra ao vivo com a sincronização do Google Maps e nós fornecemos ferramentas simples para que você possa atualizar seu menu, preços e anúncios em tempo real.",
    activities: ["Implantação Vercel", "Configuração de domínio e SSL", "Sincronização do Google Maps", "Apresentação do painel de controle", "Suporte contínuo ao menu"],
    icon: "rocket"
  }
];

export const developmentPaths = [
  {
    title: "Restaurante de Localização Única",
    description: "Ideal para bistrôs independentes, restaurantes de bairro, cafés e food trucks que procuram uma casa digital premium.",
    timeline: "2–3 semanas",
    steps: ["Descoberta", "Design do Menu", "Desenvolvimento", "Integração de Reservas", "Lançamento"],
  },
  {
    title: "Site para Múltiplas Localizações e Grupos",
    description: "Feito sob medida para grupos de restaurantes, franquias e marcas de hospitalidade que gerenciam vários locais e menus.",
    timeline: "4–6 semanas",
    steps: ["Descoberta", "Estratégia do Grupo", "Roteamento de Localização", "Sistema de Ativos Compartilhados", "CMS Centralizado", "Lançamento"],
  },
  {
    title: "Experiência Digital Aprimorada por IA",
    description: "Para restaurantes com visão de futuro que buscam integrar recepcionistas de IA, alertas de reserva por SMS e menus interativos.",
    timeline: "3–5 semanas",
    steps: ["Estratégia de Marca", "Treinamento de Personalidade de IA", "Configuração de Menu Interativo", "Automação de Reservas", "Integração", "Lançamento"],
  },
  {
    title: "Plataforma de Catering e Eventos",
    description: "Construído para locais, fornecedores de catering sofisticados e salas de jantar privadas que precisam de gerenciamento personalizado de consultas e propostas.",
    timeline: "3–4 semanas",
    steps: ["Mapeamento de Consultas", "Design de Apresentação de Pacotes", "Configuração de Pipeline de Reservas", "Painel do Cliente", "Testes", "Lançamento"],
  }
];

export const clientInvolvement = [
  {
    title: "Atualizações Regulares de Menu e Layout",
    description: "Compartilhamos links de preparação para que você possa ver seus menus e layouts se unindo.",
    icon: "calendar",
  },
  {
    title: "Marcos de Degustação e Revisão",
    description: "Revise os rascunhos de design principais e a organização do menu antes de começarmos a codificar.",
    icon: "message-square-quote",
  },
  {
    title: "Entregas Claras de Projetos",
    description: "Sem desenvolvimento oculto ou surpresas inesperadas na configuração de reservas.",
    icon: "refresh-cw",
  },
  {
    title: "Ajustes de Menu e Detalhes",
    description: "Acomodamos pequenas atualizações de preços ou ingredientes durante todo o processo.",
    icon: "git-merge",
  }
];

export const qualityAssurance = [
  { title: "Usabilidade do Menu", icon: "utensils-crossed" },
  { title: "Teste Responsivo", icon: "monitor-smartphone" },
  { title: "Velocidade de Carregamento de Imagem", icon: "zap" },
  { title: "Validação de SEO Local", icon: "search" },
  { title: "Verificações em Vários Dispositivos", icon: "smartphone" },
  { title: "SSL e Segurança", icon: "shield-check" },
  { title: "Marcação Schema", icon: "search-check" },
  { title: "Verificação de Reserva", icon: "calendar" }
];

export const processFaqs = [
  {
    question: "Quanto tempo leva um projeto de restaurante?",
    answer: "Um site de localização única geralmente leva de 2 a 4 semanas, enquanto grupos maiores com roteamento para várias localizações ou recursos avançados de reserva de IA levam de 4 a 6 semanas."
  },
  {
    question: "Você pode trabalhar com nossa plataforma de reserva existente?",
    answer: "Sim. Nós nos integramos perfeitamente com todas as principais plataformas de reserva, incluindo OpenTable, Resy, SevenRooms, Tock e formulários de contato padrão."
  },
  {
    question: "Poderemos atualizar os preços e itens do menu por conta própria?",
    answer: "Com certeza. Nós construímos o seu site com um CMS personalizado e fácil de usar, para que sua equipe possa atualizar os pratos, editar preços e postar os horários de feriados em tempo real."
  },
  {
    question: "Você ajuda com fotografia de alimentos e otimização de imagem?",
    answer: "Embora não tiremos as fotos diretamente, nós te orientamos sobre os ativos necessários e executamos a compactação avançada para garantir que suas fotos de comida de alta resolução carreguem instantaneamente em dispositivos móveis."
  },
  {
    question: "O que é marcação de esquema de restaurante e nós precisamos disso?",
    answer: "Sim, é um código estruturado que ajuda os mecanismos de pesquisa a entender os itens do seu cardápio, horários de funcionamento e localização. Nós o incluímos em todas as compilações para que você tenha uma classificação mais elevada nos resultados de pesquisa local."
  },
  {
    question: "Como os recursos de recepcionista de IA beneficiam nosso restaurante?",
    answer: "Eles lidam com consultas repetitivas de clientes sobre restrições alimentares, horários de reserva ou locais de estacionamento 24 horas por dia, 7 dias por semana, reduzindo o tráfego de telefone para sua ocupada equipe de atendimento."
  },
  {
    question: "Você fornece treinamento sobre como usar o painel?",
    answer: "Sim, nós fornecemos um passo a passo em vídeo e um guia mostrando exatamente como atualizar menus, gerenciar links de reservas e postar anúncios."
  }
];

export const techTimeline = [
  { stage: "Planejamento", tech: "Figma, Notion, Ativos de Marca", icon: "palette" },
  { stage: "Frontend", tech: "React, Next.js, Tailwind CSS", icon: "monitor" },
  { stage: "Integração", tech: "APIs OpenTable, Resy, Toast", icon: "plug" },
  { stage: "Banco de Dados e CMS", tech: "Supabase, Sanity CMS, Payload", icon: "database" },
  { stage: "Recursos de IA", tech: "Gemini AI, API OpenAI, Chatbots", icon: "bot" },
  { stage: "Implantação", tech: "Vercel, Cloudflare, SSL", icon: "cloud" }
];
