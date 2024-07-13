import React from 'react';
import { useLocation } from 'react-router-dom';
import photos from '../../assets/images/booked/images';
import '../../assets/styles/BookedPage.css';

function getRandomPhoto() {
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
}

function BookedPage() {
  const { state } = useLocation();
  const { fullName, date, time, phoneNumber } = state || {};
  const randomPhoto = getRandomPhoto();

  return (
    <div className="booked-container">
      <div className="booked-content">
        <h1>Thank you, {fullName}!</h1>
        <p>Your booking is confirmed.</p>
        <p>We look forward to seeing you on {new Date(date).toLocaleDateString()} at {time}.</p>
        <p>You will get a reminder and a confirmation text on your provided phone number: {phoneNumber}.</p>
      </div>
      <div className="booked-photo">
        <img src={randomPhoto} alt="Celebration" />
      </div>
    </div>
  );
}

export default BookedPage;
