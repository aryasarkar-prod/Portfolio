// ============================================================
//  PORTFOLIO CONFIG — Edit ONLY this file to update your site
// ============================================================

export const portfolioConfig = {
  // ── Personal Info ─────────────────────────────────────────
  name: "Arya Sarkar",
  title: "Full Stack Developer",
  typingRoles: [
    "Full Stack Developer",
    "React & Node.js Engineer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
    "Problem Solver",
  ],
  bio: "Passionate full-stack developer with a love for crafting elegant, performant web applications. I turn complex problems into simple, beautiful, and intuitive solutions.",
  location: "Kolkata, India",
  // Add as many photos as you want — they will cycle automatically in the Hero
  profilePictures: [
    "/profile1.jpg",
    "/profile2.jpg",
    "/profile3.jpg",
  ],
  resumeUrl: "/resume.pdf",       // Place your resume in /public/resume.pdf
  availableForWork: true,

  // ── Contact & Social ──────────────────────────────────────
  email: "aryasarkar@example.com",
  social: {
    github: "https://github.com/aryasarkar-prod",
    linkedin: "https://linkedin.com/in/aryasarkar",
    twitter: "https://twitter.com/aryasarkar",
    instagram: "https://instagram.com/aryasarkar",
  },

  // ── EmailJS Config ────────────────────────────────────────
  emailjs: {
    serviceId: "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID",
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  },

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title: "Arya Sarkar | Full Stack Developer",
    description:
      "Portfolio of Arya Sarkar — Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    keywords:
      "Arya Sarkar, Full Stack Developer, React, Node.js, TypeScript, Portfolio",
    ogImage: "/og-image.png",
    siteUrl: "https://aryasarkar.dev",
  },

  // ── Education ─────────────────────────────────────────────
  // ── Education ─────────────────────────────────────────
  // HOW TO ADD LOGOS:
  //   1. Upload your school/college logo to /public/logos/ folder on GitHub
  //      (repo → public/logos → "Add file" → "Upload files")
  //   2. Supported formats: .png  .jpg  .svg  .webp
  //   3. Set the logo field below to "/logos/your-filename.png"
  //   4. If the file is missing, coloured initials are shown automatically
  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Jadavpur University",
      location: "Kolkata, India",
      startYear: "2019",
      endYear: "2023",
      grade: "CGPA: 8.9 / 10",
      description:
        "Specialized in software engineering, data structures, algorithms, and distributed systems. Active member of the coding club.",
      logo: "/logos/jadavpur.png",   // ← upload public/logos/jadavpur.png
      highlights: ["Dean's List", "Best Final Year Project Award"],
    },
    {
      id: 2,
      degree: "Higher Secondary (Science)",
      institution: "South Point High School",
      location: "Kolkata, India",
      startYear: "2017",
      endYear: "2019",
      grade: "Percentage: 95.2%",
      description:
        "Physics, Chemistry, Mathematics & Computer Science. School topper in Computer Science.",
      logo: "/logos/southpoint.png", // ← upload public/logos/southpoint.png
      highlights: ["School Topper — CS", "State Rank 12 in JEE Mains"],
    },
  ],

  // ── Experience ────────────────────────────────────────────
  // HOW TO ADD COMPANY LOGOS:
  //   1. Upload company logo to /public/logos/ folder on GitHub
  //      (repo → public/logos → "Add file" → "Upload files")
  //   2. Supported formats: .png  .jpg  .svg  .webp
  //   3. Set the logo field below to "/logos/your-company.png"
  //   4. If the file is missing, coloured initials are shown automatically
  experience: [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechNova Solutions",
      location: "Bangalore, India (Remote)",
      startDate: "Jan 2024",
      endDate: "Present",
      current: true,
      description:
        "Lead frontend architecture for a SaaS platform serving 50k+ users. Spearheaded migration from CRA to Vite, reducing build times by 70%.",
      technologies: ["React", "TypeScript", "GraphQL", "AWS", "Figma"],
      logo: "/logos/technova.png",      // ← upload public/logos/technova.png
      achievements: [
        "Reduced bundle size by 45% through code splitting",
        "Mentored a team of 4 junior developers",
        "Delivered 3 major product features ahead of schedule",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "InnovateTech Pvt Ltd",
      location: "Hyderabad, India",
      startDate: "Jul 2023",
      endDate: "Dec 2023",
      current: false,
      description:
        "Built RESTful APIs and React dashboards for an EdTech platform with 10k+ daily active users.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Redis"],
      logo: "/logos/innovatetech.png",   // ← upload public/logos/innovatetech.png
      achievements: [
        "Built real-time notification system with WebSockets",
        "Improved API response time by 60%",
      ],
    },
    {
      id: 3,
      role: "Software Engineering Intern",
      company: "StartupHub",
      location: "Kolkata, India",
      startDate: "May 2022",
      endDate: "Jul 2022",
      current: false,
      description:
        "Developed and shipped 5+ features for an e-commerce product recommendation engine.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      logo: "/logos/startuphub.png",     // ← upload public/logos/startuphub.png
      achievements: [
        "Built recommendation widget used by 2k+ merchants",
        "Wrote unit & integration tests with 85% coverage",
      ],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: {
    categories: [
      {
        name: "Frontend",
        icon: "💻",
        items: [
          { name: "React", level: 95, icon: "react" },
          { name: "TypeScript", level: 90, icon: "typescript" },
          { name: "Next.js", level: 85, icon: "nextjs" },
          { name: "Tailwind CSS", level: 92, icon: "tailwind" },
          { name: "Redux", level: 80, icon: "redux" },
        ],
      },
      {
        name: "Backend",
        icon: "⚙️",
        items: [
          { name: "Node.js", level: 88, icon: "nodejs" },
          { name: "Express", level: 85, icon: "express" },
          { name: "Python", level: 78, icon: "python" },
          { name: "GraphQL", level: 75, icon: "graphql" },
          { name: "FastAPI", level: 72, icon: "fastapi" },
        ],
      },
      {
        name: "Database",
        icon: "🗄️",
        items: [
          { name: "MongoDB", level: 85, icon: "mongodb" },
          { name: "PostgreSQL", level: 80, icon: "postgresql" },
          { name: "Redis", level: 70, icon: "redis" },
          { name: "MySQL", level: 75, icon: "mysql" },
        ],
      },
      {
        name: "DevOps & Tools",
        icon: "🚀",
        items: [
          { name: "Docker", level: 78, icon: "docker" },
          { name: "AWS", level: 72, icon: "aws" },
          { name: "Git", level: 90, icon: "git" },
          { name: "Linux", level: 80, icon: "linux" },
          { name: "Figma", level: 70, icon: "figma" },
        ],
      },
    ],
  },

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "DevCollab — Real-time Collaboration Platform",
      description:
        "A real-time collaborative code editor supporting 10+ languages with video calls, pair programming, and AI code suggestions.",
      longDescription:
        "Built a fully functional collaborative IDE in the browser with Monaco Editor, WebSockets, WebRTC for video, and OpenAI Codex integration. Supports rooms, authentication, and version history.",
      image: "/projects/devcollab.png",
      tags: ["React", "Node.js", "WebSockets", "WebRTC", "MongoDB", "OpenAI"],
      github: "https://github.com/aryasarkar-prod/devcollab",
      live: "https://devcollab.vercel.app",
      featured: true,
      category: "Full Stack",
      year: "2024",
    },
    {
      id: 2,
      title: "ShopSphere — E-Commerce Platform",
      description:
        "A production-grade e-commerce platform with Stripe payments, real-time inventory, admin dashboard, and recommendation engine.",
      longDescription:
        "End-to-end e-commerce solution with React storefront, Node.js/Express backend, PostgreSQL, Redis caching, Stripe integration, and an ML-based product recommendation engine.",
      image: "/projects/shopsphere.png",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "ML"],
      github: "https://github.com/aryasarkar-prod/shopsphere",
      live: "https://shopsphere-demo.vercel.app",
      featured: true,
      category: "Full Stack",
      year: "2023",
    },
    {
      id: 3,
      title: "TaskFlow — AI-Powered Project Manager",
      description:
        "Smart project management tool with AI task prioritization, team analytics, Kanban & Gantt views, and Slack integration.",
      longDescription:
        "A Notion/Jira hybrid with GPT-4 powered task suggestions, automated sprint planning, burndown charts, and real-time collaboration.",
      image: "/projects/taskflow.png",
      tags: ["Next.js", "TypeScript", "Prisma", "OpenAI", "Vercel"],
      github: "https://github.com/aryasarkar-prod/taskflow",
      live: "https://taskflow-ai.vercel.app",
      featured: true,
      category: "SaaS",
      year: "2024",
    },
    {
      id: 4,
      title: "CryptoVault — DeFi Dashboard",
      description:
        "DeFi portfolio tracker with live price feeds, PnL charts, wallet connect, and multi-chain support.",
      longDescription:
        "Web3 dashboard integrating Ethers.js, WalletConnect, CoinGecko API, and Chart.js for tracking DeFi positions across Ethereum and Polygon.",
      image: "/projects/cryptovault.png",
      tags: ["React", "Web3.js", "Ethers.js", "Chart.js", "Tailwind"],
      github: "https://github.com/aryasarkar-prod/cryptovault",
      live: "https://cryptovault.vercel.app",
      featured: false,
      category: "Web3",
      year: "2023",
    },
    {
      id: 5,
      title: "MindMap AI — Visual Knowledge Tool",
      description:
        "AI-assisted mind mapping tool that auto-generates topic branches from prompts using GPT-4.",
      longDescription:
        "React Flow based mind mapping application with GPT-4 integration for auto-expansion, export to PDF/PNG, and real-time collaboration via Yjs.",
      image: "/projects/mindmap.png",
      tags: ["React", "React Flow", "OpenAI", "Yjs", "Vite"],
      github: "https://github.com/aryasarkar-prod/mindmap-ai",
      live: "https://mindmap-ai.vercel.app",
      featured: false,
      category: "AI/ML",
      year: "2024",
    },
    {
      id: 6,
      title: "OpenBlog — Headless CMS Blog",
      description:
        "A blazing-fast headless CMS blog with Next.js, MDX, full-text search, and dark mode.",
      longDescription:
        "Static-first blog platform built with Next.js 14, MDX for content, Algolia full-text search, and Cloudinary for media management.",
      image: "/projects/openblog.png",
      tags: ["Next.js", "MDX", "Algolia", "Cloudinary", "Vercel"],
      github: "https://github.com/aryasarkar-prod/openblog",
      live: "https://openblog.vercel.app",
      featured: false,
      category: "Frontend",
      year: "2023",
    },
  ],

  // ── Achievements ──────────────────────────────────────────
  achievements: [
    {
      id: 1,
      title: "Google Summer of Code 2023",
      organization: "Google / Open Source",
      description:
        "Selected as a GSoC contributor for an open-source DevTools project. Implemented a real-time performance profiling dashboard.",
      icon: "🏆",
      date: "2023",
      link: "https://summerofcode.withgoogle.com",
    },
    {
      id: 2,
      title: "1st Place — HackBengal 2023",
      organization: "HackBengal",
      description:
        "Won first place among 300+ teams building a disaster-response coordination platform with real-time resource mapping.",
      icon: "🥇",
      date: "2023",
      link: "#",
    },
    {
      id: 3,
      title: "AWS Certified Developer — Associate",
      organization: "Amazon Web Services",
      description:
        "Certified in designing, deploying, and debugging cloud-based applications using AWS services.",
      icon: "☁️",
      date: "2023",
      link: "https://aws.amazon.com/certification",
    },
    {
      id: 4,
      title: "Top 5% on LeetCode",
      organization: "LeetCode",
      description:
        "Solved 600+ problems, rated in the top 5% globally. Knight badge holder.",
      icon: "⚡",
      date: "2023",
      link: "https://leetcode.com/aryasarkar",
    },
    {
      id: 5,
      title: "Meta Hacker Cup — Round 2",
      organization: "Meta",
      description:
        "Qualified for Round 2 of Meta Hacker Cup 2022 among 20,000+ participants.",
      icon: "🎯",
      date: "2022",
      link: "https://www.facebook.com/codingcompetitions/hacker-cup",
    },
    {
      id: 6,
      title: "Open Source Contributor — 500+ Stars",
      organization: "GitHub",
      description:
        "Maintained open-source React component library with 500+ GitHub stars and 50+ contributors worldwide.",
      icon: "⭐",
      date: "2024",
      link: "https://github.com/aryasarkar-prod",
    },
  ],

  // ── Stats (displayed in About / Hero) ─────────────────────
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Shipped", value: "20+" },
    { label: "GitHub Stars", value: "500+" },
    { label: "Problems Solved", value: "600+" },
  ],

  // ── Fun facts shown in About ───────────────────────────────
  funFacts: [
    "☕  Powered by coffee and curiosity",
    "🎵  Codes better with lo-fi beats",
    "📚  Reading 'Clean Code' for the 3rd time",
    "🌱  Currently learning Rust & WebAssembly",
  ],
};
