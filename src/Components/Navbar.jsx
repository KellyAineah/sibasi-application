import "./Navbar.css";
import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { useAuth } from "./Authcontext";

function Navbar() {
  // tracking the state of the dashboard dropdown
  const [dashboardOpen, setDashboardOpen] = useState(false);

  // Using useAuth to get login status and logout function
  const { isLoggedIn, logout } = useAuth();

  const navigate = useNavigate();
  const dashboardRef = useRef(null);

  // Handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
      setDashboardOpen(false);
    }
  };

  // Add event listener to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener to prevent memory leaks
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDashboardDropdown = () => {
    if (!isLoggedIn) {
      setDashboardOpen(!dashboardOpen);
    } else {
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <NavLink to="/">Sibasi Project</NavLink>
      </div>

      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="navbar-dashboard" ref={dashboardRef}>
          <div className="dashboard-icon" onClick={toggleDashboardDropdown}>
            <FaTachometerAlt className="icon" /> Dashboard
            {!isLoggedIn && (
              <div
                className={`dropdown-menu-dashboard ${
                  dashboardOpen ? "open" : ""
                }`}
              >
                <div className="dashboard-message">
                  <p>Please login to access the dashboard</p>
                  <button
                    className="btn-dashboard"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
              </div>
            )}
          </div>
        </li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
