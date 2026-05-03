import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./React/Navbar";
import Hero from "./React/Hero";
import About from "./React/About";
import Proficiency from "./React/Proficiency";
import Project from "./React/Project";
import Services from "./React/Services";
import Journey from "./React/Journey";

import "./React/css/styles.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      {/* <Proficiency /> */}
      {/* <Services /> */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/journey" element={<Journey />} />
    </Routes>
  );
}

export default App;