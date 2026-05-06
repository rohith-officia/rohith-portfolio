import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./css/about.css";

export default function About() {

  const cards = [
    {
      no: "01",
      title: "API Engineering",
      desc:
        "Designing secure REST APIs, authentication systems, JWT flows, and scalable backend business logic.",
    },
    {
      no: "02",
      title: "Product Development",
      desc:
        "Building end-to-end digital products by connecting robust backend systems with modern frontend experiences.",
    },
    {
      no: "03",
      title: "Performance & Scale",
      desc:
        "Optimizing databases, reducing response times, and preparing applications for production deployment.",
    },
  ];

  return (
    <section id="about" className="about">

      <div className="about-head">
        <p>ABOUT ME</p>

        <h2>
          I turn logic into
          <br />
          reliable software.
        </h2>
      </div>


      <div className="about-body">

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p>
            I’m <strong>R Rohith</strong>, a software developer focused on
            secure APIs, scalable backend systems, and modern full-stack
            applications built for real-world performance.
          </p>

          <p>
            I work with <strong>Spring Boot</strong>,
            <strong> Django</strong>,
            <strong> React</strong>, and
            <strong> SQL</strong> to transform business ideas into
            production-ready software with clean architecture,
            optimized performance, and maintainable code.
          </p>

          <p>
            From authentication systems to cloud-ready platforms,
            I enjoy building software that is secure, scalable,
            and designed for long-term growth.
          </p>


          <div className="about-actions">

            <a href="rohith.resume.pdf" download className="about-btn primary-btn">
              <strong>Resume</strong>
              <span>↓</span>
            </a>

            <Link to="/journey" className="about-btn secondary-btn">
              <strong>Know More</strong>
              <span>→</span>
            </Link>

          </div>

        </motion.div>



        <div className="about-cards">
          {cards.map((item, index) => (
            <motion.div
              className="about-card"
              key={item.no}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}