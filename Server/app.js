const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const bookingRoutes = require("./routes/bookingRoutes");
const projectRoutes = require("./routes/projectRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

connectDB();

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:5173"
        ],
        credentials: true,
    })
);

app.use(express.json());


// ===============================
// ROUTES
// ===============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Nobcraft Backend is running 🚀",
    });
});

app.use("/api/bookings", bookingRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/admin", adminRoutes);


// ===============================
// 404
// ===============================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found.",
    });
});


// ===============================
// ERROR HANDLER
// ===============================

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal server error.",
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});