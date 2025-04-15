// Import required modules
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking"); // Import Booking model

// ============================
// 🟢 POST: Create a new booking
// ============================
router.post("/", async (req, res) => {
  try {
    console.log("📥 Received Booking Data:", req.body); // Add this line

    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "✅ Booking saved!" });
  } catch (error) {
    console.error("❌ Booking Error:", error); // Log exact error
    res.status(500).json({ error: "❌ Booking failed!" });
  }
});


// ============================
// 🔵 GET: Fetch all bookings
// ============================
router.get("/", async (req, res) => {
  try {
    // Fetch all bookings from the database
    const bookings = await Booking.find();

    // Send the bookings as a JSON response
    res.json(bookings);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "❌ Failed to fetch bookings" });
  }
});
// ✅ Delete a booking by ID
router.delete('/:id', async (req, res) => {
    try {
      const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
      if (!deletedBooking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting booking", error });
    }
  });
  
  // ✏️ Update booking by ID
router.put('/:id', async (req, res) => {
    try {
      const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedBooking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      res.json(updatedBooking);
    } catch (err) {
      console.error('❌ Error updating booking:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// Export the router so it can be used in `index.js`
module.exports = router;
