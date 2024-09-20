import React, { useRef, useEffect, useState } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faComments, faUsers, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Skills = () => {
  const techRef = useRef(null);
  const softRef = useRef(null);
  const [isTechInView, setIsTechInView] = useState(false);
  const [isSoftInView, setIsSoftInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === techRef.current) {
            setIsTechInView(true);
          } else if (entry.target === softRef.current) {
            setIsSoftInView(true);
          }
        } else {
          if (entry.target === techRef.current) {
            setIsTechInView(false);
          } else if (entry.target === softRef.current) {
            setIsSoftInView(false);
          }
        }
      });
    }, options);

    if (techRef.current) observer.observe(techRef.current);
    if (softRef.current) observer.observe(softRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        ref={techRef}
        className="skills-grid"
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: isTechInView ? 0 : -100, opacity: isTechInView ? 1 : 0 }} 
        transition={{ duration: 1.5 }}
      >
        <h3>Technical Skills</h3>
        <div className="skill html"><FontAwesomeIcon icon={faHtml5} /> HTML</div>
        <div className="skill css"><FontAwesomeIcon icon={faCss3Alt} /> CSS</div>
        <div className="skill js"><FontAwesomeIcon icon={faJsSquare} /> JavaScript</div>
        <div className="skill react"><FontAwesomeIcon icon={faReact} /> React.js</div>
        <div className="skill node"><FontAwesomeIcon icon={faNodeJs} /> Node.js</div>
        <div className="skill express"><FontAwesomeIcon icon={faNodeJs} /> Express.js</div>
        <div className="skill mongo"><FontAwesomeIcon icon={faDatabase} /> MongoDB</div>
        <div className="skill mysql"><FontAwesomeIcon icon={faDatabase} /> MySQL</div>
      </motion.div>
      
      <motion.div 
        ref={softRef}
        className="skills-grid"
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: isSoftInView ? 0 : 100, opacity: isSoftInView ? 1 : 0 }} 
        transition={{ duration: 1.5 }}
      >
        <h3>Soft Skills</h3>
        <div className="skill communication"><FontAwesomeIcon icon={faComments} /> Communication</div>
        <div className="skill teamwork"><FontAwesomeIcon icon={faUsers} /> Teamwork</div>
        <div className="skill problem-solving"><FontAwesomeIcon icon={faLightbulb} /> Problem-Solving</div>
        <div className="skill adaptability"><FontAwesomeIcon icon={faClock} /> Adaptability</div>
        <div className="skill leadership"><FontAwesomeIcon icon={faUsers} /> Leadership</div>
        <div className="skill work-ethic"><FontAwesomeIcon icon={faLightbulb} /> Work Ethic</div>
        <div className="skill fast-learner"><FontAwesomeIcon icon={faLightbulb} /> Fast Learner</div>
        <div className="skill time-management"><FontAwesomeIcon icon={faClock} /> Time Management</div>
      </motion.div>
    </section>
  );
};

export default Skills;





