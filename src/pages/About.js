import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaMobileAlt, FaServer } from "react-icons/fa";
import FloatingSphere from "../components/FloatingSphere";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";

const About = () => {
  const containerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Section>
      <HeroSection>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <h1>About Me</h1>
          <p>
            I’m a <Highlight>Full Stack Developer</Highlight> with expertise in
            creating high-performance, scalable web applications. My approach
            combines <Highlight>cutting-edge technologies</Highlight> like{" "}
            <Highlight>React</Highlight>, <Highlight>Node.js</Highlight>, and{" "}
            <Highlight>AWS</Highlight> to deliver interactive, efficient
            solutions.
          </p>
          <FloatingSphere />
        </motion.div>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>My Philosophy</SectionTitle>
          <p>
            My development philosophy focuses on clean, efficient code and
            scalable solutions. Whether it’s building responsive UIs or
            architecting backend services, I aim to craft software that’s both
            functional and elegant.
          </p>

          {/* Technologies Section */}
          <TechnologiesList>
            <li>
              <FaCode /> <span>Frontend:</span> React, Three.js, Styled
              Components, Framer Motion
            </li>
            <li>
              <FaServer /> <span>Backend:</span> Node.js, Express, MongoDB, SQL
            </li>
            <li>
              <FaCloud /> <span>Cloud:</span> AWS, Docker, Serverless
              Architecture
            </li>
            <li>
              <FaMobileAlt /> <span>Mobile:</span> React Native, PWA
            </li>
          </TechnologiesList>

          {/* Services Section */}
          <Services />

          {/* Testimonials Section */}
          <Testimonials />
        </ContentSection>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 100px 20px;
  color: #333;
  position: relative;
  overflow: hidden;
  background-color: #f8f9fa;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #007bff;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 40px;
    line-height: 1.6;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentSection = styled.div`
  text-align: left;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #007bff;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #ffc107;
  font-weight: bold;
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

export default About;
