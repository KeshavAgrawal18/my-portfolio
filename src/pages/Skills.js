import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiGraphql, SiTypescript, SiJest } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0 8px 20px rgba(0, 123, 255, 0.3)",
    },
  };

  return (
    <Section>
      <h2>My Skills</h2>

      <SkillsCategory>
        <h3>Frontend Development</h3>
        <p>
          Delivering smooth and interactive user interfaces using modern tools.
        </p>
        <SkillGrid>
          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <FaReact size="48" />
            <p>React.js</p>
            <SkillDescription>
              Dynamic, responsive UIs with modern tools.
            </SkillDescription>
          </SkillCard>

          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <SiTypescript size="48" />
            <p>TypeScript</p>
            <SkillDescription>
              Type-safe, scalable development.
            </SkillDescription>
          </SkillCard>

          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <FaFigma size="48" />
            <p>Figma</p>
            <SkillDescription>
              Clean, functional UI design translation.
            </SkillDescription>
          </SkillCard>
        </SkillGrid>
      </SkillsCategory>

      <SkillsCategory>
        <h3>Backend & Cloud Development</h3>
        <p>Reliable, scalable solutions with modern server-side technology.</p>
        <SkillGrid>
          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <FaNodeJs size="48" />
            <p>Node.js</p>
            <SkillDescription>
              High-performance backend services.
            </SkillDescription>
          </SkillCard>

          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <SiMongodb size="48" />
            <p>MongoDB</p>
            <SkillDescription>Fast, scalable NoSQL databases.</SkillDescription>
          </SkillCard>

          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <FaAws size="48" />
            <p>AWS</p>
            <SkillDescription>
              Cloud infrastructure for modern apps.
            </SkillDescription>
          </SkillCard>
        </SkillGrid>
      </SkillsCategory>

      <SkillsCategory>
        <h3>Tools & Testing</h3>
        <p>Enhancing development workflow and ensuring code quality.</p>
        <SkillGrid>
          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <FaDocker size="48" />
            <p>Docker</p>
            <SkillDescription>
              Containerizing for consistent environments.
            </SkillDescription>
          </SkillCard>

          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <FaGitAlt size="48" />
            <p>Git</p>
            <SkillDescription>
              Version control for team collaboration.
            </SkillDescription>
          </SkillCard>

          <SkillCard
            as={motion.div}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <SiJest size="48" />
            <p>Jest</p>
            <SkillDescription>
              Ensuring code reliability with testing.
            </SkillDescription>
          </SkillCard>
        </SkillGrid>
      </SkillsCategory>

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

const SkillCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  p {
    margin-top: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  svg {
    color: #007bff;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(5deg);
  }
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
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
