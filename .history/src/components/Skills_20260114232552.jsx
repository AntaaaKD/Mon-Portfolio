import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      domain: "Cybersecurity & OS",
      tools: [
        { name: 'Scan & Pentest Tools', icon: '🛡️' },
        { name: 'Kali / Ubuntu Linux', icon: '🐧' },
        { name: 'Windows Server', icon: '🗄️' },
        { name: 'Metasploit', icon: '🛡️' },
        { name: 'Wireshark', icon: '🦈' }
      ]
    },
    {
      domain: "Networks & Simulation",
      tools: [
        { name: 'VLAN Deployment', icon: '🔌' },
        { name: 'DHCP / DNS / SSH', icon: '🌐' },
        { name: 'Cisco Packet Tracer', icon: '📡' },
        { name: 'GNS3', icon: '🛰️' }
      ]
    },
    {
      domain: "Programming & Web Development",
      tools: [
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'React', icon: '⚛️' },
        { name: 'HTML5 / CSS3', icon: '💻' }
      ]
    },
    {
      domain: "Data & Infrastructure",
      tools: [
        { name: 'Machine Learning', icon: '🧠' },
        { name: 'SQL', icon: '📊' },
        { name: 'Docker', icon: '🐳' },
        { name: 'VMware / Virtualbox', icon: '🖥️' },
        { name: 'GitHub', icon: '🐙' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20 text-cyan-400 uppercase tracking-widest">
          Skills & <span className="text-white">Technologies</span>
        </h2>

        <div className="space-y-20">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Titre du domaine bien centré */}
              <h3 className="text-2xl font-bold mb-10 text-white border-b-2 border-cyan-400 pb-2 px-6">
                {category.domain}
              </h3>

              {/* Grille des outils centrée */}
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {category.tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-[#112240] p-6 rounded-2xl border border-cyan-900/40 flex flex-col items-center justify-center w-40 h-40 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <h4 className="text-xs font-semibold text-gray-200 text-center uppercase tracking-tight">
                      {tool.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;