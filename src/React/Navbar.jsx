import React, { useState, useEffect, useRef, useMemo } from "react";
import "./css/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState(0);
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

  // Stable menu items array
  const menuItems = useMemo(
    () => [
      { name: "Home", id: "hero" },
      { name: "About", id: "about" },
      { name: "Journey", id: "experience" },
      { name: "Project", id: "project" },
      { name: "Proficiency", id: "proficiency" },
      { name: "Services", id: "services" }
    ],
    []
  );

  // Scroll on click
  const handleClick = (index, id) => {
    setActive(index);

    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };

  // Indicator movement
  useEffect(() => {
    const el = itemsRef.current[active];
    if (el && indicatorRef.current) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
    }
  }, [active]);

  // Auto active on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      menuItems.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]); // ✅ include menuItems

  return (
    <nav className="nav-wrapper">
      {/* LEFT LOGO */}
      <div className="nav-logo" onClick={() => handleClick(0, "hero")}>
        R Rohith
      </div>

      {/* CENTER GLASS NAV */}
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

          {/* Indicator */}
          <span ref={indicatorRef} className="nav-indicator"></span>
        </ul>
      </div>
    </nav>
  );
}