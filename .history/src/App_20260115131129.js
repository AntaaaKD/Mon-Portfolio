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
    // On garde le bleu foncé ici uniquement
    <div className="relative bg-[#0a192f] min-h-screen text-white overflow-x-hidden">
      
      {/* Les particules sont ici, juste au-dessus du fond bleu */}
      <ParticlesBackground />
      
      {/* Tout le contenu doit être en z-index supérieur */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Achievements />
          <Projects />
          <Community />
          <Contact />
        </main>
      </div>
    </div>
  );
}