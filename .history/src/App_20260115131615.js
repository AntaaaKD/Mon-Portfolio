import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';  
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Community from './components/Community';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="relative bg-[#000000a7] min-h-screen text-white overflow-x-hidden">
      {/* 1. Fond de particules */}
      <ParticlesBackground />

      {/* 2. Contenu principal avec un z-index pour être au-dessus des particules */}
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
      </div> {/* <-- Cette balise fermait mal avant */}
    </div>
  );
}

export default App;