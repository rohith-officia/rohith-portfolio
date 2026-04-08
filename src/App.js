import React from "react";
import Navbar from "./React/Navbar";
import Hero from "./React/Hero";
import About from "./React/About";
import Proficiency from "./React/Proficiency";
import Experience from "./React/Experience";
import Project from "./React/Project";
import Services from "./React/Services";
import "./React/css/styles.css";


function App() {
  return (
    <>
      <Navbar />
     <div className="page-content">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Proficiency />
      <Services />
    </div>
  
    </>
  );
}

export default App;