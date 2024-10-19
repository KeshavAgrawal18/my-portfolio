import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Home = () => {
  return (
    <HeroSection>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Keshav Agrawal
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Fullstack Developer | Problem Solver | Innovator
      </motion.p>
      <MotionLink
        to="projects"
        whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#2575fc" }}
        whileTap={{ scale: 0.9 }}
        as={Link}
      >
        View My Work
      </MotionLink>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  padding: 0 20px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 30px;
    font-weight: 400;
  }

  a {
    display: inline-block;
    padding: 12px 28px;
    background: white;
    color: #2575fc;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.1rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.3rem;
    }

    a {
      padding: 10px 25px;
      font-size: 1rem;
    }
  }
`;

export default Home;
