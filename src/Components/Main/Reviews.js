// Reviews.js

import React from 'react';
import Article from './Article'; // Assuming you have an Article component
import '../../assets/styles/Main/Reviews.css';

function Reviews() {
  const testimonials = [
    {
      id: 1,
      image: 'https://picsum.photos/100/100?random=1',
      name: 'Antony Clifton',
      rating: 4,
      text: "The food was decent, but waitresses are hot here. Strongly suggest the place.",
    },
    {
      id: 2,
      image: 'https://picsum.photos/100/100?random=2',
      name: 'Maria Sanchez',
      rating: 5,
      text: "My kids love the food here more than my home recipes. The food is good but not better than what my magical hands cook.",
    },
    {
      id: 3,
      image: 'https://picsum.photos/100/100?random=3',
      name: 'Tamika Jackson',
      rating: 4,
      text: "I prefer this place more than any other restaurant in the area. The food is good here.",
    },
    {
      id: 4,
      image: 'https://picsum.photos/100/100?random=4',
      name: 'Brandon Ming',
      rating: 5,
      text: "When I needed a break from our insane Asian dishes, this place is like heaven to me. I love every moment that I get without eating Asian food.",
    },
    {
      id: 5,
      image: 'https://picsum.photos/100/100?random=5',
      name: 'Sophia Martinez',
      rating: 3,
      text: "I enjoyed the ambiance here, but the food quality needs improvement. Would visit again for the cozy atmosphere.",
    },
    {
      id: 6,
      image: 'https://picsum.photos/100/100?random=6',
      name: 'Michael Lee',
      rating: 4,
      text: "Great place for a casual dining experience. The staff is friendly and the service is quick. Recommended!",
    },
  ];

  return (
    <section className="reviews">
      <div className="container testimonials-box">
        <h2 className="TestimonialsHeading">Testimonials</h2>
        <div className="TestimonialsList">
          {testimonials.map(testimonial => (
            <Article
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
