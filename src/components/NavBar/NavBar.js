import React, { useState } from 'react';
import './NavBar.css';
import Hamburger from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="navbar">
      <h1 className="navbar-title"><span>Web</span> Developer</h1>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <div className="hamburger" onClick={handleToggle}>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
    </div>
    </>
  );
};

export default NavBar;