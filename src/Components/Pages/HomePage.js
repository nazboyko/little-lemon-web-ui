import React from 'react';
import '../../assets/styles/Main.css';
import Specials from '../Main/Specials';
import Reviews from '../Main/Reviews';
import About from '../Main/About';
import HeroRight from '../Main/HeroRight';
import HomeHeroImage from '../../assets/images/restauranfood.jpg';


function HomePage() {
  return (
    <main className="main-content">
      <HeroRight
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
