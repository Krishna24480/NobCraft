import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
    return (
        <main className="thankyou-page">

            {/* Background Glow */}
            <div className="thankyou-glow thankyou-glow-one"></div>
            <div className="thankyou-glow thankyou-glow-two"></div>

            <section className="thankyou-container">

                {/* Success Icon */}
                <div className="thankyou-icon-wrapper">
                    <div className="thankyou-icon">
                        ✓
                    </div>
                </div>

                {/* Badge */}
                <div className="thankyou-badge">
                    <span></span>
                    BOOKING RECEIVED
                </div>

                {/* Heading */}
                <h1>
                    Thank You for
                    <br />
                    <span>Choosing Nobcraft.</span>
                </h1>

                {/* Description */}
                <p className="thankyou-description">
                    We've received your project request successfully.
                    Our team will review your requirements and get in
                    touch with you shortly.
                </p>

                {/* Info Card */}
                <div className="thankyou-card">

                    <div className="thankyou-card-icon">
                        ✦
                    </div>

                    <div>
                        <h3>
                            What's Next?
                        </h3>

                        <p>
                            We'll contact you to discuss your project,
                            understand your requirements, and talk about
                            the next steps.
                        </p>
                    </div>

                </div>

                {/* Steps */}
                <div className="thankyou-steps">

                    <div className="thankyou-step active">

                        <div className="step-number">
                            01
                        </div>

                        <div>
                            <h4>Request Received</h4>

                            <p>
                                Your project details are with us.
                            </p>
                        </div>

                    </div>

                    <div className="step-line"></div>

                    <div className="thankyou-step">

                        <div className="step-number">
                            02
                        </div>

                        <div>
                            <h4>We'll Contact You</h4>

                            <p>
                                We'll reach out to discuss your idea.
                            </p>
                        </div>

                    </div>

                    <div className="step-line"></div>

                    <div className="thankyou-step">

                        <div className="step-number">
                            03
                        </div>

                        <div>
                            <h4>Let's Get Started</h4>

                            <p>
                                We'll turn your idea into reality.
                            </p>
                        </div>

                    </div>

                </div>

                {/* Buttons */}
                <div className="thankyou-actions">

                    <Link
                        to="/"
                        className="thankyou-primary-btn"
                    >
                        Back to Home
                        <span>→</span>
                    </Link>

                    <Link
                        to="/services"
                        className="thankyou-secondary-btn"
                    >
                        Explore Services
                    </Link>

                </div>

                {/* Contact */}
                <div className="thankyou-contact">

                    <span>
                        Have any questions?
                    </span>

                    <Link
                        to="/contact"
                        className="cta-button"
                    >
                        Talk to Us
                        <span>→</span>
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default ThankYou;