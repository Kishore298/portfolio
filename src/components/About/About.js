import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import image1 from '../assets/images/profile1.jpg';

const About = () => {
  return (
    <div className='whole1'>
      <div>
      <h2>About Me</h2>
    </div>
    <div className='whole'>
     <img src={image1} alt="" />
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p> As a recent graduate in B.E. Computer Science and Engineering, I am eager to kickstart my career journey in IT industry.I'm a passionate web developer with a love for creating dynamic and responsive web applications. I have a strong background in both front-end and back-end technologies,and I enjoy working on projects that challenge me to learn new skills and technologies.</p>
      <p>I have acquired several skills in web technologies which i have listed below.Currently,I am looking for a Full time job opportunity. I will be Grateful if you have any and feel free to contact me...</p>
      <div className="social-links">
        <a href="https://github.com/kishore298" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kishore-k-63b4aa250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/k_i_s_h_o_r_e_02_09_08?igsh=MTlwZzg4Mm5lcXB1aA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <button className='hire'> <a href='#contact'>Contact Me</a></button>
    </section>
    </div>
    </div>
  );
};

export default About;