import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Nav.css';

function Nav({ isVisible, isAnimating }) {
  return (
    <nav className={`nav ${isVisible ? 'active' : ''} ${isAnimating ? 'inactive' : ''}`}>
      <ul className={`nav-list ${isVisible ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
