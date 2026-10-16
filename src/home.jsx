
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const projects = [
  {
    title: "Todo List",
    category: "PRODUCTIVITY",
    description:
      "Manage your daily tasks, add new work and keep track of your progress.",
    icon: "✅",
    path: "/about",
    number: "01",
    tag: "Task Manager",
  },
  {
    title: "Recipes",
    category: "FOOD API",
    description:
      "Discover delicious recipes, search meals and explore cooking ideas.",
    icon: "🍳",
    path: "/products",
    number: "02",
    tag: "Recipe Finder",
  },
  {
    title: "Weather",
    category: "WEATHER API",
    description:
      "Check weather conditions, temperature and forecasts for different cities.",
    icon: "🌤️",
    path: "/contact",
    number: "03",
    tag: "Live Weather",
  },
  {
    title: "News",
    category: "NEWS API",
    description:
      "Explore the latest headlines, trending stories and important updates.",
    icon: "📰",
    path: "/Recipes",
    number: "04",
    tag: "Latest Updates",
  },
  {
    title: "Movie",
    category: "MOVIE API",
    description:
      "Search movies and discover ratings, release dates, genres and plots.",
    icon: "🎬",
    path: "/Move",
    number: "05",
    tag: "Movie Explorer",
  },
  {
    title: "Food",
    category: "FOOD DISCOVERY",
    description:
      "Explore food options and discover your next favourite meal.",
    icon: "🍔",
    path: "/food",
    number: "06",
    tag: "Food Explorer",
  },
  {
    title: "Employees",
    category: "JSON DATA",
    description:
      "Explore employee records, profile information and structured data.",
    icon: "👨‍💻",
    path: "/EMp",
    number: "07",
    tag: "Employee Directory",
  },
];

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-badge">
          <span className="status-dot"></span>
          MY WEB DEVELOPMENT PROJECTS
        </div>

        <h1>
          Explore My <span>API Projects.</span>
        </h1>

        <p className="hero-description">
          Welcome to my project hub. Explore interactive web applications
          built with React, APIs and modern web technologies.
        </p>

        <div className="hero-info">
          <div className="hero-info-item">
            <span className="info-icon">⚡</span>
            <span>Interactive Projects</span>
          </div>

          <div className="hero-info-item">
            <span className="info-icon">🌐</span>
            <span>API Integration</span>
          </div>

          <div className="hero-info-item">
            <span className="info-icon">💻</span>
            <span>Built with React</span>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-heading">
          <div>
            <span className="section-label">THE PROJECT COLLECTION</span>
            <h2>Explore Projects<span>.</span></h2>
            <p>Choose any project to open its dedicated page.</p>
          </div>

          <div className="project-count">
            <strong>07</strong>
            <span>PROJECTS</span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={project.path}
              className="api-card"
              key={project.number}
            >
              <div className="card-top">
                <div className="card-icon">{project.icon}</div>

                <span className="card-number">
                  {project.number}
                </span>
              </div>

              <div className="card-content">
                <span className="card-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className="card-bottom">
                <span>{project.tag}</span>

                <span className="card-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>
          Designed & Built with <span>♥</span> by{" "}
          <strong>Shivam.</strong>
        </p>
      </footer>
    </main>
  );
};

export default Home;
