import React from "react";
import { motion } from "framer-motion";
import "./css/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="contact-label">CONTACT</p>

        <h2>
          Let’s build
          <br />
          something
          <br />
          <span>reliable.</span>
        </h2>

        <p className="contact-desc">
          Open to backend, full-stack, and product-focused software roles.
          Reach out for opportunities, collaborations, or project discussions.
        </p>
      </motion.div>

     <motion.div
  className="contact-right"
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.15 }}
>

  <a
    href="mailto:yourmail@gmail.com"
    className="contact-card"
  >
    <span>Email</span>
    <h3>Gmail</h3>
    <p>Send a message →</p>
  </a>

  <a
    href="https://wa.me/91YOURNUMBER"
    target="_blank"
    rel="noreferrer"
    className="contact-card"
  >
    <span>WhatsApp</span>
    <h3>Quick Chat</h3>
    <p>Message instantly →</p>
  </a>


  <a
    href="https://www.linkedin.com/in/your-linkedin"
    target="_blank"
    rel="noreferrer"
    className="contact-card"
  >
    <span>LinkedIn</span>
    <h3>Connect professionally</h3>
    <p>View profile →</p>
  </a>


  <a
    href="https://github.com/rohith-officia"
    target="_blank"
    rel="noreferrer"
    className="contact-card"
  >
    <span>GitHub</span>
    <h3>Explore my code</h3>
    <p>View repositories →</p>
  </a>

</motion.div>
    </section>
  );
}