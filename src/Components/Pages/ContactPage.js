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
        title="Get in Touch"
        subtitle="Reach Out to Us"
        description="Whether you have questions about our menu, want to book a table, or simply want to say hello, we'd love to hear from you! Feel free to contact us through the form below or visit us in person at our Chicago location. We're here to make your experience at Little Lemon unforgettable."
        image={aboutHeroImage}
        imageAlt="Reserve a Table"
      />
      <HoursOfOperation />
      <MapSection />
    </main>
  );
}

export default ContactPage;