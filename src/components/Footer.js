import React, { useState } from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e) => {
    e.preventDefault();

    // Validate email with a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Clear the input field and show a success message
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <FooterContainer>
      <FooterTop>
        <SocialIcons>
          <SocialLink
            href="https://www.linkedin.com/in/keshav-agrawal-ka/"
            target="_blank"
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            title="LinkedIn"
          >
            <FaLinkedin size="28" />
          </SocialLink>
          <SocialLink
            href="https://github.com/keshavagrawal18/"
            target="_blank"
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            title="GitHub"
          >
            <FaGithub size="28" />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/keshavagrawal18/"
            target="_blank"
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            title="Twitter"
          >
            <FaEnvelope size="28" />
          </SocialLink>
        </SocialIcons>

        <Newsletter>
          <h4>Subscribe to my Newsletter</h4>
          <form onSubmit={handleNewsletterSignup}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </Newsletter>
      </FooterTop>

      <FooterBottom>
        <QuickLinks>
          <Link to="home">Home</Link>
          <Link to="skills">Skills</Link>
          <Link to="contact">Contact</Link>
        </QuickLinks>
        <Copyright>
          &copy; {new Date().getFullYear()} Keshav Agrawal. All Rights Reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
  color: white;
  padding: 60px 20px 40px;
  text-align: center;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: white;
  svg {
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Newsletter = styled.div`
  h4 {
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  form {
    display: flex;
    gap: 10px;
    input {
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
      width: 250px;
    }

    button {
      padding: 10px 20px;
      background-color: ${({ theme }) => theme.accentColor};
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 20px;
`;

const QuickLinks = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 15px;
    font-size: 1rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

export default Footer;
