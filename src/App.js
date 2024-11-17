// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './styles/App.css';
import Cards from './components/Cards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
