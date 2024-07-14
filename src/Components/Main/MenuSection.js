import React from 'react';
import '../../assets/styles/Main/MenuSection.css';
import NewDish from './NewDish';
import menuImages from '../../assets/images/menu/menuImages';

function MenuSection({ menuData }) {
  return (
    <section className="menu-section">
      <div className="menu-container">
        <div className="menu-list">
          {menuData.map((category, index) => (
            <div key={index} className="menu-category">
              <h2>{category.title}</h2>
              <p>{category.subtitle}</p>
              <p>{category.description}</p>
              <div className="menu-items">
                {category.dishes.map((dish, idx) => (
                  <NewDish
                    key={idx}
                    title={dish.title}
                    price={dish.price}
                    description={dish.description}
                    image={menuImages[dish.image]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
