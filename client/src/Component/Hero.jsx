import React from "react";
import { Link} from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero" id="home">

            {/* Background Glows */}
            <div className="hero-glow"></div>
            <div className="hero-glow-two"></div>
            <div className="hero-glow-three"></div>

            <div className="hero-container">

                <div className="hero-content">

                    {/* Badge */}
                    <div className="hero-badge">
                        <span></span>
                        WE BUILD DIGITAL EXPERIENCES
                    </div>


                    {/* Heading */}
                    <h1 className="hero-title">
                        We build websites
                        <br />

                        that make your
                        <br />

                        <span>business stand out.</span>
                    </h1>


                    {/* Description */}
                    <p className="hero-text">
                        NobCraft creates modern, fast and professional
                        websites for businesses, startups and individuals.
                        Your idea deserves a powerful digital presence.
                    </p>


                    {/* Buttons */}
                    <div className="hero-buttons">

                        <Link
                           to="/booking"
                            className="hero-primary-button"
                        >
                            Start a Project
                            <span>→</span>
                        </Link>


                        <Link
                             to="/projects"
                            className="hero-secondary-button"
                        >
                            View Our Work
                        </Link>

                    </div>


                    {/* Stats */}
                    <div className="hero-stats">

                        <div className="hero-stat">
                          <h3>10+</h3>
                            <p>Projects Built</p>
                        </div>


                        <div className="hero-stat-divider"></div>


                        <div className="hero-stat">
                            <h3>100%</h3>
                            <p>Client Focused</p>
                        </div>


                        <div className="hero-stat-divider"></div>


                        <div className="hero-stat">
                            <h3>24/7</h3>
                            <p>Support</p>
                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom Fade */}
            <div className="hero-bottom-fade"></div>

        </section>
    );
};

export default Hero;