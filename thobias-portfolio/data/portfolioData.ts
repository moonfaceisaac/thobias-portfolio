// export interface PortfolioSection {
//   id: "education" | "experience" | "project" | "skills" | "hobbies";
//   title: string;
//   tabLabel: string;
//   color: string;
//   date: string;
//   prodi: string;
//   tags: string[];
//   details: string[];
//   subTabs?: { id: string; label: string }[];
// }

// export const PORTFOLIO_DATA: Record<string, PortfolioSection> = {
//   education: {
//     id: "education",
//     title: "EDUCATION OVERVIEW",
//     tabLabel: "Education",
//     color: "#6045C3",
//     date: "2022 - 2026",
//     prodi: "Teknik Informatika",
//     tags: ["Undergraduate", "Thesis", "Informatics"],
//     details: [
//       "Currently pursuing a Bachelor of Computer Science in Informatics Engineering with a focus on Intelligent Systems and Machine Learning.",
//       "Active research in collaborative filtering recommendation models (EASE-R) and full-stack web development applications.",
//       "Completed coursework in Data Structures, Algorithms, Software Engineering, Database Systems, and System Architecture.",
//     ],
//   },
//   experience: {
//     id: "experience",
//     title: "EXPERIENCE OVERVIEW",
//     tabLabel: "Experience",
//     color: "#CF3B3B",
//     date: "2023 - Present",
//     prodi: "Full-Stack Development",
//     tags: ["Web Dev", "Data Analysis", "Engineering"],
//     details: [
//       "Full-Stack Web Developer & Data Analyst with experience building responsive web architectures and data processing pipelines.",
//       "Collaborated on web platform design, relational database modeling (ERD design), and RESTful API integrations.",
//       "Applied zero-trust cybersecurity concepts and performance optimization techniques for production-grade applications.",
//     ],
//   },
//   project: {
//     id: "project",
//     title: "PROJECT OVERVIEW",
//     tabLabel: "Project",
//     color: "#27AA5E",
//     date: "2022 - 2026",
//     prodi: "Teknik Informatika",
//     tags: ["EASE-R", "Next.js", "Collaborative Filtering"],
//     details: [
//       "Web-Based Personalized Recipe Recommendation System using EASE-R collaborative filtering algorithms.",
//       "Comparative performance analysis between EASE-R and popularity baselines evaluated with Recall@20 and NDCG@20 metrics.",
//       "Relational schema design supporting user bookmarks, user ratings, recipe metadata, and interactive UI views.",
//     ],
//     subTabs: [
//       { id: "recipe-system", label: "Food Recipe System" },
//       { id: "sysadmin", label: "System Admin Theory" },
//       { id: "learnfair", label: "LearnFair Performance" },
//       { id: "lms", label: "ITS Learning System" },
//       { id: "time-zone", label: "TimeZone Converter" },
//     ],
//   },
//   skills: {
//     id: "skills",
//     title: "SKILLS OVERVIEW",
//     tabLabel: "Skills",
//     color: "#B84F98",
//     date: "2022 - 2026",
//     prodi: "Technical Competencies",
//     tags: ["React", "Next.js", "Python", "Tailwind"],
//     details: [
//       "Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion.",
//       "Backend & Data: Python, Node.js, PostgreSQL, RESTful APIs, Machine Learning frameworks.",
//       "Tools & Methodologies: Git/GitHub, Docker, Linux, System Architecture, UI/UX Wireframing.",
//     ],
//   },
//   hobbies: {
//     id: "hobbies",
//     title: "HOBBIES & INTERESTS",
//     tabLabel: "Hobbies",
//     color: "#D0B753",
//     date: "Ongoing",
//     prodi: "Personal Interests",
//     tags: ["Cybersecurity", "Research", "Tech"],
//     details: [
//       "Exploring cybersecurity infrastructure, Zero Trust architecture, and system defense mechanisms.",
//       "Continuous learning in modern machine learning models and recommendation system algorithms.",
//       "Personal tech tinkering, open-source exploration, and developer tools experimentation.",
//     ],
//   },
// };
export interface ProjectItem {
  id: string;
  title: string;
  date: string;
  prodi: string;
  tags: string[];
  details: string[];
}

export interface PortfolioSection {
  id: 'education' | 'experience' | 'project' | 'skills' | 'hobbies';
  title: string;
  tabLabel: string;
  color: string;
  date?: string;
  prodi?: string;
  tags?: string[];
  details?: string[];
  projects?: ProjectItem[];
}

export const PORTFOLIO_DATA: Record<string, PortfolioSection> = {
  education: {
    id: 'education',
    title: 'EDUCATION OVERVIEW',
    tabLabel: 'Education',
    color: '#6045C3',
    date: '2022 - 2026',
    prodi: 'Teknik Informatika',
    tags: ['Undergraduate', 'Thesis', 'Informatics'],
    details: [
      'Currently pursuing a Bachelor of Computer Science in Informatics Engineering.',
      'Conducting undergraduate thesis research on EASE-R collaborative filtering recommendation systems.',
      'Proficient in Data Structures, Database Architecture, Software Engineering, and Machine Learning fundamentals.'
    ]
  },
  experience: {
    id: 'experience',
    title: 'EXPERIENCE OVERVIEW',
    tabLabel: 'Experience',
    color: '#CF3B3B',
    date: '2023 - Present',
    prodi: 'Full-Stack & Data',
    tags: ['Web Application', 'Data Analysis', 'Engineering'],
    details: [
      'Computer Science fresh graduate with hands-on experience in data analysis, machine learning, and full-stack web application development.',
      'Has led data-driven web-based projects multiple times where group communication and project management were key.',
      'Proficient in JavaScript, Python, SQL, Excel, and data visualization, with experience building data-driven solutions and working with large-scale datasets.',
      'Equipped in public speaking with proficiency in languages such as Indonesian and English, with experience in debating and moderating.'
    ]
  },
  project: {
    id: 'project',
    title: 'PROJECT LIST',
    tabLabel: 'Project',
    color: '#27AA5E',
    projects: [
      {
        id: 'food-recipe',
        title: 'Food System Recommendation',
        date: '2026',
        prodi: 'Teknik Informatika',
        tags: ['EASE-R', 'Collaborative Filtering', 'Next.js'],
        details: [
          'Web-based personalized food recipe recommendation system utilizing the EASE-R model.',
          'Evaluated against popularity baselines using NDCG@20 and Recall@20 metrics on FoodRecSys datasets.',
          'Designed complete relational database schema and interactive web user interface.'
        ]
      },
      {
        id: 'learntic',
        title: 'LearnTic',
        date: '2025',
        prodi: 'Software Engineering',
        tags: ['React', 'LMS', 'Web System'],
        details: [
          'Interactive learning system application designed for educational task tracking and course management.',
          'Implemented responsive UI interfaces and real-time activity dashboards.'
        ]
      },
      {
        id: 'timezone-converter',
        title: 'TimeZone Converter',
        date: '2024',
        prodi: 'Web Development',
        tags: ['TypeScript', 'Utility', 'Tool'],
        details: [
          'Utility application for seamless multi-time zone scheduling and real-time clock alignment.',
          'Features minimal latency conversions across worldwide time zone standards.'
        ]
      }
    ]
  },
  skills: {
    id: 'skills',
    title: 'SKILLS OVERVIEW',
    tabLabel: 'Skills',
    color: '#B84F98',
    date: '2026',
    prodi: 'Technical Competencies',
    tags: ['React', 'Next.js', 'Python', 'SQL'],
    details: [
      'Programming Languages: JavaScript, TypeScript, Python, SQL, C++.',
      'Frameworks & Libraries: React, Next.js, Tailwind CSS, Framer Motion, Express, PyTorch.',
      'Developer Tools & Methods: Git/GitHub, Docker, Database ERD Design, REST APIs, Agile Workflow.'
    ]
  },
  hobbies: {
    id: 'hobbies',
    title: 'HOBBIES & INTERESTS',
    tabLabel: 'Hobbies',
    color: '#D0B753',
    date: 'Ongoing',
    prodi: 'Personal Interests',
    tags: ['Cybersecurity', 'Debating', 'Moderating'],
    details: [
      'Active interest in cybersecurity infrastructure, Zero Trust architecture, and ransomware defense concepts.',
      'Experienced in public speaking, competitive academic debating, and panel moderating.',
      'Enthusiastic about hair care experiments and self-hosted tech projects.'
    ]
  }
};