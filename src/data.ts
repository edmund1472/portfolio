// All site content lives here. Edit this file to update the portfolio —
// no need to touch the components.

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  url?: string; // live site
  repo?: string; // source code
  // Put the image in /public/projects/ and set this to "/projects/<file>".
  // Leave it out to show a placeholder box with the filename to add.
  image?: string;
  placeholderFile: string;
};

export type Job = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};

export const profile = {
  name: "Edmund Zhong",
  role: "Computer Science @ Pace University",
  location: "New York, NY",
  status: "Open to new grad roles",
  // Cycles in the hero: "I design and build ___."
  building: ["distributed systems", "full-stack apps", "internal tools", "things on my own"],
  intro:
    "I study computer science at Pace University and have always wanted to design and build things on my own.",
  about: [
    "Right now I'm focused on RaftKV, a distributed key-value store built on the Raft consensus algorithm. Before that I built full-stack products as a software engineering intern, and I'm currently interning at FEMA.",
    "Outside of school, you'll find me playing basketball, playing chess, or rock climbing.",
  ],
  skills: ["Go", "Python", "TypeScript", "Java", "React", "Next.js", "Node.js", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"],
  email: "edmundzhong2@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/edmund1472" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/edmundzhong/" },
    { label: "Résumé", href: "/resume.pdf" }, // TODO: drop resume.pdf into /public
  ] as Link[],
};

export const projects: Project[] = [
  {
    title: "Project One",
    year: "2026",
    description:
      "One or two sentences on what this project does, who it is for, and the most interesting problem you solved building it.",
    tags: ["React", "TypeScript", "Vite"],
    url: "https://example.com",
    repo: "https://github.com/edmund1472",
    placeholderFile: "project-one.png",
  },
  {
    title: "Project Two",
    year: "2026",
    description:
      "Describe the project. Mention a concrete result if you have one — users, speed, something you shipped or learned.",
    tags: ["Next.js", "PostgreSQL"],
    url: "https://example.com",
    repo: "https://github.com/edmund1472",
    placeholderFile: "project-two.png",
  },
  {
    title: "Project Three",
    year: "2025",
    description:
      "Describe the project. Keep it short; the link and the screenshot do most of the work.",
    tags: ["Python", "FastAPI"],
    url: "https://example.com",
    placeholderFile: "project-three.png",
  },
  {
    title: "Project Four",
    year: "2025",
    description:
      "Describe the project. Delete any entries you don't need, or copy one to add more.",
    tags: ["Node.js", "Express"],
    repo: "https://github.com/edmund1472",
    placeholderFile: "project-four.png",
  },
];

export const experience: Job[] = [
  // Wrap text in **double asterisks** to bold it.
  {
    role: "Software Development Intern",
    company: "Federal Emergency Management Agency (FEMA) — U.S. Department of Homeland Security",
    location: "New York, NY",
    start: "Sep 2026",
    end: "Present",
    points: [
      "Developing an executive administrative dashboard using **Power BI, Power Apps, and Salesforce Flow** to centralize operational data and give high-level government officials and FEMA personnel quick, intuitive access to key information.",
      "Building automated document-processing routines using **Power Automate** to improve information sharing and increase operational efficiency across regional teams.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Arcampuss",
    location: "New York, NY",
    start: "Jun 2025",
    end: "Aug 2025",
    points: [
      "Designed and delivered a full-stack application using **Next.js, Deno/Express**, and **MongoDB**, building **REST APIs** with **JSON** and shipping **5** new features in **Agile sprints** that increased customer engagement metrics by **15%** within the initial deployment phase.",
      "Optimized deployment on **AWS EC2** and **S3**, reducing server response times by **15%** and supporting **20+** monthly active users with minimal downtime.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "BZMarketing",
    location: "New York, NY",
    start: "Jun 2024",
    end: "Aug 2024",
    points: [
      "Built a responsive full-stack web application using **React, Node.js, JavaScript, HTML**, and **CSS**, increasing user retention by **12%**.",
      "Integrated an automated email system into the web application via **REST APIs** to streamline client communication and marketing workflows.",
    ],
  },
];
