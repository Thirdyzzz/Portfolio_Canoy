import React from 'react';
import './FloatingIcon.css'; // Create this CSS file for styling
import { FaHome } from 'react-icons/fa'; // Import a home icon from react-icons

const FloatingIcon = () => {
  const scrollToIntroduction = () => {
    const introductionElement = document.getElementById('introduction');
    if (introductionElement) {
      introductionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-icon" onClick={scrollToIntroduction}>
      <FaHome size={24} />
    </div>
  );
};

export default FloatingIcon;
