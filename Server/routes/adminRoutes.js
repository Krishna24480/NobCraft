const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }

        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            process.env.ADMIN_PASSWORD_HASH
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        const token = jwt.sign(
            {
                email,
                role: "admin",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.json({
            success: true,
            message: "Admin login successful.",
            token,
        });
    } catch (error) {
        console.error("Admin Login Error:", error);

        res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
});

module.exports = router;