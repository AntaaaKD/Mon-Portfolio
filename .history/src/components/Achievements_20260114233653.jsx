import React from 'react';

const Achievements = () => {
  const projects = [
    {
      title: "Network Infrastructure Deployment",
      category: "Networking",
      description: "Design and implementation of a secure corporate network including VLANs, DHCP services, and SSH access controls using Cisco technologies.",
      tags: ["Cisco", "VLAN", "GNS3"],
      image: "/project-network.jpg" // À remplacer par tes captures
    },
    {
      title: "AI in Threat Detection",
      category: "Cybersecurity & AI",
      description: "Research project focusing on applying Machine Learning algorithms to identify and mitigate network intrusions and anomalies.",
      tags: ["Python", "Scikit-Learn", "CyberAI"],
      image: "/project-ai.jpg"
    },
    {
      title: "Sa Muse: Business Launch",
      category: "Entrepreneurship",
      description: "Founded and managed an e-commerce brand for bespoke crochet clothing, handling everything from creative design to digital marketing.",
      tags: ["Entrepreneurship", "Management", "Design"],
      image: "/project-samuse.jpg"
    }
  ];

  return (
    <section id="achievements" className="w-full py-20 bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20">
          Latest <span className="text-cyan-400">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#112240] rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-400 transition-all duration-300 shadow-xl"
            >
              {/* Image du projet */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Contenu textuel */}
              <div className="p-6">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] bg-custom-b px-3 py-1 rounded-full border border-cyan-800 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;