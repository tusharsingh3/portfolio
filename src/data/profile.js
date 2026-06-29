export const PROFILE = {
  name: "Tushar Singh",
  title: "Full-Stack Developer",
  location: "Ghaziabad, UP, India",
  timeZone: "UTC+5:30",
  availability: "Focused on product work and long-term engineering builds",
  summary:
    "I build product-focused web apps, browser extensions, and internal tooling with React, Node.js, MSSQL, and MongoDB.",
  photo: "/tushar-portrait.webp",
  photoFallback: "/tushar-portrait.png",
  links: {
    github: "https://github.com/tusharsingh3",
    npm: "https://www.npmjs.com/~tushar89",
    npmSettings: "https://www.npmjs.com/settings/tushar89/packages",
    chromeExtension:
      "https://chromewebstore.google.com/detail/ai-usage-tracker/pkklbaifhmpmcecpfofhpbgldlnpfknm?utm_source=item-share-cb",
    coolr: "https://www.coolr.ai/",
    volza: "https://www.volza.com/",
  },
  featuredTech: [
    "React.js",
    "Node.js",
    "MSSQL",
    "MongoDB",
    "Chrome MV3",
    "Open Source",
  ],
};

export const STATS = [
  { n: 5, suf: "+", label: "Years experience", scrollTo: "work" },
  { n: 6, suf: "", label: "Featured projects", scrollTo: "work" },
  { n: 3, suf: "", label: "npm packages", scrollTo: "project-4" },
  { n: 1, suf: "", label: "Chrome extension", scrollTo: "project-3" },
];

export const PROJECTS = [
  {
    id: 1,
    n: "01",
    title: "CoolR",
    cat: "AI SaaS Platform",
    year: "2026",
    desc:
      "AI-powered SaaS that turns cooler and freezer images into commercial insight. Improves availability, reduces wasted visits, and helps F&B teams act faster across global retail portfolios.",
    stack: ["React.js", "Node.js", "Starrocks", ".NET"],
    color: "from-purple-500/10 to-violet-500/5",
    accent: "text-purple-400",
    link: PROFILE.links.coolr,
    customers: "Deployed across 40+ markets",
  },
  {
    id: 2,
    n: "02",
    title: "Volza",
    cat: "Trade Intelligence",
    year: "2025",
    desc:
      "Global export-import trade intelligence platform with supplier discovery, shipment data, and market insights for businesses working with large-scale trade flows.",
    stack: ["React.js", "Node.js", "MSSQL", "Elastic Search"],
    color: "from-blue-500/10 to-sky-500/5",
    accent: "text-blue-400",
    link: PROFILE.links.volza,
    customers: "Trade data across 203 countries",
  },
  {
    id: 3,
    n: "03",
    title: "AI Usage Tracker",
    cat: "Chrome Extension",
    year: "2025",
    desc:
      "Chrome MV3 extension that tracks AI tool usage directly from the browser toolbar. Built for Claude, ChatGPT, and Gemini with session tracking and usage analytics.",
    stack: ["Chrome MV3", "JavaScript", "Canvas API", "IndexedDB"],
    color: "from-pink-500/10 to-rose-500/5",
    accent: "text-pink-400",
    link: PROFILE.links.chromeExtension,
    customers: "Published on the Chrome Web Store",
  },
  {
    id: 4,
    n: "04",
    title: "nexbase-ui",
    cat: "npm Package",
    year: "2024",
    desc:
      "Zero-dependency React component library with accessible UI primitives and data-grid building blocks. Published under @tushar89 on npm.",
    stack: ["React.js", "TypeScript", "npm", "Open Source"],
    color: "from-green-500/10 to-emerald-500/5",
    accent: "text-green-400",

    link: PROFILE.links.npmSettings,
    customers: "Open source package on npm",
  },
  {
    id: 5,
    n: "05",
    title: "nexbase",
    cat: "npm Package",
    year: "2024",
    desc:
      "Declarative CRUD framework for Fastify and Postgres. Designed to spin up a full-featured REST API quickly while keeping the developer experience simple.",
    stack: ["Node.js", "Fastify", "PostgreSQL", "npm"],
    color: "from-yellow-500/10 to-amber-500/5",
    accent: "text-yellow-400",

    link: PROFILE.links.npmSettings,
    customers: "Open source package on npm",
  },
  {
    id: 6,
    n: "06",
    title: "nexlogger",
    cat: "npm Package",
    year: "2025",
    desc:
      "Zero-dep Node.js logger with library-safe silent mode, auto env-aware output, AsyncLocalStorage correlation, and OpenTelemetry injection.",
    stack: ["Node.js", "TypeScript", "npm", "Open Source"],
    color: "from-purple-500/10 to-violet-500/5",
    accent: "text-purple-400",

    link: PROFILE.links.npmSettings,
    customers: "Open source package on npm",
  },
];

export const SKILLS = [
  { label: "React.js", pct: 92, note: "Primary" },
  { label: "Node.js", pct: 90, note: "Core" },
  { label: "TypeScript", pct: 84, note: "Strong" },
  { label: "MSSQL", pct: 86, note: "Daily" },
  { label: "PostgreSQL", pct: 80, note: "Used" },
  { label: "MongoDB", pct: 82, note: "Regular" },
  { label: "Chrome MV3", pct: 84, note: "Active" },
  { label: "Express.js", pct: 80, note: "Used" },
  { label: "Fastify", pct: 78, note: "Open source" },
  { label: ".NET", pct: 76, note: "Used" },
  { label: "REST APIs", pct: 88, note: "Strong" },
];

export const STACK_ROWS = [
  [
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MSSQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Chrome MV3", icon: "🔵" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Express.js", icon: "⚡" },
  ],
  [
    { name: "Fastify", icon: "🚀" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: ".NET", icon: "🧩" },
    { name: "REST APIs", icon: "🌐" },
    { name: "Git", icon: "🔀" },
    { name: "Vite", icon: "💡" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Framer Motion", icon: "✨" },
    { name: "AI Tooling", icon: "🤖" },
  ],
];

export const HIGHLIGHTS = [
  {
    title: "CoolR",
    subtitle: "AI-powered retail intelligence",
    text:
      "Building software that turns cooler and freezer images into commercial insight for global F&B teams.",
  },
  {
    title: "npm packages",
    subtitle: "@tushar89",
    text:
      "Maintaining open-source packages like nexbase-ui, nexbase, and nexlogger under my npm profile.",
  },
];
