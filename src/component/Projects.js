import React from 'react';
import "../styles/project.css"

const Projects = () => {
  return (
    
    
    
      
        <div className="projects" id='project'>
          <div className="projects-header">
            <h1>My Projects</h1>
            <p>A selection of projects that I have worked on</p>
          </div>
          <div className="projects-content">
            <div className="project">
             
              <img src="/project1.jpg" alt="Project 1" />
              <h2>Project 1</h2>
              <p>A brief description of project 1 goes here.</p>
              <ul>
                <li>Technology 1</li>
                <li>Technology 2</li>
                <li>Technology 3</li>
              </ul>
              <div className="project-links">
                <a href="/project1" target="_blank" rel="noopener noreferrer">View Project</a>
                <a href="/project1/code" target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
            <div className="project">
              <img src="/project2.jpg" alt="Project 2" />
              <h2>Project 2</h2>
              <p>A brief description of project 2 goes here.</p>
              <ul>
                <li>Technology 4</li>
                <li>Technology 5</li>
                <li>Technology 6</li>
              </ul>
              <div className="project-links">
                <a href="/project2" target="_blank" rel="noopener noreferrer">View Project</a>
                <a href="/project2/code" target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          </div>
        </div>
     
    
  );
};

export default Projects;
