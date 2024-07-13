import React from 'react';
import '../../assets/styles/AboutPage.css';
import aboutHeroImage from '../../assets/images/restaurant.jpg';
import HeroRight from '../Main/HeroRight';
import MapSection from '../Main/Map';
import HoursOfOperation from '../Main/HoursOfOperation';

function ContactPage() {
  return (
    <main className="main-content">
      <HeroRight
        title="Discover"
        subtitle="the Flavors of Mediterranean Chicago"
        description="Indulge in a culinary journey through vibrant Mediterranean dishes crafted with passion and authenticity at Little Lemon, nestled in the heart of Chicago."
        image={aboutHeroImage}
        imageAlt="Reserve a Table"
      />
      <HoursOfOperation />
      <MapSection />
    </main>
  );
}

export default ContactPage;