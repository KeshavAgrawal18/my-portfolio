import React from "react";
import styled from "styled-components";
import { technologies } from "../data/technologies";
import { SectionTitle } from "../pages/About";

const Technologies = () => (
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


export default Technologies;
