import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Import the CSS file

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
      <div className="container contact-container">
        <h2>Contact Me</h2>
        <p>You can contact me via:</p>

        <p>
          <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn Logo" className="linkedin-logo" />
          LinkedIn: <a href="https://www.linkedin.com/in/alonzasearer" className="btn btn-primary">Alonza Searer</a>
        </p>

        <p>
          <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Logo" className="github-logo" />
          GitHub: <a href="https://github.com/asearer" className="btn btn-primary">asearer</a>
        </p>

        <p>
          <img src="https://img.icons8.com/color/48/000000/codepen.png" alt="CodePen Logo" className="codepen-logo" />
          CodePen: <a href="https://codepen.io/asearer" className="btn btn-primary">asearer</a>
        </p>

        <p>
          <img src="https://img.icons8.com/fluent/48/000000/gmail.png" alt="Gmail Logo" className="gmail-logo" />
          Gmail: <a href="mailto:amsearer84@gmail.com" className="btn btn-primary">amsearer84@gmail.com</a>
        </p>

        
        <Link to="/" className="btn btn-secondary">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;
