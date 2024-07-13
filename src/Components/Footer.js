import React from 'react';
import logo from '../assets/images/footer-logo.png';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      {/* Column 1: Logo */}
      <div className="footer-column">
        <img src={logo} alt="Footer Logo" className="footer-logo" />
      </div>

      {/* Column 2: Doormat Navigation */}
      <div className="footer-column">
        <h3>Doormat Navigation</h3>
        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Column 3: Contact Information */}
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Avenue Street, City, Country</p>
        <p>info@littlelemonrestaurant.com</p>
        <p>Phone: +123 456 789</p>
      </div>

      {/* Column 4: Social Media Links */}
      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-links">
          <button className="social-button">Facebook</button>
          <button className="social-button">Twitter</button>
          <button className="social-button">Instagram</button>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
    </div>
  </footer>
  );
}

export default Footer;
