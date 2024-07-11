import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/Logo.svg';
import Nav from './Nav';
import '../assets/styles/Header.css';

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef();

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

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsAnimating(true);
      setTimeout(() => {
        setNavVisibility(false);
        setIsAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (isNavVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavVisible]);

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <div className={`hamburger ${isNavVisible ? 'open' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div ref={navRef}>
          <Nav isVisible={isNavVisible} isAnimating={isAnimating} />
        </div>
      </div>
    </header>
  );
}

export default Header;
