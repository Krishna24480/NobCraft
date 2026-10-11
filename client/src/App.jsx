import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import Projects from "./Pages/Project.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Booking from "./Pages/Booking.jsx";
import ThankYou from "./Pages/ThankYou.jsx";

import Navbar from "./Component/Navbar.jsx";

// Admin
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import AdminRoute from "./Component/AdminRoute.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";
import UploadProject from "./Pages/Admin/UploadProject.jsx";
import AdminProjects from "./Pages/Admin/AdminProject.jsx";

// Admin Booking
import AdminBooking from "./Pages/Admin/Booking/Booking.jsx";


const App = () => {

  return (
    <>
      <Navbar />

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />


        {/* ================= ADMIN ================= */}

        {/* /admin → /admin/login */}

        <Route
          path="/admin"
          element={
            <Navigate
              to="/admin/login"
              replace
            />
          }
        />


        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* ================= PROTECTED ADMIN ROUTES ================= */}

        {/* Admin Dashboard */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />


        {/* Upload Project */}

        <Route
          path="/admin/upload-project"
          element={
            <AdminRoute>
              <UploadProject />
            </AdminRoute>
          }
        />


        {/* Manage Projects */}

        <Route
          path="/admin/projects"
          element={
            <AdminRoute>
              <AdminProjects />
            </AdminRoute>
          }
        />


        {/* Manage Bookings */}

        <Route
          path="/admin/booking"
          element={
            <AdminRoute>
              <AdminBooking />
            </AdminRoute>
          }
        />


        {/* ================= 404 ================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </>
  );
};

export default App;