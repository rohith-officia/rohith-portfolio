import React from "react";
import { motion } from "framer-motion";
import "./css/projects.css";

const projects = [
  {
    name: "Portfolio Website",
    desc: "My personal portfolio built with React and Framer Motion for smooth animations, responsive design, and interactive experience.",
    tech: ["React", "Framer Motion", "CSS", "JS"],
    git: "https://github.com/yourusername/portfolio"
  },
  {
    name: "Turf Booking System",
    desc: "Full backend with Django, DRF, JWT authentication, and frontend integration with React for smooth booking flow.",
    tech: ["Django", "DRF", "JWT", "SQL"],
    git: "https://github.com/yourusername/turf-booking"
  },
  {
    name: "News Aggregator API",
    desc: "Aggregates news from multiple sources with REST API endpoints, filtered by category, date, and source for frontend consumption.",
    tech: ["Django", "Python", "REST API"],
    git: "https://github.com/yourusername/news-aggregator"
  },
  {
    name: "Freelance Projects",
    desc: "Multiple freelance projects including web apps, backend solutions, and API integrations for small businesses.",
    tech: ["React", "Django", "AWS", "SQL"],
    git: "https://github.com/yourusername/freelance-projects"
  },
{
  "name": "Grievance Redressal System",
  "desc": "A full-stack grievance management platform allowing users to register complaints, track their status, communicate with officers, and receive updates in real-time.",
  "tech": ["Spring Boot", "PostgreSQL", "REST API", "JWT Authentication"],
  "git": "https://github.com/yourusername/grievance-redressal-system"
}
];

export default function Projects() {
  return (
    <section className="projects" id="project">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className="project-tech">
              {project.tech.map((t, j) => <span key={j}>{t}</span>)}
            </div>
            <a
              className="git-circle"
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}