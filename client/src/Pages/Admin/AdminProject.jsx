import React, { useEffect, useState } from "react";
import "./AdminProject.css";

const API_URL = "localhost:5000";

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Projects
    const fetchProjects = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${API_URL}/api/projects`
            );

            const result = await response.json();

            if (result.success) {
                setProjects(result.projects);
            }
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Delete Project
    const deleteProject = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this project?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/projects/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Failed to delete project"
                );
            }

            setProjects((prev) =>
                prev.filter((project) => project._id !== id)
            );

        } catch (error) {
            console.error("Delete error:", error);
            alert(error.message);
        }
    };

    return (
        <div className="admin-projects">

            {/* Background Glow */}
            <div className="projects-glow projects-glow-one"></div>
            <div className="projects-glow projects-glow-two"></div>

            <div className="projects-container">

                {/* ================= HEADER ================= */}

                <header className="projects-header">

                    <div className="header-content">

                        <span className="section-badge">
                            ADMIN PANEL
                        </span>

                        <h1>
                            Manage Your
                            <span> Projects.</span>
                        </h1>

                        <p>
                            Manage, monitor and organize all your
                            projects from one place.
                        </p>

                    </div>

                    {/* Project Counter */}
                    <div className="projects-counter">

                        <div className="counter-icon">
                            ✦
                        </div>

                        <div>
                            <strong>
                                {projects.length}
                            </strong>

                            <span>
                                Total Projects
                            </span>
                        </div>

                    </div>

                </header>


                {/* ================= DIVIDER ================= */}

                <div className="purple-divider"></div>


                {/* ================= LOADING ================= */}

                {loading && (
                    <div className="projects-state">

                        <div className="neon-loader"></div>

                        <p>
                            Loading projects...
                        </p>

                    </div>
                )}


                {/* ================= EMPTY ================= */}

                {!loading && projects.length === 0 && (
                    <div className="projects-state empty-state">

                        <div className="empty-icon">
                            +
                        </div>

                        <h2>
                            No Projects Yet
                        </h2>

                        <p>
                            Your projects will appear here once
                            you create them.
                        </p>

                    </div>
                )}


                {/* ================= PROJECTS ================= */}

                {!loading && projects.length > 0 && (

                    <div className="projects-grid">

                        {projects.map((project) => (

                            <article
                                className="project-card"
                                key={project._id}
                            >

                                {/* Image */}
                                <div className="project-image-container">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />

                                    <div className="project-image-overlay"></div>

                                    {/* Category */}
                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                </div>


                                {/* Content */}
                                <div className="project-card-content">

                                    <h2>
                                        {project.title}
                                    </h2>

                                    {project.description && (
                                        <p className="project-description">
                                            {project.description}
                                        </p>
                                    )}


                                    {/* Bottom */}
                                    <div className="project-card-footer">

                                        <span className="project-status">
                                            <span className="status-dot"></span>
                                            Active Project
                                        </span>

                                        <button
                                            className="delete-project-btn"
                                            onClick={() =>
                                                deleteProject(
                                                    project._id
                                                )
                                            }
                                        >
                                            <span>
                                                🗑
                                            </span>

                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                )}


                {/* ================= BOTTOM CTA ================= */}

                {!loading && projects.length > 0 && (

                    <div className="projects-cta">

                        <div className="cta-content">

                            <span className="cta-badge">
                                PROJECT MANAGEMENT
                            </span>

                            <h2>
                                Keep your projects
                                <span> organized.</span>
                            </h2>

                            <p>
                                Manage your portfolio and keep
                                everything up to date.
                            </p>

                        </div>

                        <div className="cta-glow"></div>

                    </div>

                )}

            </div>
        </div>
    );
};

export default AdminProjects;