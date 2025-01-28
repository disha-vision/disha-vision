import React, { useState } from 'react';
import '../styles/contactform.css';
import { RxCross2 } from 'react-icons/rx';
import checkbtton from '../assets/check-mark-button.png';

const ContactForm = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reload
    setIsSubmitted(true); // Show confirmation modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <RxCross2 />
        </button>

        {!isSubmitted ? (
          <>
            <h1>Share your details</h1>
            <p>Our team will get back to you in 2-3 working days</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email e.g., user@example.com"
                required
              />

              <label htmlFor="contact">Contact</label>
              <input
                type="number"
                id="contact"
                placeholder="Enter contact e.g., +919714207859"
                required
              />

              <label htmlFor="connect">Reason of Connect</label>
              <input
                type="text"
                id="connect"
                placeholder="Enter reason of connect e.g., Software development engineer"
                required
              />
              <button type="submit" className="submit-button">
                Done
              </button>
            </form>
          </>
        ) : (
          <div className="check-button-section">
            <img src={checkbtton} alt="check-button" />
            <h3>We’ve received your detail</h3>
            <h2>Our team will get back to you in 2-3 working days</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
