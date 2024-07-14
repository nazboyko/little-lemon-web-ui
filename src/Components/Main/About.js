import React from 'react';
import '../../assets/styles/Main/About.css';
import aboutImage1 from '../../assets/images/Mario_and_Adrian.jpg';
import aboutImage2 from '../../assets/images/restaurant_chef.jpg';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <p>
            At Little Lemon, our passion is to embrace the timeless flavors of the Mediterranean, infusing them with a modern twist. We're a family-owned establishment dedicated to bringing you the heartwarming traditions of our heritage, one delectable dish at a time.
          </p>
        </div>
        <div className="about-images">
          <img src={aboutImage1} alt="About Us" className="about-image" />
          <img src={aboutImage2} alt="Our Story" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;