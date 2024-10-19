import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faqs";

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FAQContainer>
            <Question
                onClick={() => setIsOpen(!isOpen)}
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${question}`}
            >
                {question}
                <span>{isOpen ? "-" : "+"}</span>
            </Question>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <Answer
                        as={motion.div}
                        id={`faq-answer-${question}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {answer}
                    </Answer>
                )}
            </AnimatePresence>
        </FAQContainer>
    );
};

// FAQ Section Component
const FAQSection = () => {
    return (
        <Section>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </Section>
    );
};

// Styled Components
const Section = styled.section`
    padding: 60px 20px;
    background-color: #f8f9fa;
    color: #333;
`;

const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: #007bff;
    margin-bottom: 40px;
`;

const FAQContainer = styled.div`
    margin-bottom: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    overflow: hidden;
`;

const Question = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    color: #007bff;
    transition: color 0.3s ease;

    &:hover {
        color: #0056b3;
    }

    span {
        font-size: 1.5rem;
    }
`;

const Answer = styled(motion.div)`
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    overflow: hidden;
`;

export default FAQSection;
