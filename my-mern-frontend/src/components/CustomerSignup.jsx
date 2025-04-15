import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CustomerAuth.css';

function CustomerSignup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Customer registered successfully!');
      navigate('/customer-login');
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      alert('Error signing up. Try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Customer Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => navigate('/login')}>Already have an account? Login</p>
    </div>
  );
}

export default CustomerSignup;
