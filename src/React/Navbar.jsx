import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isJourneyPage = location.pathname === "/journey";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const items = isJourneyPage
    ? [{ id: "home", label: "HOME", route: "/" }]
    : [
        { id: "projects", label: "WORK" },
        { id: "about", label: "ABOUT" },
        { id: "contact", label: "CONTACT" },
      ];

  useEffect(() => {
    document.body.classList.toggle("light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      if (isJourneyPage) {
        setActive("home");
        return;
      }

      let current = "home";

      ["home", "projects", "about", "contact"].forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (window.scrollY >= section.offsetTop - 180) {
          current = id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isJourneyPage]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return;
    }

    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (item) => {
    if (item.route) {
      navigate(item.route);
      return;
    }

    scrollToSection(item.id);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <button className="nav-logo" onClick={() => navigate("/")}>
          rohith.dev
        </button>

        <nav className="nav-menu">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`${active === item.id ? "active" : ""} ${
                isJourneyPage && item.id === "home" ? "home-bubble" : ""
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <span></span>
            {darkMode ? "LIGHT" : "DARK"}
          </button>
        </nav>
      </div>
    </header>
  );
}