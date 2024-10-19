import React from "react";
import styled from "styled-components";
import { FaCode, FaServer, FaCloud, FaMobileAlt } from "react-icons/fa";

// Technologies Section
const TechnologiesSection = () => (
    <>
        <SectionTitle>Technologies I Work With</SectionTitle>
        <TechnologiesList>
            {technologies.map((tech, index) => (
                <li key={index}>
                    {tech.icon} <span>{tech.label}:</span> {tech.details}
                </li>
            ))}
        </TechnologiesList>
    </>
);

// Data for Technologies
const technologies = [
    { icon: <FaCode />, label: "Frontend", details: "React, Three.js, Styled Components, Framer Motion" },
    { icon: <FaServer />, label: "Backend", details: "Node.js, Express, MongoDB, SQL" },
    { icon: <FaCloud />, label: "Cloud", details: "AWS, Docker, Serverless Architecture" },
    { icon: <FaMobileAlt />, label: "Mobile", details: "React Native, PWA" },
];

// Styled Components
const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #007bff;
  margin-bottom: 20px;
`;

const TechnologiesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 20px 0;

  li {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    margin-bottom: 10px;

    span {
      margin-left: 10px;
      font-weight: bold;
    }

    svg {
      color: #007bff;
    }
  }
`;

export default TechnologiesSection;
