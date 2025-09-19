
import {
  PythonIcon,
  JavaIcon,
  JavaScriptIcon,
  ReactIcon,
  NodeJSIcon,
  MongoDBIcon,
  MySqlIcon,
  HtmlIcon,
  CssIcon,
  BootstrapIcon,
  GitIcon,
  LinuxIcon,
  SQLIcon,
  DataStructuresIcon,
  AlgorithmIcon
} from './components/Icons';
import type { ReactNode } from 'react';


export const personalInfo = {
  name: "S M Adnan Rizvi",
  title: "Full-Stack Developer & AI/ML Enthusiast",
  bio: "A passionate Computer Science student at VIT-AP University with a strong foundation in full-stack development, data structures, and machine learning. Proven ability to build scalable applications and solve complex problems, with a drive for continuous learning and technical collaboration.",
  email: "adnanrizvi102@gmail.com",
  phone: "+91-8317755649",
  linkedin: "https://www.linkedin.com/in/s-m-adnan-rizvi-aa75bb275/",
  github: "https://github.com/ad-rizvi03",
};

export interface Skill {
  name: string;
  icon: ReactNode;
}

export const skills: Skill[] = [
  { name: "Python", icon: PythonIcon },
  { name: "Java", icon: JavaIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "React.js", icon: ReactIcon },
  { name: "Node.js", icon: NodeJSIcon },
  { name: "SQL", icon: SQLIcon },
  { name: "MySQL", icon: MySqlIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "HTML5", icon: HtmlIcon },
  { name: "CSS3", icon: CssIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "Data Structures", icon: DataStructuresIcon },
  { name: "Algorithms", icon: AlgorithmIcon },
  { name: "Git", icon: GitIcon },
  { name: "Linux/Ubuntu", icon: LinuxIcon },
];

export interface Project {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Flood Prediction Using Machine Learning",
    period: "Sept 2024 – Nov 2024",
    description: "Developed a hybrid Machine Learning model leveraging Random Forest and Recurrent Neural Networks for accurate flood prediction using historical and real-time meteorological data.",
    achievements: [
      "Designed a preprocessing pipeline to clean, normalize, and scale environmental datasets, improving model accuracy by 15%.",
      "Achieved a predictive accuracy of 86.49% with a high F1 score of 85.00%, minimizing false positives and negatives.",
      "Presented findings through detailed visualizations, including ROC and precision-recall curves, showcasing the model's potential for proactive disaster management."
    ],
    tech: ["Python", "Random Forest", "RNN", "Scikit-learn", "Pandas"]
  },
  {
    title: "Movie Ticket Booking System (MERN Stack)",
    period: "June 2024 – July 2024",
    description: "Developed a massively scalable Movie Ticket Booking System using the MERN stack to facilitate seamless ticket booking experiences for users.",
    achievements: [
      "Implemented distributed computing techniques for dynamic seat selection and real-time availability, improving user satisfaction by 25%.",
      "Optimized backend API performance, resulting in a 30% reduction in response time and smoother user interactions.",
      "Collaborated with a cross-functional team to ensure the system was scalable and robust."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Payment Gateways"]
  },
  {
    title: "Gas Leakage Detection and Prevention System",
    period: "Jan 2024 – May 2024",
    description: "Engineered a scalable Gas Leakage Detection and Prevention System using Arduino Uno for real-time monitoring and swift emergency response.",
    achievements: [
      "Integrated sensor networks and microcontroller logic to detect hazardous gas leaks and trigger automated safety protocols.",
      "Applied IoT principles for remote monitoring and alerting, enhancing scalability.",
      "Optimized system design to reduce response times and increase leak detection accuracy by 25%."
    ],
    tech: ["Arduino", "C/C++", "IoT", "Sensors"]
  },
  {
    title: "CookBook: Recipe Maker (Hackathon)",
    period: "October 2023",
    description: "Led the development of a recipe recommendation website during a hackathon, utilizing React.js for a dynamic and user-friendly interface.",
    achievements: [
      "Engineered an intelligent search algorithm suggesting recipes based on user-provided ingredients, reducing food waste.",
      "Integrated MongoDB to manage and retrieve large datasets of recipes efficiently.",
      "Applied UI/UX best practices, resulting in a highly intuitive platform that received positive feedback."
    ],
    tech: ["React.js", "MongoDB", "JavaScript", "UI/UX Design"]
  }
];

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export const education: EducationItem[] = [
  {
    institution: "VIT-AP University (Vellore Institute of Technology)",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "Sep 2022 – Jun 2026 (Currently pursuing)",
    location: "Amaravati, Andhra Pradesh",
  },
  {
    institution: "Oak Grove School",
    degree: "Higher Secondary School (XIIth CBSE Board)",
    period: "2022-Batch",
    location: "Mussoorie, Uttarakhand",
    details: "Score: 82%"
  },
  {
    institution: "R.P.S. Residential School",
    degree: "Secondary School (Xth CBSE Board)",
    period: "2020-Batch",
    location: "Patna, Bihar",
    details: "Score: 91%"
  }
];

export const certifications: string[] = [
  "Oracle Cloud Infrastructure 2025 Certified Generative Al Professional",
  "MERN Full Stack Certification Program | ETHNUS - 2024",
  "Certified Python Programming Internship | CODSOFT - 2024",
  "Certified MATLAB Onramp | MathWorks - 2022",
  "Certified Introduction to Front-End Developer | Coursera - 2023",
  "Certified Python | HackerRank - 2023",
  "Certified Java | HackerRank - 2024",
  "Certified SQL (Basic) | HackerRank - 2024",
  "AWS Academy Graduate- AWS Academy Cloud Foundations",
  "AWS Academy Graduate- AWS Academy Cloud Architecting"
];
