// Main.js
import React from 'react';
import '../assets/styles/Main.css';
import yourImage from '../assets/images/restauranfood.jpg'; // Import your image

function Main() {
  return (
    <main className="main-content">
      <div className="page-top-container">
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
    </main>
  );
}

export default Main;
