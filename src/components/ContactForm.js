import React from 'react';
import '../assets/styles/contact.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
