import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  eco,
  pf,
  pm,
  threejs,
  inveeSync,
  samsung,
  whatsYum
} from "..";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founding Engineer Intern",
    company_name: "InveeSync",
    icon: inveeSync,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      {
        text: "Developed factory ERP using the NextJS to streamline orders with complex multi-module CRUD flows",
        link: null
      },
      {
        text: "Created company portfolio using ReactJS and Tailwind CSS, enhancing brand and product showcase",
        link: "https://inveesync.in/",
        linkText: "View Portfolio"
      },
      {
        text: "Built AI-powered desktop app to parse order emails and auto-fill Tally, cutting time from 15 mins to secs",
        link: "https://drive.google.com/file/d/19aX1R4r9PGki4-v0dC-sIJ8qllPRlDN_/view",
        linkText: "View App"
      },
      {
        text: "Secured and scalable data handling with Redux, AWS S3, and RESTful ExpressJS–PostgreSQL APIs",
        link: null
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Samsung Research & Development",
    icon: samsung,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Developed a transliteration library, accompanied by a customized database, for the cross-language search",
      "Engineered an NLP model incorporating Named Entity Recognition to categorize words such as the actors",
      "Incorporated tokenization, word embeddings, & TF-IDF vectorization, resulting classification system"
    ],
  },
  {
    title: "Founding Engineer Intern",
    company_name: "Datadive AI",
    icon: whatsYum,
    iconBg: "#383E56",
    date: "Jan 2024 - Mar 2024",
    points: [
      {
        text: "Developed an AI WhatsApp chatbot for the restaurants to automate the ordering, reducing staff load",
        link: null
      },
      {
        text: "Engineered backend workflows using MySQL, AWS, to ensure data integrity and secure message handling",
        link: null
      },
      {
        text: "Implemented responsive UI for restaurant onboarding using HTML, CSS, and JavaScript on GoDadd",
        link: "https://whatsyum.com/",
        linkText: "View Website"
      },
      
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project Management",
    description:
      "A comprehensive web application built with Next.js and Tailwind CSS, featuring Redux state management, ExpressJS backend with PostgreSQL via Prisma, and data visualization with Recharts. Optimized for performance with PM2 and deployed on AWS EC2.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: pm,
    source_code_link: "https://github.com/Shagun-katariya/project-mangement",
    live_demo_link: "https://master.dz9rq7lb3yvcr.amplifyapp.com/",
  },
  {
    name: "E-commerce Application",
    description:
      "A full-stack MERN application for seamless buying and selling of products. Features secure JWT authentication, integrated payment options via Stripe & PayPal APIs, and real-time chat functionality using Socket.io for enhanced customer support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
    ],
    image: eco,
    source_code_link: "https://github.com/Shagun-katariya/Ecommerce",
    live_demo_link: "https://ecommerce-frontend-olive-iota.vercel.app/",
  },
  {
    name: "Pathfinding Visualizer",
    description:
      "An interactive tool implementing Dijkstra, A*, BFS, and DFS algorithms to visualize optimal pathfinding. Features dynamic maze generation using Recursive Division and Binary Tree algorithms. Built with TypeScript and optimized with ESLint and PostCSS.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
    ],
    image: pf,
    source_code_link: "https://github.com/Shagun-katariya/pathfinding-visualizer",
    live_demo_link: "https://pathfinding-visualizer-nu.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
