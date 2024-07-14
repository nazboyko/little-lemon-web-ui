import React from 'react';
import '../../assets/styles/Main.css';
import MenuHeroImage from '../../assets/images/menu.jpg';
import HeroRight from '../Main/HeroRight';
import MenuSection from '../Main/MenuSection';
import menuData from '../../assets/images/menu/menu.json';


function MenuPage() {
  return (
    <main className="main-content">
      <HeroRight
         title="Our Culinary Offerings"
         subtitle="Authentic Mediterranean Flavors"
         description="Discover the vibrant tastes of the Mediterranean at Little Lemon. Our menu features dishes crafted with locally-sourced ingredients and a passion for authenticity. From hearty entrées to light salads and decadent desserts, experience the essence of Mediterranean cuisine in every bite."
         buttonText="Reserve a Table"
         buttonLink="/reservations"
         image={MenuHeroImage}
         imageAlt="Little Lemon Menu"
      />
      <MenuSection menuData={menuData} />
    </main>
  );
}

export default MenuPage;