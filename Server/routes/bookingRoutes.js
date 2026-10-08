const express = require("express");

const {
    createBooking,
    getBookings,
    getBooking,
    deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

// ===============================
// CREATE BOOKING
// POST /api/bookings
// ===============================

router.post("/", createBooking);


// ===============================
// GET ALL BOOKINGS
// GET /api/bookings
// ===============================

router.get("/", getBookings);


// ===============================
// GET SINGLE BOOKING
// GET /api/bookings/:id
// ===============================

router.get("/:id", getBooking);


// ===============================
// DELETE BOOKING
// DELETE /api/bookings/:id
// ===============================

router.delete("/:id", deleteBooking);


module.exports = router;