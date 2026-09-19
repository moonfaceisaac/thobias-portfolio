import mecEvents1 from "../assets/screenshots/mec-events-1.jpg";
import mecComp1 from "../assets/screenshots/mec-comp-1.jpg";
import mecComp2 from "../assets/screenshots/mec-comp-5.jpg";
import mecComp3 from "../assets/screenshots/mec-comp-2.jpg";
import gradCeremony from "../assets/screenshots/graduation-ceremony-3.jpg";
import type { StaticImageData } from "next/image";

export interface SectionImage {
  src: string | StaticImageData;
  alt: string;
  ratio?: number;
}

export interface ContentBlock {
  id?: string;
  title?: string; // block-level header (simpler)
  details?: string[];
  images?: SectionImage[];
}

export interface ProjectItem {
  id: string;
  title: string;
  date: string;
  prodi: string;
  tags: string[];
  blocks?: ContentBlock[];
}

export interface PortfolioSection {
  id: "education" | "experience" | "project" | "skills" | "hobbies";
  tabLabel: string;
  color: string;

  // Tab-Level Header
  title: string;
  date?: string;
  prodi?: string;
  tags?: string[];

  // details?: string[];
  blocks?: ContentBlock[];
  // images?: SectionImage[];
  projects?: ProjectItem[];
}

export const PORTFOLIO_DATA: Record<string, PortfolioSection> = {
  education: {
    id: "education",
    title: "EDUCATION OVERVIEW",
    tabLabel: "Education",
    color: "#6045C3",
    date: "2022 - 2026",
    prodi: "Teknik Informatika",
    tags: ["Undergraduate", "Thesis", "Informatics"],
    blocks: [
      {
        id: "academic-summary",
        title: "ACADEMIC SUMMARY",
        details: [
          "I graduated from Universitas Mikroskil with a Bachelor's degree in Computer Science, completing my studies in 3 years and 8 months. Throughout my university years, I actively participated in various extracurricular activities alongside my academic journey.",
        ],
      },
      {
        id: "student-organization",
        title: "STUDENT ORGANIZATION",
        details: [
          "I joined Mikroskil English Club (MEC) in my first semester. MEC is one of the student organizations at my university that focuses on helping students build confidence in speaking English through public speaking and competitive debating. The club is divided into two divisions: Public Speaking and Debate. I joined the Public Speaking Division during my first year before switching to the Debate Division, where I remained until I graduated.",
          "During my time in the Debate Division, I participated in numerous debate competitions while also serving as the club's Event Organizer for one year. In this role, I contributed ideas for club events, managed event administration, coordinated committees, and moderated several events organized by the club.",
        ],
        images: [
          { src: mecEvents1, alt: "MEC-EVENT-1", ratio: 4 / 3 },
          { src: mecComp1, alt: "MEC-COMP-1", ratio: 4 / 3 },
          { src: mecComp2, alt: "MEC-COMP-2", ratio: 4 / 3 },
          { src: mecComp3, alt: "MEC-COMP-3", ratio: 4 / 3 },
        ],
      },
      {
        id: "extra-activites-campus-related",
        title: "EXTRA ACTIVITIES",
        details: [
          "Outside Student Organization, I was selected twice in a row as a committee member for my university's graduation ceremony. My responsibility was to serve as the official name announcer, announcing the names of graduates during the ceremony.",
          "In my 7th semester, I was selected as a Lecturer's Computer Lab Assistant. My responsibilities included preparing laboratory devices before each class, maintaining a conducive learning environment, assisting lecturers in delivering course materials and assignments, and helping students understand the practical materials during lab sessions.",
        ],
        images: [{ src: gradCeremony, alt: "GRAD-CEREMONY-1", ratio: 4 / 3 }],
      },
    ],
  },
  experience: {
    id: "experience",
    title: "EXPERIENCE OVERVIEW",
    tabLabel: "Experience",
    color: "#CF3B3B",
    blocks: [
      {
        id: "lecturer-assistant",
        title: "Lecturer Assistant",
        details: [
          "Place of Work: Universitas Mikroskil, Sumatra Utara, Medan (Onsite)",
          "Years Active: September 2025 - Present",
          "- Guided 150+ students across 60+ Mobile Back End and Web Back End laboratory sessions, troubleshooting technical issues and clarifying concepts to support completion of practical assignments.",
          "- Troubleshot network and hardware issues during 60+ laboratory sessions, minimizing disruptions to practical activities.",
          "- Managed assignment submissions across two semesters, ensuring materials were systematically prepared for lecturer assessment.",
        ],
      },
      {
        id: "machine-learning-engineer",
        title: "Machine Learning Engineer Co-Hort",
        details: [
          "Place of Work: Coding Camp Powered By DBS Foundation (Remote)",
          "Years Active: February 2025 - July 2025",
          "- Completed 10+ technical coursework and ILT assignments covering Programming Logic, SQL, Applied Machine Learning, and Generative AI during a 5-month apprenticeship, completing all program requirements ahead of schedule.",
          "- Earned 4,100 Milestone Points, maintained 100% attendance across 17 weekly consultations, and received High-Performing Student recognition in the English ILT Activity Class.",
          "- Led a cross-functional team in the final week of the capstone after the original leader became unavailable, coordinating 10+ action items to deliver LearnTic: Student Performance Prediction on time.",
        ],
        images: [
          // { src: "/images/thesis-1.jpg", alt: "EASE-R diagram", ratio: 4 / 3 },
          // { src: "/images/thesis-2.jpg", alt: "Evaluation results", ratio: 1 },
        ],
      },
    ],
  },
  project: {
    id: "project",
    title: "PROJECT LIST",
    tabLabel: "Project",
    color: "#27AA5E",
    projects: [
      {
        id: "food-recsys",
        title:
          "Food Recipe System Recommendation Using Collaborative Filtering with EASE-R Model",
        date: "2026",
        prodi: "Teknik Informatika",
        tags: ["EASE-R", "Collaborative Filtering", "Next.js"],
        blocks: [
          {
            id: "project-description",
            title: "PROJECT DESCRIPTION",
            details: [
              "Developed and deployed a web-based food recipe recommendation system using the EASE-R collaborative filtering model to address the choice overload problem in the food recipe domain. The recommendation model was trained on 676K+ user interactions across 29K recipes and integrated into a full-stack web application built with React, Node.js, Express, and PostgreSQL through a REST API. The system was evaluated using Recall@10 and NDCG@10, achieving 0.0262 Recall@10 and 0.0123 NDCG@10, outperforming a popularity-based recommendation baseline.",
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "tech-stacks",
            title: "TECH STACKS",
            details: [
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "demo-and-screenshots",
            title: "DEMO AND SCREENSHOTS",
          },
          {
            id: "demo-and-screenshots1",
            details: ["sd"],
            images: [{ src: mecEvents1, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
          {
            id: "demo-and-screenshots2",
            details: ["sd"],
            images: [{ src: mecComp2, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
        ],
      },
      {
        id: "learntic",
        title: "LearnTic",
        date: "2025",
        prodi: "Software Engineering",
        tags: ["React", "LMS", "Web System"],
        blocks: [
          {
            id: "project-description",
            title: "PROJECT DESCRIPTION",
            details: [
              "Developed and deployed a web-based food recipe recommendation system using the EASE-R collaborative filtering model to address the choice overload problem in the food recipe domain. The recommendation model was trained on 676K+ user interactions across 29K recipes and integrated into a full-stack web application built with React, Node.js, Express, and PostgreSQL through a REST API. The system was evaluated using Recall@10 and NDCG@10, achieving 0.0262 Recall@10 and 0.0123 NDCG@10, outperforming a popularity-based recommendation baseline.",
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "tech-stacks",
            title: "TECH STACKS",
            details: [
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "demo-and-screenshots",
            title: "DEMO AND SCREENSHOTS",
          },
          {
            id: "demo-and-screenshots1",
            details: ["sd"],
            images: [{ src: mecEvents1, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
          {
            id: "demo-and-screenshots2",
            details: ["sd"],
            images: [{ src: mecComp2, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
        ],
      },
      {
        id: "system-information-notary",
        title: "Sistem Administrasi Kantor Notaris",
        date: "2024",
        prodi: "Web Development",
        tags: ["TypeScript", "Utility", "Tool"],
        blocks: [
          {
            id: "project-description",
            title: "PROJECT DESCRIPTION",
            details: [
              "Developed and deployed a web-based food recipe recommendation system using the EASE-R collaborative filtering model to address the choice overload problem in the food recipe domain. The recommendation model was trained on 676K+ user interactions across 29K recipes and integrated into a full-stack web application built with React, Node.js, Express, and PostgreSQL through a REST API. The system was evaluated using Recall@10 and NDCG@10, achieving 0.0262 Recall@10 and 0.0123 NDCG@10, outperforming a popularity-based recommendation baseline.",
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "tech-stacks",
            title: "TECH STACKS",
            details: [
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "demo-and-screenshots",
            title: "DEMO AND SCREENSHOTS",
          },
          {
            id: "demo-and-screenshots1",
            details: ["sd"],
            images: [{ src: mecEvents1, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
          {
            id: "demo-and-screenshots2",
            details: ["sd"],
            images: [{ src: mecComp2, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
        ],
      },
      {
        id: "timezone-converter",
        title: "TimeZone Converter",
        date: "2024",
        prodi: "Web Development",
        tags: ["TypeScript", "Utility", "Tool"],
        blocks: [
          {
            id: "project-description",
            title: "PROJECT DESCRIPTION",
            details: [
              "Developed and deployed a web-based food recipe recommendation system using the EASE-R collaborative filtering model to address the choice overload problem in the food recipe domain. The recommendation model was trained on 676K+ user interactions across 29K recipes and integrated into a full-stack web application built with React, Node.js, Express, and PostgreSQL through a REST API. The system was evaluated using Recall@10 and NDCG@10, achieving 0.0262 Recall@10 and 0.0123 NDCG@10, outperforming a popularity-based recommendation baseline.",
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "tech-stacks",
            title: "TECH STACKS",
            details: [
              "Tech Stacks: Python, FastAPI, PostgreSQL, Prisma, JavaScript, React, Node.js.",
            ],
          },
          {
            id: "demo-and-screenshots",
            title: "DEMO AND SCREENSHOTS",
          },
          {
            id: "demo-and-screenshots1",
            details: ["sd"],
            images: [{ src: mecEvents1, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
          {
            id: "demo-and-screenshots2",
            details: ["sd"],
            images: [{ src: mecComp2, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
          },
        ],
      },
    ],
  },
  hobbies: {
    id: "hobbies",
    title: "HOBBIES & INTERESTS",
    tabLabel: "Hobbies",
    color: "#D0B753",
    date: "Ongoing",
    prodi: "Personal Interests",
    tags: ["Cybersecurity", "Debating", "Moderating"],
    blocks: [
      {
        id: "academic-summary",
        title: "ACADEMIC SUMMARY",
        details: [
          "Currently pursuing a Bachelor of Computer Science in Informatics Engineering.",
          "Conducting undergraduate thesis research on EASE-R collaborative filtering.",
        ],
      },
      {
        id: "student-organization",
        title: "STUDENT ORGANIZATION",
        details: [
          "Currently pursuing a Bachelor of Computer Science in Informatics Engineering.",
          "Conducting undergraduate thesis research on EASE-R collaborative filtering.",
        ],
        images: [
          // { src: "/images/thesis-1.jpg", alt: "EASE-R diagram", ratio: 4 / 3 },
          // { src: "/images/thesis-2.jpg", alt: "Evaluation results", ratio: 1 },
        ],
      },
    ],
  },
};
