import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBootstrap } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill"><FaHtml5 /> HTML</div>
        <div className="skill"><FaCss3Alt /> CSS</div>
        <div className="skill"><FaJsSquare /> JavaScript</div>
        <div className="skill"><FaReact /> React.js</div>
        <div className="skill"><FaNodeJs /> Node.js</div>
        <div className="skill"><FaDatabase /> MongoDB</div>
        <div className="skill"><FaDatabase /> MySQL</div>
        <div className="skill"><FaBootstrap /> Bootstrap</div>
        <div className="skill"><FaNodeJs /> Express.js</div>
        <div className="skill"><FaDatabase /> Mongoose ODM</div>
      </div>
    </section>
  );
};

export default Skills;