import React, { useState } from 'react';
import axios from 'axios';
import './CustomerAuth.css';
import { useNavigate } from 'react-router-dom';

function CustomerLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
  
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
  
      console.log('User from login:', res.data.user);

  
      // ✅ Check if it's admin
      if (res.data.user.isAdmin) {
        navigate('/eee');
      } else {
        navigate('/hhh');
      }
  
    } catch (error) {
      alert('Invalid credentials');
      console.error('Login error:', error.response?.data || error.message);
    }
  };
  
  


  return (
    <div className="auth-container">
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate('/customer-signup')}>Don't have an account? Sign Up</p>
    </div>
  );
}

export default CustomerLogin;
