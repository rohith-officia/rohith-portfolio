// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./css/projects.css";

// const projects = [
//   {
//     name: "Portfolio Website",
//     desc: "Modern animated portfolio with smooth UI and interactions.",
//     tech: ["React", "Framer Motion", "CSS"],
//     git: "https://github.com/rohith-officia/rohith-portfolio",
//   },
//   {
//     name: "Turf Booking System",
//     desc: "Booking platform with authentication and slot management.",
//     tech: ["Django", "JWT", "SQL"],
//     git: "https://github.com/rohith-officia/Turf-management",
//   },
//   {
//     name: "News Aggregator API",
//     desc: "REST API to fetch categorized and filtered news data.",
//     tech: ["Django", "REST API"],
//     git: "https://github.com/rohith-officia/News-Aggregator",
//   },
//   {
//     name: "Grievance Redressal System",
//     desc: "Full-stack complaint system with tracking and communication.",
//     tech: ["Spring Boot", "PostgreSQL", "JWT"],
//     git: "https://github.com/rohith-officia/grievance-redressal-system",
//   },
// ];

// export default function Projects() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     let isDragging = false;
//     let startX, scrollLeft;

//     const mouseDown = (e) => {
//       isDragging = true;
//       startX = e.pageX - container.offsetLeft;
//       scrollLeft = container.scrollLeft;
//     };
//     const mouseUp = () => { isDragging = false; };
//     const mouseLeave = () => { isDragging = false; };
//     const mouseMove = (e) => {
//       if (!isDragging) return;
//       e.preventDefault();
//       const x = e.pageX - container.offsetLeft;
//       const walk = (x - startX) * 2;
//       container.scrollLeft = scrollLeft - walk;
//     };

//     container.addEventListener("mousedown", mouseDown);
//     container.addEventListener("mouseup", mouseUp);
//     container.addEventListener("mouseleave", mouseLeave);
//     container.addEventListener("mousemove", mouseMove);

//     // Infinite scroll
//     const step = () => {
//       if (!isDragging) {
//         container.scrollLeft += 1;
//         if (container.scrollLeft >= container.scrollWidth / 2) {
//           container.scrollLeft = 0;
//         }
//       }
//       requestAnimationFrame(step);
//     };
//     step();

//     return () => {
//       container.removeEventListener("mousedown", mouseDown);
//       container.removeEventListener("mouseup", mouseUp);
//       container.removeEventListener("mouseleave", mouseLeave);
//       container.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   // Duplicate projects for seamless loop
//   const loopedProjects = [...projects, ...projects];

//   return (
//     <section id="project" className="projects"> 
//       <h2 className="projects-title">My Work</h2>

//       <div className="projects-scroll" ref={scrollRef}>
//         {loopedProjects.map((project, i) => (
//           <motion.div
//             key={i}
//             className="project-card"
//           >
//             <div className="card-content">
//               <div className="tags">
//                 {project.tech.map((t, j) => (
//                   <span key={j}>{t}</span>
//                 ))}
//               </div>
//               <h3>{project.name}</h3>
//               <p>{project.desc}</p>
//               <a
//                 href={project.git}
//                 target="_blank"
//                 rel="noopener noreferrer" // ✅ Fix
//                 className="view-btn"
//               >
//                 View Code
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./css/projects.css";

const projects = [
  {
    name: "Portfolio Website",
    desc: "Modern animated portfolio with smooth UI and interactions.",
    tech: ["React", "Framer Motion", "CSS"],
    git: "https://github.com/rohith-officia/rohith-portfolio",
  },
  {
    name: "Turf Booking System",
    desc: "Booking platform with authentication and slot management.",
    tech: ["Django", "JWT", "SQL"],
    git: "https://github.com/rohith-officia/Turf-management",
  },
  {
    name: "News Aggregator API",
    desc: "REST API to fetch categorized and filtered news data.",
    tech: ["Django", "REST API"],
    git: "https://github.com/rohith-officia/News-Aggregator",
  },
  {
    name: "Grievance Redressal System",
    desc: "Full-stack complaint system with tracking and communication.",
    tech: ["Spring Boot", "PostgreSQL", "JWT"],
    git: "https://github.com/rohith-officia/grievance-redressal-system",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let isDragging = false;
    let startX, scrollLeft;

    // Drag handlers
    const mouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };
    const mouseUp = () => { isDragging = false; };
    const mouseLeave = () => { isDragging = false; };
    const mouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mouseleave", mouseLeave);
    container.addEventListener("mousemove", mouseMove);

    // Infinite scroll
    const step = () => {
      if (!isDragging) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      requestAnimationFrame(step);
    };
    step();

    return () => {
      container.removeEventListener("mousedown", mouseDown);
      container.removeEventListener("mouseup", mouseUp);
      container.removeEventListener("mouseleave", mouseLeave);
      container.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Center card highlight effect
  useEffect(() => {
    const setCenterCard = () => {
      const container = scrollRef.current;
      const cards = container.querySelectorAll(".project-card");
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestCard = null;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        card.classList.remove("center");
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
      });

      if (closestCard) closestCard.classList.add("center");
    };

    setCenterCard();
    const container = scrollRef.current;
    container.addEventListener("scroll", () => requestAnimationFrame(setCenterCard));

    return () => container.removeEventListener("scroll", setCenterCard);
  }, []);

  // Duplicate projects for seamless loop
  const loopedProjects = [...projects, ...projects];

  return (
    <section id="project" className="projects">
      <h2 className="projects-title">My Work</h2>

      <div className="projects-scroll" ref={scrollRef}>
        {loopedProjects.map((project, i) => (
          <motion.div key={i} className="project-card">
            <div className="card-content">
              <div className="tags">
                {project.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}