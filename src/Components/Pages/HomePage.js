import React from 'react';
import '../../assets/styles/Main.css';
import Specials from '../Main/Specials';
import Reviews from '../Main/Reviews';
import About from '../Main/About';
import Hero from '../Main/Hero';
import HomeHeroImage from '../../assets/images/restauranfood.jpg';


function HomePage() {
  return (
    <main className="main-content">
      <Hero
         title="Welcome to Little Lemon"
         subtitle="Chicago"
         description=" We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
         buttonText="Reserve a Table"
         buttonLink="/reservations"
         image={HomeHeroImage}
         imageAlt="Little Lemon"
      />
      <Specials />
      <Reviews />
      <About />
    </main>
  );
}

export default HomePage;
