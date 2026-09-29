export interface Project {
  id: string;
  title: string;
  category: string;
  status?: string;
  date?: string;
  description: string;
  additional: string;
  technologies: string[];
  flow: string[];
  overview: string;
  problem: string;
  solution: string;
  architectureDetails: string;
  testingDetails: string;
  result: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface FreelanceProject {
  id: string;
  title: string;
  category: string;
  type: "FREELANCE DEMO";
  liveUrl: string;
  description: string;
  highlights: string[];
  themeColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: {
    name: string;
    icon: string;
    description: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Neelakanta Ganji",
  initials: "NG",
  title: "Full-Stack Web Developer & App Developer",
  positioning:
    "Building modern web applications, mobile experiences, backend systems, APIs and complete digital products.",
  headline: "ENGINEERING IDEAS INTO DIGITAL PRODUCTS.",
  aboutText:
    "I’m Neelakanta Ganji, a Full-Stack Web Developer and App Developer focused on building modern, responsive and functional digital products.\n\nI work across frontend development, backend APIs, databases, authentication, integrations and deployment, while also building modern mobile experiences.",
  education: "B.Tech — Computer Science & Engineering",
  email: "ganjineelakanta0@gmail.com",
  phone: "+91 9392799404",
  phoneFormatted: "+91 9392799404",
  github: "https://github.com/Neelakanta-ganji",
  linkedin: "https://linkedin.com/in/ganjineelakanta",
  availability: "● AVAILABLE FOR OPPORTUNITIES",
  resumePath: "/resume.pdf",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "FRONTEND",
    items: [
      { name: "HTML5", icon: "HTML5Icon", description: "Semantic markup, accessible DOM structure, modern HTML5 APIs" },
      { name: "CSS3", icon: "CSS3Icon", description: "Modern layouts, responsive design, animations, CSS variables" },
      { name: "JavaScript", icon: "JavaScriptIcon", description: "Modern ES6+, asynchronous programming, functional patterns" },
      { name: "React", icon: "ReactIcon", description: "Component architecture, hooks, state management, virtual DOM" },
      { name: "Next.js", icon: "NextjsIcon", description: "App router, SSR/SSG, server actions, route handlers" },
      { name: "Tailwind CSS", icon: "TailwindIcon", description: "Utility-first design systems, responsive grids, custom theming" },
    ],
  },
  {
    id: "backend",
    title: "BACKEND",
    items: [
      { name: "Node.js", icon: "NodejsIcon", description: "Event-driven runtime, scalable asynchronous network applications" },
      { name: "Supabase", icon: "SupabaseIcon", description: "PostgreSQL BaaS, real-time database, edge functions, auth services" },
      { name: "Express.js", icon: "ExpressIcon", description: "RESTful endpoints, middleware chains, token validation" },
      { name: "Python", icon: "PythonIcon", description: "Data manipulation, backend logic, ML scripting, algorithmic tasks" },
      { name: "Flask", icon: "PythonIcon", description: "Lightweight microservice REST APIs, model inference endpoints" },
      { name: "Java", icon: "JavaIcon", description: "Enterprise OOP, strongly typed architectures, concurrency" },
      { name: "REST APIs", icon: "RestApiIcon", description: "Stateless HTTP services, JSON schemas, contract design" },
    ],
  },
  {
    id: "database",
    title: "DATABASE",
    items: [
      { name: "MySQL", icon: "MySQLIcon", description: "Relational schemas, normalized tables, indexing, transactions" },
      { name: "PostgreSQL", icon: "PostgreSQLIcon", description: "ACID compliance, complex joins, relational integrity" },
      { name: "MongoDB", icon: "MongoDBIcon", description: "NoSQL document store, flexible course schemas, aggregations" },
      { name: "Apache Cassandra", icon: "CassandraIcon", description: "Distributed NoSQL, high-throughput payment ledgers, fault tolerance" },
      { name: "Firebase", icon: "FirebaseIcon", description: "Auth services, hosting, cloud functions, serverless backends" },
      { name: "Firestore", icon: "FirebaseIcon", description: "Real-time document sync, watchlist listeners, low latency" },
    ],
  },
  {
    id: "ai_ml",
    title: "AI / MACHINE LEARNING",
    items: [
      { name: "Python", icon: "PythonIcon", description: "Scientific computing, numerical data processing, pipelines" },
      { name: "scikit-learn", icon: "MLIcon", description: "Statistical machine learning, anomaly detection models" },
      { name: "XGBoost", icon: "MLIcon", description: "Gradient boosted decision trees for real-time URL/phishing classification" },
      { name: "Gemini API", icon: "GeminiIcon", description: "LLM integration, prompt engineering for financial/code analysis" },
    ],
  },
  {
    id: "mobile",
    title: "MOBILE",
    items: [
      { name: "React Native", icon: "ReactIcon", description: "Cross-platform mobile apps for iOS and Android" },
      { name: "Flutter", icon: "FlutterIcon", description: "High-performance native mobile UI rendering with Dart" },
      { name: "Android", icon: "AndroidIcon", description: "Android SDK platform concepts, Gradle builds, mobile lifecycles" },
    ],
  },
  {
    id: "devops_tools",
    title: "TOOLS / DEVOPS / TESTING",
    items: [
      { name: "Git", icon: "GitIcon", description: "Distributed version control, branching strategies, conflict resolution" },
      { name: "GitHub", icon: "GitHubIcon", description: "Repository hosting, code reviews, collaboration, actions" },
      { name: "Docker", icon: "DockerIcon", description: "Containerization, isolated application environments, microservice packaging" },
      { name: "Docker Compose", icon: "DockerIcon", description: "Multi-container orchestration for microservice stacks" },
      { name: "Azure", icon: "AzureIcon", description: "Cloud hosting, App Services, CI/CD deployment pipelines" },
      { name: "Vercel", icon: "VercelIcon", description: "Edge hosting, continuous deployment for Next.js web applications" },
      { name: "Netlify", icon: "VercelIcon", description: "Static and serverless hosting, automated build workflows" },
      { name: "Postman", icon: "PostmanIcon", description: "API contract testing, environment variables, collection automation" },
      { name: "Selenium", icon: "RestApiIcon", description: "Automated end-to-end browser testing and UI regression suites" },
      { name: "JUnit", icon: "RestApiIcon", description: "Java unit and integration testing frameworks" },
      { name: "REST Assured", icon: "RestApiIcon", description: "Java DSL for REST API validation and HTTP assertions" },
    ],
  },
];

export const ENGINEERING_PROJECTS: Project[] = [
  {
    id: "billpay-lite",
    title: "BillPay Lite — Bill Payment Microservices Platform",
    category: "Distributed Systems & Microservices",
    status: "IN PROGRESS",
    description:
      "Building Spring Boot microservices for biller and customer management using PostgreSQL and payment processing using Cassandra, inspired by the Bharat BillPay flow.",
    additional:
      "Adding a Python/Flask and scikit-learn service that flags anomalous payments, along with JUnit/REST Assured API tests, Selenium end-to-end tests and Docker Compose setup.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Apache Cassandra",
      "Python",
      "scikit-learn",
      "Docker",
      "JUnit",
      "REST Assured",
      "Selenium",
    ],
    flow: [
      "Client",
      "Biller Service",
      "Customer Service",
      "Payment Service",
      "PostgreSQL",
      "Cassandra",
      "ML anomaly detection",
      "Docker",
    ],
    overview:
      "A distributed microservices payment infrastructure inspired by India's Bharat BillPay system (BBPS), engineered to process multi-biller reconciliations, high-velocity ledger updates, and real-time fraud mitigation.",
    problem:
      "Monolithic payment engines face systemic lock contention during month-end bill spikes, risk single points of failure across user management vs transaction recording, and struggle to inspect transaction anomalies in real-time.",
    solution:
      "Architected dedicated microservices with decoupled persistence layers: PostgreSQL handles strongly consistent relational customer/biller hierarchies, while Apache Cassandra provides distributed, high-speed sequential writes for payment events. An asynchronous Python Flask ML service evaluates anomalous transaction velocities.",
    architectureDetails:
      "Client requests enter through an API layer dispatching to specialized Spring Boot microservices. Data writes are partitioned between PostgreSQL and Cassandra. Services are packaged into reproducible containers managed via Docker Compose.",
    testingDetails:
      "Unit and integration tests authored using JUnit 5 and REST Assured for all HTTP endpoints, supplemented by Selenium browser automation verifying customer payment checkout lifecycles.",
    result:
      "Fault-tolerant microservice foundation with automated anomaly scoring and zero downtime during individual service restarts.",
  },
  {
    id: "edtech-lms",
    title: "EdTech LMS Platform — Full Stack",
    category: "Full-Stack Web Application",
    date: "December 2024",
    description:
      "Built REST APIs for course management, student enrollment and progress tracking, with JWT authentication and role-based access for students, instructors and admins.",
    additional:
      "Designed a hybrid data layer using MySQL for structured user/enrollment data and MongoDB for flexible course content. Tested APIs using Postman and deployed on Azure through a CI/CD pipeline.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "JWT",
      "Azure",
      "Postman",
    ],
    flow: [
      "Student / Instructor / Admin",
      "Next.js",
      "Node.js / Express",
      "JWT",
      "MySQL + MongoDB",
      "Azure",
    ],
    overview:
      "Full-stack educational management system facilitating dynamic course authoring, hierarchical student enrollments, interactive lesson completion tracking, and granular permissions for three distinct user roles.",
    problem:
      "Educational platforms require both rigid relational guarantees (payments, user authentication, student enrollments) and highly dynamic document structures (quizzes with varied question types, rich media lessons, evolving module syllabi).",
    solution:
      "Implemented a dual-database architecture: MySQL stores relational user identities and enrollment mappings, while MongoDB provides flexible JSON document modeling for course syllabi, quizzes, and multimedia modules. Authenticated with signed JSON Web Tokens.",
    architectureDetails:
      "Modern Next.js user interface communicating with a Node.js/Express REST backend. Role-based middleware intercepts requests to enforce strict admin/instructor/student access boundaries. Deployed via Azure App Services with continuous delivery.",
    testingDetails:
      "Comprehensive Postman test collections with automated pre-request authentication scripts and assertions validating response schemas and token expiry edge cases.",
    result:
      "Highly responsive full-stack platform with clean role boundaries, sub-100ms API response times, and automated Azure cloud deployments.",
  },
  {
    id: "phishing-detector",
    title: "Phishing Detection Browser Extension",
    category: "Cybersecurity & Machine Learning",
    date: "May 2025",
    description:
      "Developed a browser extension backed by a machine-learning service for identifying suspicious URLs and malicious email content.",
    additional:
      "Built a Flask REST API for URL/email feature extraction, connecting the extension UI to the ML model.",
    technologies: [
      "Python",
      "Flask",
      "XGBoost",
      "Chrome Extension",
      "JavaScript",
    ],
    flow: [
      "Browser",
      "Chrome Extension",
      "Flask API",
      "Feature Extraction",
      "XGBoost",
      "Detection Result",
    ],
    overview:
      "An intelligent browser defense shield that intercepts visited links and scanned email contents, evaluates structural anomalies via machine learning, and alerts users before credential entry.",
    problem:
      "Phishing campaigns utilize obfuscated URLs, homoglyph character substitutions, and deceptive sender headers that bypass static URL blocklists and heuristic browser filters.",
    solution:
      "Engineered an automated feature extraction pipeline computing domain entropy, suspicious subdomains, path depth, and lexical patterns. An XGBoost classifier evaluates feature vectors to score malicious probability in real time.",
    architectureDetails:
      "A lightweight Chrome Extension written in JavaScript captures active tab URLs and email elements, dispatching async payloads to a Python Flask REST service hosting the trained XGBoost model.",
    testingDetails:
      "Benchmarked on benchmark phishing datasets, evaluating accuracy against false-positive rates to ensure minimal disruption to legitimate browsing workflows.",
    result:
      "Real-time phishing detection running in milliseconds, providing instant visual safety warnings right inside the Chrome browser.",
  },
  {
    id: "indian-stock-analyzer",
    title: "Indian Stock Analyzer",
    category: "FinTech & AI Analytics",
    date: "April 2025",
    description:
      "Developed a stock analysis web application with Firebase authentication and a Firestore-backed real-time watchlist.",
    additional:
      "Integrated Alpha Vantage for live and historical market data with Lightweight Charts, and added Gemini-powered fundamental and technical analysis through prompt-driven LLM calls.",
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "Firebase Authentication",
      "Firestore",
      "Alpha Vantage API",
      "Gemini API",
      "Lightweight Charts",
    ],
    flow: [
      "Client",
      "Alpha Vantage API",
      "TradingView Lightweight Charts",
      "Firestore Real-time Watchlist",
      "Gemini LLM Analysis",
    ],
    overview:
      "Financial intelligence dashboard integrating real-time market telemetry for Indian equities, TradingView-grade interactive charting, persistent user watchlists, and AI-driven stock sentiment reports.",
    problem:
      "Retail traders often lack the time or tooling to correlate raw technical candle patterns with complex corporate earnings filings and macroeconomic news sentiment.",
    solution:
      "Unified live ticker streams from Alpha Vantage with TradingView Lightweight Charts, backed by real-time Firestore database synchronization. Integrated Google Gemini API to synthesize technical indicators and price action into readable fundamental insights.",
    architectureDetails:
      "Modular client-side single-page architecture styled with Tailwind CSS. Firebase Auth secures user sessions, while Firestore listeners push watchlist price shifts without polling. Structured prompt engineering interfaces with Gemini for executive market summaries.",
    testingDetails:
      "Validation of rate-limiting handling for Alpha Vantage quotas, token lifecycle checks in Firebase, and prompt resilience against market volatility anomalies.",
    result:
      "Smooth, sub-second charting experience with automated AI market summaries accessible across desktop and mobile browsers.",
  },
];

export const FREELANCE_PROJECTS: FreelanceProject[] = [
  {
    id: "gnk-gym",
    title: "GNK Gym",
    category: "Gym / Fitness Website",
    type: "FREELANCE DEMO",
    liveUrl: "https://neelakanta-ganji.github.io/gnk-gym/",
    description:
      "Dynamic, high-energy fitness platform engineered for gym businesses, featuring interactive membership tiers, responsive trainer rosters, and workout class scheduling.",
    highlights: [
      "Fully responsive mobile-first architecture",
      "Interactive membership plan calculator",
      "High-performance video and image optimization",
      "Modern dark aesthetic tailored for fitness brands",
    ],
    themeColor: "#ef4444",
  },
  {
    id: "savoria-food",
    title: "Savoria Food",
    category: "Restaurant / Food Website",
    type: "FREELANCE DEMO",
    liveUrl: "https://savoria-food.netlify.app/",
    description:
      "Sophisticated culinary web experience designed for upscale dining and restaurants, presenting interactive menu showcases, chef stories, and a seamless reservation interface.",
    highlights: [
      "Categorized interactive gourmet menu cards",
      "Online table reservation workflow",
      "Fluid micro-animations on dish selections",
      "Optimized for fast mobile culinary ordering",
    ],
    themeColor: "#f59e0b",
  },
  {
    id: "gnk-luxury",
    title: "GNK Luxury",
    category: "Luxury Business Website",
    type: "FREELANCE DEMO",
    liveUrl: "https://gnk-luxury.netlify.app/",
    description:
      "Ultra-minimalist, high-end commercial showcase crafted for luxury lifestyle goods and boutique brands, emphasizing refined typography, subtle glassmorphism, and spatial elegance.",
    highlights: [
      "Editorial typographic grid system",
      "Cinematic product showcase with smooth transitions",
      "Bespoke inquiry and client concierge portal",
      "Ultra-sleek dark palette with metallic accents",
    ],
    themeColor: "#38bdf8",
  },
];

export const DEVELOPMENT_STAGES = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Domain & Requirements Elicitation",
    description: "Deconstructing project goals, analyzing technical constraints, identifying user personas, and establishing architectural foundations.",
  },
  {
    step: "02",
    title: "PLAN",
    subtitle: "System Boundaries & Schema",
    description: "Designing database models (SQL vs NoSQL), microservice boundaries, API contracts, authentication flows, and technology selections.",
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "UI/UX & Interactive Prototypes",
    description: "Crafting intuitive user interfaces, responsive design systems, accessibility guidelines, and high-fidelity interaction choreography.",
  },
  {
    step: "04",
    title: "DEVELOP",
    subtitle: "Full-Stack Implementation",
    description: "Writing clean, type-safe frontend components, robust backend controllers, modular microservices, and asynchronous event streams.",
  },
  {
    step: "05",
    title: "TEST",
    subtitle: "Automation & Quality Assurance",
    description: "Executing unit tests (JUnit), API contract testing (REST Assured, Postman), and end-to-end browser automation (Selenium).",
  },
  {
    step: "06",
    title: "DEPLOY",
    subtitle: "Containerization & Cloud Delivery",
    description: "Packaging environments with Docker Compose, automating CI/CD pipelines, and deploying to cloud infrastructure (Azure, Vercel).",
  },
  {
    step: "07",
    title: "IMPROVE",
    subtitle: "Monitoring & Performance Tuning",
    description: "Observing latency metrics, query optimization, security vulnerability auditing, and iterative feature refinement.",
  },
];

export const SECURITY_PILLARS = [
  {
    title: "Authentication",
    desc: "JWT-based stateless tokens, encrypted cookie storage, and session invalidation.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Authorization",
    desc: "Strict role-based access control (Admin, Instructor, Student) enforced at middleware layers.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Input Validation",
    desc: "Schema sanitization, parameterized queries preventing SQL and NoSQL injection vulnerabilities.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Secure APIs",
    desc: "Strict CORS policies, HTTPS enforcement, rate limiting, and HTTP response headers.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Environment Isolation",
    desc: "Server-side secret isolation, zero exposure of API keys or database credentials in client code.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Database Security",
    desc: "Encrypted connections via TLS, credential least-privilege, and secure connection pooling.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Automated API Testing",
    desc: "Regression security verification using Postman collections and REST Assured assertions.",
    icon: "ShieldCheckIcon",
  },
];

export const ARCHITECTURE_LAYERS = [
  {
    id: "user",
    label: "USER",
    type: "Client Layer",
    tech: "Browsers & Mobile Devices",
    description: "End users accessing web platforms and mobile applications across desktops, tablets, and phones.",
  },
  {
    id: "app",
    label: "WEB / MOBILE APP",
    type: "Presentation Layer",
    tech: "Next.js, React, React Native",
    description: "Fast, interactive client interface delivering responsive rendering, client-side routing, and real-time state.",
  },
  {
    id: "frontend",
    label: "FRONTEND",
    type: "UI Engine",
    tech: "TypeScript, Tailwind CSS, Framer Motion",
    description: "Component hierarchies, design system tokens, responsive grids, and micro-interactions.",
  },
  {
    id: "api",
    label: "API GATEWAY",
    type: "Routing & Security",
    tech: "REST Endpoints, JSON Schemas, CORS",
    description: "Stateless HTTP protocol handling, route dispatching, request validation, and payload serialization.",
  },
  {
    id: "backend",
    label: "BACKEND SERVICES",
    type: "Business Logic",
    tech: "Java Spring Boot, Node.js, Python Flask",
    description: "Microservice controllers, domain workflows, business rule validation, and inter-service messaging.",
  },
  {
    id: "auth",
    label: "AUTHENTICATION",
    type: "Security Barrier",
    tech: "JWT, Firebase Auth, Role Middleware",
    description: "Cryptographic token signing, permission verification, password hashing, and session expiration.",
  },
  {
    id: "db",
    label: "DATABASE & CACHE",
    type: "Persistence Engine",
    tech: "PostgreSQL, Cassandra, MySQL, MongoDB, Firestore",
    description: "Hybrid data management: ACID relational models for users/enrollments and NoSQL for high-speed writes/courses.",
  },
  {
    id: "cloud",
    label: "CLOUD & DEPLOYMENT",
    type: "Infrastructure",
    tech: "Docker Compose, Azure, Vercel, CI/CD",
    description: "Isolated containerization, automated build workflows, edge routing, and continuous delivery.",
  },
];
