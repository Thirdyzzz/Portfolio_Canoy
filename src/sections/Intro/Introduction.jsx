import React from 'react';
import './Introduction.css';
import background from '../../assets/gif2.gif'; // Ensure the path is correct

const Introduction = () => {
  return (
    <section id="introduction" className="intro-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="intro-content">
        <h1>This web portfolio is created by a passionate developer</h1>
        <h3>Based in Davao City, Philippines</h3>
       
      </div>
    </section>
  );
};

export default Introduction;
