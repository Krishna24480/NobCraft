import React, { useEffect, useState } from "react";
import "./Project.css";

const API_URL = "https://nobcraft.onrender.com";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/api/projects`);
        const result = await response.json();

        if (result.success) {
          setProjects(result.projects);
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="projects-page">
        <div className="projects-container projects-loading">
          <div className="projects-spinner"></div>
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-page">

      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">

          <span className="projects-label">
            OUR WORK
          </span>

          <h2>
            Recent Projects
          </h2>

          <p>
            Explore some of the websites and digital
            experiences we've created.
          </p>

        </div>

        {/* Empty State */}
        {projects.length === 0 ? (

          <div className="projects-empty">
            <div className="empty-icon">◈</div>

            <h3>No Projects Yet</h3>

            <p>
              No projects have been added yet.
              Check back soon.
            </p>
          </div>

        ) : (

          /* Project Grid */
          <div className="projects-grid">

            {projects.map((project) => (

              <article
                key={project._id}
                className="project-card"
              >

                {/* Image */}
                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-image-overlay"></div>

                </div>

                {/* Content */}
                <div className="project-content">

                  {/* Category */}
                  {project.category && (
                    <span className="project-category">
                      {project.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies?.length > 0 && (

                    <div className="project-technologies">

                      {project.technologies.map(
                        (tech, index) => (

                          <span
                            key={`${tech}-${index}`}
                            className="technology-tag"
                          >
                            {tech}
                          </span>

                        )
                      )}

                    </div>

                  )}

                  {/* Links */}
                  {(project.liveUrl || project.githubUrl) && (

                    <div className="project-links">

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-demo-btn"
                        >
                          Live Demo
                          <span>↗</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-btn"
                        >
                          GitHub
                          <span>↗</span>
                        </a>
                      )}

                    </div>

                  )}

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};

export default Project;