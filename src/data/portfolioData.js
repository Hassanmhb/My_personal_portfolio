import project1Img from "../img/project1.png";
import project2Img from "../img/proj5.png";
import project3Img from "../img/project 3.png";
import project4Img from "../img/proj2.png";
import project5Img from "../img/proj4.png";
import logo1 from "../img/logo.png";

export const profile = {
  name: "Muhammad Hassan Baig",
  role: "Full-Stack Web Developer",
  tagline: "I build fast, reliable products end-to-end — from database schema to pixel-perfect UI.",
  status: "Open to work / freelance",
  location: "Karachi, Pakistan",
  email: "hasnainhanifhasnainhanif4@gmail.com",
  phone: "+92 316 1825012",
  whatsapp: "923161825012",
  github: "https://github.com/Hassanmhb",
  linkedin: "https://www.linkedin.com/in/muhammad-hassan-baigmhb/",
  resumeUrl: "https://earnest-blini-cfbb79.netlify.app/",
  logo: logo1,
  avatarInitials: "HB",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Hassanmhb", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-hassan-baigmhb/", icon: "Linkedin" },
  { label: "Email", href: "mailto:hasnainhanifhasnainhanif4@gmail.com", icon: "Mail" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutJson = {
  name: "Muhammad Hassan Baig",
  role: "Full-Stack developer",
  based_in: "Karachi, Pakistan",
  years_experience: 2,
  core_focus: [
    "Building production-grade React & Node.js applications",
    "Designing RESTful APIs and database architectures",
    "Creating responsive, high-performance web user interfaces",
  ],
  philosophy:
    "Ship clean code, optimize user experience, and iterate fast.",
  currently_learning: ["Next.js App Router", "TypeScript Advanced Concepts", "Docker Architecture"],
  status: "open_to_work",
};

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", badge: "Core UI", desc: "Semantic structure & accessibility" },
      { name: "CSS3", badge: "Styling", desc: "Flexbox, Grid & Animations" },
      { name: "JavaScript (ES6+)", badge: "Language", desc: "Async/Await, ES Modules & DOM" },
      { name: "TypeScript", badge: "Language", desc: "Static typing & strict interfaces" },
      { name: "React.js", badge: "Library", desc: "Hooks, Context API & Components" },
      { name: "Next.js", badge: "Framework", desc: "SSR, SSG & App Router" },
      { name: "Tailwind CSS", badge: "Styling", desc: "Utility-first responsive layouts" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", badge: "Runtime", desc: "Event-driven server architecture" },
      { name: "Express.js", badge: "Framework", desc: "RESTful API routes & middleware" },
      { name: "MongoDB", badge: "NoSQL DB", desc: "Schema design & Mongoose ORM" },
      { name: "PostgreSQL", badge: "SQL DB", desc: "Relational queries & schema joins" },
      { name: "Firebase", badge: "BaaS", desc: "Authentication & Firestore Realtime" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", badge: "VCS", desc: "Branching, merging & version control" },
      { name: "GitHub", badge: "DevOps", desc: "Code hosting & pull requests" },
      { name: "Docker", badge: "DevOps", desc: "Containerization & deployment" },
      { name: "Vercel", badge: "Hosting", desc: "CI/CD automated deployment" },
      { name: "Postman", badge: "Testing", desc: "API testing & documentation" },
    ],
  },
];

export const projects = [
  {
    id: "proj-ecommerce",
    title: "Full-Stack E-Commerce & Dashboard",
    description:
      "A premium CRUD application featuring a dynamic admin dashboard for real-time product management and order handling.",
    stack: ["Html", "Css", "Javascript","Firebase"],
    image: project1Img,
    liveUrl: "https://my-ecommerce-project-crud.netlify.app/",
    codeUrl: "https://github.com/Hassanmhb",
    featured: true,
  },
  {
    id: "proj-admin-portal",
    title: "Positivus Landing Page",
    description:
      "A pixel-perfect marketing landing page with modern layout techniques using CSS Grid and Flexbox, featuring smooth animations and fully responsive design.",
    stack: ["Html", "Css","Javascript"],
    image: project2Img,
    liveUrl: "https://new-positivus-landing-page.netlify.app/",
    codeUrl: "https://github.com/Hassanmhb",
    featured: true,
  },
  {
    id: "proj-rest-api",
    title: "Quotes App",
    description:
      "A high-performance CRUD application developed with Vanilla JavaScript and Firebase Firestore. It enables users to manage a personal library of quotes with real-time add, edit, and delete functionalities, ensuring instant data synchronization and a seamless, modern user experience.",
    stack: ["Html", "Css", "Javascript", "Firebase"],
    image: project3Img,
    liveUrl: "https://hassanmhb.github.io/My-Quote-App/",
    codeUrl: "https://github.com/Hassanmhb",
    featured: false,
  },
  {
    id: "proj-saas-invoicing",
    title: "Scoops Icecream",
    description:"A modern, artisan ice cream brand web app with a pastel-themed UI, interactive flavor showcases, custom order & table booking modals with real-time validation, deal countdown timers, and smooth Framer Motion scroll interactions.",  
      stack: ["React js", "Tailwind CSS", "Vercel"],
    image: project4Img,
    liveUrl: "https://scoops-icecream.vercel.app/",
    codeUrl: "https://github.com/Hassanmhb",
    featured: false,
  },
  {
    id: "proj-developer-portfolio",
    title: "Shop Co Ecommerce Website",
    description:"A full-stack MERN e-commerce application featuring dynamic product browsing, size/color filtering, and real-time cart state management via React Context API. Built with Material-UI and MongoDB, it leverages Cloudinary for optimized media delivery and is fully deployed on Vercel",  
      stack: ["React js", "Node js", "Express js", "Mongodb"], 
      image: project5Img,
    liveUrl: "https://shop-ecommerce-frontend.vercel.app/",
    codeUrl: "https://github.com/Hassanmhb",
    featured: false,
  },
];

export const timeline = [
  {
    id: "exp-1",
    type: "work",
    title: "Freelance Full-Stack Web Developer",
    org: "Self-employed",
    period: "2023 — Present",
    description:
      "Delivering full-stack web applications for clients, managing frontend UX, REST APIs, and database integrations using Node.js and React.",
  },
  {
    id: "exp-2",
    type: "education",
    title: "Full-Stack Web Development Program",
    org: "Saylani Mass IT Training (SMIT)",
    period: "2023 — 2024",
    description:
      "Intensive training in modern web development covering HTML5, CSS3, JavaScript ES6+, React, Node.js, Express, MongoDB, and Git.",
  },
];