import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./css/journey.css";

export default function Journey() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const internships = [
    {
      year: "2023",
      role: "Backend Developer Intern",
      company: "Botroid Technology",
      desc: "Worked on REST APIs, SQL optimization, debugging, and backend workflows.",
    },
    {
      year: "2022",
      role: "Software Developer Intern",
      company: "Let's Game Tech",
      desc: "Contributed to feature development, backend modules, and production software delivery.",
    },
  ];

  const skills = [
    "Java",
    "Spring Boot",
    "Django",
    "React",
    "SQL",
    "PostgreSQL",
    "REST APIs",
    "Docker",
    "Git",
    "DSA",
  ];

  const certificates = [
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "NPTEL · European Open University",
    },
    {
      title: "Artificial Intelligence",
      issuer: "European Open University",
    },
    {
      title: "Java Data Structures & Algorithms",
      issuer: "Udemy · LinkedIn Learning",
    },
    {
      title: "Java Programming",
      issuer: "Udemy",
    },
    {
      title: "Git & SQL",
      issuer: "Udemy · SkillRack",
    },
    {
      title: "Digital Marketing",
      issuer: "Google",
    },
  ];

  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 4);

  return (
    <>
      <Navbar />

      <section className="journey">
        <motion.div
          className="journey-hero"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>KNOW MORE</p>

          <h1>
            My growth
            <br />
            stack.
          </h1>
        </motion.div>

        <div className="journey-wrapper">
          <motion.div
            className="journey-block work-block"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="block-head">
              <span>01</span>
              <p>WORK EXPERIENCE</p>
            </div>

            <div className="block-content">
              <h2>Software Developer</h2>
              <h3>TCS · 2024 — Present</h3>
              <p>
                Building secure enterprise applications, scalable backend APIs,
                authentication systems, and production-ready business solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="journey-block education-block"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="block-head">
              <span>02</span>
              <p>EDUCATION</p>
            </div>

            <div className="education-grid">
              <div>
                <span>Present</span>
                <h3>Master's of Computer Applications</h3>
                <p>Indira Gandhi National Open University</p>
              </div>

              <div>
                <span>2021</span>
                <h3>Bachelor's of Computer Science</h3>
                <p>Karpagam Academy of Higher Education</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="journey-block internship-block"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="block-head">
              <span>03</span>
              <p>INTERNSHIPS</p>
            </div>

            <div className="internship-list">
              {internships.map((item, index) => (
                <div className="internship-item" key={index}>
                  <span>{item.year}</span>

                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="journey-block skills-block"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="block-head">
              <span>04</span>
              <p>SKILLS</p>
            </div>

            <div className="skills-orbit">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="journey-block certificate-block"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="block-head">
              <span>05</span>
              <p>CERTIFICATES</p>
            </div>

            <div className="certificate-content">
              <motion.div layout className="certificate-grid">
                {visibleCertificates.map((cert, index) => (
                  <motion.div
                    layout
                    className="certificate-item"
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  >
                    <span>0{index + 1}</span>
                    <h3>{cert.title}</h3>
                    <p className="certificate-issuer">{cert.issuer}</p>
                  </motion.div>
                ))}
              </motion.div>

              {!showAllCertificates && (
                <div className="certificate-swipe-wrap">
                  <div className="certificate-swipe-track">
                    <motion.p
                      className="swipe-text"
                      animate={{ opacity: isSwiping ? 0 : 1 }}
                      transition={{ duration: 0.22 }}
                    >
                      Swipe to reveal all
                    </motion.p>

                    <motion.div
                      className="certificate-swipe-thumb"
                      drag="x"
                      dragConstraints={{ left: 0, right: 246 }}
                      dragElastic={0.08}
                      dragMomentum={false}
                      dragSnapToOrigin
                      dragTransition={{
                        bounceStiffness: 280,
                        bounceDamping: 18,
                      }}
                      whileTap={{ scale: 0.94 }}
                      whileHover={{ scale: 1.04 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 22,
                      }}
                      onDragStart={() => setIsSwiping(true)}
                      onDragEnd={(event, info) => {
                        setIsSwiping(false);

                        if (info.offset.x > 120) {
                          setShowAllCertificates(true);
                        }
                      }}
                    >
                      &gt;
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}