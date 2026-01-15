import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
        className={`p-4 sticky top-0 z-10 transition-all duration-300 ${
            scrolled 
            ? 'bg-custom-blue bg-opacity-0 backdrop-blur-md'  // Semi-transparent (30%) + blur fort
            : 'bg-custom-blue'  // Bleu solide au top
        }`}
    >
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-text">AD</h1>
            <ul className="flex space-x-6 text-white">
            <li><a href="#home" className="hover:text-cyan-300">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-300">About</a></li>
            <li><a href="#sl" className="hover:text-cyan-300">About</a></li>
            <li><a href="#achievements" className="hover:text-cyan-300">Achievements</a></li>
            <li><a href="#projects" className="hover:text-cyan-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;