import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import image1 from '../assets/images/aboutme.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='whole1'>
      <div className='whole'>
        <motion.section
          id="about"
          className="about-section"
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }} 
        >
          <h2>About Me</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            As a recent graduate with a degree in Computer Science and Engineering, I am excited to embark on my career in the IT industry. I am a dedicated web developer who enjoys crafting dynamic and responsive web applications. With a solid foundation in both <mark>front-end and back-end technologies</mark>, I thrive on projects that challenge me to learn and grow...
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            I have developed a range of skills in web technologies, which I’ve outlined below. Currently, I am seeking a full-time job opportunity and would be extremely grateful for any chance to contribute and grow!..
          </motion.p>
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <a href="https://github.com/kishore298" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kishore-k-63b4aa250" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/k_i_s_h_o_r_e_02_09_08" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </motion.div>
          <motion.button
            className='hire'
            initial={{ y: 30, opacity: 0 }} 
            whileHover={{ scale: 1.05 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }} 
          >
            <a href='#contact'>Contact Me</a>
          </motion.button>
        </motion.section>
        <motion.img
          src={image1}
          alt="Profile"
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }} 
        />
      </div>
    </div>
  );
};

export default About;




