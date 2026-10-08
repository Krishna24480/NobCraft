import React from "react";
import {
    FiInstagram,
    FiYoutube,
    FiGithub,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
    const quickLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ];

    const companyLinks = [
        { name: "About Us", link: "/about" },
        { name: "Our Work", link: "/projects" },
        { name: "Contact Us", link: "/contact" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Terms & Conditions", link: "/terms" },
    ];

    const socialLinks = [
        {
            name: "Instagram",
            icon: <FiInstagram />,
            link: "https://instagram.com/",
        },
        {
            name: "YouTube",
            icon: <FiYoutube />,
            link: "https://youtube.com/@nobcraftcoders?si=fhCuQUB3Xj7jlAZw",
        },
        {
            name: "Github",
            icon: <FiGithub />,
            link: "https://github.com/Krishna24480",
        },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();

        const email = e.target.email.value;

        if (!email) return;

        alert("Thank you for subscribing!");

        e.target.reset();
    };

    return (
        <footer className="footer">
            <div className="footer-glow footer-glow-left"></div>
            <div className="footer-glow footer-glow-right"></div>

            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo">
                            <div id="logo-box">NC</div>
                            <div>NobCraft</div>
                        </a>

                        <h2>
                            We Craft Websites That
                            <br />
                            Grow <span>Your Business.</span>
                        </h2>

                        <p>
                            Modern, fast and responsive websites designed
                            <br className="desktop-break" />
                            to turn your ideas into real online success.
                        </p>

                        <div className="social-icons">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>

                        <span className="heading-line"></span>

                        <ul>
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link}>
                                        {item.name}
                                        <span>→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Company</h3>

                        <span className="heading-line"></span>

                        <ul>
                            {companyLinks.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link}>
                                        {item.name}
                                        <span>→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Stay Updated</h3>

                        <span className="heading-line"></span>

                        <p>
                            Get the latest updates, tips and resources
                            <br className="desktop-break" />
                            straight to your inbox.
                        </p>

 
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">✉</div>

                                <div>
                                    <small>Email Us</small>

                                    <a href="mailto:krajawat244@gmail.com">
                                        krajawat244@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-divider"></div>

                            <div className="contact-item">
                                <div className="contact-icon">☎</div>

                                <div>
                                    <small>Call Us</small>

                                    <a href="tel:+916386783041">
                                        +91 6386783041
                                    </a>
                                </div>
                            </div>

                            <div className="contact-divider"></div>

                            <div className="contact-item">
                                <div className="contact-icon">⌖</div>

                                <div>
                                    <small>Our Location</small>

                                    <span>India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Nobcraft. All rights reserved.
                    </p>

                    <div className="footer-bottom-right">
                        <div className="bottom-socials">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <div className="bottom-divider"></div>

                        <p className="built-text">
                            Built with <span>♥</span> for a better web
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;