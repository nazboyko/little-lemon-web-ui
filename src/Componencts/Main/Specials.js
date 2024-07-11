import React from 'react';
import '../../assets/styles/Main/Specials.css';
import greekSalad from '../../assets/images/menu/greek-salad.jpg';
import NewDish from './NewDish';

function Specials() {
  const dishes = [
    {
      title: 'Greek Salad',
      price: '$ 12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives, and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: greekSalad
    },
    {
      title: 'Bruschetta',
      price: '$ 5.99',
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It's a great appetizer to start with!",
      image: greekSalad
    },
    {
      title: 'Lemon Dessert',
      price: '$ 5.00',
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. This is perfect for a light dessert!",
      image: greekSalad
    },
    {
      title: 'Caramel Ice Cream',
      price: '$ 6.99',
      description: 'Crafted with utmost care and attention, our Caramel Ice Cream begins with a luscious, creamy base that is made using the finest ingredients. We start by simmering sweetened milk and cream until they reach the perfect consistency.',
      image: greekSalad
    },
    {
      title: 'Joojeh Kabob',
      price: '$ 12.99',
      description: 'Joojeh Kabob, also spelled Jujeh Kabab, is the Persian version of the chicken kabob and one of Iran’s most delicious and popular dishes. A flavorful chicken marinade with saffron, turmeric, Greek yogurt, and lemon creates juicy, tender chicken loaded with flavor.',
      image: greekSalad
    },
    {
      title: 'New Dish',
      price: '$ 9.99',
      description: 'Description of your new dish goes here.',
      image: greekSalad
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
        <div className="menu-list">
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
