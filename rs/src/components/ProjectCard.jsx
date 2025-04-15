import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="status" data-status={project.status.toLowerCase()}>
          {project.status}
        </p>
        <p className="description">{project.description}</p>
        <Link to="/" className="btn">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;