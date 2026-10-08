import React from "react";
import { Link } from "react-router-dom";
import "./HowWeWork.css";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We start by understanding your business, goals, audience and what you want your website to achieve.",
        icon: "✦",
    },
    {
        number: "02",
        title: "Planning",
        description:
            "We create a clear structure for your website, including the pages, content flow and overall user experience.",
        icon: "◈",
    },
    {
        number: "03",
        title: "Design",
        description:
            "We turn the plan into a modern and professional design that represents your brand and keeps users engaged.",
        icon: "✧",
    },
    {
        number: "04",
        title: "Development",
        description:
            "We build the website with clean, responsive and reliable code so it works smoothly across devices.",
        icon: "⌘",
    },
    {
        number: "05",
        title: "Testing",
        description:
            "Before launch, we carefully test the website across different screen sizes and check the important functionality.",
        icon: "✓",
    },
    {
        number: "06",
        title: "Launch",
        description:
            "Once everything is ready, we launch your website and help you take the next step with your digital presence.",
        icon: "↗",
    },
];

const HowWeWork = () => {
    return (
        <section className="how-work" id="how-we-work">

            {/* Background */}
            <div className="how-work-glow how-work-glow-one"></div>
            <div className="how-work-glow how-work-glow-two"></div>

            <div className="how-work-container">

                {/* Header */}
                <div className="how-work-header">

                    <div className="how-work-label">
                        <span></span>
                        HOW WE WORK
                    </div>

                    <h2>
                        From idea to
                        <span> digital reality.</span>
                    </h2>

                    <p>
                        We follow a simple and transparent process to turn
                        your idea into a website that looks great, works
                        smoothly and helps your business grow.
                    </p>

                </div>


                {/* Steps */}
                <div className="how-work-grid">

                    {steps.map((step, index) => (
                        <div
                            className="work-card"
                            key={step.number}
                        >

                            {/* Number */}
                            <div className="work-card-top">

                                <span className="work-number">
                                    {step.number}
                                </span>

                                <span className="work-icon">
                                    {step.icon}
                                </span>

                            </div>


                            {/* Content */}
                            <div className="work-card-content">

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </div>


                            {/* Bottom line */}
                            <div className="work-card-line"></div>

                        </div>
                    ))}

                </div>


                {/* Bottom CTA */}
                <div className="how-work-bottom">

                    <div>
                        <h3>
                            Have a project in mind?
                        </h3>

                        <p>
                            Let's turn your idea into something people
                            remember.
                        </p>
                    </div>

                    <Link
                        to="/booking"
                        className="how-work-button"
                    >
                        Start a Project
                        <span>→</span>
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default HowWeWork;