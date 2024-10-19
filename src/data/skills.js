import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiJest } from "react-icons/si";

export const skillData = [
  {
    category: "Frontend Development",
    description:
      "Delivering smooth and interactive user interfaces using modern tools.",
    skills: [
      {
        icon: <FaReact size="48" />,
        name: "React.js",
        description: "Dynamic, responsive UIs with modern tools.",
      },
      {
        icon: <SiTypescript size="48" />,
        name: "TypeScript",
        description: "Type-safe, scalable development.",
      },
      {
        icon: <FaFigma size="48" />,
        name: "Figma",
        description: "Clean, functional UI design translation.",
      },
    ],
  },
  {
    category: "Backend & Cloud Development",
    description:
      "Reliable, scalable solutions with modern server-side technology.",
    skills: [
      {
        icon: <FaNodeJs size="48" />,
        name: "Node.js",
        description: "High-performance backend services.",
      },
      {
        icon: <SiMongodb size="48" />,
        name: "MongoDB",
        description: "Fast, scalable NoSQL databases.",
      },
      {
        icon: <FaAws size="48" />,
        name: "AWS",
        description: "Cloud infrastructure for modern apps.",
      },
    ],
  },
  {
    category: "Tools & Testing",
    description: "Enhancing development workflow and ensuring code quality.",
    skills: [
      {
        icon: <FaDocker size="48" />,
        name: "Docker",
        description: "Containerizing for consistent environments.",
      },
      {
        icon: <FaGitAlt size="48" />,
        name: "Git",
        description: "Version control for team collaboration.",
      },
      {
        icon: <SiJest size="48" />,
        name: "Jest",
        description: "Ensuring code reliability with testing.",
      },
    ],
  },
];
