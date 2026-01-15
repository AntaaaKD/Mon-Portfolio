import React from 'react';

const Projects = () => {
  const academicProjects = [
    {
      title: "Web Race Conditions: Banking App",
      description: "Designed a secure banking application to demonstrate race condition vulnerabilities. Developed attack scripts in Python to bypass balance checks and implemented server-side mutex locking for protection.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", // Image de banque/finance
      tags: ["Python", "Flask", "Security", "MySQL"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Forensic Analysis with LLMs",
      description: "Built an intelligent forensic system combining LLM Fine-Tuning and RAG. Trained the model on technical evidence to automate semantic search and report interpretation for digital investigators.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Image de cybersécurité/données
      tags: ["LLM", "RAG", "Python", "AI"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "DeepFake Detection System",
      description: "Developed a web platform using Machine Learning to identify synthesized images. Included adversarial attack testing and model hardening against evasion techniques.",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800", // Image de reconnaissance faciale/IA
      tags: ["Machine Learning", "React", "TensorFlow"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Wakhtane: Secure Messenger",
      description: "Engineered an end-to-end encrypted messaging application. Focused on secure coding practices to prevent OWASP Top 10 vulnerabilities and ensure user privacy.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800", // Image de messagerie/chat
      tags: ["Cryptography", "Node.js", "WebSockets"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "PKI Infrastructure Deployment",
      description: "Implemented a full-scale Public Key Infrastructure integrated with SSL/TLS certificates. Managed the complete certificate lifecycle and authentication protocols.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800", // Image de serveur/réseau
      tags: ["SSL/TLS", "PKI", "Networking"],
      codeLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="w-full py-24 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-cyan-400">
            Featured <span className="text-white">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {academicProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#112240] rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] bg-cyan-900/30 text-cyan-300 border border-cyan-400/20 px-3 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.codeLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0a192f] border border-cyan-800 hover:border-cyan-400 py-2 rounded-lg text-sm font-bold transition-all"
                  >
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0a192f] py-2 rounded-lg text-sm font-bold transition-all"
                  >
                    <span>Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;