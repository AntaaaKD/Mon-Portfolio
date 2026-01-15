import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';  // Ajoute cet import
import About from './components/About';  
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Community from './components/Community';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
function App() {
  return (
    <div className="relative bg-[#0a192f] min-h-screen text-white overflow-x-hidden">
      {/* Les particules en fond fixe */}
      <ParticlesBackground />
      <div className="relative z-10"> 
      <Navbar />
      <main>
        <Home />  {/* Remplace le placeholder */}
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Community />
        <Contact />
      </main>
    </div>
  );
}

export default App;