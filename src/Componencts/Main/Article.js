// Article.js

import React from 'react';

function Article({ image, name, rating, text }) {
  return (
    <div className="testimonialCard">
      <img className="testimonialImage" src={image} alt="Testimonial" />
      <span className="testimonialTitle">{name}</span>
      <span className="testimonialRating">
        {Array.from({ length: rating }, (_, index) => (
          <svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        ))}
      </span>
      <p className="testimonialText">{text}</p>
    </div>
  );
}

export default Article;
