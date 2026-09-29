import type { StaticImageData } from "next/image";

//  EDUCATION PICTURES
import mecEvents1 from "../assets/screenshots/mec-events-1.jpg";
import mecComp1 from "../assets/screenshots/mec-comp-1.jpg";
import mecComp2 from "../assets/screenshots/mec-comp-5.jpg";
import mecComp3 from "../assets/screenshots/mec-comp-2.jpg";
import gradCeremony from "../assets/screenshots/graduation-ceremony-3.jpg";

// PROJECT
// EASE-R FOOD RECSYS
import signIn from "../assets/screenshots/projects/Food RecSys/Sign In.png";
import homeRecSys from "../assets/screenshots/projects/Food RecSys/Halaman Home Belum Interaksi.png";
import homeRecommended from "../assets/screenshots/projects/Food RecSys/Halaman Home Interacted.png";
import result1 from "../assets/screenshots/projects/Food RecSys/Result1.png";
import result2 from "../assets/screenshots/projects/Food RecSys/Result2.png";

// LearnTic
import dasborGuru from "../assets/screenshots/projects/LearnTic/DasborGuru.png";
import dasborGuru2 from "../assets/screenshots/projects/LearnTic/DasborGuru2.png";
import dasborOrangTua from "../assets/screenshots/projects/LearnTic/DasborOrangTua.png";
import dasborSiswa from "../assets/screenshots/projects/LearnTic/DasborSiswa.png";

// Bimbel GMS
import berandaAdmin from "../assets/screenshots/projects/GMS Mobile/Beranda Admin.png";
import berandaGuru from "../assets/screenshots/projects/GMS Mobile/Beranda Guru.png";
import berandaMurid from "../assets/screenshots/projects/GMS Mobile/beranda murid.png";
import login from "../assets/screenshots/projects/GMS Mobile/Login.png";

// Sistem Administrasi Kantor Notaris
import dasborKlien from "../assets/screenshots/projects/System Information Administration Notary Office/Dasbor Klien.png";
import dasborNotaris from "../assets/screenshots/projects/System Information Administration Notary Office/Dasbor Notaris.png";
import dasborStaff from "../assets/screenshots/projects/System Information Administration Notary Office/DasborStaff.png";
import klienFitur1 from "../assets/screenshots/projects/System Information Administration Notary Office/Klien-AjukanLayanan.png";
import loginNotaris from "../assets/screenshots/projects/System Information Administration Notary Office/LogIn.png";

// Smoking Activity Detector
import home from "../assets/screenshots/projects/Smoking Activity Detector/home.png";
import smoking from "../assets/screenshots/projects/Smoking Activity Detector/smoking.png";
import notSmoking from "../assets/screenshots/projects/Smoking Activity Detector/notsmoking.png";

// TimeZone Converter
import xxx5 from "../assets/screenshots/projects/LearnTic/DasborGuru.png";

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
  // EDUCATION-------------------------------------------------------------------------------
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
          "I graduated from Universitas Mikroskil with a Bachelor's degree in Computer Science, completing my studies in 3 years and 8 months with the grade (IPK) of 3.56. Throughout my university years, I actively participated in various extra activities alongside my academic journey. more details below!",
        ],
      },
      {
        id: "student-organization-img",
        title: "STUDENT ORGANIZATION",
        images: [{ src: mecEvents1, alt: "MEC-EVENT-1", ratio: 4 / 3 }],
      },
      {
        id: "student-organization",
        details: [
          "I joined Mikroskil English Club (MEC) in my first semester. MEC is one of the student organizations at my university that focuses on helping students build confidence in speaking English through public speaking and competitive debating. The club is divided into two divisions: Public Speaking and Debate. I joined the Public Speaking Division during my first year before switching to the Debate Division, where I remained until I graduated.",
        ],
      },
      {
        id: "student-organization-img-2",
        images: [
          { src: mecComp3, alt: "MEC-COMP-1", ratio: 4 / 3 },
          { src: mecComp1, alt: "MEC-COMP-2", ratio: 4 / 3 },
        ],
      },
      {
        id: "student-organization-2",
        details: [
          "During my time in the Debate Division, I participated in numerous debate competitions while also serving as the club's Event Organizer for one year. In this role, I contributed ideas for club events, managed event administration, coordinated committees, and moderated several events organized by the club.",
        ],
      },
      {
        id: "student-organization-img-3",
        images: [{ src: mecComp2, alt: "MEC-COMP-3", ratio: 4 / 3 }],
      },
      {
        id: "student-organization-3",
        details: [
          "Among all the competitions I participated in, my highest achievement was becoming a Regional Finalist at the National University Debating Championship (NUDC) 2024 in North Sumatra. Advancing to the regional finals qualified my team to represent the region at the National NUDC 2024. Besides NUDC, I also reached the semifinal stage in several other university debate competitions.",
        ],
      },
      {
        id: "extra-activites-campus-related",
        title: "EXTRA ACTIVITIES",
        images: [{ src: gradCeremony, alt: "GRAD-CEREMONY-1", ratio: 4 / 3 }],
      },
      {
        id: "extra-activites-campus-related-2",
        details: [
          "Outside Student Organization, I was selected twice in a row as a committee member for my university's graduation ceremony. My responsibility was to serve as the official name announcer, announcing the names of graduates during the ceremony.",
          "In my 7th semester, I was hired as a Lecturer's Computer Lab Assistant. My responsibilities included preparing laboratory devices before each class, maintaining a conducive learning environment, assisting lecturers in delivering course materials and assignments, and helping students understand the practical materials during lab sessions.",
        ],
      },
    ],
  },
  // EXPERIENCE-------------------------------------------------------------------------------
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
  // PROJECT-------------------------------------------------------------------------------

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
            id: "overview",
            title: "OVERVIEW",
            details: [
              "A web-based food recipe recommendation system using collaborative filtering with the EASE-R model (Embarrassingly Shallow Auto Encoder for Sparse Data). Built for home cooks who want recommendations tailored to their taste rather than generic popularity rankings, updating in real time as their interaction patterns evolve.",
            ],
          },
          {
            id: "problem-&-approach",
            title: "PROBLEM & APPROACH",
            details: [
              "Food recipe platforms typically rank recommendations by popularity, which drowns out niche preferences. A user who loves spicy Korean food sees the same trending pasta as everyone else. Prior research has built recommenders using content-based or query-based approaches, but because they depend solely on recipe content, the results lack serendipity. New discoveries feel rare, and the list turns homogeneous.",
              "I built a recommendation engine that learns each user's taste from their rating history and generates ranked suggestions specific to them. Recommendations update after every rating, so the system improves as the user engages. This real-time synchronization surfaces far more varied recipe suggestions. Performance was measured using Recall@10 and NDCG@10, where the trained EASE-R model outperformed the popularity baseline by a significant margin.",
            ],
          },
          {
            id: "my-role",
            title: "MY ROLE",
            details: [
              "Developed the end-to-end data pipeline, from preprocessing to model integration into the web app. Owned database design, API design, backend implementation, and half of the frontend. Made all architectural decisions and deployed a working implementation in 4 months.",
            ],
          },
          {
            id: "tech-stack-&-architecture",
            title: "TECH STACK & ARCHITECTURE",
            details: [
              "Dart · Flutter · Firebase (Cloud Firestore)",
              "The entire frontend was built with Flutter (Dart), with Firebase handling authentication and database operations through Cloud Firestore.",
            ],
          },
          {
            id: "demo-&-screenshots",
            title: "DEMO & SCREENSHOTS",
            images: [
              { src: signIn, alt: "Sign in page", ratio: 4 / 3 },
              {
                src: homeRecommended,
                alt: "Home Interacted Page",
                ratio: 4 / 3,
              },
              {
                src: homeRecSys,
                alt: "Home Interacted Page",
                ratio: 4 / 3,
              },
            ],
          },
          {
            id: "ease-r-model-performance",
            images: [
              { src: result1, alt: "Model Performance Result", ratio: 4 / 3 },
              { src: result2, alt: "Model Performance Result2", ratio: 4 / 3 },
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
            id: "overview",
            title: "OVERVIEW",
            details: [
              "A web-based learning management system built for schools that prioritizes early intervention, helping teachers and parents identify students at risk of academic decline through deep learning based risk prediction. The app features multi-role login (teacher, parent, student), grade input via manual entry and CSV upload, and a performance risk prediction engine as its core feature.",
            ],
          },
          {
            id: "problem-&-approach",
            title: "PROBLEM & APPROACH",
            details: [
              "Most learning management systems focus only on class and student administration. Few include any form of performance detection that could serve as an early-warning mechanism for parents and teachers. We saw the gap and trained a Feedforward Neural Network (FNN) on historical student data, combining grades, attendance records, and improvement outcomes to engineer a target label predicting whether a student is at risk. The result is a system that proactively notifies parents, teachers, and students before performance decline becomes visible.",
            ],
          },
          {
            id: "my-role",
            title: "MY ROLE",
            details: [
              "Led the project for half of its timeline. Built the end-to-end data pipeline, from preprocessing through deployment, and handled web integration.",
            ],
          },
          {
            id: "tech-stack-&-architecture",
            title: "TECH STACK & ARCHITECTURE",
            details: [
              "React.js · JavaScript · Tailwind CSS · Java Spring Boot · MongoDB · Python · Flask",
              "The React frontend communicates with a Java Spring Boot backend that connects to MongoDB for storing student, teacher, and parent data. A separate Flask service hosts the model API, which the frontend calls for risk predictions.",
            ],
          },
          {
            id: "demo-&-screenshots",
            title: "DEMO & SCREENSHOTS",
            images: [
              { src: signIn, alt: "Sign in page", ratio: 4 / 3 },
              {
                src: homeRecommended,
                alt: "Home Interacted Page",
                ratio: 4 / 3,
              },
            ],
          },
          {
            id: "ease-r-model-performance",
            images: [
              { src: result1, alt: "Model Performance Result", ratio: 4 / 3 },
              { src: result2, alt: "Model Performance Result2", ratio: 4 / 3 },
            ],
          },
        ],
      },
      {
        id: "tutoring-gms-sunggal-lms",
        title: "Tutoring GMS Sunggal LMS",
        date: "2025",
        prodi: "Software Engineering",
        tags: ["React", "LMS", "Web System"],
        blocks: [
          {
            id: "overview",
            title: "OVERVIEW",
            details: [
              "A mobile application built for a tutoring company in Medan that teaches enrolled students across a range of subjects. The app features multi-role access, class and student management, teacher administration, user profiles, and an attendance system, all unified under a single role-aware interface.",
            ],
          },
          {
            id: "problem-&-approach",
            title: "PROBLEM & APPROACH",
            details: [
              "The client's existing workflow handled attendance and class management entirely on paper, which made tracking student progress, teacher schedules, and class rosters difficult and error-prone. I designed a clean, simple UI/UX that lets each role complete its tasks efficiently, with data interconnected across all roles to enable fast, real-time synchronization.",
            ],
          },
          {
            id: "my-role",
            title: "MY ROLE",
            details: [
              "Solo developer across the entire mobile app, from frontend implementation to Firebase integration.",
            ],
          },
          {
            id: "tech-stack-&-architecture",
            title: "TECH STACK & ARCHITECTURE",
            details: [
              "Dart · Flutter · Firebase (Cloud Firestore)",
              "The entire frontend was built with Flutter (Dart), with Firebase handling authentication and database operations through Cloud Firestore.",
            ],
          },
          {
            id: "demo-&-screenshots",
            title: "DEMO & SCREENSHOTS",
            images: [
              { src: signIn, alt: "Sign in page", ratio: 4 / 3 },
              {
                src: homeRecommended,
                alt: "Home Interacted Page",
                ratio: 4 / 3,
              },
            ],
          },
          {
            id: "ease-r-model-performance",
            images: [
              { src: result1, alt: "Model Performance Result", ratio: 4 / 3 },
              { src: result2, alt: "Model Performance Result2", ratio: 4 / 3 },
            ],
          },
        ],
      },
      {
        id: "system-information-notary",
        title: "Information System/Administration for Notary Office",
        date: "2024",
        prodi: "Web Development",
        tags: ["TypeScript", "Utility", "Tool"],
        blocks: [
          {
            id: "overview",
            title: "OVERVIEW",
            details: [
              "A web-based administration and information system built for a notary office transitioning to a digitalized workflow for both internal operations and client communication. The app features multi-role access (client, staff, notary), service request management, notarial deed document handling, deed status tracking for clients, and an activity log that tracks staff tasks, visible to the notary role only.",
            ],
          },
          {
            id: "problem-&-approach",
            title: "PROBLEM & APPROACH",
            details: [
              " The notary office handled its operations manually, from recording client information to drafting notarial deeds. This workflow was slow and prone to human error. Notary administration systems have been built before, but we identified a recurring gap: none of them integrated the client directly into the workflow. We addressed this by bringing clients into the system as first-class users, giving them the ability to submit service requests, track deed status, and interact with the office, while staff and notaries manage the internal pipeline through a unified dashboard.",
            ],
          },
          {
            id: "my-role",
            title: "MY ROLE",
            details: [
              "Singlehandedly designed the database ERD, data flow, and UI/UX, then built the web app end to end from full-stack implementation to hosting, all under a tight timeline.",
            ],
          },
          {
            id: "tech-stack-&-architecture",
            title: "TECH STACK & ARCHITECTURE",
            details: [
              "React.js · JavaScript · Tailwind CSS · Node.js · Express · PostgreSQL · Prisma",
              "Built the frontend with React.js and Tailwind CSS. The backend runs on Node.js with Express, communicating with PostgreSQL through Prisma as the ORM.",
            ],
          },
          {
            id: "demo-&-screenshots",
            title: "DEMO & SCREENSHOTS",
            images: [
              { src: signIn, alt: "Sign in page", ratio: 4 / 3 },
              {
                src: homeRecommended,
                alt: "Home Interacted Page",
                ratio: 4 / 3,
              },
            ],
          },
          {
            id: "ease-r-model-performance",
            images: [
              { src: result1, alt: "Model Performance Result", ratio: 4 / 3 },
              { src: result2, alt: "Model Performance Result2", ratio: 4 / 3 },
            ],
          },
        ],
      },
      {
        id: "smoking-activity-detector",
        title: "Smoking Activity Detector",
        date: "2024",
        prodi: "Web Development",
        tags: ["TypeScript", "Utility", "Tool"],
        blocks: [
          {
            id: "overview",
            title: "OVERVIEW",
            details: [
              "A web-based demonstration app showcasing CNN (Convolutional Neural Network) performance on detecting smoking activity from uploaded images. Built for research purposes as part of a machine learning course final assignment. The app features image upload, a backend API for inference, model accuracy display, and a history of past uploads and results.",
            ],
          },
          {
            id: "problem-&-approach",
            title: "PROBLEM & APPROACH",
            details: [
              "In countries like Indonesia, smoking activity is rampant, particularly in public areas where it's officially prohibited. Despite clear signage, compliance is low, and monitoring these areas manually is difficult and inconsistent. This project demonstrates how a simple CNN-based classifier can detect smoking activity from images, showing one possible path toward automated monitoring at scale.",
            ],
          },
          {
            id: "my-role",
            title: "MY ROLE",
            details: [
              "In countries like Indonesia, smoking activity is rampant, particularly in public areas where it's officially prohibited. Despite clear signage, compliance is low, and monitoring these areas manually is difficult and inconsistent. This project demonstrates how a simple CNN-based classifier can detect smoking activity from images, showing one possible path toward automated monitoring at scale.",
            ],
          },
          {
            id: "tech-stacks-&-architecture",
            title: "TECH STACKS & ARCHITECTURE",
            details: [
              "Python · NumPy · Pandas · Jupyter · Hugging Face · Gradio",
              "The trained CNN is deployed as a Hugging Face Space using Gradio for the web interface, allowing users to upload images and receive classification results directly in the browser.",
            ],
          },
          {
            id: "demo-&-screenshots",
            title: "DEMO & SCREENSHOTS",
            images: [
              { src: signIn, alt: "Sign in page", ratio: 4 / 3 },
              {
                src: homeRecommended,
                alt: "Home Interacted Page",
                ratio: 4 / 3,
              },
            ],
          },
          {
            id: "ease-r-model-performance",
            images: [
              { src: result1, alt: "Model Performance Result", ratio: 4 / 3 },
              { src: result2, alt: "Model Performance Result2", ratio: 4 / 3 },
            ],
          },
        ],
      },
      {
        id: "jamentime-(timezone converter)",
        title: "Jamentime (Timezone Converter)",
        date: "2024",
        prodi: "Web Development",
        tags: ["TypeScript", "Utility", "Tool"],
        blocks: [
          {
            id: "overview",
            title: "OVERVIEW",
            details: [
              "A lightweight web-based utility that converts time between time zones. Users select a source zone and a target zone and instantly see the converted time, along with a live comparison of the current time in both zones.",
            ],
          },
          {
            id: "problem-&-approach",
            title: "PROBLEM & APPROACH",
            details: [
              "Converting time across zones manually is surprisingly error-prone, especially when daylight savings transitions are involved. Most existing tools are either bloated with ads and features, or over-engineered for a task that should take seconds. I built a focused single-purpose tool: pick two zones, see the converted time, done. No accounts, no tracking, no bloat.",
            ],
          },
          {
            id: "my-role",
            title: "MY ROLE",
            details: [
              "Solo developer. Built the frontend and time zone conversion logic from scratch using vanilla JavaScript, with no framework or library dependency.",
            ],
          },
          {
            id: "tech-stack-&-architecture",
            title: "Tech Stack & Architecture",
            details: [
              "JavaScript · HTML · CSS",
              "A static client-side application. No framework, no build step, no backend. Time zone logic is implemented directly in JavaScript, with all computation happening in the browser.",
            ],
          },
          {
            id: "demo-&-screenshots",
            title: "DEMO & SCREENSHOTS",
            images: [
              { src: signIn, alt: "Sign in page", ratio: 4 / 3 },
              {
                src: homeRecommended,
                alt: "Home Interacted Page",
                ratio: 4 / 3,
              },
            ],
          },
          {
            id: "ease-r-model-performance",
            images: [
              { src: result1, alt: "Model Performance Result", ratio: 4 / 3 },
              { src: result2, alt: "Model Performance Result2", ratio: 4 / 3 },
            ],
          },
        ],
      },
    ],
  },
  // SKILLS-------------------------------------------------------------------------------
  skills: {
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
  // HOBBIES-------------------------------------------------------------------------------
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
