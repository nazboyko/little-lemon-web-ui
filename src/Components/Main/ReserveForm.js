import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Main/ReserveForm.css';

function ReserveForm({ availableTimes, updateTimes }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numberOfGuests: 1,
    occasion: '',
    fullName: '',
    phoneNumber: '',
    specialInstructions: ''
  });

  const [formErrors, setFormErrors] = useState({
    date: '',
    time: '',
    numberOfGuests: '',
    fullName: '',
    phoneNumber: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'date') {
      updateTimes(value); // Dispatch state change to parent
    }
  };

  // Validate the form before submission
  const validateForm = () => {
    let valid = true;
    const errors = {
      date: '',
      time: '',
      numberOfGuests: '',
      fullName: '',
      phoneNumber: ''
    };

    // Date validation (must be in the future)
    if (!formData.date) {
      errors.date = 'Date is required';
      valid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        errors.date = 'Please select a date in the future';
        valid = false;
      }
    }

    // Time validation
    if (!formData.time) {
      errors.time = 'Time is required';
      valid = false;
    }

    // Number of guests validation
    if (!formData.numberOfGuests || formData.numberOfGuests < 1) {
      errors.numberOfGuests = 'Number of guests must be at least 1';
      valid = false;
    }

    // Full name validation
    if (!formData.fullName) {
      errors.fullName = 'Full Name is required';
      valid = false;
    }

    // Phone number validation
    if (!formData.phoneNumber || !/^[0-9]{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here (e.g., send data to server)
      console.log('Form submitted successfully:', formData);
      
      // Redirect to the BookedPage with booking details
      navigate('/booked', { state: formData });

      // Reset form data if needed
      setFormData({
        date: '',
        time: '',
        numberOfGuests: 1,
        occasion: '',
        specialInstructions: '',
        fullName: '',
        phoneNumber: ''
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <form className="reserve-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Date *</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          min={new Date().toISOString().split('T')[0]}
          required
        />
        {formErrors.date && <span className="error">{formErrors.date}</span>}
      </div>

      <div className="form-group">
        <label>Time *</label>
        <select name="time" value={formData.time} onChange={handleInputChange} required>
          <option value="">Select Time</option>
          {availableTimes.map((timeOption) => (
            <option key={timeOption.value} value={timeOption.value}>
              {timeOption.label}
            </option>
          ))}
        </select>
        {formErrors.time && <span className="error">{formErrors.time}</span>}
      </div>

      <div className="form-group">
        <label>Number of Guests *</label>
        <input
          type="number"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleInputChange}
          min="1"
          max="10"
          required
        />
        {formErrors.numberOfGuests && <span className="error">{formErrors.numberOfGuests}</span>}
      </div>

      <div className="form-group">
        <label>Occasion</label>
        <select name="occasion" value={formData.occasion} onChange={handleInputChange}>
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Celebration">Celebration</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        {formErrors.fullName && <span className="error">{formErrors.fullName}</span>}
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          pattern="[0-9]{10}"
          required
        />
        {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
      </div>

      <div className="form-group full-width">
        <label>Special Instructions</label>
        <textarea
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleInputChange}
          maxLength="500"
        />
      </div>

      <div className="button-group">
        <button type="submit">Submit Reservation</button>
      </div>
    </form>
  );
}

export default ReserveForm;
