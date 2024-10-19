import { motion } from "framer-motion";
import styled from "styled-components";

function SkillCard({ icon, name, description }) {
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
    <StyledSkillCard
      as={motion.div}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      {icon}
      <p>{name}</p>
      <SkillDescription>
        {description}
      </SkillDescription>
    </StyledSkillCard>
  );
}


const StyledSkillCard = styled.div`
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

export default SkillCard;