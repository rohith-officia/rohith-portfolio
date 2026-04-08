import React, { useState, useEffect, useRef, useMemo } from "react";
import "./css/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // default light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

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

  // apply theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const handleClick = (index, id) => {
    setActive(index);
    const section = document.getElementById(id);
    const navbar = document.querySelector(".nav-wrapper");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (section) {
      const y = section.offsetTop - navbarHeight - 10;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // indicator
  useEffect(() => {
    const el = itemsRef.current[active];
    if (el && indicatorRef.current) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
    }
  }, [active]);

  // scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav-wrapper");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const scrollPos = window.scrollY + navbarHeight + 10;

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
      setHidden(currentScroll > lastScroll && currentScroll > 100);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, menuItems]);

  return (
    <nav className={`nav-wrapper ${hidden ? "hide" : ""}`}>
      {/* LOGO */}
      <div className="nav-logo" onClick={() => handleClick(0, "hero")}>
        R Rohith
      </div>

      {/* MENU */}
      <div className="nav-container">
        <ul className="nav-glass">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={active === index ? "active" : ""}
              onClick={() => handleClick(index, item.id)}
            >
              {item.name}
            </li>
          ))}
          <span ref={indicatorRef} className="nav-indicator"></span>
        </ul>
      </div>

      {/* 🌗 GLASS TOGGLE */}
      <button className="theme-toggle" onClick={toggleTheme}>
      <span className={`toggle-circle ${theme}`}>
        {theme === "dark" ? "⏾" : "☀"}
      </span>
    </button>
    </nav>
  );
}