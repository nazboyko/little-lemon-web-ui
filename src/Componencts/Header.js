import React, { useState } from 'react';
import logo from '../assets/images/Logo.svg';
import Nav from './Nav';

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleNav = () => {
    if (isNavVisible) {
      setIsAnimating(true);
      setTimeout(() => {
        setNavVisibility(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setNavVisibility(true);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <div className="hamburger" onClick={toggleNav}>
          ☰
        </div>
        <Nav isVisible={isNavVisible} isAnimating={isAnimating} />
      </div>
    </header>
  );
}

export default Header;
