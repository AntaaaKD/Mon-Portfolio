import React from 'react';

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1> Hi, I'm <h className="text-6xl font-bold text-cyan-400 mb-4">Soxna Anta</h1>
      <h2 className="text-3xl text-cyan-300 mb-6">Passionné de Cybersécurité</h2>
      <p className="text-lg mb-8 max-w-2xl">Full-stack developer passionné par la création d'expériences web esthétiques et fonctionnelles en utilisant des technologies modernes, avec un focus sur la cybersécurité.</p>
      <div className="flex space-x-4">
        <a href="#projects" className="bg-cyan-500 text-custom-blue px-6 py-3 rounded-full hover:bg-cyan-400 transition">Voir Mes Projets</a>
        <a href="/cv.pdf" download className="bg-cyan-500 text-custom-blue px-6 py-3 rounded-full hover:bg-cyan-400 transition">Télécharger CV</a>
      </div>
    </section>
  );
};

export default Home;