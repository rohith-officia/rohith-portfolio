import React, { useEffect, useState } from "react";
import "./css/loader.css";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`loader-screen ${
          darkMode ? "loader-dark" : "loader-light"
        }`}
      >
        <div className="loader-content">
          <h1 className="loader-logo">
            rohith.dev
          </h1>

          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>

          {/* <p className="loader-text">
            Building experiences...
          </p> */}
        </div>
      </div>
    );
  }

  return children;
}