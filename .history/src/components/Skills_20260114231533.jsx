import React from 'react';
// Importe tes icônes ici, par exemple: import { SiPython, SiWireshark } from 'react-icons/si';

const Skills = () => {
  const skillList = [
    { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
    { name: 'Wireshark', icon: '🦈', color: 'text-blue-400' },
    { name: 'Linux', icon: '🐧', color: 'text-white' },
    { name: 'Metasploit', icon: '🛡️', color: 'text-red-500' },
    { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
    { name: 'SQL Injection', icon: '💉', color: 'text-green-400' },
    { name: 'SIEM', icon: '📊', color: 'text-purple-400' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
  ];

  return (
    <section id="skills" className="py-40 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre calqué sur le modèle */}
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Skills & <span className="text-white">Technologies</span>
        </h2>

        {/* Grille de compétences */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillList.map((skill, index) => (
            <div 
              key={index}
              className="bg-[#112240] p-8 rounded-2xl border border-cyan-900/30 flex flex-col items-center justify-center transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 group"
            >
              <div className={`text-5xl mb-4 filter drop-shadow-md group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className={`font-bold text-lg ${skill.color}`}>
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