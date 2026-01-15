import React from 'react';

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-4"> Hi, I'm <span className="text-cyan-500">Anta DIOP</span></h1>
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Cybersecurity Engineer</h2>
      <p className="text-lg mb-8 max-w-2xl">A Cybersecurity Engineer, I am passionate about analyzing, protecting, and detecting threats across systems and networks. I am also particularly interested in artificial intelligence applied to cybersecurity, a field that offers highly promising perspectives.</p>
      <div className="flex space-x-4">
        <a href="#projects" className="bg-cyan-500 text-custom-blue px-6 py-3 rounded-full hover:bg-cyan-400 transition">Voir Mes Projets</a>
        <a href="/cv.pdf" download className="bg-cyan-500 text-custom-blue px-6 py-3 rounded-full hover:bg-cyan-400 transition">Télécharger CV</a>
      </div>
    </section>
  );
};

export default Home;