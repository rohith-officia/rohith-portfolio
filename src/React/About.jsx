import React from "react";
import { motion } from "framer-motion";
import "./css/about.css";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-wrapper">

        {/* LEFT SIDE */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-description">
            I’m <strong>R Rohith</strong>, a software developer focused on designing and building
            scalable backend systems and modern web applications.
            <br /><br />
            I specialize in <span>Spring Boot</span> and <span>Django</span> for backend development,
            where I design RESTful APIs, handle business logic, and build efficient data-driven systems.
            <br /><br />
            On the frontend, I work with <span>React</span> to create responsive and user-friendly interfaces.
            <br /><br />
            I also have experience with <span>AWS</span>, <span>SQL</span>, and strong fundamentals in
            <span> Data Structures & Algorithms</span>.
          </p>

          {/* Tech Stack */}
          <div className="about-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Django</span>
            <span>Python</span>
            <span>React</span>
            <span>AWS</span>
            <span>SQL</span>
            <span>DSA</span>
            <span>Docker</span>
            <span>GIT</span>
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Commitment</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Learning</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-card">

            <h3 className="card-title">What I Do</h3>

            <div className="what-i-do-grid">

              <div className="what-box">
                <h4>Backend Development</h4>
                <p>Build scalable systems using Spring Boot & Django</p>
              </div>

              <div className="what-box">
                <h4>API Design</h4>
                <p>Design RESTful APIs and microservices</p>
              </div>

              <div className="what-box">
                <h4>Frontend Development</h4>
                <p>Create modern UI with React</p>
              </div>

              <div className="what-box">
                <h4>Database</h4>
                <p>Design and optimize SQL queries</p>
              </div>

              <div className="what-box">
                <h4>Cloud</h4>
                <p>Deploy and manage apps using AWS</p>
              </div>

              <div className="what-box">
                <h4>Problem Solving</h4>
                <p>Use DSA for efficient solutions</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}