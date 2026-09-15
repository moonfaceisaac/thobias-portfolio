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
          { src: mecComp3, alt: "MEC-COMP-3", ratio: 4 / 3 }

        ],
      },
      {
        id: "extra-activites-campus-related",
        title: "EXTRA ACTIVITIES",
        details: [
          "Outside Student Organization, I was selected twice in a row as a committee member for my university's graduation ceremony. My responsibility was to serve as the official name announcer, announcing the names of graduates during the ceremony.",
          "In my 7th semester, I was selected as a Lecturer's Computer Lab Assistant. My responsibilities included preparing laboratory devices before each class, maintaining a conducive learning environment, assisting lecturers in delivering course materials and assignments, and helping students understand the practical materials during lab sessions."
        ],
        images: [{ src: gradCeremony, alt: "GRAD-CEREMONY-1", ratio: 4 / 3 }],
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
              // {
              //   src: "/images/thesis-1.jpg",
              //   alt: "EASE-R diagram",
              //   ratio: 4 / 3,
              // },
              // {
              //   src: "/images/thesis-2.jpg",
              //   alt: "Evaluation results",
              //   ratio: 1,
              // },
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
              // {
              //   src: "/images/thesis-1.jpg",
              //   alt: "EASE-R diagram",
              //   ratio: 4 / 3,
              // },
              // {
              //   src: "/images/thesis-2.jpg",
              //   alt: "Evaluation results",
              //   ratio: 1,
              // },
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
              // {
              //   src: "/images/thesis-1.jpg",
              //   alt: "EASE-R diagram",
              //   ratio: 4 / 3,
              // },
              // {
              //   src: "/images/thesis-2.jpg",
              //   alt: "Evaluation results",
              //   ratio: 1,
              // },
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
          // { src: "/images/thesis-1.jpg", alt: "EASE-R diagram", ratio: 4 / 3 },
          // { src: "/images/thesis-2.jpg", alt: "Evaluation results", ratio: 1 },
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
