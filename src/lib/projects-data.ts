export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images?: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "jams",
    title: "Jams",
    description: "A comprehensive client product built with Vue.js and Pinia for state management. Jams connects multiple applications and implements role-based permissions with 7 different roles - 3 for clients and 4 for company users, each with distinct permissions and access levels.",
    fullDescription: "Jams is a sophisticated client product built using Vue.js framework with Pinia for efficient state management. The application serves as a central hub that connects multiple applications, providing seamless integration and data flow. Developed using Scrum and Agile methodologies, the project features a robust role-based permission system with 7 distinct roles: 3 roles for client users and 4 roles for company users, each with carefully designed permissions and access controls. This ensures secure and appropriate access to different features and data based on user responsibilities and organizational hierarchy.",
    technologies: ["Vue.js", "Pinia", "Scrum", "Agile"],
    images: [
      "https://i.postimg.cc/MTnzh0M0/jams.png",
    ],
    websiteUrl: "https://jams.admin.dev.sodasoft.io/",
  },
  {
    id: "scanzilla",
    title: "ScanZilla",
    description: "An AI-powered Amazon product analysis platform with ChatGPT integration. Users can analyze their Amazon listings to identify and fix errors, with secure authentication including Google sign-in, comprehensive admin and user dashboards, analysis history tracking, and export functionality for analysis results.",
    fullDescription: "ScanZilla is a comprehensive AI-powered platform designed to help Amazon sellers optimize their product listings. The backend integrates with ChatGPT models to analyze Amazon products and identify potential errors, allowing users to fix issues in their listings. The platform features robust authentication and security with Google sign-in integration, supporting both admin and user layouts. Users can track their analysis history through a dedicated dashboard, export analysis results, and manage their credits system. The application provides a seamless experience for sellers to improve their Amazon listing quality and performance through AI-driven insights and recommendations.",
    technologies: ["React", "Redux Toolkit", "Material UI", "ChatGPT API", "Google Auth", "AI Integration"],
    images: [
      "https://i.postimg.cc/JzCCpV5Q/scanzilla.png",
    ],
    websiteUrl: "https://scanzilla.blazecopywriting.com/",
  },
    {
      id: "top-rudder",
      title: "TOP-RUDDER",
      description: "A comprehensive e-commerce platform with Shopify integration, webhooks, invoice generation, and Stripe payment processing. Built using Cursor AI due to strict client deadlines, featuring seamless e-commerce workflow automation and payment management.",
      fullDescription: "TOP-RUDDER is a sophisticated e-commerce platform designed to streamline online business operations through advanced integrations and automation. The project was developed using Cursor AI to meet strict client requirements and tight deadlines, with the code generated through AI assistance and minimal manual modifications. The platform features seamless Shopify integration for product management and order processing, webhook implementation for real-time data synchronization, automated invoice generation system, and secure Stripe payment processing. The application provides a complete e-commerce solution with automated workflows, real-time updates, and secure payment handling, demonstrating the effective use of AI development tools to deliver complex integrations under time constraints.",
      technologies: ["React", "Redux Toolkit", "Material UI", "Shopify API", "Webhooks", "Stripe", "Invoice Generation", "Cursor AI"],
      images: [
        "https://i.postimg.cc/pXTmPjwz/top-rudder.png"
      ],
      websiteUrl: "http://top-rudder-aircraft.netlify.app/",
    },
  { 
    id: "taxminers",
    title: "TaxMiners",
    description: "A comprehensive crypto tax calculation platform built with React, TypeScript, and TanStack Query. Features optimized multi-chain API requests for accurate cryptocurrency tax calculations with backend logic integration and modern UI components.",
    fullDescription: "TaxMiners is a sophisticated cryptocurrency tax calculation platform designed to help users accurately calculate their crypto taxes across multiple blockchain networks. Built with React and TypeScript for type safety and maintainability, the application leverages TanStack Query for optimized API request management and caching. The platform integrates with multiple blockchain APIs to fetch transaction data and performs complex tax calculations using advanced backend logic. The modern UI is built with Shadcn components and Tailwind CSS, providing an intuitive and responsive user experience for managing crypto tax obligations across different chains and protocols.",
    technologies: ["React", "TypeScript", "TanStack Query", "Redux", "Shadcn", "Tailwind CSS", "Multi-chain APIs"],
    images: [
      "https://i.postimg.cc/28mxG0Bk/taxminers.png",
    ],
    websiteUrl: "https://taxminers-mvp.netlify.app/",
  },
  {
    id: "fxvoyage",
    title: "FxVoyage",
    description: "A professional trading agency website built with Next.js for optimal SEO performance and responsive design. Features a modern frontend interface designed for a client's trading agency business with best SEO practices and mobile-first responsive design.",
    fullDescription: "FxVoyage is a comprehensive trading agency website built using Next.js framework, specifically designed for optimal SEO performance and responsive user experience. The project implements best SEO practices including server-side rendering, meta tag optimization, and structured data to ensure maximum search engine visibility. The responsive frontend interface provides an intuitive user experience across all devices, featuring modern UI components and smooth navigation. The website serves as a professional digital presence for a trading agency client, showcasing services, market insights, and client testimonials with a focus on conversion optimization and user engagement.",
    technologies: ["Next.js", "SEO Optimization", "Responsive Design", "Server-side Rendering"],
    images: [
      "https://i.postimg.cc/G2wD2pF3/fxvoyage.png",
    ],
    websiteUrl: "https://fxvoyage.com/",
  },
  {
    id: "sauced-admin",
    title: "Sauced Admin Panel",
    description: "A comprehensive admin panel for managing the Sauced mobile and iOS app ecosystem. Features complete data management for users, badges, reviews, and all app-related functionality with a modern React-based SPA interface.",
    fullDescription: "Sauced Admin Panel is a sophisticated administrative dashboard designed to manage all aspects of the Sauced mobile and iOS application ecosystem. Built as a Single Page Application (SPA) using React, the panel provides comprehensive management capabilities for user data, badge systems, review management, and all app-related features. The application leverages Redux for state management, React Router for navigation, and Material UI for a modern, responsive interface. Administrators can efficiently oversee user activities, manage app content, handle reviews and ratings, distribute badges, and monitor the overall health and performance of the mobile applications through this centralized management system.",
    technologies: ["React", "Material UI", "React Router", "SPA", "Redux", "JavaScript"],
    images: [
      "https://i.postimg.cc/5t112dHd/sauced-admin.png",
    ],
    websiteUrl: "https://app.saucedapp.com/",
  },
 

   {
    id: "edl",
    title: "EDL - Fullstack Platform",
    description: "A comprehensive fullstack Next.js application currently in development. Features modern frontend with Shadcn components and Tailwind CSS, responsive design, and advanced Next.js capabilities including SSR, ISR, and CSR optimization.",
    fullDescription: "EDL is a full-fledged fullstack Next.js application currently in active development. The project showcases modern web development practices with a responsive frontend built using Shadcn UI components and Tailwind CSS for styling. The application implements advanced Next.js features including Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and Client-Side Rendering (CSR) based on specific requirements and use cases. The backend development is ongoing, focusing on seamless integration with the frontend and optimal performance. This project represents a complete fullstack solution demonstrating expertise in modern React ecosystem, responsive design, and advanced Next.js optimization techniques.",
    technologies: ["Next.js", "Shadcn", "Tailwind CSS", "SSR", "ISR", "CSR", "Fullstack"],
    images: [
      "https://i.postimg.cc/fTmRzvHY/edl.png",
    ],
    websiteUrl: "http://edl-job-portal.netlify.app/",
  }, {
    id: "dqs",
    title: "DQS - Excel Data Dashboard",
    description: "A small frontend dashboard application built with React and Tailwind CSS for managing Excel data sheets. Features download and upload functionality for payments and orders data, providing an intuitive interface for client data management.",
    fullDescription: "DQS is a specialized frontend dashboard application designed for Excel data management and processing. Built with React and styled using Tailwind CSS, the application provides a clean and intuitive interface for clients to upload and download Excel data sheets containing payments and orders information. The dashboard features robust file handling capabilities, allowing users to easily manage their data through a streamlined workflow. The application focuses on user experience and data integrity, providing a reliable solution for Excel-based data operations with a modern, responsive design that works seamlessly across different devices and screen sizes.",
    technologies: ["React", "Tailwind CSS", "Excel Integration", "Dashboard", "File Management"],
    images: [
      "https://i.postimg.cc/Gmbdcn86/dqs.png",
    ],
    websiteUrl: "http://dynamic-quoting-system.netlify.app/",
  },
];
