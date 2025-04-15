const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
