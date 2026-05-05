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

      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const triggerPoint = section.offsetTop - window.innerHeight * 0.35;

        if (window.scrollY >= triggerPoint) {
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
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);

      return;
    }

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleNavClick = (item) => {
    if (item.route) {
      goHome();
      return;
    }

    scrollToSection(item.id);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <button className="nav-logo" onClick={goHome}>
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