import React, { useState } from 'react';
import './BookingForm.css';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('✅ Booking submitted!');
    } catch (err) {
      alert('❌ Booking failed');
      console.error(err);
    }
  };

  return (
    <div className="booking-bg">
      <div className="glass-card">
        <h2>Book Your Royal Stay</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" type="text" placeholder="Phone" onChange={handleChange} required />
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
          <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
