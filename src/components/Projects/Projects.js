import React from 'react';
import './Projects.css';
import project1 from '../assets/images/rps.webp';
import project2 from '../assets/images/coffee.webp';
import project3 from '../assets/images/ecommerce.webp';
import project4 from '../assets/images/budgettracker1.webp';
import project5 from '../assets/images/portfolio.webp';
import project6 from '../assets/images/filters.webp';

const projects = [
  {
    image: project1,
    name: 'Rock Paper Scissors',
    sourceCode: 'https://github.com/Kishore298/rock-paper-scissors-game',
    liveDemo: 'https://kishore298.github.io/rock-paper-scissors-game/'
  },
  {
    image: project2,
    name: 'Coffee Design Website',
    sourceCode: 'https://github.com/Kishore298/coffee-shop-design',
    liveDemo: 'https://66962487ad284000085f6a7f--coffee-shop-design.netlify.app/'
  },
  {
    image: project3,
    name: 'Mini E-commerce Website',
    sourceCode: 'https://github.com/Kishore298/mini-ecommerce',
    liveDemo: '#'
  },
  {
    image: project4,
    name: 'Budget Tracker',
    sourceCode: 'https://github.com/Kishore298/budget-tracker',
    liveDemo: '#'
  },
  {
    image: project5,
    name: ' My Personal Portfolio',
    sourceCode: '#This is the portfolio',
    liveDemo: '#'
  }, {
    image: project6,
    name: 'React Filtering System',
    sourceCode: 'https://github.com/Kishore298/react-filtering-system',
    liveDemo: '#'
  }

];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.name} />
            <p>{project.name}</p>
            <div className="buttons">
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#007bff' }}>Source Code</a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#28a745' }}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;