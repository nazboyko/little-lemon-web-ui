import React from 'react';
import '../../assets/styles/Main.css';
import HeroLeft from '../Main/HeroLeft';
import ReserveForm from '../Main/ReserveForm';
import reserveHeroImage from '../../assets/images/reservation.jpg';

function ReservationsPage() {
  return (
    <main className="main-content">
        <HeroLeft
          title="Reserve a Table"
          subtitle="Chicago Dining Experience"
          description="Discover a captivating dining experience at our esteemed Mediterranean restaurant, celebrated for its dedication to authentic recipes infused with contemporary flair. Whether you're planning a romantic dinner, a gathering with friends, or a business luncheon, our venue promises a memorable culinary journey."
          image={reserveHeroImage}
          imageAlt="Reserve a Table"
        />
        <ReserveForm />
    </main>
  );
}

export default ReservationsPage;