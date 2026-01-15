import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">SA</h1> {/* Ton logo, comme "BS" dans l'exemple */}
        <ul className="flex space-x-6 text-white">
          <li><a href="#home" className="hover:text-cyan-300">Accueil</a></li>
          <li><a href="#about" className="hover:text-cyan-300">À propos</a></li>
          <li><a href="#achievements" className="hover:text-cyan-300">Réalisations</a></li>
          <li><a href="#projects" className="hover:text-cyan-300">Projets</a></li>
          <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;