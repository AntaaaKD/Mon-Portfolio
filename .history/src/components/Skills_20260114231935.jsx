import React from 'react';

const Skills = () => {
  const allSkills = [
    // Cybersecurity & OS
    { name: 'Scan & Pentest Tools', icon: '🛡️' },
    { name: 'Kali / Ubuntu Linux', icon: '🐧' },
    { name: 'Windows Server', icon: '🗄️' },
    { name: 'Metasploit', icon: '🛡️' },
    
    // Networks & Simulation
    { name: 'VLAN Deployment', icon: '🔌' },
    { name: 'DHCP / DNS / SSH', icon: '🌐' },
    { name: 'Cisco Packet Tracer', icon: '📡' },
    { name: 'GNS3', icon: '🛰️' },

    // Programming & Web
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5 / CSS3', icon: '💻' },
    { name: 'Low Code / No Code', icon: '⚙️' },

    // Data & Tools
    { name: 'Machine Learning', icon: '🧠' },
    { name: 'SQL', icon: '📊' },
    { name: 'Docker', icon: '🐳' },
    { name: 'VMware / Virtualbox', icon: '🖥️' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Wireshark', icon: '🦈' }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Titre calqué sur le modèle image_41199f.png */}
        <h2 className="text-5xl font-bold mb-16 text-cyan-400">
          Skills & <span className="text-white">Technologies</span>
        </h2>

        {/* Grille d'outils individuels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-[#112240] p-6 rounded-2xl border border-cyan-900/40 flex flex-col items-center justify-center transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-200 text-center leading-tight">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;