import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const subject = formData.get('subject');
    const body = formData.get('body');
    const mailtoLink = `mailto:amsearer84@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-overlay">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>You can contact me via:</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alonzasearer">Alonza Searer</a></p>
        <p>GitHub: <a href="https://github.com/asearer">asearer</a></p>
        <p>CodePen: <a href="https://codepen.io/asearer">asearer</a></p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subject">Subject:</label><br />
          <input type="text" id="subject" name="subject" required /><br />
          <label htmlFor="body">Body:</label><br />
          <textarea id="body" name="body" required></textarea><br /><br />
          <button type="submit">Send Email</button>
        </form>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;
