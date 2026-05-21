export const personalInfo = {
  name: "RAZAFIMANDIMBY TOLOJANAHARY STEPHAN",
  shortName: "Tolojanahary Stephan",
  title: "Développeur Fullstack & Passionné d'Innovation Technologique",
  description:
    "Étudiant en informatique passionné par les technologies modernes, le développement web/mobile, le data engineering et les solutions intelligentes. Curieux, autonome et motivé, il aime concevoir des applications innovantes et résoudre des problèmes complexes.",
  email: "tolotrastephan2001@gmail.com",
  phones: ["0324094041", "0346459368"],
  github: "https://github.com/tolojanaharystephan",
  githubUsername: "tolojanaharystephan",
  cvUrl:
    "https://drive.google.com/file/d/14Z1uTOPOtU0aw7GPwaF3Dc4vdEdV-Qrd/view?usp=drive_link",
  cvDownloadUrl:
    "https://drive.google.com/uc?export=download&id=14Z1uTOPOtU0aw7GPwaF3Dc4vdEdV-Qrd",
  location: "Madagascar",
  available: true,
  linkedin: "",
  roles: [
    "Développeur Fullstack",
    "Ingénieur Data",
    "Passionné IA",
    "Créateur d'applications",
  ],
} as const;

export const services = [
  {
    title: "Applications Web & Mobile",
    description: "Sites, dashboards et apps React Native orientés métier.",
    icon: "Smartphone",
  },
  {
    title: "API & Backend",
    description: "Architecture REST, Node.js et intégrations robustes.",
    icon: "Server",
  },
  {
    title: "Data Engineering",
    description: "Pipelines ETL, entrepôts de données et analyse Python.",
    icon: "Database",
  },
  {
    title: "Innovation & IA",
    description: "Prototypage rapide, vibe coding et outils IA au service du produit.",
    icon: "Sparkles",
  },
] as const;

export const skillProficiency = [
  { skill: "React / Next.js", level: 90 },
  { skill: "TypeScript", level: 88 },
  { skill: "Node.js / API", level: 85 },
  { skill: "Python / Data", level: 82 },
  { skill: "React Native", level: 80 },
  { skill: "PostgreSQL / Prisma", level: 78 },
] as const;

export const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Expertise" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expériences" },
  { href: "#projects", label: "Projets" },
  { href: "#github", label: "GitHub" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { label: "Projets réalisés", value: 15, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Stages & missions", value: 3, suffix: "" },
  { label: "Années de code", value: 4, suffix: "+" },
] as const;

export const aboutHighlights = [
  {
    title: "Développement logiciel",
    description:
      "Conception d'applications web et mobile robustes, scalables et orientées utilisateur.",
    icon: "Code2",
  },
  {
    title: "Technologies modernes",
    description:
      "Stack React, Next.js, Node.js et écosystème JavaScript/TypeScript de pointe.",
    icon: "Layers",
  },
  {
    title: "Intelligence Artificielle",
    description:
      "Exploration des outils IA pour accélérer le développement et créer des solutions intelligentes.",
    icon: "Brain",
  },
  {
    title: "Data Engineering",
    description:
      "Pipelines ETL, Data Warehouse et traitement de données avec Python et Pandas.",
    icon: "Database",
  },
  {
    title: "Innovation",
    description:
      "Projets innovants : simulations 3D, drones, ascenseurs intelligents et vibe coding.",
    icon: "Sparkles",
  },
  {
    title: "Apprentissage continu",
    description:
      "Curiosité permanente, veille technologique et montée en compétences autonome.",
    icon: "GraduationCap",
  },
] as const;

export const skillCategories = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-600",
    skills: ["ReactJS", "NextJS", "TailwindCSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    color: "from-blue-500 to-indigo-600",
    skills: ["NodeJS", "ExpressJS", "API REST"],
  },
  {
    title: "Mobile",
    color: "from-violet-500 to-purple-600",
    skills: ["React Native"],
  },
  {
    title: "Data & IA",
    color: "from-emerald-500 to-cyan-600",
    skills: [
      "Python",
      "Pandas",
      "ETL",
      "Data Warehouse",
      "Data Engineering",
      "Outils IA",
    ],
  },
  {
    title: "Autres",
    color: "from-sky-500 to-blue-500",
    skills: [
      "Git/GitHub",
      "PostgreSQL",
      "Prisma",
      "UI/UX",
      "Vibe Coding",
    ],
  },
] as const;

export const experiences = [
  {
    company: "JIRAMA Mahajanga",
    role: "Stagiaire Développeur",
    period: "Stage",
    description:
      "Développement d'une application mobile pour la gestion des rendez-vous avec les personnels cadres.",
    technologies: ["React Native", "Mobile", "API"],
  },
  {
    company: "WAU Company",
    role: "Stagiaire Développeur Remote",
    period: "Stage Remote",
    description:
      "Conception d'une application innovante pour la gestion et le suivi de livraison.",
    technologies: ["React Native", "Node.js", "Livraison"],
  },
  {
    company: "Projet Personnel",
    role: "Apprenti Data Engineering",
    period: "Projet",
    description:
      "Conception de pipelines ETL et Data Warehouse avec Python.",
    technologies: ["Python", "Pandas", "ETL", "Data Warehouse"],
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Application Mobile de Gestion de Rendez-vous",
    description:
      "Application mobile pour JIRAMA permettant la planification et le suivi des rendez-vous avec le personnel cadre.",
    stack: ["React Native", "Node.js", "API REST"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    github: "https://github.com/tolojanaharystephan",
  },
  {
    id: 2,
    title: "Simulation d'Ascenseur Intelligent 3D",
    description:
      "Simulation 3D d'un système d'ascenseur intelligent avec algorithmes d'optimisation et visualisation interactive.",
    stack: ["JavaScript", "Three.js", "3D"],
    gradient: "from-violet-500/20 to-purple-600/20",
    github: "https://github.com/tolojanaharystephan",
  },
  {
    id: 3,
    title: "Simulation de Livraison par Drone",
    description:
      "Optimisation multi-critère pour la livraison par drone : distance, temps, coût et contraintes opérationnelles.",
    stack: ["Python", "Algorithmes", "Optimisation"],
    gradient: "from-emerald-500/20 to-cyan-600/20",
    github: "https://github.com/tolojanaharystephan",
  },
  {
    id: 4,
    title: "Projet Data Warehouse Bancaire",
    description:
      "Conception d'un entrepôt de données bancaire pour l'analyse et la reporting décisionnel.",
    stack: ["Python", "SQL", "Data Warehouse", "ETL"],
    gradient: "from-blue-500/20 to-indigo-600/20",
    github: "https://github.com/tolojanaharystephan",
  },
  {
    id: 5,
    title: "Pipeline ETL Python avec Pandas",
    description:
      "Pipeline ETL complet pour l'extraction, transformation et chargement de données métier.",
    stack: ["Python", "Pandas", "ETL"],
    gradient: "from-amber-500/20 to-orange-600/20",
    github: "https://github.com/tolojanaharystephan",
  },
  {
    id: 6,
    title: "Système Intelligent de Livraison",
    description:
      "Application de gestion et suivi de livraison en temps réel pour WAU Company.",
    stack: ["React Native", "Node.js", "Tracking"],
    gradient: "from-rose-500/20 to-pink-600/20",
    github: "https://github.com/tolojanaharystephan",
  },
  {
    id: 7,
    title: "Applications Innovantes en Vibe Coding",
    description:
      "Collection d'applications expérimentales développées avec des approches créatives et IA-assisted.",
    stack: ["Next.js", "React", "IA", "UI/UX"],
    gradient: "from-fuchsia-500/20 to-violet-600/20",
    github: "https://github.com/tolojanaharystephan",
  },
] as const;

export const education = [
  {
    school: "École Nationale d'Informatique — Université de Fianarantsoa",
    degree: "Master Professionnel Informatique",
    period: "En cours / Récent",
    description:
      "Spécialisation en développement logiciel, technologies modernes et ingénierie des données.",
  },
  {
    school: "École Nationale d'Informatique — Université de Fianarantsoa",
    degree: "Licence Professionnelle Informatique",
    period: "Obtenue",
    description:
      "Fondations solides en algorithmique, programmation et systèmes d'information.",
  },
] as const;

export const seo = {
  title: "Tolojanahary Stephan | Développeur Fullstack & Data Engineering",
  description:
    "Portfolio de Tolojanahary Stephan — Étudiant ingénieur informatique, développeur fullstack, passionné par l'IA, le data engineering et l'innovation technologique.",
  keywords: [
    "développeur fullstack",
    "data engineering",
    "React",
    "Next.js",
    "Madagascar",
    "portfolio développeur",
    "ingénieur informatique",
  ],
  url: "https://tolojanahary.dev",
} as const;
