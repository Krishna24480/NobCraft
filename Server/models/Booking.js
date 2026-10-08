const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: 2,
            maxlength: 100,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            maxlength: 150,
        },

        phone: {
            type: String,
            trim: true,
            maxlength: 20,
        },

        service: {
            type: String,
            required: [true, "Service is required"],
            enum: [
                "business-website",
                "ecommerce",
                "portfolio",
                "landing-page",
                "web-application",
                "maintenance",
            ],
        },

        date: {
            type: Date,
            required: [true, "Preferred date is required"],
        },

        message: {
            type: String,
            trim: true,
            maxlength: 2000,
        },

        status: {
            type: String,
            enum: [
                "pending",
                "contacted",
                "in-progress",
                "completed",
                "cancelled",
            ],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Booking",
    bookingSchema
);