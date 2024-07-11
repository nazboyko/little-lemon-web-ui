import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Main/Hero.css';

function HeroLeft({ title, subtitle, description, buttonText, buttonLink, image, imageAlt }) {
  return (
    <section className="hero hero-left">
      <div className="hero-container">
        <div className="image-block">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="info-block">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
          {buttonText && buttonLink && (
            <Link to={buttonLink} className="reserve-button">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroLeft;
