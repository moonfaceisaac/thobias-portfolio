import mecEvents1 from "../assets/screenshots/mec-events-1.jpg";
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
          "Currently pursuing a Bachelor of Computer Science in Informatics Engineering.",
          "Conducting undergraduate thesis research on EASE-R collaborative filtering.",
          "Currently pursuing a Bachelor of Computer Science in Informatics Engineering.",
          "Conducting undergraduate thesis research on EASE-R collaborative filtering.",
          "Currently pursuing a Bachelor of Computer Science in Informatics Engineering.",
          "Conducting undergraduate thesis research on EASE-R collaborative filtering.",
          "Currently pursuing a Bachelor of Computer Science in Informatics Engineering.",
          "Conducting undergraduate thesis research on EASE-R collaborative filtering.",
          "Currently pursuing a Bachelor of Computer Science in Informatics Engineering.",
          "Conducting undergraduate thesis research on EASE-R collaborative filtering.",
        ],
        images: [
          { src: mecEvents1, alt: "EASE-R diagram", ratio: 4 / 3 },
          


        ]
          // { src: "/images/thesis-2.jpg", alt: "Evaluation results", ratio: 1 },
        
      },
    ],

    // details: [
    //   'Currently pursuing a Bachelor of Computer Science in Informatics Engineering.',
    //   'Conducting undergraduate thesis research on EASE-R collaborative filtering recommendation systems.',
    //   'Proficient in Data Structures, Database Architecture, Software Engineering, and Machine Learning fundamentals.'
    // ]
  },
  experience: {
    id: "experience",
    title: "EXPERIENCE OVERVIEW",
    tabLabel: "Experience",
    color: "#CF3B3B",
    date: "2023 - Present",
    prodi: "Full-Stack & Data",
    tags: ["Web Application", "Data Analysis", "Engineering"],
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
          { src: "/images/thesis-1.jpg", alt: "EASE-R diagram", ratio: 4 / 3 },
          { src: "/images/thesis-2.jpg", alt: "Evaluation results", ratio: 1 },
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
        id: "food-recipe",
        title: "Food System Recommendation",
        date: "2026",
        prodi: "Teknik Informatika",
        tags: ["EASE-R", "Collaborative Filtering", "Next.js"],
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
              {
                src: "/images/thesis-1.jpg",
                alt: "EASE-R diagram",
                ratio: 4 / 3,
              },
              {
                src: "/images/thesis-2.jpg",
                alt: "Evaluation results",
                ratio: 1,
              },
            ],
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
              {
                src: "/images/thesis-1.jpg",
                alt: "EASE-R diagram",
                ratio: 4 / 3,
              },
              {
                src: "/images/thesis-2.jpg",
                alt: "Evaluation results",
                ratio: 1,
              },
            ],
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
              {
                src: "/images/thesis-1.jpg",
                alt: "EASE-R diagram",
                ratio: 4 / 3,
              },
              {
                src: "/images/thesis-2.jpg",
                alt: "Evaluation results",
                ratio: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  skills: {
    id: "skills",
    title: "SKILLS OVERVIEW",
    tabLabel: "Skills",
    color: "#B84F98",
    date: "2026",
    prodi: "Technical Competencies",
    tags: ["React", "Next.js", "Python", "SQL"],
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
          { src: "/images/thesis-1.jpg", alt: "EASE-R diagram", ratio: 4 / 3 },
          { src: "/images/thesis-2.jpg", alt: "Evaluation results", ratio: 1 },
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
          { src: "/images/thesis-1.jpg", alt: "EASE-R diagram", ratio: 4 / 3 },
          { src: "/images/thesis-2.jpg", alt: "Evaluation results", ratio: 1 },
        ],
      },
    ],
  },
};
