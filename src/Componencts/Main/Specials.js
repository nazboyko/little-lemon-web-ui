// Specials.js
import React from 'react';
import '../../assets/styles/Main/Specials.css';
import greekSalad from '../../assets/images/menu/greek-salad.jpg';

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
      title: 'Chicken Salad',
      price: '$ 10.49',
      description: 'This healthy chicken salad recipe is hearty, flavorful, and packs a nice fresh crunch. Thanks to rotisserie chicken it\'s so easy to make and just as easy to enjoy no matter what the day holds.',
      image: greekSalad
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <a href="/Menu">
          <button className="order-button">Order Online</button>
        </a>
      </div>
      <div className="menu-list">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <img className="dish-image" src={dish.image} alt={dish.title} />
            <div className="dish-details">
              <div className="dish-title-cost-box">
                <span className="card-title">{dish.title}</span>
                <span className="cost-text">{dish.price}</span>
              </div>
              <p className="paragraph-text">{dish.description}</p>
            </div>
            <div className="delivery-btn-box">
              <button className="delivery-btn">
                Order a Delivery
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="dish-delivery-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"></path>
                  <path d="M5 6h5v2H5zM19 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;