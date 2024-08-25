import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, content, image, link }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-container">
          <img src={image} alt={title} className="modal-image" />
        </div>
        <div className="modal-text-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="modal-buttons">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link-button"
            >
              Learn More
            </a>
            <button className="modal-close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
