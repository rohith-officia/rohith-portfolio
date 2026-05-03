import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./React/Navbar";
import Hero from "./React/Hero";
import About from "./React/About";
import Project from "./React/Project";
import Journey from "./React/Journey";
import Contact from "./React/Contact";
import Footer from "./React/Footer";
import Loader from "./React/Loader";

import "./React/css/styles.css";

function HomePage() {
  return (
    <Loader>
      <Navbar />
      <Hero />
      <About />
      <Project />
      {/* <Proficiency /> */}
      {/* <Services /> */}
      <Contact/>
      <Footer/>
    </Loader>
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