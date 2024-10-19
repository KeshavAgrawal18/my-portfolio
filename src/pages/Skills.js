import React from "react";
import styled from "styled-components";
import SkillCard from "../components/SkillCard";
import { skillData } from "../data/skills";

const Skills = () => {
  return (
    <Section>
      <h2>My Skills</h2>

      {skillData.map((skillData) => (
        <SkillsCategory>
          <h3>{skillData.category}</h3>
          <p>{skillData.description}</p>
          <SkillGrid>
            {skillData.skills.map((skill) => (
              <SkillCard {...skill} />
            ))}
          </SkillGrid>
        </SkillsCategory>
      ))}

      {/* Call to Action Section */}
      <CallToAction>
        <h3>Let's Build Together</h3>
        <p>
          From dynamic web apps to scalable backends and cloud solutions, let's
          bring your ideas to life.
        </p>
        <ContactButton href="/contact">Start Your Project</ContactButton>
      </CallToAction>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 80px 20px;
  background-color: #f8f9fa;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #007bff;
  }
`;

const SkillsCategory = styled.div`
  margin-bottom: 60px;

  h3 {
    font-size: 2rem;
    color: #28a745;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
`;

const CallToAction = styled.div`
  background-color: #007bff;
  color: white;
  padding: 40px;
  border-radius: 15px;
  margin-top: 60px;

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const ContactButton = styled.a`
  background-color: #28a745;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export default Skills;
