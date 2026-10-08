import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer"
import {
    FiMail,
    FiPhone,
    FiArrowUpRight,
    FiInstagram,
    FiGithub,
    FiYoutube,
    FiMessageCircle,
} from "react-icons/fi";

import "./Contact.css";

const Contact = () => {
    return (
        <>
            <div>
                <section className="contact-section">

                    {/* Background Glow */}
                    <div className="contact-glow contact-glow-one"></div>
                    <div className="contact-glow contact-glow-two"></div>

                    <div className="contact-container">

                        {/* =========================
            HERO / HEADING
        ========================= */}

                        <div className="contact-hero">

                            <div className="contact-hero-content">

                                <span className="contact-label">
                                    GET IN TOUCH
                                </span>

                                <h1>
                                    Let's talk about
                                    <span> your idea.</span>
                                </h1>

                                <p>
                                    Have a question, want to discuss a project, or just
                                    want to say hello? We'd love to hear from you.
                                    Get in touch with us through any of the channels below.
                                </p>

                            </div>


                            {/* Contact Illustration */}
                            <div className="contact-illustration">

                                <div className="illustration-glow"></div>

                                <div className="floating-icon email-floating">
                                    <FiMail />
                                </div>

                                <div className="floating-icon phone-floating">
                                    <FiPhone />
                                </div>

                                <div className="floating-icon whatsapp-floating">
                                    <FiMessageCircle />
                                </div>

                                <div className="contact-device">

                                    <div className="device-logo">
                                        NC
                                    </div>

                                    <h3>
                                        NobCraft
                                    </h3>

                                    <p>
                                        Turning your ideas
                                        <br />
                                        into powerful websites.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* =========================
            CONTACT CARDS
        ========================= */}

                        <div className="contact-cards">

                            {/* Email */}
                            <a
                                href="mailto:krajawat244@gmail.com"
                                className="contact-card"
                            >

                                <div className="contact-card-top">

                                    <div className="contact-icon">
                                        <FiMail />
                                    </div>

                                    <FiArrowUpRight className="contact-arrow" />

                                </div>

                                <div className="contact-card-content">

                                    <span>Email Us</span>

                                    <h3>
                                        krajawat244@gmail.com
                                    </h3>

                                    <p>
                                        Send us an email anytime.
                                    </p>

                                </div>

                            </a>


                            {/* Phone */}
                            <a
                                href="tel:+916386783041"
                                className="contact-card"
                            >

                                <div className="contact-card-top">

                                    <div className="contact-icon">
                                        <FiPhone />
                                    </div>

                                    <FiArrowUpRight className="contact-arrow" />

                                </div>

                                <div className="contact-card-content">

                                    <span>Call Us</span>

                                    <h3>
                                        +91 6386783041
                                    </h3>

                                    <p>
                                        Let's discuss your ideas.
                                    </p>

                                </div>

                            </a>


                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/+916386783041"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-card"
                            >

                                <div className="contact-card-top">

                                    <div className="contact-icon">
                                        <FiMessageCircle />
                                    </div>

                                    <FiArrowUpRight className="contact-arrow" />

                                </div>

                                <div className="contact-card-content">

                                    <span>WhatsApp Us</span>

                                    <h3>
                                        +91 6386783041
                                    </h3>

                                    <p>
                                        Quick replies, faster support.
                                    </p>

                                </div>

                            </a>

                        </div>


                        {/* =========================
            SOCIAL MEDIA
        ========================= */}

                        <div className="social-section">

                            <div className="social-content">

                                <span className="social-label">
                                    FOLLOW NOBCRAFT
                                </span>

                                <p>
                                    Stay connected with us on social media
                                    for the latest updates, projects and more.
                                </p>

                            </div>


                            <div className="social-links">

                                <a href="#" aria-label="Instagram" target="_blank">
                                    <FiInstagram />
                                    <span>Instagram</span>
                                </a>


                                <a href="https://github.com/Krishna24480" aria-label="GitHub" target="_blank">
                                    <FiGithub />
                                    <span>GitHub</span>
                                </a>

                                <a href="https://youtube.com/@nobcraftcoders?si=fhCuQUB3Xj7jlAZw" aria-label="YouTube" target="_blank">
                                    <FiYoutube />
                                    <span>YouTube</span>
                                </a>

                            </div>

                        </div>


                        {/* =========================
            PROJECT CTA
        ========================= */}

                        <div className="contact-cta">

                            <div className="cta-content">

                                <span>
                                    HAVE A PROJECT IN MIND?
                                </span>

                                <h2>
                                    Let's build something
                                    great together.
                                </h2>

                                <p>
                                    We'd love to discuss your ideas and
                                    help you turn them into reality.
                                </p>

                            </div>


                            <Link
                                to="/booking"
                                className="contact-cta-button"
                            >
                                Start a Project
                                <FiArrowUpRight />
                            </Link>

                        </div>

                    </div>

                </section>
            </div>

            <div>
                <Footer/>
            </div>
        </>
    );
};

export default Contact;