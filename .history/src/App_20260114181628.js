import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className="min-h-screen bg-custom-blue text-white">  {/* Ici, utilise bg-custom-blue */}
      <Navbar />
      <main className="container mx-auto p-4">
        <section id="home" className="py-16">Placeholder Accueil</section>
        <section id="about" className="py-16">Placeholder À propos</section>
        <section id="achievements" className="py-16">Placeholder Réalisations</section>
        <section id="projects" className="py-16">Placeholder Projets</section>
        <section id="contact" className="py-16">Placeholder Contact</section>
      </main>
    </div>
  );
}

export default App;