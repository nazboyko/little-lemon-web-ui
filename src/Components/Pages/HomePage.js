import React from 'react';
import '../../assets/styles/Main.css';
import Specials from '../Main/Specials';
import Reviews from '../Main/Reviews';
import About from '../Main/About';
import Hero from '../Main/Hero';

function HomePage() {
  return (
    <main className="main-content">
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </main>
  );
}

export default HomePage;
