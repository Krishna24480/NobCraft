const Booking = require("../models/Booking");

// ===============================
// CREATE BOOKING
// ===============================

const createBooking = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            service,
            date,
            message,
        } = req.body;

        // Required fields
        if (!name || !email || !service || !date) {
            return res.status(400).json({
                success: false,
                message:
                    "Name, email, service and date are required",
            });
        }

        // Email validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please provide a valid email address",
            });
        }

        // Create booking
        const booking = await Booking.create({
            name,
            email,
            phone,
            service,
            date,
            message,
        });

        return res.status(201).json({
            success: true,
            message:
                "Booking request submitted successfully",

            booking: {
                id: booking._id,
                name: booking.name,
                email: booking.email,
                service: booking.service,
                date: booking.date,
                status: booking.status,
            },
        });

    } catch (error) {

        console.error(
            "Create Booking Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to submit booking request",
        });
    }
};


// ===============================
// GET ALL BOOKINGS
// ===============================

const getBookings = async (req, res) => {
    try {

        const bookings = await Booking.find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: bookings.length,
            bookings,
        });

    } catch (error) {

        console.error(
            "Get Bookings Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to fetch bookings",
        });
    }
};


// ===============================
// GET SINGLE BOOKING
// ===============================

const getBooking = async (req, res) => {
    try {

        const booking = await Booking.findById(
            req.params.id
        );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message:
                    "Booking not found",
            });
        }

        return res.status(200).json({
            success: true,
            booking,
        });

    } catch (error) {

        console.error(
            "Get Booking Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to fetch booking",
        });
    }
};


// ===============================
// DELETE BOOKING
// ===============================

const deleteBooking = async (req, res) => {
    try {

        const booking = await Booking.findByIdAndDelete(
            req.params.id
        );

        // Booking doesn't exist
        if (!booking) {
            return res.status(404).json({
                success: false,
                message:
                    "Booking not found",
            });
        }

        return res.status(200).json({
            success: true,
            message:
                "Booking deleted successfully",
        });

    } catch (error) {

        console.error(
            "Delete Booking Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to delete booking",
        });
    }
};


// ===============================
// EXPORT CONTROLLERS
// ===============================

module.exports = {
    createBooking,
    getBookings,
    getBooking,
    deleteBooking,
};