import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">WebDev</div>
      <div className="burger-menu" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`nav-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li><a href="#features" onClick={toggleMenu}>Features</a></li>
          <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
