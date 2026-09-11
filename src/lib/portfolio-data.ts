export const profile = {
  name: "James Gyan Prakash H",
  roles: [
    "Software Developer",
    "Application Developer",
    "Data Scientist",
    "Data Analyst",
    "React Developer",
    "Android Developer",
  ],
  tagline:
    "MSc Data Science graduate crafting AI-powered applications, modern web platforms, Android experiences and data-driven solutions.",
  location: "Bengaluru, Karnataka",
  email: "james20010724@gmail.com",
  phone: "+91 7619246688",
  github: "https://github.com/Jamesgyan",
  linkedin: "www.linkedin.com/in/jamesgyanpakash",
};

export const stats = [
  { value: 2, suffix: "+", label: "Years Learning" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Open to Work" },
];

export const techStack: Array<{
  category: string;
  items: string[];
  accent: "cyan" | "purple" | "blue" | "pink";
}> = [
  { category: "Programming", accent: "cyan", items: ["Python", "Java", "SQL", "JavaScript", "PHP", "C/C++"] },
  { category: "Frontend", accent: "purple", items: ["React", "HTML", "CSS", "Tailwind"] },
  { category: "Backend", accent: "blue", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Databases", accent: "pink", items: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase"] },
  { category: "Data Science", accent: "cyan", items: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "R"] },
  { category: "Machine Learning", accent: "purple", items: ["ML Models", "OpenCV", "Data Viz"] },
  { category: "Cloud", accent: "blue", items: ["Google Cloud"] },
  { category: "Tools", accent: "pink", items: ["Git", "GitHub", "Android Studio", "VS Code"] },
];

export const experience = [
  {
    role: "Backend Developer Intern",
    org: "Kristu Jayanti Software Development Centre",
    period: "Jun 2023 – Jul 2023",
    bullets: [
      "Developed backend functionality using Node.js and MongoDB.",
      "Assisted in cloud deployment and integration activities.",
      "Automated resource management tasks and supported infrastructure optimization.",
    ],
  },
  {
    role: "Application Developer Intern",
    org: "Vorcas Tech Lab",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Developed Android applications using Java and Android SDK.",
      "Implemented OTP authentication, Room Database, cart management and order processing.",
      "Integrated REST APIs using Retrofit and OkHttp.",
      "Built profile management modules with image upload and synchronization.",
      "Added dark mode support and improved user experience.",
    ],
  },
];

export const projects = [
  {
    title: "INDISARA",
    subtitle: "Folk Artist Booking Platform",
    description:
      "Production web application connecting folk artists with clients — auth, artist profiles, booking workflows, search and a full dashboard.",
    tech: ["React", "TypeScript", "Supabase", "Vercel"],
    live: "https://www.indisara.com",
    github: "https://github.com/Jamesgyan",
    featured: true,
  },
  {
    title: "Mar Thoma Church Website",
    subtitle: "WordPress Content Platform",
    description:
      "Maintained a WordPress site with content management, UI updates and improved content publishing workflows.",
    tech: ["WordPress", "PHP", "Content Management"],
    live: "https://marthoma.co.in",
    github: "https://github.com/Jamesgyan",
    featured: false,
  },
  {
    title: "Rainfall Analysis System",
    subtitle: "Data Science + ML",
    description:
      "Rainfall analytics platform with secure user and admin access, ML-driven insights, visual reports and interactive charts.",
    tech: ["Python", "MongoDB", "Machine Learning", "Data Visualization"],
    github: "https://github.com/Jamesgyan",
    featured: false,
  },
  {
    title: "Sign Language Recognition",
    subtitle: "Computer Vision",
    description:
      "Real-time system that recognizes hand gestures and translates sign language into readable text using computer vision.",
    tech: ["Python", "OpenCV", "NumPy", "Tkinter"],
    github: "https://github.com/Jamesgyan",
    featured: false,
  },
];

export const education = [
  {
    degree: "MSc — Data Science",
    school: "Kristu Jayanti College (Autonomous), Bengaluru",
    period: "2023 – 2025",
    focus: "Cloud Computing • Data Structures • Big Data Analysis • Cryptography",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "ST Aloysius Degree College, Bengaluru",
    period: "2020 – 2023",
    focus: "Programming • Data Analysis • Database Systems • Computer Networks",
  },
];

export const certifications = [
  { title: "Cloud Computing", issuer: "ACTE" },
  { title: "Computer Hardware Basics", issuer: "CISCO Academy" },
  { title: "R Programming", issuer: "Kristu Jayanti College" },
];

export const achievements = [
  { value: "10+", label: "Projects Built" },
  { value: "2", label: "Internships" },
  { value: "2", label: "Freelance Websites Live" },
  { value: "MSc", label: "Data Science Graduate" },
];

export const services = [
  "Web Development",
  "React Development",
  "Full Stack Development",
  "Android Development",
  "Data Analysis",
  "Data Visualization",
  "Machine Learning",
  "Database Design",
  "API Integration",
];

export const whyHireMe = [
  "Problem Solving",
  "Analytical Thinking",
  "Fast Learner",
  "Team Player",
  "Modern Technologies",
  "Clean, Maintainable Code",
  "Production-Ready Applications",
];
