import React from 'react';
import '../../assets/styles/Main/HoursOfOperation.css';

function HoursOfOperationSection() {
  return (
    <section className="hours-section">
      <div className="hours-content">
        <p className="hours-description">
        <span className="big-bold">D</span>iscover Our Hours of Operation. At Little Lemon, we're committed to serving you delicious Mediterranean-inspired dishes throughout the week. Whether you're joining us for a weekday lunch or a weekend dinner, our doors are open to welcome you with warmth and exceptional flavors. Check out our operating hours below and plan your visit to experience the best of Chicago's culinary scene.
        </p>
        <div className="info-container">
          <div className="info-item">
            <h3>Location</h3>
            <p>123 Main Street, Chicago, IL</p>
          </div>
          <div className="info-item">
            <h3>Contact</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@littlelemon.com</p>
          </div>
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
          <div className="info-item">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HoursOfOperationSection;
