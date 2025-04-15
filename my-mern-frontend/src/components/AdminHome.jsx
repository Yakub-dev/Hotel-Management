import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHome.css';

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="admin-home-container">
      <h1 className="admin-title">👑 Welcome, Honorable Admin</h1>
      <div className="admin-buttons">
        <button onClick={() => navigate('/admin/bookings')}>📋 View All Bookings</button>
        <button onClick={() => navigate('/eee')}>🍽️ View All Orders</button>
      </div>
    </div>
  );
}

export default AdminHome;
