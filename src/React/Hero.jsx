import React from "react";
import "./css/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-role">SOFTWARE DEVELOPER</p>

        <h1 className="hero-title">
          Rohith
          <br />
          Rajan
        </h1>

       <div className="hero-bottom-left">
        <p>
          Backend-focused software developer building secure APIs, scalable systems,
          and clean full-stack applications with Spring Boot, Django, React, and SQL.
        </p>
      </div>

        <div className="hero-bottom-right">
          <span className="status">● AVAILABLE FOR WORK</span>
          <span>JAVA / PYTHON / GO-LANG</span>
          <span>SPRING BOOT / DJANGO</span>
          <span>REACT / SQL / DSA</span>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line">
          <span className="scroll-dot"></span>
        </div>
        <p>SCROLL</p>
      </div>
    </section>
  );
}