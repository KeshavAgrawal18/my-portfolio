import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../pages/About";
import { testimonialsData } from "../data/testimonials";
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <TestimonialsSection>
            <SectionTitle>What Clients Say</SectionTitle>
            <TestimonialsGrid>
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard
                        as={motion.div}
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Quote>"{testimonial.quote}"</Quote>
                        <Author>- {testimonial.author}</Author>
                    </TestimonialCard>
                ))}
            </TestimonialsGrid>
        </TestimonialsSection>
    );
};

// Styled Components
const TestimonialsSection = styled.section`
  margin-top: 60px;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f9f9f9, #fff);
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

const Quote = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #333;
  margin-bottom: 20px;
`;

const Author = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
  text-align: right;
`;

export default Testimonials;
