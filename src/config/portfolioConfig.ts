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
    "AI Engineer",
  ],
  bio: "Passionate full-stack developer with a love for crafting elegant, performant web applications. I turn complex problems into simple, beautiful, and intuitive solutions.",
  location: "Kolkata, India",
  // Add as many photos as you want — they will cycle automatically in the Hero
  profilePictures: [
    "https://scontent-ccu2-1.xx.fbcdn.net/v/t39.30808-6/420099042_3525318994464150_5961493800280190180_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Z7VDnI-mpBsQ7kNvwFT0iXd&_nc_oc=Ado5__bDPPIjSosjnDYbT2Pz5UAbgsfURrhLvhrkgvGdA3ROaPY_Vw1ulxIU27sVRGY&_nc_zt=23&_nc_ht=scontent-ccu2-1.xx&_nc_gid=WjKs0dsv6iNz_X1bDXniaA&_nc_ss=7b2a8&oh=00_Af6bgxtlhyFrj-tNizKJR5Xx2M6dQ_oao3GKTEoOjn2Qlw&oe=6A199E55",
    "https://scontent-ccu2-1.xx.fbcdn.net/v/t39.30808-6/673577251_4244858462510196_2738507914906241060_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rjKZp_kgtEAQ7kNvwHz_69m&_nc_oc=AdqDN2xh7tgcg8AqRiMiyJ-ncZGaTlm5rTy5CNoPEyo9AeiiPAwgtiEcHpTEclzm3gU&_nc_zt=23&_nc_ht=scontent-ccu2-1.xx&_nc_gid=aRwTHIKKLTGteFUv24lN_Q&_nc_ss=7b2a8&oh=00_Af78pCRc2AcvtUwcGnmtYcSDHAKhz4Y-wXjqkkxsGR8FSQ&oe=6A19C3C8",
    "https://scontent-ccu2-1.xx.fbcdn.net/v/t39.30808-6/486267158_3864850183844361_4225121318084447456_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=ua-pPwiCwBgQ7kNvwH_RUrU&_nc_oc=AdpqsVstCirHgeAjZ3RJsNMnu1BfRlVmCrRowOEvzk8e0t8YeZEGWLUeGIFjHG3xEKc&_nc_zt=23&_nc_ht=scontent-ccu2-1.xx&_nc_gid=x_648QbDp0BD_InfTlQK_A&_nc_ss=7b2a8&oh=00_Af41Gi0wFqEJhZpnP4qY-rlk-zQOYH0eln8q6-Q5yW4GvA&oe=6A19B94B",
  ],
  resumeUrl: "/resume.pdf",       // Place your resume in /public/resume.pdf
  availableForWork: true,

  // ── Contact & Social ──────────────────────────────────────
  email: "aryasarkar60@gmail.com",
  social: {
    github: "https://github.com/aryasarkar-prod",
    linkedin: "https://www.linkedin.com/in/arya-sarkar-319646219/",
    facebook: "https://www.facebook.com/arya.sarkar.376",
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
      degree: "B.Tech in Mechanical Engineering",
      institution: "Academy of Technology,Hooghly,Adispatagram",
      location: "Kolkata, India",
      startYear: "2018",
      endYear: "2022",
      grade: "SGPA: 8.95/ 10",
      description:
        "Specialized in software engineering, data structures, algorithms, and distributed systems. Active member of the coding club.",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services.svg/3840px-Tata_Consultancy_Services.svg.png",
      highlights: ["HackerEarth Champion", "Hack the Quest Champion","CodeChef Champion"],
    },
    {
      id: 2,
      degree: "Indian School Certificate Examination(ISC-XII-Science Stream)",
      institution: "St.Paul's Academy,Burdwan",
      location: "West Bengal, India",
      startYear: "2016",
      endYear: "2018",
      grade: "Percentage: 86.7%",
      description:
        "Physics, Chemistry, Mathematics & Computer Science. School topper in Computer Science and Physics",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN-Ofqelu8rN1oETwGdAfeBBz5Etp6iasQw&s",
      highlights: ["Physics Olympiad Winner", "Hackerrank Contest Winner","Math Olympiad Runner-Up"],
    },
    {
      id: 3,
      degree: "Councli For The Indian School Certificate Examination(ICSE-X)",
      institution: "St.Claret School,Purba Bardhaman",
      location: "West Bengal, India",
      startYear: "2005",
      endYear: "2016",
      grade: "Percentage: 84.5%",
      description:
        "English , History & Civics , Geography, Physics, Chemistry, Mathematics & Computer Science",
      logo: "https://play-lh.googleusercontent.com/yiM1_zEqgwSxRfG1MANCpPdOHD6X0bryPMGlmOtzPBNXMl-CWAtfp9HNWn6H784mV82P=w600-h300-pc0xffffff-pd",
      highlights: ["Member and Head of the Science Club"],
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
      role: "Senior Consultant",
      company: "E42 (Light Information Systems)",
      location: "Pune,Maharshtra(Remote),India",
      startDate: "Jan 2026",
      endDate: "Present",
      current: true,
      description:
        "Led full-stack development of a SaaS platform serving 50k+ users using Django, Redis, and AWS. Optimized deployment and system performance, improving scalability and reducing build times by 70%",
      technologies: ["React", "TypeScript", "GraphQL", "AWS", "Django","LLM","GEN-AI"],
      logo: "https://in.linkedin.com/company/e42dotai",
      achievements: [
        "Reduced bundle size by 45% through code splitting",
        "Mentored a team of 4 junior developers",
        "Delivered 3 major product features ahead of schedule",
      ],
    },
    {
      id: 2,
      role: "Consultant",
      company: "Predicta Digital",
      location: "Kolkata, India",
      startDate: "Oct 2025",
      endDate: "Dec 2025",
      current: false,
      description:
        "Built RESTful APIs and React dashboards for an EdTech platform with 10k+ daily active users.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Redis","Django","Celery"],
      logo: "https://au.linkedin.com/company/predicta-digital",   // ← upload public/logos/innovatetech.png
      achievements: [
        "Built real-time notification system with WebSockets",
        "Improved API response time by 60%",
      ],
    },
    {
      id: 3,
      role: "Senior Project Engineer",
      company: "Wipro Limited",
      location: "Kolkata, India",
      startDate: "Feb 2025",
      endDate: "Oct 2025",
      current: false,
      description:
        "Developed and shipped 5+ features for an banking product recommendation engine.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      logo: "https://1000logos.net/wipro-logo/",     // ← upload public/logos/startuphub.png
      achievements: [
        "Built recommendation widget used by 2k+ merchants",
        "Wrote unit & integration tests with 85% coverage",
      ],
    },

  {
      id: 4,
      role: "Associate Software Engineer",
      company: "Tata Consultancy Services Limited",
      location: "Kolkata, India",
      startDate: "Aug 2022",
      endDate: "Dec 2024",
      current: false,
      description:
        "Worked as a Frontend Developer, building responsive and scalable applications using React.js, PyQt, and PySide6. Developed modern user interfaces, integrated APIs, optimized application performance, and enhanced overall user experience. Collaborated with cross-functional teams, resolved complex debugging issues, and delivered high-quality projects within deadlines while maintaining efficient and reusable code standards.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL","PyQt","PySide6"],
      logo: "https://logos-download.com/brands/tata-consultancy-services",     // ← upload public/logos/startuphub.png
      achievements: [
        "Increased application performance by 40% through frontend optimization",
        "Delivered multiple client projects within deadlines with high-quality UI standards",
        "Recognized for strong problem-solving and teamwork in cross-functional projects",
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
    { label: "Years Experience", value: "3.5+" },
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
