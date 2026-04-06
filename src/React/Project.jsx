import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./css/projects.css";

const projects = [
  {
    name: "Portfolio Website",
    desc: "Modern animated portfolio with smooth UI and interactions.",
    tech: ["React", "Framer Motion", "CSS"],
    git: "https://github.com/rohith-officia/rohith-portfolio",
  },
  {
    name: "Turf Booking System",
    desc: "Booking platform with authentication and slot management.",
    tech: ["Django", "JWT", "SQL"],
    git: "https://github.com/rohith-officia/Turf-management",
  },
  {
    name: "News Aggregator API",
    desc: "REST API to fetch categorized and filtered news data.",
    tech: ["Django", "REST API"],
    git: "https://github.com/rohith-officia/News-Aggregator",
  },
  {
    name: "Grievance Redressal System",
    desc: "Full-stack complaint system with tracking and communication.",
    tech: ["Spring Boot", "PostgreSQL", "JWT", "React"],
    git: "https://github.com/rohith-officia/grievance-redressal-system",
  },
  {
    name: "Spring-boot-Authentication-project",
    desc: "Handles user login, registration, JWT auth, and role-based access.",
    tech: ["Spring Boot", "PostgreSQL", "JWT"],
    git: "https://github.com/rohith-officia/Spring-boot-Authentication-project",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("All");

  // 🔥 FILTER LOGIC
  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));

  // 🔥 DRAG SCROLL (same as yours)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isDragging = false;
    let startX, scrollLeft;

    const mouseDown = (e) => {
      isDragging = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const mouseLeave = () => {
      isDragging = false;
      container.classList.remove("dragging");
    };

    const mouseUp = () => {
      isDragging = false;
      container.classList.remove("dragging");
    };

    const mouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseleave", mouseLeave);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);

    return () => {
      container.removeEventListener("mousedown", mouseDown);
      container.removeEventListener("mouseleave", mouseLeave);
      container.removeEventListener("mouseup", mouseUp);
      container.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // 🔥 CENTER CARD FIX
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const setCenterCard = () => {
      const cards = container.querySelectorAll(".project-card");
      const rect = container.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      let closest = null;
      let minDist = Infinity;

      cards.forEach((card) => {
        card.classList.remove("center");

        const box = card.getBoundingClientRect();
        const cardCenter = box.left + box.width / 2;
        const dist = Math.abs(center - cardCenter);

        if (dist < minDist) {
          minDist = dist;
          closest = card;
        }
      });

      if (closest) closest.classList.add("center");
    };

    let raf;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(setCenterCard);
    };

    container.addEventListener("scroll", handleScroll);
    setCenterCard();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [filteredProjects]);

  return (
    <section id="project" className="projects">
      <h2 className="projects-title">My Work</h2>

      {/* 🔥 FILTER BUTTONS */}
      <div className="project-tabs">
        {["All", "React", "Django", "Spring Boot"].map((tab) => (
          <button
            key={tab}
            className={active === tab ? "active" : ""}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔥 SCROLL */}
      <div className="projects-scroll" ref={scrollRef}>
        {filteredProjects.map((project, i) => (
          <motion.div key={i} className="project-card">
            <div className="card-content">
              <div className="tags">
                {project.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>

              <h3>{project.name}</h3>
              <p>{project.desc}</p>

              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}