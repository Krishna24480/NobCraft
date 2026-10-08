import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

const services = [
  {
    number: "01",
    type: "BASIC",
    title: "Simple & Affordable",
    description:
      "A clean and professional website for clients who need a simple online presence.",
    features: [
      "Normal & clean design",
      "Fully responsive website",
      "Basic customization",
      "Essential website sections",
      "Fast & lightweight",
      "No animations",
    ],
    button: "Discuss Your Project",
  },

  {
    number: "02",
    type: "PROFESSIONAL",
    title: "Interactive & Professional",
    description:
      "A customized website with modern design and smooth animations for a stronger online presence.",
    popular: true,
    features: [
      "Customized website design",
      "Fully responsive website",
      "Smooth basic animations",
      "Professional UI / UX",
      "Interactive sections",
      "Performance optimized",
    ],
    button: "Choose Professional",
  },

  {
    number: "03",
    type: "PREMIUM",
    title: "Premium & Powerful",
    description:
      "A fully customized premium website with high-end animations and dedicated maintenance.",
    features: [
      "Premium customized design",
      "Fully responsive website",
      "High-end animations",
      "Premium UI / UX",
      "Advanced customization",
      "Advanced functionality",
      "Priority support",
      "6 Months FREE Maintenance",
    ],
    button: "Start Premium Project",
  },
];

const Services = () => {
  const handleProject = (service) => {
    console.log(`Selected Service: ${service}`);
  };

  return (
    <>
      <div>
        <section className="services-page">

          {/* Background Glow */}
          <div className="services-glow glow-one"></div>
          <div className="services-glow glow-two"></div>
          <div className="services-glow glow-three"></div>

          {/* ================= HERO ================= */}

          <div className="services-hero">

            <div className="hero-badge">
              <span></span>
              NOBCRAFT SERVICES
            </div>

            <h1>
              Build a website that
              <br />
              <span>stands out.</span>
            </h1>

            <p>
              Choose the service level that fits your project.
              <br />
              From a simple website to a premium digital experience.
            </p>

          </div>

          {/* ================= SERVICE CARDS ================= */}

          <div className="services-container">

            {services.map((service) => (
              <div
                className={`service-card ${service.popular ? "featured-card" : ""
                  }`}
                key={service.type}
              >

                {/* Popular Badge */}
                {service.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                {/* Card Header */}
                <div className="card-top">

                  <div className="service-number">
                    {service.number}
                  </div>

                  <div className="service-label">

                    {service.type === "PREMIUM" && (
                      <span>✦</span>
                    )}

                    {service.type}

                  </div>

                </div>

                {/* Title */}
                <h2>
                  {service.title}
                </h2>

                {/* Description */}
                <p className="service-description">
                  {service.description}
                </p>

                <div className="divider"></div>

                {/* Features */}
                <div className="includes-title">
                  WHAT YOU GET
                </div>

                <ul className="feature-list">

                  {service.features.map((feature, index) => (
                    <li key={index}>

                      <span className="check">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* Card Bottom */}
                <div className="card-bottom">

                  <div>

                    <span className="price-label">
                      PRICING
                    </span>

                    <strong>
                      Let's Discuss
                    </strong>

                  </div>

                  <button
                    className="service-button"
                    onClick={() =>
                      handleProject(service.type)
                    }
                  >

                    <Link to="/booking" className="button-link">
                      {service.button}
                    </Link>

                    <span className="arrow">
                      →
                    </span>

                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* ================= CTA ================= */}

          <div className="services-cta">

            <div className="cta-content">

              <div className="cta-badge">
                HAVE A PROJECT IN MIND?
              </div>

              <h2>
                Let's build something
                <br />
                <span>great together.</span>
              </h2>

              <p>
                Every website is different. Tell us what you need,
                <br />
                and we'll create a solution according to your project.
              </p>

            </div>

            <Link to="/contact" className="cta-button">
              Start a Project
              <span>→</span>
            </Link>
           
          </div>

        </section>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Services;