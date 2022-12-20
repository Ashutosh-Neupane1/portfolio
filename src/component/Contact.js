import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Get in touch with me through the form below or through the following social media channels:</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
