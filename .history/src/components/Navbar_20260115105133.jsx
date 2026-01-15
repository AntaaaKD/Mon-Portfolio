import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Détecter le défilement pour changer l'apparence
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Community Engagement", href: "#community" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 1. NAVBAR CLASSIQUE (Visible en haut de page) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black text-cyan-400">A<span className="text-white">.</span></div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-cyan-400 transition-colors uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. ICONE MENU FLOTTANT (Apparaît au scroll) */}
      <div className={`fixed top-6 right-6 z-[60] transition-all duration-500 ${
        isScrolled ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-cyan-500 text-[#0a192f] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:bg-white transition-all active:scale-90"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 3. MENU OVERLAY (Plein écran quand on clique sur l'icône) */}
      <div className={`fixed inset-0 z-[55] bg-[#0a192f]/fb backdrop-blur-xl transition-all duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;