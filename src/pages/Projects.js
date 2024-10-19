import React from "react";
import { Grid, Typography } from "@mui/material";
import projects from "../data/projects";
import { Project3DCard } from "../components/Project3DCard";

const ProjectSection = () => {
  return (
    <div className="project-section">
      <Typography variant="h3" gutterBottom className="project-title">
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Project3DCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectSection;
