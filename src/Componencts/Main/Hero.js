import React from 'react';
import '../../assets/styles/Main/Hero.css';
import yourImage from '../../assets/images/restauranfood.jpg'; // Import your image

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="info-block">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
        <div className="image-block">
          <img src={yourImage} alt="Restaurant" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
