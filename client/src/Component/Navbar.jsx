import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* Logo */}
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <span className="logo-mark">NC</span>
                    <span className="logo-text">NobCraft</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? "active" : ""}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link to="/booking" className="nav-btn">
                    <span>Start a Project</span>
                    <span className="arrow">→</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`menu-btn ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                <div className="mobile-links">

                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={closeMenu}
                            className={location.pathname === link.path ? "active" : ""}
                        >
                            <span>{link.name}</span>
                            <span>→</span>
                        </Link>
                    ))}

                    <Link
                        to="/booking"
                        className="mobile-cta"
                        onClick={closeMenu}
                    >
                        <span>Start a Project</span>
                        <span>→</span>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;