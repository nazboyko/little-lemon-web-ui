import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/Main/NewDish.css';

function NewDish({ title, price, description, image }) {
  return (
    <div className="dish-card">
      <img className="dish-image" src={image} alt={title} />
      <div className="dish-details">
        <div className="dish-title-cost-box">
          <span className="card-title">{title}</span>
          <span className="cost-text">{price}</span>
        </div>
        <p className="paragraph-text">{description}</p>
      </div>
      <div className="delivery-btn-box">
        <button className="delivery-btn">
          Order a Delivery
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="dish-delivery-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"></path>
            <path d="M5 6h5v2H5zM19 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

NewDish.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NewDish;
