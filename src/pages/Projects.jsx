import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'Description of project 1', link: '#' },
    { name: 'Project 2', description: 'Description of project 2', link: '#' },
  ];

  return (
    <div style={{ padding: '50px' }}>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;