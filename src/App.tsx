import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import useSmoothScroll from "./hooks/useSmoothScroll";
import GalaxyBackground from "./background/GalaxyBackground";
import CursorGlow from "./components/CursorGlow";
import ScrollReveal from "./animation/ScrollReveal";


function App() {

  
  const [showPortfolio, setShowPortfolio] = useState(false);
  useSmoothScroll();

  if (!showPortfolio) {
    return <IntroScreen onEnter={() => setShowPortfolio(true)} />;
  }

  return (
    <main className="relative min-h-screen">
      <CursorGlow />
      <GalaxyBackground/>
      <div className="pointer-events-none fixed inset-0 opacity-50">
        <div className="absolute left-8 top-24 h-72 w-72 rounded-full bg-[var(--primary)] blur-3xl" />
        <div className="absolute right-8 top-40 h-72 w-72 rounded-full bg-[var(--tertiary)] blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-72 w-72 rounded-full bg-[var(--secondary)] blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <About />
    <ScrollReveal direction="left">
      <Skills />
    </ScrollReveal>
      <Projects />
    <ScrollReveal direction="right">
      <Journey />
    </ScrollReveal>
    <ScrollReveal direction="zoom">
      <Contact />
    </ScrollReveal>
    
      <Footer />
    </main>
  );
}

export default App;