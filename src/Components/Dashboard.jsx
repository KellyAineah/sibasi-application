import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <NavLink to="/dashboard/todo" className="nav-link">
          Home (ToDo List)
        </NavLink>
        <NavLink to="/dashboard/text-cards" className="nav-link">
          Text Cards
        </NavLink>
      </nav>

      {/* This is where the nested page will appear */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
