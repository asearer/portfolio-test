// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
  <div className="about-overlay"> {/* Use the about-overlay class for the overlay */}
    <div className="about-container"> {/* Add a container for the content */}
      <h2>About Me</h2>
      <p>
        Welcome to my corner of the web! This is where you can find information about me, my education, interests and goals.
      </p>
      <p>
         I'm Alonza Searer, a passionate software engineer with a knack for crafting elegant solutions to complex problems. With a strong foundation in both front-end and back-end technologies, I bring over a decade of experience in honing my skills in Python, JavaScript, HTML, and CSS.
      
        My journey in the world of software engineering began with a curiosity-driven pursuit of knowledge, leading me to independently explore various programming languages and frameworks.This dedication culminated in my enrollment in UMass Global's Software Engineering Bootcamp, where I further refined my expertise and acquired practical experience in designing and implementing scalable software solutions.
      </p>
      <p>
        I thrive on the challenges of software development, constantly seeking out new opportunities to push the boundaries of what's possible. Whether it's building intuitive user interfaces, delving into the depths of data analysis, or architecting robust backend systems, I approach each project with enthusiasm and a commitment to excellence.
      
        Beyond the realm of coding, I am deeply fascinated by the potential of technology to shape our world in meaningful ways. From exploring the realms of Artificial Intelligence and Machine Learning to immersing myself in the creative possibilities of game development, I am driven by a desire to contribute to innovative projects that make a difference.
      
      
        When I'm not coding, you can find me immersed in books on programming, science or history, tinkering with new (sometimes old) technologies, or seeking inspiration in the great outdoors. In any case, I'm constantly learning as I believe in the power of continuous learning and am always eager to expand my horizons and tackle new challenges head-on.
      </p>
      <p>
        Join me on this journey as we harness the power of technology to create transformative solutions and embark on an adventure of endless possibilities and knowledge.
      </p>
      <Link to="/">Go back to Home</Link>
    </div>
  </div>
);

export default About;
