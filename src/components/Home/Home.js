import React, { useEffect, useRef } from 'react';
import './Home.css';
import resume from '../assets/images/KISHORE.K RESUME_page-0001.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const textRef = useRef(null);
  const deletingRef = useRef(false); 
  const text = "I'm a Full Stack Web Developer";
  const indexRef = useRef(0); 

  useEffect(() => {
    const type = () => {
      if (deletingRef.current) {
        if (indexRef.current > 0) {
          indexRef.current--;
          textRef.current.textContent = text.substring(0, indexRef.current);
        } else {
          deletingRef.current = false; 
        }
      } else {
        if (indexRef.current < text.length) {
          indexRef.current++;
          textRef.current.textContent = text.substring(0, indexRef.current);
        } else {
          deletingRef.current = true;
        }
      }
      setTimeout(type, deletingRef.current ? 100 : 350);
    };

    type();

    return () => clearTimeout(type);
  }, [text]);

  return (
    <section id="home" className="home-section">
      <h1 className="highlight">I'M KISHORE</h1>
      <h2 className="highlight typing" ref={textRef}>
        {text}
      </h2>
      <p>I'm a passionate web developer with a love for creating dynamic and responsive web applications.</p>
      <button className='hire'>
        <a href='#contact'>Contact Me</a>
      </button>
      <button className='download'>
  <a href={resume} download aria-label="Download Resume">
    <FontAwesomeIcon icon={faFileDownload} /> Download Resume
  </a>
</button>

    </section>
  );
};

export default Home;
