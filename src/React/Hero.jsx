import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./css/hero.css";

function DeveloperIllustration() {
  return (
    <svg
      className="developer-svg"
      viewBox="0 0 640 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Boy developer illustration"
    >
      <line x1="40" y1="365" x2="590" y2="365" stroke="currentColor" strokeWidth="3" opacity="0.18" />
      <line x1="70" y1="365" x2="250" y2="365" stroke="currentColor" strokeWidth="3" />

      <circle cx="455" cy="150" r="95" fill="currentColor" opacity="0.04" />
      <circle cx="500" cy="250" r="45" fill="currentColor" opacity="0.03" />

      <line x1="170" y1="210" x2="335" y2="210" stroke="currentColor" strokeWidth="3" />
      <line x1="188" y1="210" x2="178" y2="365" stroke="currentColor" strokeWidth="3" />
      <line x1="318" y1="210" x2="330" y2="365" stroke="currentColor" strokeWidth="3" />

      <rect x="360" y="135" width="135" height="90" rx="14" stroke="currentColor" strokeWidth="3" />
      <line x1="428" y1="225" x2="428" y2="246" stroke="currentColor" strokeWidth="3" />
      <rect x="390" y="246" width="76" height="10" rx="5" fill="currentColor" opacity="0.9" />

      <path d="M395 175L416 156" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M395 175L416 194" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M461 156L440 175" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M461 194L440 175" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M425 156L434 194" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      <rect x="220" y="168" width="54" height="34" rx="5" stroke="currentColor" strokeWidth="3" />
      <path d="M208 204H285" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <rect x="286" y="181" width="20" height="24" rx="4" stroke="currentColor" strokeWidth="3" />
      <path d="M306 187C314 187 314 199 306 199" stroke="currentColor" strokeWidth="3" />

      <line x1="110" y1="190" x2="110" y2="365" stroke="currentColor" strokeWidth="3" />
      <line x1="160" y1="190" x2="160" y2="298" stroke="currentColor" strokeWidth="3" />
      <line x1="110" y1="190" x2="150" y2="190" stroke="currentColor" strokeWidth="3" />
      <line x1="110" y1="240" x2="150" y2="240" stroke="currentColor" strokeWidth="3" />

      <circle cx="175" cy="108" r="29" stroke="currentColor" strokeWidth="3" />

      <path
        d="M147 104C150 76 196 66 208 95C206 80 199 69 187 64C168 57 147 74 147 104Z"
        fill="currentColor"
      />
      <path
        d="M149 92C155 84 162 81 170 82"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="166" cy="108" r="1.8" fill="currentColor" />
      <circle cx="183" cy="108" r="1.8" fill="currentColor" />
      <path d="M174 111C171 116 171 120 174 122" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M166 127C170 130 177 130 183 126" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      <line x1="170" y1="136" x2="170" y2="148" stroke="currentColor" strokeWidth="3" />
      <line x1="181" y1="136" x2="181" y2="148" stroke="currentColor" strokeWidth="3" />

      <path
        d="M145 162C152 150 164 145 176 145C191 145 205 152 213 166L227 246H138L145 162Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      <path d="M202 176C224 184 239 194 258 202" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M150 181C172 182 188 189 210 198" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <path
        d="M140 246H227C230 275 226 300 214 323H155C145 301 139 275 140 246Z"
        fill="currentColor"
      />

      <path d="M170 323L179 365" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M179 365H201" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <path d="M214 323C228 338 242 349 257 357" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M257 357H278" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <rect x="508" y="120" width="82" height="48" rx="14" stroke="currentColor" strokeWidth="3" />
      <path d="M531 145L544 133" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M531 145L544 157" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M567 133L554 145" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M567 157L554 145" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      <rect x="505" y="205" width="92" height="56" rx="16" stroke="currentColor" strokeWidth="3" />
      <line x1="527" y1="227" x2="578" y2="227" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="527" y1="242" x2="566" y2="242" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <circle cx="515" cy="310" r="9" stroke="currentColor" strokeWidth="3" />
      <circle cx="560" cy="322" r="12" stroke="currentColor" strokeWidth="3" />
      <circle cx="538" cy="285" r="6" fill="currentColor" />
    </svg>
  );
}

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
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const popupRef = useRef(null);
  const illustrationWrapRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.35,
  });

  const cardY = useTransform(smoothProgress, [0, 1], [0, 55]);
  const cardOpacity = useTransform(smoothProgress, [0, 0.9], [1, 0.78]);

  const leftY = useTransform(smoothProgress, [0, 1], [0, 28]);
  const rightY = useTransform(smoothProgress, [0, 1], [0, 42]);
  const rightScale = useTransform(smoothProgress, [0, 1], [1, 0.975]);
  const rightOpacity = useTransform(smoothProgress, [0, 0.9], [1, 0.88]);
  const leftBlur = useTransform(smoothProgress, [0, 0.9], ["blur(0px)", "blur(1.8px)"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 55);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1400);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, roles]);

  useEffect(() => {
    if (isMobile) return;

    const glow = document.querySelector(".cursor-glow");

    const move = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }

      if (illustrationWrapRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        illustrationWrapRef.current.style.setProperty("--mx", `${x}px`);
        illustrationWrapRef.current.style.setProperty("--my", `${y}px`);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

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

  const smooth = { type: "spring", stiffness: 70, damping: 18 };

  const cardMotionStyle = isMobile
    ? { opacity: 1 }
    : { y: cardY, opacity: cardOpacity };

  const leftMotionStyle = isMobile
    ? {}
    : { y: leftY, filter: leftBlur };

  const rightMotionStyle = isMobile
    ? {}
    : { y: rightY, scale: rightScale, opacity: rightOpacity };

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      {!isMobile && <div className="cursor-glow" />}
      <div className="particles" />

      <motion.div className="hero-card" style={cardMotionStyle}>
        <div className="hero-main">
          <motion.div
            className="hero-left"
            style={leftMotionStyle}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              className="hero-badge"
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: smooth },
              }}
            >
              Available for freelance & full-time roles
            </motion.div>

            <motion.h1
              className="hero-title gradient-text"
              variants={{
                hidden: { opacity: 0, y: 26, filter: "blur(12px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: smooth },
              }}
            >
              Hi, I&apos;m Rohith.
            </motion.h1>

            <motion.h2
              className="hero-role"
              variants={{
                hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: smooth },
              }}
            >
              {text}
              <span className="cursor">|</span>
            </motion.h2>

            <motion.p
              className="hero-desc"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: smooth },
              }}
            >
              I build scalable backend systems with <span>Django</span> and{" "}
              <span>Spring Boot</span>, and craft modern interfaces with{" "}
              <span>React</span>. Focused on performance, readability, and
              production-ready solutions.
            </motion.p>

            <motion.div
              className="hero-stack"
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: smooth },
              }}
            >
              Java • Spring Boot • Python • Django • React • AWS • SQL • DSA
            </motion.div>

            <motion.div
              className="hero-buttons"
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: smooth },
              }}
            >
              <a href="/Rohith.Resume.pdf" download className="btn hire-btn">
                Download Resume
              </a>

              <button
                type="button"
                className="btn talk-btn"
                onClick={() => setShowPopup(true)}
              >
                Let&apos;s Talk ↗
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right"
            ref={illustrationWrapRef}
            style={rightMotionStyle}
            initial={
              isMobile
                ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, x: 30, scale: 0.97, filter: "blur(10px)" }
            }
            animate={
              isMobile
                ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
                : undefined
            }
            whileInView={
              !isMobile
                ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
                : undefined
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={smooth}
          >
            <div className="hero-illustration">
              <DeveloperIllustration />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {showPopup && (
        <div className="contact-popup">
          <div className="popup-content glass" ref={popupRef}>
            <h3>Let&apos;s Connect</h3>

            <div className="contact-links">
              <a
                href="https://wa.me/919744093170"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>

              <a
                href="https://www.instagram.com/rohith.officia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>

              <a
                href="mailto:rohith.officia@gmail.com?subject=Let's%20Connect&body=Hi%20Rohith%2C"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=rohith.officia@gmail.com&su=Let's%20Connect&body=Hi%20Rohith%2C",
                    "_blank"
                  );
                }}
              >
                <i className="fas fa-envelope"></i> Email
              </a>

              <a
                href="https://outlook.live.com/mail/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-paper-plane"></i> Outlook
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}