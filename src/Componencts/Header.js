import React from 'react';
import logo from '../assets/images/Logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
