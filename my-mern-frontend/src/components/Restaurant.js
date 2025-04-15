import { useNavigate } from 'react-router-dom'; // at top

import React from "react";

import "./Restaurant.css";


const Restaurant = () => {
  const navigate = useNavigate();
  return (
    <div className="restaurant-container">
      <h1 className="restaurant-heading">Ismail Hotel Restaurant</h1>
      <p className="restaurant-subheading">
        Experience royal dining with world-class flavors 🍽️
      </p>

      <div className="menu-section">
        <div className="menu-card">
          <h2>Indian Classics</h2>
          <p>Butter Chicken, Biryani, Paneer Tikka, Tandoori Roti</p>
        </div>
        <div className="menu-card">
          <h2>Continental</h2>
          <p>Pasta, Grilled Chicken, Salads, Garlic Bread</p>
        </div>
        <div className="menu-card">
          <h2>Desserts & Beverages</h2>
          <p>Gulab Jamun, Ice Cream, Masala Chai, Lassi</p>
        </div>
      </div>
      <button className="reserve-btn" onClick={() => navigate('/reserve')}>
  Reserve Your Table
</button>
    </div>
  );
};

export default Restaurant;
