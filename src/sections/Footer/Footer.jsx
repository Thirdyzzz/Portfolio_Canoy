import React from 'react';
import './Footer.css'; // Assuming you want to add some custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2024 Portlio | All Rights Reserved |</span>
        <div className="footer-links">
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
