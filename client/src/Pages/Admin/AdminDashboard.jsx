import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin/AdminDashBoard.css";

const AdminDashboard = () => {
    const navigate = useNavigate();

    // =========================
    // LOGOUT
    // =========================
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin/login");
    };

    return (
        <div className="admin-dashboard">

            {/* =========================
                HEADER
            ========================= */}
            <header className="admin-dashboard-header">

                <div className="admin-brand">

                    <h1>
                        Nobcraft
                    </h1>

                    <span>
                        Admin Panel
                    </span>

                </div>

                <button
                    className="admin-logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </header>


            {/* =========================
                MAIN
            ========================= */}
            <main className="admin-dashboard-main">

                {/* =========================
                    INTRO
                ========================= */}
                <div className="dashboard-intro">

                    <span className="dashboard-badge">
                        ADMIN DASHBOARD
                    </span>

                    <h2>
                        Welcome Back <span>👋</span>
                    </h2>

                    <p>
                        Welcome to your Nobcraft admin panel.
                        Manage your projects, portfolio and
                        customer bookings from here.
                    </p>

                </div>


                {/* =========================
                    ADMIN CARDS
                ========================= */}
                <div className="admin-cards">


                    {/* =========================
                        UPLOAD PROJECT
                    ========================= */}
                    <Link
                        to="/admin/upload-project"
                        className="admin-card-link"
                    >

                        <div className="admin-card">

                            <div className="admin-card-icon">
                                +
                            </div>

                            <div className="admin-card-content">

                                <h3>
                                    Upload Project
                                </h3>

                                <p>
                                    Add a new project to your
                                    Nobcraft portfolio.
                                </p>

                            </div>

                            <span className="admin-card-arrow">
                                →
                            </span>

                        </div>

                    </Link>


                    {/* =========================
                        MANAGE PROJECTS
                    ========================= */}
                    <Link
                        to="/admin/projects"
                        className="admin-card-link"
                    >

                        <div className="admin-card">

                            <div className="admin-card-icon manage-icon">
                                ◈
                            </div>

                            <div className="admin-card-content">

                                <h3>
                                    Manage Projects
                                </h3>

                                <p>
                                    View, manage, or delete
                                    your existing projects.
                                </p>

                            </div>

                            <span className="admin-card-arrow">
                                →
                            </span>

                        </div>

                    </Link>


                    {/* =========================
                        MANAGE BOOKINGS
                    ========================= */}
                    <Link
                        to="/admin/booking"
                        className="admin-card-link"
                    >

                        <div className="admin-card">

                            <div className="admin-card-icon booking-icon">
                                📅
                            </div>

                            <div className="admin-card-content">

                                <h3>
                                    Manage Bookings
                                </h3>

                                <p>
                                    View customer booking
                                    requests and project details.
                                </p>

                            </div>

                            <span className="admin-card-arrow">
                                →
                            </span>

                        </div>

                    </Link>


                </div>

            </main>

        </div>
    );
};

export default AdminDashboard;