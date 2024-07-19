import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <section id="home" className="home-section">
      <h1 className="highlight">I'M KISHORE</h1>
      <h2 className="highlight">I'm a Full Stack Web Developer</h2>
      <p>I'm a passionate web developer with a love for creating dynamic and responsive web applications.</p>
      <button className='hire'> <a href='#contact'>Hire Me</a></button>
    </section>
  );
};

export default Home;