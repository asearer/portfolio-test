// Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => (
  <div className="contact-overlay"> {/* Use the contact-overlay class for the overlay */}
    <div className="contact-container"> {/* Add a container for the content */}
      <h2>Contact Me</h2>
      <p>You can contact me via:</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/alonzasearer">Alonza Searer</a></p>
      
      <p>GitHub: <a href="https://github.com/asearer">asearer</a></p>

      <p>Email: <a href="mailto:amsearer84@gmail.com">amsearer84@gmail.com</a></p>
      <Link to="/">Go back to Home</Link>
    </div>
  </div>
);

export default Contact;
