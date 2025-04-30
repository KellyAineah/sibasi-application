import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <NavLink to="/dashboard/todo" className="nav-link">
          ToDo List
        </NavLink>
        <NavLink to="/dashboard/text-cards" className="nav-link">
          Text Cards
        </NavLink>
      </nav>

      
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
