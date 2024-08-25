import React, { useEffect } from 'react';
import './ContactSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {

  useEffect(() => {
    const button = document.querySelector("#theme-toggle-button");
    button.addEventListener("click", toggleTheme);
    
    // Cleanup event listener on unmount
    return () => {
      button.removeEventListener("click", toggleTheme);
    };
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <div className="consultation-container">
      <div className="consultation-header">
        <h1>SCHEDULE YOUR COMPREHENSIVE CONSULTATION WITH <span>OUR DEVELOPER</span></h1>
      </div>
      <div className="consultation-details">
        <div className="inquiries">
          <h2>INQUIRIES</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> your.email@example.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 123-456-7890
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} /> www.example.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Your Address, City, Country
            </li>
          </ul>
        </div>
        <div className="engage">
          <h2>ENGAGE</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} /> Quick Response Time
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} /> Let Us Provide Clarity!
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} /> Engage with Skilled Developer
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <button id="theme-toggle-button">Toggle Theme</button>
      </footer>
    </div>
  );
};

export default ContactSection;
