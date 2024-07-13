import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/Pages/HomePage'; // Import your homepage component
import AboutPage from './Components/Pages/AboutPage';
import MenuPage from './Components/Pages/MenuPage';
import ReservationsPage from './Components/Pages/ReservationsPage';
import BookedPage from './Components/Pages/BookedPage';
import OrderPage from './Components/Pages/OrderPage';
import ContactPage from './Components/Pages/ContactPage';
import LoginPage from './Components/Pages/LoginPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/booked" element={<BookedPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;