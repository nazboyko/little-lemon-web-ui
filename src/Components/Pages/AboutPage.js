import React from 'react';
import '../../assets/styles/AboutPage.css';
import aboutHeroImage from '../../assets/images/restaurant.jpg';
import HeroLeft from '../Main/HeroLeft';
import Description from '../Main/Description';
import MapSection from '../Main/Map';
import HoursOfOperation from '../Main/HoursOfOperation';

function AboutPage() {
  return (
    <main className="main-content">
      <HeroLeft
        title="Discover"
        subtitle="the Flavors of Mediterranean Chicago"
        description="Indulge in a culinary journey through vibrant Mediterranean dishes crafted with passion and authenticity at Little Lemon, nestled in the heart of Chicago."
        image={aboutHeroImage}
        imageAlt="Reserve a Table"
      />
      <Description />
      <MapSection />
      <HoursOfOperation />
    </main>
  );
}

export default AboutPage;