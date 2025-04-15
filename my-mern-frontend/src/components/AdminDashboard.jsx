import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch hotel bookings
    axios.get('http://localhost:5000/api/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.error('Error fetching bookings:', err));

    // Fetch restaurant orders
    axios.get('http://localhost:5000/api/reservations')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Error fetching reservations:', err));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>👑 Welcome Admin - Ismail Hotel</h2>

      <h3>🛏️ All Room Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((b, index) => (
          <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
            <p><strong>Name:</strong> {b.name}</p>
            <p><strong>Check-In:</strong> {b.checkIn}</p>
            <p><strong>Check-Out:</strong> {b.checkOut}</p>
            <p><strong>Phone:</strong> {b.phone}</p>
            <p><strong>Email:</strong> {b.email}</p>
          </div>
        ))
      )}

      <hr />

      <h3>🍽️ All Restaurant Reservations</h3>
      {orders.length === 0 ? (
        <p>No table reservations found.</p>
      ) : (
        orders.map((o, index) => (
          <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
            <p><strong>Name:</strong> {o.name}</p>
            <p><strong>Guests:</strong> {o.guests}</p>
            <p><strong>Date:</strong> {o.date} | <strong>Time:</strong> {o.time}</p>
            <p><strong>Phone:</strong> {o.phone}</p>
            <p><strong>Total Bill:</strong> ₹{o.total}</p>
            <p><strong>Items:</strong></p>
            <ul>
              {o.items.map((item, idx) => (
                <li key={idx}>{item.name} - ₹{item.price}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
