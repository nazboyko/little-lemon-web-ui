import React from 'react';
import logo from '../assets/images/footer-logo.png';
import GitHubIcon from '../assets/images/icons/github2.png';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src={logo} alt="Footer Logo" className="footer-logo" />
        </div>

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

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Avenue Street, City, Country</p>
          <p>info@littlelemonrestaurant.com</p>
          <p>Phone: +123 456 789</p>
        </div>

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
        <div className="disclaimer">
          <h2>Important!</h2>
          <p>
            This website is a practical project, and all information presented here is fictitious and not real. <br/>
            The restaurant itself does not exist! For more detailed information, please visit the public <a href="https://github.com/Nazar0102/little-lemon-web-ui" target="_blank" rel="noopener noreferrer">GitHub repository </a> associated with this project.
          </p>
          <a href="https://github.com/Nazar0102/little-lemon-web-ui" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={GitHubIcon} alt="GitHub" className="github" />
          </a>
        </div>
        <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
