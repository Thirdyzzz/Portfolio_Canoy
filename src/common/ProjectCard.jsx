import React from 'react';
import './ProjectCard.css';

function ProjectCard({ src, title, description, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img className="project-card-image" src={src} alt={`${title} thumbnail`} />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description.substring(0, 80)}...</p>
      </div>
    </div>
  );
}

export default ProjectCard;
