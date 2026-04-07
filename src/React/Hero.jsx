import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import "./css/hero.css";

export default function Hero() {
  const roles = useMemo(
    () => ["Software Developer", "Spring Boot Developer", "Django Developer", "React Developer"],
    []
  );

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const heroRef = useRef(null);
  const popupRef = useRef(null);

  // Typing Effect
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles]);

  // Cursor Glow
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");
    const move = (e) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Parallax Effect
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (heroRef.current) {
        heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Close popup on click outside or scroll
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    const handleScroll = () => setShowPopup(false);

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showPopup]);

  const smooth = { type: "spring", stiffness: 60, damping: 20 };

  return (
    <section id="hero" className="hero">
      <div className="cursor-glow"></div>
      <div className="particles"></div>

      <motion.div
        ref={heroRef}
        className="hero-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
        }}
      >
        <motion.h1
          className="hero-title gradient-text"
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: smooth },
          }}
        >
          Hey..!, I'm R Rohith
        </motion.h1>

        <motion.h2
          className="hero-role"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: smooth },
          }}
        >
          {text}
          <span className="cursor">|</span>
        </motion.h2>

        <motion.p
          className="hero-desc"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: smooth },
          }}
        >
          I build scalable backend systems with <span>Django</span> & <span>Spring Boot</span>, and craft modern UI using <span>React</span>.
          <br />
          Focused on performance, clean code, and impactful solutions.
        </motion.p>

        <motion.div
          className="hero-stack"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: smooth },
          }}
        >
          Java • Spring Boot • Python • Django • React • AWS • SQL • DSA
        </motion.div>

        <motion.div
          className="hero-buttons"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            show: { opacity: 1, scale: 1, transition: smooth },
          }}
        >
          <a href="/Rohith.Resume.pdf" download className="btn hire-btn">
            Download Resume
          </a>
          <button className="btn talk-btn" onClick={() => setShowPopup(true)}>
            Let’s Talk ↗
          </button>
        </motion.div>
      </motion.div>

      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="contact-popup">
          <div className="popup-content glass" ref={popupRef}>
            <h3>Let's Connect</h3>
            <div className="contact-links">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="mailto:rohith.officia@gmail.com">
                <i className="fas fa-envelope"></i> Email
              </a>
              <a href="https://outlook.live.com/mail/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-paper-plane"></i> Outlook
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}