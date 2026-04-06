import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Shield,
  Palette,
  Cloud,
  Monitor,
  Server,
  Database,
} from "lucide-react";

import "./css/services.css";

const allServices = [
  { icon: Monitor, title: "Front-End", desc: "Responsive and interactive UI using React, HTML, CSS, and JS." },
  { icon: Server, title: "Back-End", desc: "Robust server-side development with Django & Spring Boot." },
  { icon: Database, title: "Database", desc: "Efficient data storage with MySQL, PostgreSQL & MongoDB." },
  { icon: Code, title: "Web Development", desc: "Modern scalable apps combining front-end & back-end skills." },
  { icon: Zap, title: "Performance", desc: "Optimized systems with fast load times and efficiency." },
  { icon: Shield, title: "Secure APIs", desc: "JWT authentication with strong backend security." },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, intuitive, and modern user interfaces." },
  { icon: Cloud, title: "Cloud", desc: "AWS, Vercel and CI/CD deployments." },
  { icon: Code, title: "DevOps", desc: "Continuous integration, deployment, and automation pipelines." },
  { icon: Zap, title: "Optimization", desc: "Code and infrastructure optimization for speed and scalability." },
  { icon: Shield, title: "Cybersecurity", desc: "Vulnerability assessment and secure coding practices." },
  { icon: Palette, title: "Design Systems", desc: "Reusable components and consistent UI frameworks." },
];

export default function Services() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [expanded, setExpanded] = useState(false); // whether last card was clicked

  const revealMore = () => {
    setExpanded(true);
    setVisibleCount(allServices.length);
  };

  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -5;
    const rotateY = ((x - midX) / midX) * 5;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetMove = (card) => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section id="services" className="services">
      <h2 className="services-title">Services</h2>

      <div className="services-grid">
        {allServices.slice(0, visibleCount).map((service, i) => {
          const Icon = service.icon;
          const isLast = i === 5 && !expanded;

          return (
            <div key={service.title} className="service-wrapper" style={{ position: "relative" }}>
              {/* Stacked effect behind last card */}
              {isLast &&
                [2, 1, 0].map((idx) => (
                  <div
                    key={idx}
                    className="stack-card"
                    style={{
                      position: "absolute",
                      top: 6 * (idx + 1),
                      left: 6 * (idx + 1),
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(15px)",
                      transform: `rotate(${idx * 2}deg) scale(${1 - idx * 0.01})`,
                      zIndex: -idx - 1,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                      pointerEvents: "none",
                    }}
                  />
                ))}

              {/* Main card */}
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }} // triggers every scroll
                onMouseMove={(e) => handleMove(e, e.currentTarget)}
                onMouseLeave={(e) => resetMove(e.currentTarget)}
                onClick={isLast ? revealMore : undefined}
              >
                <div className="service-icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}