import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Nav.css';
import GitHubIcon from '../assets/images/icons/github.svg';

function Nav({ isVisible, isAnimating }) {
  return (
    <nav className={`nav ${isVisible ? 'active' : ''} ${isAnimating ? 'inactive' : ''}`}>
      <ul className={`nav-list ${isVisible ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="https://github.com/Nazar0102/little-lemon-web-ui" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" className="github-icon" />
          </a></li>
      </ul>
    </nav>
  );
}

export default Nav;
