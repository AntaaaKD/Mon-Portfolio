import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';  // Ajoute cet import
import About from './components/About';  
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Community from './components/Community';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-custom-blue text-white">
      <Navbar />
      <main>
        <Home />  {/* Remplace le placeholder */}
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Co />
        <Contact />
      </main>
    </div>
  );
}

export default App;