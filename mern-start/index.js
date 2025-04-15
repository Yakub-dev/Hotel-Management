const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/Order'); // ✅ already imported here
const adminAuthRoutes = require('./routes/adminAuth');
const bookingRoutes = require('./routes/bookings');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json({limit: '10mb'}));

// 🔐 Routes
app.use('/api/admin', adminAuthRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://yakub:yakub0013k@cluster0.0ui28.mongodb.net/ismailHotel?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ POST route to save order
app.post('/api/orders', async (req, res) => {
  console.log("📩 New order received:", req.body); // <-- ADD THIS
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    console.error('❌ Order Save Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// ✅ GET route to return all orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    console.error("❌ Couldn't fetch orders:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Basic homepage
app.get('/home', (req, res) => {
  res.send('sameer is connected to mango db');
});
app.get('/about', (req, res) => {
  res.send('about sameer');
});


// 🔊 Start Server
app.listen(5000, () => {
  console.log("🌐 Server running at http://localhost:5000");
});
