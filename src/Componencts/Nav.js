import React from 'react';

function Nav({ isVisible, isAnimating }) {
  return (
    <nav className={`nav ${isVisible ? 'active' : ''} ${isAnimating ? 'inactive' : ''}`}>
      <ul className={`nav-list ${isVisible ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
