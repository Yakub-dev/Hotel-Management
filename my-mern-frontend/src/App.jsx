
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import AllBookings from './components/AllBookings';
import CustomerLogin from './components/CustomerLogin';
import CustomerSignup from './components/CustomerSignup';
import AdminHome from './components/AdminHome';
import AdminOrders from './components/AdminOrders';
// (Add AdminLogin & AdminSignup when ready)


import TableReservation from './components/TableReservation';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/admin/bookings" element={<AllBookings />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/hhh" element={<AdminHome />} />
        <Route path="/signup" element={<CustomerSignup />} />
        <Route path="/reserve" element={<TableReservation />} />
        <Route path="/eee" element={<AdminOrders />} />
        
    
      </Routes>
    </>
  );
}

export default App;
