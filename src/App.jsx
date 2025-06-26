import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Rating from "./pages/Rating"
import Service from "./pages/Service"
import Skills from "./pages/Skills"
import ParticlesBackground from "./pages/ParticlesBackground";

export default function App() {
  return (
    <div className="root">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />  
      <Service />
      <Skills />
      <Projects />
      <Rating />
      <Contact />
      <Footer />
    </div>
  )
}