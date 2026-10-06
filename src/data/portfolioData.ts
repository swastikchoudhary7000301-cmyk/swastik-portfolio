import { ProjectItem, SkillCategory, JourneyStep } from '../types/portfolio';

// Local high-fidelity image paths generated
import projectWorkspaceImg from '../assets/images/project_collaborative_workspace_1791277862306.jpg';
import projectYugmaImg from '../assets/images/project_yugma_network_1791277873614.jpg';
import projectFileshiftImg from '../assets/images/project_fileshift_app_1791277886804.jpg';

export const PERSONAL_INFO = {
  name: 'Swastik Choudhary',
  role: 'Software Developer',
  subRole: 'Full-Stack Developer · Java & DSA Learner',
  email: 'swastikkc01@gmail.com',
  githubUsername: 'swastikchoudhary7000301-cmyk',
  githubUrl: 'https://github.com/swastikchoudhary7000301-cmyk',
  leetcodeUsername: 'mI9k37mWhz',
  leetcodeUrl: 'https://leetcode.com/u/mI9k37mWhz/',
  linkedinUrl: 'https://www.linkedin.com/in/swastik-choudhary-18867633b/',
  status: 'Open to Internship Opportunities',
  year: '3rd-Year IT Student',
  bio: 'I am Swastik Choudhary, a 3rd-year IT student and aspiring software engineer focused on Java, Data Structures & Algorithms, and full-stack web development. I enjoy building practical applications and continuously improving my problem-solving skills.',
  heroStatement: 'I build full-stack web applications, solve problems with Java and DSA, and turn ideas into practical digital products.',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-workspace',
    number: '01',
    title: 'AI-Powered Collaborative Workspace',
    subtitle: 'Full-Stack Productivity Platform',
    description: 'A full-stack collaborative workspace application focused on authentication, workspaces, members, and productivity.',
    fullOverview: 'Engineered as an end-to-end workspace ecosystem enabling multi-tenant team spaces, role-based member authorization, structured document canvases, and real-time productivity tooling. Features relational data persistence through Prisma, PostgreSQL, and Supabase BaaS, coupled with high-throughput Express REST services.',
    keyFeatures: [
      'Multi-tenant workspace isolation with role hierarchies (Owner, Admin, Member)',
      'Robust JWT-based authentication flow with secure session lifecycle & Supabase Auth',
      'Normalized relational schema designed with PostgreSQL, Supabase & Prisma ORM',
      'Modular Express.js API layer with structured error handling and validation',
      'Interactive Next.js workspace canvas with instant state synchronization'
    ],
    technologies: ['Next.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Prisma', 'TypeScript', 'Tailwind CSS'],
    architecture: 'Next.js App Router frontend consuming Express.js REST API with Prisma ORM, Supabase, and PostgreSQL',
    imageSrc: projectWorkspaceImg,
    githubUrl: 'https://github.com/swastikchoudhary7000301-cmyk',
    liveUrl: undefined, // URL not available - will show inactive/disabled state gracefully
    status: 'active',
  },
  {
    id: 'yugma',
    number: '02',
    title: 'Yugma',
    subtitle: 'Professional Networking & Real-Time Chat',
    description: 'A professional networking and chat platform with user profiles, connections, authentication, and real-time communication.',
    fullOverview: 'Yugma connects aspiring professionals through streamlined networking feeds, direct real-time messaging, and interactive profile discovery. Architected using Node.js and MongoDB to support flexible graph-style connection queries and low-latency websocket messaging.',
    keyFeatures: [
      'Interactive user profiles with skill showcases and portfolio links',
      'Real-time bi-directional direct messaging and presence channels',
      'Connection management with pending requests and bidirectional verification',
      'Secure credential handling with bcrypt password hashing and token authentication',
      'Responsive React frontend with fluid notification feeds'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'CSS3'],
    architecture: 'Single Page React Client with Node.js/Express server and MongoDB document store',
    imageSrc: projectYugmaImg,
    githubUrl: 'https://github.com/swastikchoudhary7000301-cmyk/yugma',
    liveUrl: undefined,
    status: 'active',
  },
  {
    id: 'fileshift',
    number: '03',
    title: 'FileShift',
    subtitle: 'Universal File Conversion Platform',
    description: 'Convert almost anything. One simple workflow — documents, spreadsheets, presentations, PDFs, images, audio, video, and archives.',
    fullOverview: 'Designed to eliminate friction in media and document conversion, FileShift delivers an uncluttered drag-and-drop web workflow. Employs lightweight client-assisted and backend streaming transformations to process multi-format file sets cleanly without bloat.',
    keyFeatures: [
      'Universal conversion pipeline: documents, spreadsheets, presentations, PDFs, images, audio & archives',
      'Zero-friction drag-and-drop file ingestion supporting batch queues',
      'Format transformation pipelines with automated mime-type detection',
      'Real-time conversion progress indicators and instant download packaging',
      'Minimalist dark interface designed for fast, distraction-free file workflows'
    ],
    technologies: ['Web Application', 'JavaScript', 'File Processing', 'HTML5 APIs', 'CSS'],
    architecture: 'Client-driven web application with specialized JavaScript file transformation handlers',
    imageSrc: projectFileshiftImg,
    githubUrl: 'https://github.com/swastikchoudhary7000301-cmyk/fileshift',
    liveUrl: undefined,
    status: 'completed',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Java', level: 'Core & OOP', focus: 'Data Structures, Algorithms, Collections Framework, Multithreading' },
      { name: 'JavaScript', level: 'ES6+ Modern', focus: 'Async/Await, Event Loop, DOM, Functional Patterns' },
      { name: 'TypeScript', level: 'Type Safe', focus: 'Generics, Interfaces, Strict Typing, Utility Types' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Modern Ecosystem', focus: 'Hooks, State Management, Component Lifecycle, Reusability' },
      { name: 'Next.js', level: 'SSR & App Router', focus: 'Server Components, Routing, API Handlers, Optimization' },
      { name: 'Tailwind CSS', level: 'Utility-First', focus: 'Responsive Layouts, Custom Themes, Modern CSS Grid' },
      { name: 'HTML5 & CSS3', level: 'Semantic Standards', focus: 'Accessibility, Semantic Markup, Flexbox, Animations' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Runtime', focus: 'Event-driven I/O, Module System, Stream Pipelines' },
      { name: 'Express.js', level: 'Microservices & APIs', focus: 'Middleware, Routing, Error Handlers, Auth Filters' },
      { name: 'REST APIs', level: 'Architectural Style', focus: 'HTTP Verbs, Status Standards, CRUD Design, JSON Specs' },
    ],
  },
  {
    category: 'Database & BaaS',
    skills: [
      { name: 'Supabase', level: 'PostgreSQL BaaS', focus: 'Row Level Security (RLS), Realtime Subscriptions, Auth, Storage' },
      { name: 'PostgreSQL', level: 'Relational DB', focus: 'Relational Schemas, Indexing, Constraints, SQL Queries' },
      { name: 'Prisma', level: 'Type-Safe ORM', focus: 'Schema Migrations, Type Generation, Relation Queries' },
      { name: 'MongoDB', level: 'NoSQL Document', focus: 'BSON Schemas, Aggregation Pipelines, Mongoose Modeling' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git', level: 'Version Control', focus: 'Branching, Rebasing, Conflict Resolution, Clean Commits' },
      { name: 'GitHub', level: 'Collaboration', focus: 'Repository Management, Pull Requests, Code Review' },
      { name: 'VS Code', level: 'Primary IDE', focus: 'Extensions, Debugging, Terminal Workflows, Snippets' },
    ],
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'Java Fundamentals',
    subtitle: 'The Engineering Core',
    period: 'Foundational Phase',
    description: 'Mastered Object-Oriented Programming principles (Encapsulation, Inheritance, Polymorphism, Abstraction), Java memory model, and the Collections framework.',
    tags: ['OOP', 'Memory Hierarchy', 'Collections', 'Exception Handling'],
  },
  {
    number: '02',
    title: 'Data Structures & Algorithms',
    subtitle: 'Analytical Problem Solving',
    period: 'Active Practice',
    description: 'Disciplined practice tackling algorithmic complexity: Arrays, Strings, Linked Lists, Binary Trees, Recursion, Two Pointers, and Binary Search to build strong computational intuition.',
    tags: ['Time & Space Complexity', 'Trees & Graphs', 'Binary Search', 'Recursion'],
  },
  {
    number: '03',
    title: 'Full-Stack Development',
    subtitle: 'Connecting Interfaces to Systems',
    period: 'Core Expansion',
    description: 'Bridged frontend presentation layers with robust server runtimes using React, Next.js, Node.js, Express, and modern REST protocols.',
    tags: ['React', 'Node.js', 'Express', 'State Management'],
  },
  {
    number: '04',
    title: 'Building Real Projects',
    subtitle: 'Translating Theory into Products',
    period: 'Product Execution',
    description: 'Architected and shipped functioning web applications including Yugma (real-time professional networking), FileShift (file transformation), and AI-Powered Collaborative Workspace.',
    tags: ['Database Schemas', 'Full-Stack Architecture', 'User Auth', 'File Processing'],
  },
  {
    number: '05',
    title: 'Internship Preparation',
    subtitle: 'Industry Readiness & Systems Rigor',
    period: 'Current Target',
    description: 'Honing clean code practices, Git collaboration workflows, REST architectural standards, and technical interview readiness for upcoming software development engineering internships.',
    tags: ['Clean Code', 'Mock Interviews', 'Production Polish', 'System Design Basics'],
  },
  {
    number: '06',
    title: 'Software Engineering',
    subtitle: 'Long-Term Impact',
    period: 'Aspirations & Horizon',
    description: 'Aspiring to engineer scalable, high-impact distributed systems and software that solve real human problems with performance, elegance, and reliability.',
    tags: ['Scalability', 'Distributed Systems', 'Engineering Excellence'],
  },
];

export const CURRENT_FOCUS_AREAS = [
  {
    code: '01',
    title: 'Java + DSA',
    tag: 'Core Problem Solving',
    description: 'Consistent algorithmic problem solving, trees, graphs, and dynamic programming in Java.',
    metric: 'Daily practice & pattern analysis',
  },
  {
    code: '02',
    title: 'Full-Stack Development',
    tag: 'System Architecture',
    description: 'Deepening expertise in Next.js App Router, Express services, and PostgreSQL/Prisma database models.',
    metric: 'Production-ready architectures',
  },
  {
    code: '03',
    title: 'Building Real Projects',
    tag: 'Execution & Delivery',
    description: 'Crafting resilient web applications with clean UI, robust backend validation, and real usability.',
    metric: 'End-to-end full-stack products',
  },
  {
    code: '04',
    title: 'Internship Preparation',
    tag: 'Career Readiness',
    description: 'Preparing for software engineering internships through code reviews, system fundamentals, and portfolio demonstrations.',
    metric: 'Open for 2026 internships',
  },
];
