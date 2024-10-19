import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import "../styles/project3DSection.css";

export const Project3DCard = ({ project }) => {
  const cardRef = useRef();
  const [hoverProps, setHoverProps] = useSpring(() => ({
    transform: "rotateY(0deg) rotateX(0deg)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  const calcHoverEffect = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 15,
    (x - rect.left - rect.width / 2) / 15,
  ];

  const handleMouseMove = (e) => {
    if (isTouchDevice()) return;
    const rect = cardRef.current.getBoundingClientRect();
    const [rotateX, rotateY] = calcHoverEffect(e.clientX, e.clientY, rect);
    setHoverProps({
      transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
      boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
    });
  };

  const handleMouseLeave = () => {
    setHoverProps({
      transform: "rotateY(0deg) rotateX(0deg)",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    });
  };

  const isTouchDevice = () =>
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <animated.div
      className="project-3d-card"
      style={hoverProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <Card className="project-card">
        <div className="image-container">
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-title-overlay">
            <Typography variant="h5" className="overlay-title">
              {project.title}
            </Typography>
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {project.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={project.link}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontWeight: "600",
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            View Project
          </Button>
        </CardContent>
      </Card>
    </animated.div>
  );
};
