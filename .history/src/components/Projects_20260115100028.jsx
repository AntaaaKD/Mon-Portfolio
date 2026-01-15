import React from 'react';

const Projects = () => {
  const academicProjects = [
    {
      title: "Web Race Conditions: Banking App",
      description: "Demonstration of race condition vulnerabilities through a simulated banking app. Includes Python attack scripts and mutex-based server protection.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Node.js","html", "Express"],
      github: "https://github.com/AntaaaKD/Web-Race-Condition"
    },
    {
      title: "Forensic Analysis with LLMs",
      description: "Intelligent forensic system using Fine-Tuning and RAG (Retrieval-Augmented Generation) to analyze technical evidence and reports.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["LLM", "RAG", "AI", "Python"],
      github: "https://github.com/votre-username/forensic-llm"
    },
    {
      title: "DeepFake Image Detection",
      description: "ML-based web platform to identify falsified images, featuring adversarial attack testing and model hardening.",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800",
      tags: ["Machine Learning", "Flask", "TensorFlow"],
      github: "https://github.com/AntaaaKD/DeepFake"
    },
    {
      title: "Wakhtane: Secure Messenger",
      description: "Encrypted messaging platform built with secure programming practices to ensure end-to-end confidentiality.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
      tags: ["Cryptography", "Node.js", "WebSockets", "Node.js"],
      github: "https://github.com/AntaaaKD/Projet_DevSecOps"
    },
    {
      title: "PKI Infrastructure Deployment",
      description: "Full-scale implementation of a Public Key Infrastructure with SSL/TLS integration for secure web services.",
      image: "https://www.netrust.net/wp-content/uploads/2024/01/shutterstock_2372133363-1.jpg",
      tags: ["PKI", "SSL/TLS", "Networking"],
      github: "https://github.com/votre-username/pki-deployment"
    }
  ];

  return (
    <section id="projects" className="w-full py-24 bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-cyan-400 uppercase tracking-tighter">
            Featured <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 italic">Academic works at ESP Dakar</p>
        </div>

        {/* Grille Flexbox pour centrer la dernière ligne */}
        <div className="flex flex-wrap justify-center gap-10">
          {academicProjects.map((project, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)] bg-[#112240] rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-cyan-300 bg-cyan-900/20 border border-cyan-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bouton GitHub */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#0a192f] border border-cyan-800 text-cyan-400 text-sm font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-500 hover:text-[#0a192f] hover:border-cyan-400 transition-all group/btn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;