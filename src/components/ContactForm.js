import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return false;
    }
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFeedbackMessage("Please fill in all fields with a valid email.");
      return;
    }
    setIsSending(true);
    emailjs
      .sendForm(
        "service_qngadzw",
        "template_6gd96np",
        e.target,
        "KgyI9Y0o-MOQAc87Z"
      )
      .then(
        (result) => {
          setIsSending(false);
          setFeedbackMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsSending(false);
          setFeedbackMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <FormSection
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
      {feedbackMessage && <FeedbackMessage>{feedbackMessage}</FeedbackMessage>}
    </FormSection>
  );
};

// Styled Components
const FormSection = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f8f9fa;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #007bff;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;

    input,
    textarea {
      margin-bottom: 20px;
      padding: 15px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }

    textarea {
      height: 150px;
    }

    button {
      padding: 15px;
      background-color: ${({ theme }) => theme.primaryColor};
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.secondaryColor};
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;

const FeedbackMessage = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.accentColor};
`;

export default ContactForm;
