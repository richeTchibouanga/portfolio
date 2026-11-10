// Contenu du portfolio : SOURCE UNIQUE.
// Pour ajouter un projet, un certificat ou une expérience, il suffit de compléter les listes ci-dessous.
// Règle : uniquement des informations vraies et vérifiables (un recruteur peut poser la question).

export const PROFILE = {
  firstName: "Jean de Dieu Riche",
  lastName: "TCHIBOUANGA",
  shortName: "Riche Tchibouanga",
  title: "Développeur Full-Stack & Data / IA",
  roles: ["Développeur Full-Stack", "Data Engineer en formation", "Passionné d'IA appliquée", "Créateur de LeadFlow"],
  location: "Casablanca, Maroc",
  email: "richetchibouanga0@gmail.com",
  github: "https://github.com/richeTchibouanga",
  linkedin: null as string | null, // à compléter : https://www.linkedin.com/in/…
  cv: "/cv-jean-de-dieu-riche-tchibouanga.pdf",
  photo: "/images/photo.png",
  intro:
    "Technicien de formation en maintenance industrielle, je me reconvertis dans le développement logiciel, la data et l'IA. Je conçois des applications web complètes, sécurisées et testées, de l'idée jusqu'à la mise en production.",
  available: "Disponible pour un poste ou des missions freelance",
} as const;

export const STATS = [
  { value: "1", label: "SaaS en production" },
  { value: "300+", label: "tests automatisés" },
  { value: "9", label: "certifications DataCamp" },
] as const;

export const ABOUT = {
  paragraphs: [
    "Pendant plusieurs années, j'ai travaillé dans l'industrie, au Congo : production, maintenance préventive et corrective, respect strict des règles de sécurité. J'y ai appris à diagnostiquer méthodiquement une panne et à ne rien laisser au hasard.",
    "Grâce à une bourse de BHN Academy (Allemagne), je me forme aujourd'hui à l'ingénierie des données et de l'IA. Je mets immédiatement ces compétences en pratique sur des projets réels.",
    "Mon premier produit, LeadFlow, est un CRM SaaS complet : base de données sécurisée, interface responsive, plus de 300 tests automatisés, intégration continue et démo en ligne. La même rigueur qu'en maintenance industrielle, appliquée au logiciel.",
  ],
  education: [
    {
      period: "Août 2026 – avr. 2027",
      title: "AI & Data Engineering (en cours)",
      school: "Bourse BHN Academy, Allemagne · en ligne (DataCamp, Coursera)",
      detail: "Python, SQL, data engineering, machine learning, LLM, IA générative, agents IA.",
    },
    {
      period: "Oct. 2024",
      title: "Conception mécanique CAO et dessin industriel",
      school: "Oasis de la connaissance, Casablanca",
      detail: "CATIA V5, AutoCAD, SolidWorks.",
    },
    {
      period: "2016 – 2019",
      title: "Licence en maintenance industrielle",
      school: "EAD, Congo",
      detail: "Stratégie de maintenance, automatique, électrotechnique, robotique, métrologie.",
    },
    {
      period: "2016",
      title: "Baccalauréat technique, mécanique générale",
      school: "Lycée Poaty Bernard, Pointe-Noire",
      detail: null,
    },
  ],
} as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  links: { label: string; href: string; primary?: boolean }[];
  status: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "leadflow",
    name: "LeadFlow",
    tagline: "CRM SaaS multi-entreprise pour les petites entreprises",
    description:
      "Prospects, clients, pipeline commercial en glisser-déposer, relances et tableau de bord, dans un espace isolé pour chaque entreprise. Réalisé de l'analyse du besoin jusqu'à la mise en production.",
    highlights: [
      "Isolation des données garantie par la base (Row Level Security)",
      "Plus de 300 tests automatisés et intégration continue",
      "Audit de sécurité Semgrep et OWASP ZAP",
      "Démo en ligne en un clic, réinitialisée chaque nuit",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Playwright", "Vercel"],
    image: "/images/projects/leadflow-dashboard.png",
    imageAlt: "Tableau de bord de LeadFlow : indicateurs, graphiques et pipeline",
    links: [
      { label: "Essayer la démo", href: "https://leadflow-seven-roan.vercel.app", primary: true },
      { label: "Présentation", href: "https://github.com/richeTchibouanga/leadflow-showcase" },
    ],
    status: "En production",
  },
];

// Logos : https://devicon.dev (CDN jsDelivr). `icon: null` → pastille texte.
export const SKILLS = [
  {
    category: "Développement web",
    items: [
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "React", icon: "react/react-original" },
      { name: "Next.js", icon: "nextjs/nextjs-original" },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
      { name: "HTML5", icon: "html5/html5-original" },
      { name: "CSS3", icon: "css3/css3-original" },
    ],
  },
  {
    category: "Données & IA",
    items: [
      { name: "Python", icon: "python/python-original" },
      { name: "SQL / PostgreSQL", icon: "postgresql/postgresql-original" },
      { name: "Supabase", icon: "supabase/supabase-original" },
      { name: "API OpenAI", icon: null },
      { name: "Agents IA (smolagents)", icon: null },
      { name: "IA générative & LLM", icon: null },
    ],
  },
  {
    category: "Qualité, sécurité & DevOps",
    items: [
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original" },
      { name: "GitHub Actions", icon: "githubactions/githubactions-original" },
      { name: "Vercel", icon: "vercel/vercel-original" },
      { name: "Playwright", icon: "playwright/playwright-original" },
      { name: "Vitest", icon: "vitest/vitest-original" },
      { name: "Row Level Security", icon: null },
      { name: "OWASP Top 10", icon: null },
    ],
  },
  {
    category: "Savoir-être",
    items: [
      { name: "Diagnostic & résolution de problèmes", icon: null },
      { name: "Rigueur", icon: null },
      { name: "Sens de la sécurité", icon: null },
      { name: "Relation client", icon: null },
      { name: "Développement assisté par IA (Claude Code)", icon: null },
    ],
  },
] as const;

export const CERTIFICATIONS = [
  { title: "Associate Data Engineer in SQL", issuer: "DataCamp", date: "Oct. 2026", detail: "Parcours de 28 h" },
  { title: "AI Fundamentals", issuer: "DataCamp", date: "Sept. 2026", detail: "Certification" },
  { title: "Data Literacy", issuer: "DataCamp", date: "Août 2026", detail: "Certification" },
  { title: "AI Agents with Hugging Face smolagents", issuer: "DataCamp", date: "Nov. 2026", detail: "Cours de 3 h" },
  { title: "Working with the OpenAI API", issuer: "DataCamp", date: "Oct. 2026", detail: "Cours de 3 h" },
  { title: "Database Design", issuer: "DataCamp", date: "Oct. 2026", detail: "Cours de 4 h" },
  { title: "Artificial Intelligence (AI) Leadership", issuer: "DataCamp", date: "Sept. 2026", detail: "Parcours de 6 h" },
  { title: "Generative AI Concepts", issuer: "DataCamp", date: "Sept. 2026", detail: "Cours de 2 h" },
  { title: "Communicating Data Insights", issuer: "DataCamp", date: "Août 2026", detail: "Cours de 2 h" },
] as const;

export const EXPERIENCES = [
  {
    period: "2026 – aujourd'hui",
    type: "Freelance",
    role: "Développeur freelance",
    place: "Casablanca",
    points: [
      "Conception, développement et mise en production de LeadFlow, CRM SaaS multi-entreprise.",
      "Pratiques professionnelles : cahier des charges, tests automatisés, intégration continue, sécurité et documentation.",
    ],
    tags: ["Next.js", "Supabase", "Tests", "CI/CD"],
  },
  {
    period: "12/2020 – 09/2024",
    type: "Industrie",
    role: "Opérateur machiniste et maintenance",
    place: "MACF, Pointe-Noire (Congo)",
    points: [
      "Production de tourteaux palmistes : concassage, broyage et emballage du produit fini.",
      "Maintenance corrective de niveau 1 et maintenance préventive systématique des machines.",
    ],
    tags: ["Maintenance", "Production", "Sécurité"],
  },
  {
    period: "06/2016 – 07/2016",
    type: "Stage",
    role: "Technicien stagiaire en mécanique générale",
    place: "Congo Automobile, Pointe-Noire",
    points: ["Usinage sur tour, fraiseuse et perceuse ; maintenance préventive et curative ; respect des normes de sécurité."],
    tags: ["Mécanique", "Usinage"],
  },
  {
    period: "12/2015",
    type: "Industrie",
    role: "Opérateur sur ligne d'embouteillage",
    place: "BRALICO, Pointe-Noire",
    points: ["Acheminement des bouteilles sur la ligne et nettoyage des machines (maintenance préventive)."],
    tags: ["Production"],
  },
] as const;

export const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experiences", label: "Expériences" },
  { href: "#contact", label: "Contact" },
] as const;
