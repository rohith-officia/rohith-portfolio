import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isJourneyPage = location.pathname === "/journey";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const items = isJourneyPage
    ? [{ id: "home", label: "HOME" }]
    : [
        { id: "about", label: "ABOUT" },
        { id: "projects", label: "WORK" },
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

      ["home", "about", "projects", "contact"].forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (window.scrollY >= section.offsetTop - window.innerHeight * 0.35) {
          current = id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isJourneyPage]);

  const goHome = () => {
    if (isJourneyPage) {
      sessionStorage.setItem("from_journey", "true");
      navigate("/");
      setMenuOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setMenuOpen(false);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    if (id === "home") {
      goHome();
      return;
    }

    const section = document.getElementById(id);

    if (!section) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      setMenuOpen(false);
      return;
    }

    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <button className="nav-logo" onClick={goHome}>
          rohith.dev
        </button>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
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