import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadProject.css";

const API_URL = "localhost:5000";

const UploadProject = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        image: "",
        technologies: "",
        liveUrl: "",
        githubUrl: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/admin/login");
                return;
            }

            const projectData = {
                ...formData,

                technologies: formData.technologies
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean),
            };

            const response = await fetch(
                `${API_URL}/api/projects`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify(projectData),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Failed to upload project"
                );
            }

            alert("Project uploaded successfully! 🚀");

            setFormData({
                title: "",
                description: "",
                category: "",
                image: "",
                technologies: "",
                liveUrl: "",
                githubUrl: "",
            });

            navigate("/admin/projects");

        } catch (error) {
            console.error(error);

            alert(
                error.message ||
                "Something went wrong while uploading project."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-project-page">

            <div className="upload-project-wrapper">

                {/* Header */}

                <div className="upload-project-header">

                    <button
                        type="button"
                        className="back-btn"
                        onClick={() => navigate("/admin/dashboard")}
                    >
                        ← Back to Dashboard
                    </button>

                    <div className="header-content">

                        <span className="page-badge">
                            ADMIN PANEL
                        </span>

                        <h1>Upload Project</h1>

                        <p>
                            Add a new project to your Nobcraft
                            portfolio.
                        </p>

                    </div>

                </div>


                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="upload-project-form"
                >

                    {/* Project Title */}

                    <div className="form-group">

                        <label htmlFor="title">
                            Project Title
                        </label>

                        <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="e.g. E-commerce Website"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Description */}

                    <div className="form-group">

                        <label htmlFor="description">
                            Project Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            placeholder="Describe your project..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="6"
                        />

                    </div>


                    {/* Category */}

                    <div className="form-group">

                        <label htmlFor="category">
                            Category
                        </label>

                        <input
                            id="category"
                            type="text"
                            name="category"
                            placeholder="e.g. Web Development"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Image */}

                    <div className="form-group">

                        <label htmlFor="image">
                            Project Image URL
                        </label>

                        <input
                            id="image"
                            type="url"
                            name="image"
                            placeholder="https://example.com/project-image.jpg"
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />

                        <small>
                            Add the URL of the project
                            thumbnail/image.
                        </small>

                    </div>


                    {/* Technologies */}

                    <div className="form-group">

                        <label htmlFor="technologies">
                            Technologies
                        </label>

                        <input
                            id="technologies"
                            type="text"
                            name="technologies"
                            placeholder="React, Node.js, MongoDB"
                            value={formData.technologies}
                            onChange={handleChange}
                        />

                        <small>
                            Separate each technology with a comma.
                        </small>

                    </div>


                    {/* URLs */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="liveUrl">
                                Live Website
                            </label>

                            <input
                                id="liveUrl"
                                type="url"
                                name="liveUrl"
                                placeholder="https://yourwebsite.com"
                                value={formData.liveUrl}
                                onChange={handleChange}
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="githubUrl">
                                GitHub
                            </label>

                            <input
                                id="githubUrl"
                                type="url"
                                name="githubUrl"
                                placeholder="https://github.com/..."
                                value={formData.githubUrl}
                                onChange={handleChange}
                            />

                        </div>

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="upload-btn"
                    >
                        {loading ? (
                            <>
                                <span className="loading-spinner"></span>
                                Uploading...
                            </>
                        ) : (
                            <>
                                Upload Project
                                <span>→</span>
                            </>
                        )}
                    </button>

                </form>

            </div>

        </div>
    );
};

export default UploadProject;