import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./css/about.css";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-wrapper">

        {/* LEFT */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="about-label">
            ABOUT
          </p>


          <h2 className="about-title">
            I turn logic
            <br />
            into reliable
            <br />
            <span>software.</span>
          </h2>


          <p className="about-description">

            I’m <strong>R Rohith</strong>,
            a backend-focused software engineer
            building secure, scalable,
            and production-ready applications.

            <br /><br />

            My expertise includes
            <span> Spring Boot</span>,
            <span> Django</span>,
            <span> React</span>,
            <span> SQL</span>,
            and cloud-ready architectures.

            <br /><br />

            I enjoy transforming
            complex business ideas
            into clean engineering systems.

          </p>


          <div className="about-tech">

            <span>Java</span>
            <span>Spring</span>
            <span>Django</span>
            <span>React</span>
            <span>AWS</span>
            <span>SQL</span>
            <span>Docker</span>
            <span>DSA</span>

          </div>



          <div className="about-stats">

            <div>
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>1.7+</h3>
              <p>Years</p>
            </div>

            <div>
              <h3>∞</h3>
              <p>Learning</p>
            </div>

          </div>



          <div className="about-actions">

            <a
              href="/resume.pdf"
              download
              className="resume-btn"
            >
              <span>Resume</span>
              <span>↓</span>
            </a>


           <Link
                to="/journey"
                className="education-btn"
              >
                <span>Know More</span>
                <span>→</span>
              </Link>

          </div>

        </motion.div>



        {/* RIGHT */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <div className="about-card">

            <h3 className="card-title">
              WHAT I BUILD
            </h3>


            <div className="what-i-do-grid">


              <div className="what-box">
                <h4>Backend Systems</h4>
                <p>
                  Secure, scalable, production-ready architectures.
                </p>
              </div>


              <div className="what-box">
                <h4>Frontend Products</h4>
                <p>
                  Fast, responsive, modern user experiences.
                </p>
              </div>


              <div className="what-box">
                <h4>Cloud Deployment</h4>
                <p>
                  Containerized apps and production infrastructure.
                </p>
              </div>


              <div className="what-box">
                <h4>Database Design</h4>
                <p>
                  Optimized queries, scalable persistence.
                </p>
              </div>


            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}