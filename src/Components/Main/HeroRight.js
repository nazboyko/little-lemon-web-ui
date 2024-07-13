import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Main/Hero.css';

function HeroRight({ title, subtitle, description, buttonText, buttonLink, image, imageAlt }) {
  return (
    <section className="hero">
      <div className="hero-container">
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
        <div className="image-block">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

export default HeroRight;
