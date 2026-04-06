import React from "react";
import { motion } from "framer-motion";
import "./css/proficiency.css";

const skills = [
  { name: "Spring Boot", level: 90 },
  { name: "Django", level: 85 },
  { name: "React", level: 75 },
  { name: "SQL", level: 80 },
  { name: "AWS", level: 70 },
  { name: "DSA", level: 80 }
];

export default function Proficiency() {
  return (
    <section className="proficiency" id="proficiency">
      <h2 className="prof-title">Proficiency</h2>
      <div className="prof-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="prof-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}