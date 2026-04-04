import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./css/hero.css";

export default function Hero() {
  // Use useMemo to ensure roles array is stable for useEffect dependencies
  const roles = useMemo(
    () => [
      "Software Developer",
      "Spring Boot Developer",
      "Django Developer",
      "React Developer"
    ],
    []
  );

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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
  }, [charIndex, roleIndex, roles]); // ✅ include roles

  // Mouse Glow
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Cursor Glow */}
      <div className="cursor-glow"></div>

      {/* Particles */}
      <div className="particles"></div>

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Name */}
        <motion.h1
          className="hero-title gradient-text"
          variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}
        >
          Hey..!, I'm R Rohith
        </motion.h1>

        {/* Typing Role */}
        <motion.h2
          className="hero-role"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {text}
          <span className="cursor">|</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="hero-desc"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          I build scalable backend systems with <span>Django</span> & <span>Spring Boot</span>,
          and craft modern UI using <span>React</span>.
          <br />
          Focused on performance, clean code, and impactful solutions.
        </motion.p>

        {/* Stack */}
        <motion.div
          className="hero-stack"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          Java • Spring Boot • Django • React • AWS • SQL • DSA
        </motion.div>
      </motion.div>
    </section>
  );
}