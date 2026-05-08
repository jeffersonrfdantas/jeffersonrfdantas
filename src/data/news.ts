export type NewsItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  time: string;
  readTime: string;
  image: string;
  accent: string;
};

export const categories = [
  "Política",
  "Economia",
  "Mundo",
  "Tecnologia",
  "IA",
  "Educação",
  "Saúde",
  "Cultura",
  "Esportes",
  "Ciência",
  "Opinião",
  "UX",
];

export const heroNews: NewsItem[] = [
  {
    id: "hero-1",
    title: "NEWS IA estreia portal com curadoria inteligente e jornalismo em tempo real",
    subtitle:
      "Experiência premium combina resumos instantâneos, recomendações por IA e navegação mobile-first.",
    category: "IA",
    author: "Redação NEWS IA",
    time: "Agora",
    readTime: "4 min",
    image:
      "linear-gradient(135deg, rgba(196,0,0,.96), rgba(17,17,17,.86)), radial-gradient(circle at 78% 20%, rgba(255,255,255,.34), transparent 26%)",
    accent: "#C40000",
  },
  {
    id: "hero-2",
    title: "Mercado aposta em plataformas edge-first para acelerar conteúdo digital",
    subtitle:
      "CDN global, cache inteligente e arquitetura serverless reduzem latência em picos de audiência.",
    category: "Tecnologia",
    author: "Mesa Tech",
    time: "12 min",
    readTime: "6 min",
    image:
      "linear-gradient(135deg, rgba(17,17,17,.96), rgba(51,51,51,.82)), radial-gradient(circle at 26% 20%, rgba(196,0,0,.55), transparent 31%)",
    accent: "#E5E5E5",
  },
];

export const latestNews: NewsItem[] = [
  {
    id: "n1",
    title: "Assistentes virtuais chegam às redações com apoio a checagem e SEO",
    subtitle: "Fluxos editoriais unem humanos e IA para acelerar publicação com revisão responsável.",
    category: "IA",
    author: "Lia Moraes",
    time: "5 min",
    readTime: "3 min",
    image: "linear-gradient(135deg, #C40000, #2a0b0b)",
    accent: "#C40000",
  },
  {
    id: "n2",
    title: "Educação digital ganha novos modelos personalizados por comportamento",
    subtitle: "Plataformas usam trilhas adaptativas para reduzir evasão e melhorar engajamento.",
    category: "Educação",
    author: "Caio Reis",
    time: "18 min",
    readTime: "5 min",
    image: "linear-gradient(135deg, #111111, #454545)",
    accent: "#111111",
  },
  {
    id: "n3",
    title: "Saúde conectada amplia monitoramento remoto em clínicas regionais",
    subtitle: "Dados em tempo real ajudam equipes a priorizar atendimentos e prever demanda.",
    category: "Saúde",
    author: "Nina Alves",
    time: "31 min",
    readTime: "4 min",
    image: "linear-gradient(135deg, #7A7A7A, #111111)",
    accent: "#7A7A7A",
  },
  {
    id: "n4",
    title: "Design de produto prioriza interfaces semelhantes a apps nos portais",
    subtitle: "Microinterações, cards rápidos e conteúdo modular elevam retenção no mobile.",
    category: "UX",
    author: "Rafa Diniz",
    time: "42 min",
    readTime: "4 min",
    image: "linear-gradient(135deg, #E5E5E5, #C40000)",
    accent: "#C40000",
  },
  {
    id: "n5",
    title: "Economia criativa testa assinaturas premium com newsletters segmentadas",
    subtitle: "Pacotes de relatórios, podcasts e comunidades fechadas diversificam receita.",
    category: "Economia",
    author: "Bia Castro",
    time: "1 h",
    readTime: "6 min",
    image: "linear-gradient(135deg, #111111, #C40000)",
    accent: "#C40000",
  },
  {
    id: "n6",
    title: "Ciência aberta acelera descoberta com bancos de dados interoperáveis",
    subtitle: "Times globais compartilham evidências e reduzem retrabalho em pesquisas críticas.",
    category: "Ciência",
    author: "Tom Neri",
    time: "2 h",
    readTime: "7 min",
    image: "linear-gradient(135deg, #2b2b2b, #7A7A7A)",
    accent: "#7A7A7A",
  },
];

export const highlights = [
  "Mais lidas",
  "Tendências",
  "Exclusivas",
  "IA recomenda",
  "Patrocinadas",
];
