import React from 'react';
import './ProjectSlider.css';

function ProjectSlider({ children }) {
  return (
    <div className="project-slider">
      <div className="project-slider-wrapper">
        {children}
      </div>
    </div>
  );
}

export default ProjectSlider;
