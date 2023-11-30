import React, { useState } from 'react';
import './style.css';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = () => {
    // Add your contact form submission logic here
    console.log('Contact form submitted with:', { name, email, message });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={handleContactSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
