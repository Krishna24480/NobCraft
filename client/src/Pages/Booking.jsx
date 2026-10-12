import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Booking failed"
        );
      }

      console.log(
        "Booking successful:",
        result
      );

      // Go to Thank You page
      navigate("/thank-you");

    } catch (error) {
      console.error(
        "Booking Error:",
        error
      );

      alert(
        error.message ||
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <main className="booking-page">

      {/* Background Glow */}
      <div className="booking-glow booking-glow-one"></div>
      <div className="booking-glow booking-glow-two"></div>

      {/* ================= HERO ================= */}
      <section className="booking-hero">

        <div className="booking-badge">
          <span></span>
          LET'S BUILD SOMETHING
        </div>

        <h1>
          Book Your
          <br />
          <span>Next Project.</span>
        </h1>

        <p>
          Tell us about your project and let's turn your ideas into
          something amazing. Schedule a consultation with the Nobcraft team.
        </p>

      </section>

      {/* ================= BOOKING AREA ================= */}
      <section className="booking-section">

        {/* LEFT SIDE */}
        <div className="booking-info">

          <div className="section-label">
            START YOUR PROJECT
          </div>

          <h2>
            Let's create
            <br />
            <span>something great.</span>
          </h2>

          <p className="booking-description">
            Fill out the form and tell us what you have in mind.
            We'll get back to you shortly to discuss your project
            and find the best solution for your business.
          </p>

          {/* Benefits */}
          <div className="booking-benefits">

            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>

              <div>
                <h3>Quick Response</h3>
                <p>
                  We'll respond to your request within 24 hours.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">✓</div>

              <div>
                <h3>Free Consultation</h3>
                <p>
                  Let's discuss your ideas with no commitment.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">◆</div>

              <div>
                <h3>Expert Solutions</h3>
                <p>
                  Get a solution designed specifically for you.
                </p>
              </div>
            </div>

          </div>

          {/* Direct Contact */}
          <div className="direct-contact">
            <span>Prefer to talk directly?</span>

            <a href="mailto:krajawt244@gmail.com">
              krajawt244@gmail.com
              <span>↗</span>
            </a>
          </div>

        </div>

        {/* ================= FORM ================= */}
        <div className="booking-form-card">

          <div className="form-top">

            <div>
              <span className="form-small-title">
                BOOKING FORM
              </span>

              <h2>
                Tell us about your project
              </h2>
            </div>

            <div className="form-number">
              01
            </div>

          </div>

          {/* Success Message */}
          {submitted && (
            <div className="success-message">
              <span>✓</span>

              Your booking request has been submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Name + Email */}
            <div className="form-row">

              <div className="input-group">

                <label>
                  Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="input-group">

                <label>
                  Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Phone + Service */}
            <div className="form-row">

              <div className="input-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

              <div className="input-group">

                <label>
                  Service <span>*</span>
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="business-website">
                    Business Website
                  </option>

                  <option value="ecommerce">
                    E-commerce Website
                  </option>

                  <option value="portfolio">
                    Portfolio Website
                  </option>

                  <option value="landing-page">
                    Landing Page
                  </option>

                  <option value="web-application">
                    Custom Web Application
                  </option>

                  <option value="maintenance">
                    Website Maintenance
                  </option>

                </select>

              </div>

            </div>

            {/* Preferred Date */}
            <div className="input-group">

              <label>
                Preferred Date <span>*</span>
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />

            </div>

            {/* Project Message */}
            <div className="input-group">

              <label>
                Tell us about your project
              </label>

              <textarea
                name="message"
                placeholder="Tell us about your project, goals, requirements, or anything else you'd like us to know..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="booking-submit"
            >
              <span>
                Send Booking Request
              </span>

              <span className="submit-arrow">
                →
              </span>
            </button>

            <p className="privacy-text">
              By submitting this form, you agree to be contacted
              by the Nobcraft team regarding your project.
            </p>

          </form>

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="booking-process">

        <div className="section-label center">
          HOW IT WORKS
        </div>

        <h2>
          Simple process.
          <br />
          <span>Great results.</span>
        </h2>

        <div className="process-grid">

          <div className="process-item">

            <div className="process-number">
              01
            </div>

            <div>
              <h3>Send Your Request</h3>

              <p>
                Tell us about yourself and what you
                want to build.
              </p>
            </div>

          </div>

          <div className="process-item">

            <div className="process-number">
              02
            </div>

            <div>
              <h3>Discuss Ideas</h3>

              <p>
                We'll understand your goals,
                requirements and vision.
              </p>
            </div>

          </div>

          <div className="process-item">

            <div className="process-number">
              03
            </div>

            <div>
              <h3>Build & Develop</h3>

              <p>
                Our team turns your ideas into
                a modern digital experience.
              </p>
            </div>

          </div>

          <div className="process-item">

            <div className="process-number">
              04
            </div>

            <div>
              <h3>Launch</h3>

              <p>
                Your finished project goes live
                and starts growing.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="booking-cta">

        <div>

          <span>
            READY TO START?
          </span>

          <h2>
            Let's build something
            <br />
            <strong>amazing together.</strong>
          </h2>

          <p>
            Have a project in mind?
            Let's turn your ideas into reality.
          </p>

        </div>

        <Link
          to="/contact"
          className="cta-button"
        >
          Talk to Us
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default Booking;