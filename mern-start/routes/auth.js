const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const router = express.Router();

// 📌 Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('❌ Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// 📌 Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        isAdmin: user.isAdmin // ✅ used in frontend
      } 
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

router.get('/create-admin', async (req, res) => {
  try {
    const existing = await User.findOne({ email: 'admin@hotel.com' });
    if (existing) return res.send('Admin already exists');

    const hashedPassword = await bcrypt.hash('456123', 10);
    const admin = new User({
      name: 'yakub',
      email: 'admin@hotel.com',
      password: hashedPassword,
      isAdmin: true,
      role: 'admin'
    });

    await admin.save();
    res.send('✅ Admin created');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating admin');
  }
});


module.exports = router;
