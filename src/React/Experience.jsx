import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./css/experience.css";

const experiences = [
  {
    year: "2022",
    title: "Let's Game Tech",
    desc: "Started exploring game development and interactive systems."
  },
  {
    year: "2023",
    title: "Botroid Technology",
    desc: "Worked on real-world applications and improved coding practices."
  },
  {
    year: "2024 - Present",
    title: "Tata Consultancy Services",
    desc: "Built scalable backend systems using Spring Boot."
  },
  {
    year: "2024 - Present",
    title: "Freelancing",
    desc: "Delivered web apps using Springboot , Django and React."
  }
];

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="experience" id="experience" ref={ref}>
      <h2 className="exp-title">My Journey</h2>

      <div className="timeline">

        {/* 🔥 Animated Line */}
        <motion.div
          className="timeline-progress"
          style={{ height: progressHeight }}
        />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
          >

            {/* YEAR (animated on scroll) */}
            <motion.div
              className="year-label"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {exp.year}
            </motion.div>

            {/* NODE */}
            <div className="node"></div>

            {/* CARD */}
            <motion.div
              className="exp-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>{exp.title}</h3>
              <p>{exp.desc}</p>
            </motion.div>

          </div>
        ))}

      </div>
    </section>
  );
}