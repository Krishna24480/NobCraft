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
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-glow glow-one"></div>
      <div className="about-glow glow-two"></div>

      <section className="about-hero">
        <div className="hero-content">
          <div className="label">ABOUT NOBCraft</div>

          <h1>
            We Build Digital
            <br />
            Experiences That
            <br />
            <span>Make an Impact.</span>
          </h1>

          <p>
            Nobcraft is a modern web development agency focused on creating
            beautiful, fast and high-performing digital experiences that help
            businesses grow online.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="primary-btn">
              Start a Project
              <span>→</span>
            </Link>

            <Link to="/projects" className="secondary-btn">
              View Our Work
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="hero-light"></div>

          <div className="floating-card code-floating">
            <div className="floating-icon">&lt;/&gt;</div>
          </div>

          <div className="floating-card image-floating">
            <div className="floating-icon">◈</div>
          </div>

          <div className="floating-card content-floating">
            <div className="floating-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="laptop">
            <div className="laptop-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="laptop-screen">
              <div className="screen-logo">N</div>

              <h3>Nobcraft</h3>

              <p>
                Modern Web Solutions
                <br />
                for a Better Tomorrow.
              </p>
            </div>

            <div className="laptop-base"></div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-left">
          <div className="label">OUR MISSION</div>

          <h2>
            Turning Ideas Into
            <br />
            <span>Digital Reality.</span>
          </h2>

          <p>
            Every business has a unique story. Our mission is to transform
            those stories into digital experiences that people remember.
          </p>

          <p>
            From the first idea to the final launch, we work closely with our
            clients to understand their goals and build solutions that create
            meaningful results.
          </p>
        </div>

        <div className="mission-right">
          <div className="mission-item">
            <div className="mission-icon">🚀</div>

            <div>
              <h3>Our Goal</h3>
              <p>Build websites that help businesses grow.</p>
            </div>
          </div>

          <div className="mission-item">
            <div className="mission-icon">👥</div>

            <div>
              <h3>Our Approach</h3>
              <p>Simple. Creative. Result-driven.</p>
            </div>
          </div>

          <div className="mission-item">
            <div className="mission-icon">♡</div>

            <div>
              <h3>Our Promise</h3>
              <p>Quality, support and long-term partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-box">
          <div className="stat-icon">◫</div>
          <strong>5+</strong>
          <span>Years Experience</span>
        </div>

        <div className="stat-box">
          <div className="stat-icon">▣</div>
          <strong>100+</strong>
          <span>Projects Delivered</span>
        </div>

        <div className="stat-box">
          <div className="stat-icon">☺</div>
          <strong>98%</strong>
          <span>Client Satisfaction</span>
        </div>
      </section>

      <section className="why-section">
        <div className="label">WHY NOBCraft</div>

        <h2>
          Built Around
          <br />
          <span>Your Success.</span>
        </h2>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">♧</div>

            <h3>Creative Thinking</h3>

            <p>
              We combine creativity and strategy to create websites that stand
              out from the competition.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">&lt;/&gt;</div>

            <h3>Modern Technology</h3>

            <p>
              We use modern tools and technologies to create fast, scalable and
              reliable web experiences.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">●</div>

            <h3>Client First</h3>

            <p>
              Your goals come first. We work closely with you throughout the
              entire development process.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-glow"></div>

        <div className="cta-title">
          <div className="label">LET'S WORK TOGETHER</div>

          <h2>
            Have an Idea?
            <br />
            <span>Let's Build It.</span>
          </h2>
        </div>

        <div className="cta-text">
          <p>
            Tell us about your project and let's create something amazing
            together.
          </p>
        </div>

        <Link to="/contact" className="primary-btn">
          Start a Project
          <span>→</span>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default About;