import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
      .then((res) => setBookings(res.data))
      .catch((err) => console.error('❌ Error fetching bookings:', err));
  }, []);

  return (
    <div className="container">
      <h2>All Bookings (Admin)</h2>
      <p><strong>Total Bookings:</strong> {bookings.length}</p>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div className="booking-card" key={booking._id}>
            <p><strong>Name:</strong> {booking.name || 'N/A'}</p>
            <p><strong>Email:</strong> {booking.email || 'N/A'}</p>
            <p><strong>Phone:</strong> {booking.phone || 'N/A'}</p>
            <p><strong>Check-In:</strong> 
  {booking.checkIn ? new Date(booking.checkIn).toLocaleDateString() : 'N/A'}
</p>

<p><strong>Check-Out:</strong> 
  {booking.checkOut ? new Date(booking.checkOut).toLocaleDateString() : 'N/A'}
</p>

          </div>
        ))
      )}
    </div>
  );
};

export default AllBookings;
