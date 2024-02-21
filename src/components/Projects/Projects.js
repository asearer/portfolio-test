import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  // Define an array of project data containing project titles, URLs, and thumbnail URLs
  const projects = [
    
    {
      title: "NASA Photo Viewer (GitHub)",
      url: "https://nasa-test-pbadzlxa5-alonza-searers-projects.vercel.app/",
      repoUrl: "https://github.com/asearer/nasa-photo-viewer"
    },
    {
      title: "Project 2",
      url: "https://example.com/project2",
      repoUrl: "https://github.com/username/repo2"
    },
    {
      title: "Project 3",
      url: "https://example.com/project3",
      repoUrl: "https://github.com/username/repo3"
    },
    {
      title: "Project 4",
      url: "https://example.com/project4",
      repoUrl: "https://github.com/username/repo4"
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-overlay">
    <div>
      <h2>Project Gallery</h2>
      
      <div className="project-list">
        {/* Map over the projects array and render each project */}
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            {/* Render the project title as a link */}
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <button>{project.title}</button>
            </a>
            {/* Render the project URL as a demo button */}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button>Demo</button>
            </a>

          </div>

        ))}
      </div>

    </div>
    <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Projects;
