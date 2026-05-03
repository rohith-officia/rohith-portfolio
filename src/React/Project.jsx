import React from "react";
import { motion } from "framer-motion";
import "./css/projects.css";

export default function Project() {
  const projects = [
    {
      no: "01",
      name: "Harmoniq",
      type: "Music Streaming Platform",
      desc: "Full-stack music streaming platform with song upload, streaming, artist management, playlists, likes, and listening history.",
      tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      live: "https://harmoniq-song.vercel.app",
      code: "https://github.com/rohith-officia",
    },
    {
      no: "02",
      name: "Complaint System",
      type: "Enterprise Backend System",
      desc: "JWT-secured complaint management platform with role-based access, complaint tracking, admin updates, and email notifications.",
      tech: ["Spring Boot", "PostgreSQL", "JWT", "REST API"],
      live: "#",
      code: "https://github.com/rohith-officia",
    },
    {
      no: "03",
      name: "News Aggregator",
      type: "Backend API Project",
      desc: "REST API that aggregates news data with filtering, search, pagination, serializers, and optimized query handling.",
      tech: ["Django", "DRF", "Python", "REST API"],
      live: "#",
      code: "https://github.com/rohith-officia",
    },
    {
      no: "04",
      name: "Turf Booking",
      type: "Booking Management Platform",
      desc: "Online turf booking platform with secure authentication, slot booking, availability management, and user booking history.",
      tech: ["Django", "DRF", "PostgreSQL", "JWT"],
      live: "#",
      code: "https://github.com/rohith-officia",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-hero">
        <p>MY WORK</p>
        <h2>
          Selected
          <br />
          projects.
        </h2>
      </div>

      <div className="project-stack">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.no}
            style={{
              top: `${115 + index * 28}px`,
              zIndex: index + 1,
            }}
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="project-left">
              <span>{project.no}</span>
              <p>{project.type}</p>
            </div>

            <div className="project-right">
              <h3>{project.name}</h3>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <strong>View Website</strong>
                  <span>↗</span>
                </a>

                <a href={project.code} target="_blank" rel="noreferrer">
                  <strong>View Code</strong>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="more-work-wrap">
        <a
          href="https://github.com/rohith-officia"
          target="_blank"
          rel="noreferrer"
          className="more-work-btn"
        >
          <strong>See More Work</strong>
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}