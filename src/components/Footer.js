// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <p>© {currentYear} WebDev Assignment. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
