import React from 'react';
import '../../assets/styles/Main/Map.css';

function MapSection() {
  return (
    <section className="map-section">
      <div className="map-content">
        <h2>Explore Our Location</h2>
        <div className="map-container">
          <iframe
            title="Little Lemon Location Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47508.64556214609!2d-87.6881836!3d41.9081167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d3f4f1910a1%3A0xbf748b410ff0084f!2sLemon!5e0!3m2!1sen!2sin!4v1698260125102!5m2!1sen!2sin"
            height="400"
            loading="lazy"
            style={{ border: '0px', borderRadius: '16px', width: '100%' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
