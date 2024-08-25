import React from 'react';
import './Consultation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Consultation = () => {
  return (
    <div className="consultation-container">
      <div className="consultation-header">
        <h1>Contact Me Here <span></span></h1>
      </div>
      <div className="consultation-details">
        <div className="inquiries">
          <h2>Inquiries</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> i.canoy.520505@umindanao.edu.ph
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />  09128931755
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} /> thrd.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Sandawa Phase 1 Davao City
            </li>
          </ul>
        </div>
        <div className="engage">
          <h2>Engage</h2>
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
    </div>
  );
};

export default Consultation;
