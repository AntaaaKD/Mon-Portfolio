import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-custom-blue text-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre de la section */}
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Colonne Image avec l'effet de halo bleu */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <img 
                src="/image1.png" 
                alt="Anta DIOP" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne Texte */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl mb-4">
              Hello, I'm <span className="text-cyan-400 font-bold">Anta DIOP</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a Cybersecurity Systems Engineer, graduated from the École Supérieure Polytechnique of Dakar.
              My journey began with a degree in Telecoms and Networks, leading me to specialize in IT Security.
              I am also deeply interested in Artificial Intelligence, especially its role in enhancing cybersecurity.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Alongside my engineering path, I founded <span className="text-cyan-400 font-bold"> Sa Muse: Awaken the muse within you</span>. 
              What started as a creative hobby: crochet, evolved into a bespoke clothing business. This venture allows me to channel my creativity while managing an entrepreneurial project I truly love.
            </p>

            {/* Cartes de statistiques (comme sur le modèle) */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-[#112240] p-4 rounded-xl border border-cyan-100 w-32">
                <p className="text-cyan-400 font-bold text-xl">4+ years</p>
                <p className="text-xs text-gray-400">Experience</p>
              </div>
              <div className="bg-[#112240] p-4 rounded-xl border border-cyan-900 w-32">
                <p className="text-cyan-400 font-bold text-xl">7+ projects</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
              <div className="bg-[#112240] p-4 rounded-xl border border-cyan-900 w-32">
                <p className="text-cyan-400 font-bold text-xl">Certifed</p>
                <p className="text-xs text-gray-400">Professional</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;