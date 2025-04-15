const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
  items: [
    {
      name: String,
      price: Number,
      img: String,
    }
  ],
  total: Number,
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
