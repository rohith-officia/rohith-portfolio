import React from "react";
import { motion } from "framer-motion";
import "./css/proficiency.css";

const skills = [
  { name: "Spring Boot", level: 80 },
  { name: "Django", level: 80 },
  { name: "React", level: 75 },
  { name: "SQL", level: 78 },
  { name: "AWS", level: 65 },
  { name: "DSA", level: 70 }
];

export default function Proficiency() {
  return (
    <section className="proficiency" id="proficiency">

      <h2 className="prof-title">Proficiency</h2>

      <div className="prof-grid">

        {skills.map((skill, index) => {
          const radius = 44;
          const circumference = 2 * Math.PI * radius;
          const offset =
            circumference - (skill.level / 100) * circumference;

          return (
            <motion.div
              key={index}
              className="prof-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >

              <div className="circle-wrapper">

                <svg width="110" height="110">
                  <defs>
                    <linearGradient id={`grad-${index}`}>
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#666666" />
                    </linearGradient>
                  </defs>

                  {/* Background */}
                  <circle
                    className="bg"
                    strokeWidth="7"
                    r={radius}
                    cx="55"
                    cy="55"
                  />

                  {/* Progress */}
                  <motion.circle
                    stroke={`url(#grad-${index})`}
                    strokeWidth="7"
                    r={radius}
                    cx="55"
                    cy="55"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.4 }}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Center Text */}
                <div className="circle-text">
                  {skill.level}%
                </div>

              </div>

              {/* Skill */}
              <h3 className="skill-name">{skill.name}</h3>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}