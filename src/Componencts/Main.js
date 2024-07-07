// Main.js
import React from 'react';
import '../assets/styles/Main.css';
import Specials from './Main/Specials';
import Reviews from './Main/Reviews';
import About from './Main/About';
import HeroSection from './Main/HeroSection';

function Main() {
  return (
    <main className="main-content">
      <HeroSection />
      <Specials />
      <Reviews />
      <About />
    </main>
  );
}

export default Main;
