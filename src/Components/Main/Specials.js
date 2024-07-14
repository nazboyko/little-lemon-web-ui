import React from 'react';
import '../../assets/styles/Main/Specials.css';
import greekSalad from '../../assets/images/menu/greek-salad.jpg';
import seafooPaella from '../../assets/images/menu/seafood-paella.jpg';
import vegetarianPlatter from '../../assets/images/menu/vegetarian-platter.jpg';
import tiramisu from '../../assets/images/menu/tiramisu.jpg';
import greekCoffee from '../../assets/images/menu/greek-coffee.jpeg';
import cannoli from '../../assets/images/menu/cannoli.jpg';
import NewDish from './NewDish';

function Specials() {
  const dishes = [
    {
      title: 'Greek Salad',
      price: '$5.99',
      description: 'A fresh mix of cucumbers, tomatoes, olives, and feta cheese, drizzled with olive oil and herbs.',
      image: greekSalad
    },
    {
      title: 'Seafood Paella',
      price: '$19.99',
      description: "A flavorful mix of saffron rice, shrimp, mussels, and calamari.",
      image: seafooPaella
    },
    {
      title: 'Vegetarian Platter',
      price: '$13.99',
      description: "A variety of grilled vegetables, falafel, hummus, and tabbouleh.",
      image: vegetarianPlatter
    },
    {
      title: 'Tiramisu',
      price: '$6.99',
      description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.',
      image: tiramisu
    },
    {
      title: 'Greek Coffee',
      price: '$4.49',
      description: 'Traditional Greek coffee with a rich, bold flavor.',
      image: greekCoffee
    },
    {
      title: 'Cannoli',
      price: '$5.99',
      description: 'Crispy pastry shells filled with sweet ricotta cheese and chocolate chips.',
      image: cannoli
    }
  ];

  return (
    <section className="specials">
      <div className="specials-container">
        <div className="specials-header">
          <h2>This Week's Specials!</h2>
          <a href="/Menu">
            <button className="order-button">Order Online</button>
          </a>
        </div>
        <div className="special-list">
          {dishes.map((dish, index) => (
            <NewDish
              key={index}
              title={dish.title}
              price={dish.price}
              description={dish.description}
              image={dish.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
