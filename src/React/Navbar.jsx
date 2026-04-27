import React, { useState, useEffect, useRef, useMemo } from "react";
import "./css/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);
  const lastScrollRef = useRef(0);

  const menuItems = useMemo(
    () => [
      { name: "Home", id: "hero" },
      { name: "About", id: "about" },
      { name: "Journey", id: "experience" },
      { name: "My Work", id: "project" },
      { name: "Proficiency", id: "proficiency" },
      { name: "Services", id: "services" },
    ],
    []
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const moveIndicator = (el) => {
    const parent = el?.parentElement;

    if (!el || !parent || !indicatorRef.current || window.innerWidth <= 768) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    indicatorRef.current.style.width = `${rect.width}px`;
    indicatorRef.current.style.left = `${rect.left - parentRect.left}px`;
  };

  const resetIndicator = () => {
    const activeEl = itemsRef.current[active];
    if (activeEl) {
      moveIndicator(activeEl);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleClick = (index, id) => {
    setActive(index);
    setMenuOpen(false);

    const section = document.getElementById(id);
    const navbar = document.querySelector(".nav-wrapper");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (section) {
      const y = section.offsetTop - navbarHeight - 10;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    resetIndicator();
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav-wrapper");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const scrollPos = window.scrollY + navbarHeight + 20;

      menuItems.forEach((item, index) => {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActive(index);
          }
        }
      });

      const currentScroll = window.scrollY;

      setHidden(currentScroll > lastScrollRef.current && currentScroll > 100);
      lastScrollRef.current = currentScroll;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", resetIndicator);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resetIndicator);
    };
  }, [menuItems, active]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        resetIndicator();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen && window.innerWidth <= 768 ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav-wrapper ${hidden ? "hide" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => handleClick(0, "hero")}>
            R Rohith
          </div>

          <div className="nav-container desktop-menu">
            <ul className="nav-glass">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={active === index ? "active" : ""}
                  onClick={() => handleClick(index, item.id)}
                  onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                  onMouseLeave={resetIndicator}
                >
                  {item.name}
                </li>
              ))}

              <span ref={indicatorRef} className="nav-indicator"></span>
            </ul>
          </div>

          <div className="nav-mobile-actions">
            <div
              className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open menu"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setMenuOpen((prev) => !prev);
                }
              }}
            >
              <span></span>
              <span></span>
            </div>

            <button
              className="theme-toggle desktop-toggle"
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle theme"
            >
              <div className={`toggle-track ${theme}`}>
                <span className="toggle-circle">
                  {theme === "dark" ? "⏾" : "☀"}
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span>Menu</span>

          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="mobile-theme-row">
          <span>Theme</span>

          <button className="theme-toggle" onClick={toggleTheme} type="button">
            <div className={`toggle-track ${theme}`}>
              <span className="toggle-circle">
                {theme === "dark" ? "⏾" : "☀"}
              </span>
            </div>
          </button>
        </div>

        <div className="mobile-menu-links">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={active === index ? "active" : ""}
              onClick={() => handleClick(index, item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}