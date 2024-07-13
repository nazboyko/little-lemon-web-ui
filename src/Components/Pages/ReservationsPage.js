import React, { useReducer } from 'react'; // Remove useState import
import '../../assets/styles/Main.css';
import HeroLeft from '../Main/HeroLeft';
import ReserveForm from '../Main/ReserveForm';
import reserveHeroImage from '../../assets/images/reservation.jpg';

const initialAvailableTimes = [
  { value: '17:00', label: '5:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '21:00', label: '9:00 PM' },
  { value: '22:00', label: '10:00 PM' },
];

function availableTimesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initialAvailableTimes;
    default:
      return state;
  }
}

function ReservationsPage() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    availableTimesReducer,
    initialAvailableTimes
  );

  const updateTimes = (date) => {
    dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: { date } });
  };

  return (
    <main className="main-content">
      <HeroLeft
        title="Reserve a Table"
        subtitle="Chicago Dining Experience"
        description="Discover a captivating dining experience at our esteemed Mediterranean restaurant, celebrated for its dedication to authentic recipes infused with contemporary flair. Whether you're planning a romantic dinner, a gathering with friends, or a business luncheon, our venue promises a memorable culinary journey."
        image={reserveHeroImage}
        imageAlt="Reserve a Table"
      />
      <ReserveForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </main>
  );
}

export default ReservationsPage;
