import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  // Define an array of project data containing project titles, URLs, and thumbnail URLs
  const projects = [
    {
      title: "NASA Photo Viewer",
      url: "https://nasa-test-three.vercel.app/",
      repoUrl: "https://github.com/asearer/NasaTest",
      className: "nasa", // Custom class for styling
    },
    {
      title: "SpaceX Tracker",
      url: "https://spacex-tracker-sepia.vercel.app/",
      repoUrl: "https://github.com/asearer/spacex-tracker",
      className: "spacex", // Custom class for styling
    },
    {
      title: "2 in 1 Random Card Game",
      url: "https://react-cards-pokemon.vercel.app/",
      repoUrl: "https://github.com/asearer/react-cards-pokemon",
      className: "project3", // Custom class for styling
    },
    {
      title: "Simple Fallout Style Terminal",
      url: "https://asearer.github.io/FalloutTerm/",
      repoUrl: "https://github.com/asearer/FalloutTerm/tree/main",
      className: "project4", // Custom class for styling
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-overlay">
      <div className="container">
        <h2>Project Gallery</h2>

        <div className="row">
          {/* Map over the projects array and render each project */}
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className={`card project-card ${project.className}`}>
                <div className="card-body">
                  {/* Render the project title as a link */}
                  <h5 className="card-title">{project.title}</h5>
                  {/* Render the GitHub logo button */}
                  <div>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">
                      <img src="https://img.icons8.com/fluent/24/000000/github.png" alt="GitHub Logo" className="mr-1" />
                      View Code
                    </a>
                  </div>
                  {/* Render the project URL as a demo button */}
                  <div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Demo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/" className="btn btn-secondary mt-4">Go back to Home</Link>
    </div>
  );
};

export default Projects;
