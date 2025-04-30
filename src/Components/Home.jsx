import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Technical Assignment</h1>
          <p className="hero-subtitle">
            This interactive app was built to showcase my frontend development skills using React, CSS, and responsive design.
          </p>
          <button className="hero-button" onClick={() => navigate("/login")}>
            Explore the Demo
          </button>
        </div>
      </header>

      <section className="features-section">
        <h2 className="section-title">What You'll See Here</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Clean & Responsive UI</h3>
            <p>Designed with simplicity and mobile-first principles for an elegant experience across all screen sizes.</p>
          </div>
          <div className="feature-card">
            <h3>Functional To-Do App</h3>
            <p>Add, edit, and delete tasks. Data clears on refresh, focusing on logic rather than persistence.</p>
          </div>
          <div className="feature-card">
            <h3>Built for Evaluation</h3>
            <p>This app serves as a skill demo — highlighting React concepts, routing, styling, and interaction.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Kelly Aineah Wanyama. Created for Sibasi Ltd. Technical Interview.</p>
      </footer>
    </div>
  );
};

export default Home;
