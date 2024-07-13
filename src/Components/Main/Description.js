import React from 'react';
import '../../assets/styles/Main/Description.css';
import descImage1 from '../../assets/images/chicago-restaurants.jpg';
import descImage2 from '../../assets/images/Oldest.jpg';

function Description() {
  return (
    <section className="desc">
      <div className="desc-container">
        <div className="desc-text">
          <div className="desc-text-content">
            <img src={descImage1} alt="Little Lemon Interior" className="desc-image desc-image-right" />
            <p>
              <span className="big-bold">N</span>estled in the heart of Chicago, Little Lemon is more than just a restaurant; it's a journey through Mediterranean flavors with a modern twist. Founded in 2010 by siblings Maria and Antonio, Little Lemon started as a humble food truck bringing the vibrant tastes of Greece and Italy to the streets of Chicago. Over the years, Little Lemon has evolved into a beloved family-owned establishment, renowned for its commitment to quality and authenticity. Maria's passion for traditional recipes, coupled with Antonio's flair for innovation, has made Little Lemon a staple in Chicago's culinary landscape.
            </p>
            <p>
              At Little Lemon, we take pride in our culinary team led by Chef Giorgio. With over 20 years of experience in Mediterranean cuisine, Chef Giorgio brings a wealth of knowledge and creativity to our kitchen. Together with our dedicated team, he curates a menu that showcases the best of our heritage while embracing sustainable practices.
            </p>
            <img src={descImage2} alt="Little Lemon Chef" className="desc-image desc-image-left" />
            <p>
              <span className="big-bold">C</span>ommunity and sustainability are at the heart of what we do. We source our ingredients locally whenever possible, supporting farmers and producers in the Chicago area. Our commitment to reducing food waste is reflected in our kitchen practices, ensuring that every dish served at Little Lemon is crafted with care and respect for the environment.
            </p>
            <p>
              Beyond our commitment to culinary excellence, Little Lemon is deeply rooted in the Chicago community. We actively participate in local events and initiatives, aiming to enrich the cultural fabric of our neighborhood. Our dedication to sustainability extends beyond the kitchen, with initiatives to minimize our environmental footprint and support charitable causes.
            </p>
            <p>
              Whether you're joining us for a casual lunch or a special evening out, we invite you to experience the warmth and flavors of Little Lemon. From our family to yours, welcome to a taste of Mediterranean hospitality in the heart of Chicago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
