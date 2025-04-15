import React, { useEffect, useState } from 'react';
import axios from 'axios';
 // optional if you want styling

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders')
      .then((res) => setOrders(res.data))
      .catch((err) => console.error('❌ Error fetching orders:', err));
  }, []);

  return (
    <div className="admin-orders-container" style={{ padding: '20px' }}>
      <h2>📋 All Customer Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card" style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <h4>🧑‍🍳 {order.name} | 📞 {order.phone}</h4>
            <p>🗓️ Date: {order.date} at ⏰ {order.time} | 👥 Guests: {order.guests}</p>
            <p><strong>🧺 Items:</strong></p>
            <ul>
              {order.items.map((item, i) => (
                <li key={i}>{item.name} - ₹{item.price}</li>
              ))}
            </ul>
            <p><strong>💰 Total:</strong> ₹{order.total}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminOrders;
