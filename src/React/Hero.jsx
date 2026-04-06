import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import "./css/hero.css";

export default function Hero() {
  const roles = useMemo(
    () => [
      "Software Developer",
      "Spring Boot Developer",
      "Django Developer",
      "React Developer",
    ],
    []
  );

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const heroRef = useRef(null);

  // 🔥 Typing Effect
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

  // 🔥 Cursor Glow
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

  // 🔥 Parallax Effect (Apple feel)
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

  const smooth = {
    type: "spring",
    stiffness: 60,
    damping: 20,
  };

  return (
    <section id="hero" className="hero">
      <div className="cursor-glow"></div>
      <div className="particles"></div>

      <motion.div
        ref={heroRef}
        className="hero-content"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {/* 🔥 TITLE */}
        <motion.h1
          className="hero-title gradient-text"
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
            },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: smooth,
            },
          }}
        >
          Hey..!, I'm R Rohith
        </motion.h1>

        {/* 🔥 ROLE */}
        <motion.h2
          className="hero-role"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: smooth,
            },
          }}
        >
          {text}
          <span className="cursor">|</span>
        </motion.h2>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          className="hero-desc"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: smooth,
            },
          }}
        >
          I build scalable backend systems with <span>Django</span> &{" "}
          <span>Spring Boot</span>, and craft modern UI using{" "}
          <span>React</span>.
          <br />
          Focused on performance, clean code, and impactful solutions.
        </motion.p>

        {/* 🔥 STACK */}
        <motion.div
          className="hero-stack"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: smooth },
          }}
        >
          Java • Spring Boot • Python • Django • React • AWS • SQL • DSA
        </motion.div>

        {/* 🔥 BUTTONS */}
        <motion.div
          className="hero-buttons"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            show: {
              opacity: 1,
              scale: 1,
              transition: smooth,
            },
          }}
        >
          <a href="/Rohith.Resume.pdf" download className="btn">
            Download Resume
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rohith.officia@gmail.com&su=Let's%20Connect"
            target="_blank"
            rel="noopener noreferrer"
            className="btn talk-btn"
          >
            Let’s Talk ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}