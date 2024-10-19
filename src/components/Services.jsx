import styled from "styled-components";
import { services } from "../data/services";
import { motion } from "framer-motion";
import { SectionTitle } from "../pages/About";

function Services() {
    return (
        <ServiceSection>
            <SectionTitle>Services I Offer</SectionTitle>
            <ServicesGrid>
                {services.map((service) => (
                    <ServiceCard
                        as={motion.div}
                        whileHover="hover"
                        variants={cardHover}
                    >
                        <ServiceIcon>{service.icon}</ServiceIcon>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <p>{service.description}</p>
                    </ServiceCard>
                ))}
            </ServicesGrid>
        </ServiceSection>
    );
}


const cardHover = {
    hover: {
        scale: 1.05,
        boxShadow: "0 4px 20px rgba(0, 123, 255, 0.5)",
        transition: { duration: 0.3 },
    },
};


const ServiceSection = styled.div`
  margin-top: 60px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  p {
    margin-top: 10px;
    color: #333;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #28a745;
`;


export default Services;