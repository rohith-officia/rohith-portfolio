import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./css/experience.css";

const experiences = [
  { year: "2022", title: "Let's Game Tech", desc: "Started exploring game development and interactive systems." },
  { year: "2023", title: "Botroid Technology", desc: "Worked on real-world applications and improved coding practices." },
  { year: "2024 - Present", title: "Tata Consultancy Services", desc: "Built scalable backend systems using Spring Boot." },
  { year: "2024 - Present", title: "Freelancing", desc: "Delivered web apps using Springboot, Django and React." }
];

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="experience" id="experience" ref={ref}>
      <h2 className="exp-title">My Journey</h2>

      <div className="timeline">
        {/* 🔥 Animated Progress Line */}
        <motion.div className="timeline-progress" style={{ height: progressHeight }} />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`timeline-row ${isLeft ? "left" : "right"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // triggers every time row enters view
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* YEAR */}
              <motion.div
                className="year-label"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
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
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              >
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}