import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Booking.css";

const API_URL = "http://localhost:5000";

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [deletingId, setDeletingId] = useState(null);

    // =========================
    // FETCH BOOKINGS
    // =========================
    const fetchBookings = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/bookings`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token && {
                            Authorization: `Bearer ${token}`,
                        }),
                    },
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Failed to fetch bookings"
                );
            }

            setBookings(result.bookings || []);
        } catch (error) {
            console.error(
                "Fetch Bookings Error:",
                error
            );

            setError(
                error.message ||
                "Something went wrong while loading bookings."
            );
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // DELETE BOOKING
    // =========================
    const handleDeleteBooking = async (bookingId) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this booking?\n\nThis action cannot be undone."
        );

        if (!confirmed) {
            return;
        }

        try {
            setDeletingId(bookingId);

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/bookings/${bookingId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token && {
                            Authorization: `Bearer ${token}`,
                        }),
                    },
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to delete booking"
                );
            }

            // Remove booking immediately from UI
            setBookings((prevBookings) =>
                prevBookings.filter(
                    (booking) =>
                        booking._id !== bookingId
                )
            );

            // Close modal if deleted booking was open
            if (
                selectedBooking &&
                selectedBooking._id === bookingId
            ) {
                setSelectedBooking(null);
            }

        } catch (error) {
            console.error(
                "Delete Booking Error:",
                error
            );

            alert(
                error.message ||
                "Something went wrong while deleting the booking."
            );
        } finally {
            setDeletingId(null);
        }
    };

    // =========================
    // LOAD BOOKINGS
    // =========================
    useEffect(() => {
        fetchBookings();
    }, []);

    // =========================
    // FORMAT DATE
    // =========================
    const formatDate = (date) => {
        if (!date) return "N/A";

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };

    // =========================
    // FORMAT SERVICE
    // =========================
    const formatService = (service) => {
        if (!service) return "N/A";

        const services = {
            "business-website":
                "Business Website",
            ecommerce:
                "E-commerce Website",
            portfolio:
                "Portfolio Website",
            "landing-page":
                "Landing Page",
            "web-application":
                "Custom Web Application",
            maintenance:
                "Website Maintenance",
        };

        return (
            services[service] ||
            service
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) =>
                    char.toUpperCase()
                )
        );
    };

    // =========================
    // FILTER BOOKINGS
    // =========================
    const filteredBookings =
        bookings.filter((booking) => {
            const searchValue =
                search.toLowerCase();

            return (
                booking.name
                    ?.toLowerCase()
                    .includes(searchValue) ||
                booking.email
                    ?.toLowerCase()
                    .includes(searchValue) ||
                booking.phone
                    ?.toLowerCase()
                    .includes(searchValue) ||
                booking.service
                    ?.toLowerCase()
                    .includes(searchValue)
            );
        });

    return (
        <div className="admin-booking-page">

            {/* ================= HEADER ================= */}

            <header className="booking-admin-header">

                <div className="booking-header-left">

                    <Link
                        to="/admin/dashboard"
                        className="back-dashboard"
                    >
                        ← Dashboard
                    </Link>

                    <div>
                        <h1>
                            Customer Bookings
                        </h1>

                        <p>
                            View and manage customer
                            booking requests.
                        </p>
                    </div>

                </div>

                <button
                    className="refresh-btn"
                    onClick={fetchBookings}
                    disabled={loading}
                >
                    ↻{" "}
                    {loading
                        ? "Loading..."
                        : "Refresh"}
                </button>

            </header>


            {/* ================= MAIN ================= */}

            <main className="booking-admin-main">

                {/* ================= STATS ================= */}

                <div className="booking-stats">

                    <div className="booking-stat-card">

                        <div className="stat-icon">
                            📅
                        </div>

                        <div>
                            <span>
                                Total Bookings
                            </span>

                            <strong>
                                {bookings.length}
                            </strong>
                        </div>

                    </div>


                    <div className="booking-stat-card">

                        <div className="stat-icon">
                            👥
                        </div>

                        <div>
                            <span>
                                Customers
                            </span>

                            <strong>
                                {
                                    new Set(
                                        bookings.map(
                                            (booking) =>
                                                booking.email
                                        )
                                    ).size
                                }
                            </strong>
                        </div>

                    </div>


                    <div className="booking-stat-card">

                        <div className="stat-icon">
                            ✓
                        </div>

                        <div>
                            <span>
                                Requests
                            </span>

                            <strong>
                                {bookings.length}
                            </strong>
                        </div>

                    </div>

                </div>


                {/* ================= TABLE CARD ================= */}

                <div className="booking-table-card">

                    <div className="booking-table-top">

                        <div>
                            <h2>
                                All Bookings
                            </h2>

                            <p>
                                Customer requests received
                                through your website.
                            </p>
                        </div>


                        <div className="booking-search">

                            <span>
                                ⌕
                            </span>

                            <input
                                type="text"
                                placeholder="Search bookings..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                    </div>


                    {/* ================= ERROR ================= */}

                    {error && (
                        <div className="booking-error">

                            <span>
                                ⚠
                            </span>

                            <div>
                                <strong>
                                    Unable to load
                                    bookings
                                </strong>

                                <p>
                                    {error}
                                </p>
                            </div>

                            <button
                                onClick={fetchBookings}
                            >
                                Try Again
                            </button>

                        </div>
                    )}


                    {/* ================= LOADING ================= */}

                    {loading && !error && (
                        <div className="booking-loading">

                            <div className="loading-spinner">
                            </div>

                            <p>
                                Loading customer
                                bookings...
                            </p>

                        </div>
                    )}


                    {/* ================= EMPTY ================= */}

                    {!loading &&
                        !error &&
                        filteredBookings.length ===
                        0 && (
                            <div className="booking-empty">

                                <div className="empty-icon">
                                    📅
                                </div>

                                <h3>
                                    {search
                                        ? "No bookings found"
                                        : "No bookings yet"}
                                </h3>

                                <p>
                                    {search
                                        ? "Try searching with a different name, email, phone or service."
                                        : "Customer booking requests will appear here."}
                                </p>

                            </div>
                        )}


                    {/* ================= TABLE ================= */}

                    {!loading &&
                        !error &&
                        filteredBookings.length >
                        0 && (

                            <div className="booking-table-wrapper">

                                <table className="booking-table">

                                    <thead>
                                        <tr>
                                            <th>
                                                Customer
                                            </th>

                                            <th>
                                                Contact
                                            </th>

                                            <th>
                                                Service
                                            </th>

                                            <th>
                                                Preferred Date
                                            </th>

                                            <th>
                                                Status
                                            </th>

                                            <th>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>


                                    <tbody>

                                        {filteredBookings.map(
                                            (booking) => (

                                                <tr
                                                    key={
                                                        booking._id
                                                    }
                                                >

                                                    {/* CUSTOMER */}

                                                    <td>

                                                        <div className="customer-info">

                                                            <div className="customer-avatar">

                                                                {booking.name
                                                                    ?.charAt(
                                                                        0
                                                                    )
                                                                    .toUpperCase()}

                                                            </div>

                                                            <div>

                                                                <strong>
                                                                    {
                                                                        booking.name
                                                                    }
                                                                </strong>

                                                                <span>
                                                                    #
                                                                    {booking._id?.slice(
                                                                        -6
                                                                    )}
                                                                </span>

                                                            </div>

                                                        </div>

                                                    </td>


                                                    {/* CONTACT */}

                                                    <td>

                                                        <div className="contact-info">

                                                            <span>
                                                                {
                                                                    booking.email
                                                                }
                                                            </span>

                                                            {booking.phone && (
                                                                <small>
                                                                    {
                                                                        booking.phone
                                                                    }
                                                                </small>
                                                            )}

                                                        </div>

                                                    </td>


                                                    {/* SERVICE */}

                                                    <td>

                                                        <span className="service-badge">
                                                            {formatService(
                                                                booking.service
                                                            )}
                                                        </span>

                                                    </td>


                                                    {/* DATE */}

                                                    <td>

                                                        <span className="booking-date">
                                                            {formatDate(
                                                                booking.date
                                                            )}
                                                        </span>

                                                    </td>


                                                    {/* STATUS */}

                                                    <td>

                                                        <span
                                                            className={`status-badge ${booking.status ||
                                                                "pending"
                                                                }`}
                                                        >

                                                            {(
                                                                booking.status ||
                                                                "pending"
                                                            )
                                                                .charAt(
                                                                    0
                                                                )
                                                                .toUpperCase() +
                                                                (
                                                                    booking.status ||
                                                                    "pending"
                                                                ).slice(
                                                                    1
                                                                )}

                                                        </span>

                                                    </td>


                                                    {/* ACTIONS */}

                                                    <td>

                                                        <div className="booking-actions">

                                                            {/* VIEW */}

                                                            <button
                                                                className="view-booking-btn"
                                                                onClick={() =>
                                                                    setSelectedBooking(
                                                                        booking
                                                                    )
                                                                }
                                                            >
                                                                View
                                                                <span>
                                                                    →
                                                                </span>
                                                            </button>


                                                            {/* DELETE */}

                                                            <button
                                                                className="delete-booking-btn"
                                                                onClick={() =>
                                                                    handleDeleteBooking(
                                                                        booking._id
                                                                    )
                                                                }
                                                                disabled={
                                                                    deletingId ===
                                                                    booking._id
                                                                }
                                                            >
                                                                {deletingId ===
                                                                    booking._id
                                                                    ? "Deleting..."
                                                                    : "Delete"}
                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                    </tbody>

                                </table>

                            </div>

                        )}

                </div>

            </main>


            {/* ================= MODAL ================= */}

            {selectedBooking && (

                <div
                    className="booking-modal-overlay"
                    onClick={() =>
                        setSelectedBooking(
                            null
                        )
                    }
                >

                    <div
                        className="booking-modal"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        {/* HEADER */}

                        <div className="modal-header">

                            <div>

                                <span>
                                    BOOKING DETAILS
                                </span>

                                <h2>
                                    {
                                        selectedBooking.name
                                    }
                                </h2>

                            </div>


                            <button
                                className="modal-close"
                                onClick={() =>
                                    setSelectedBooking(
                                        null
                                    )
                                }
                            >
                                ×
                            </button>

                        </div>


                        {/* CUSTOMER */}

                        <div className="modal-customer">

                            <div className="modal-avatar">

                                {selectedBooking.name
                                    ?.charAt(0)
                                    .toUpperCase()}

                            </div>

                            <div>

                                <h3>
                                    {
                                        selectedBooking.name
                                    }
                                </h3>

                                <p>
                                    Customer Booking
                                    Request
                                </p>

                            </div>

                        </div>


                        {/* DETAILS */}

                        <div className="modal-details">

                            <div className="detail-item">

                                <span>
                                    Email
                                </span>

                                <strong>
                                    {
                                        selectedBooking.email
                                    }
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Phone
                                </span>

                                <strong>
                                    {
                                        selectedBooking.phone ||
                                        "Not provided"
                                    }
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Service
                                </span>

                                <strong>
                                    {formatService(
                                        selectedBooking.service
                                    )}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Preferred Date
                                </span>

                                <strong>
                                    {formatDate(
                                        selectedBooking.date
                                    )}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Status
                                </span>

                                <strong>
                                    {
                                        selectedBooking.status ||
                                        "Pending"
                                    }
                                </strong>

                            </div>

                        </div>


                        {/* MESSAGE */}

                        <div className="customer-message">

                            <span>
                                PROJECT MESSAGE
                            </span>

                            <p>
                                {
                                    selectedBooking.message ||
                                    "No message provided by the customer."
                                }
                            </p>

                        </div>


                        {/* MODAL ACTIONS */}

                        <div className="modal-actions">

                            <button
                                className="modal-delete-btn"
                                onClick={() =>
                                    handleDeleteBooking(
                                        selectedBooking._id
                                    )
                                }
                                disabled={
                                    deletingId ===
                                    selectedBooking._id
                                }
                            >
                                {deletingId ===
                                    selectedBooking._id
                                    ? "Deleting..."
                                    : "Delete Booking"}
                            </button>

                            <button
                                className="modal-done-btn"
                                onClick={() =>
                                    setSelectedBooking(
                                        null
                                    )
                                }
                            >
                                Close
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
};

export default Booking;