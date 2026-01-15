import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Networks & Supervision",
      skills: [
        { name: 'Network services (DHCP, DNS, SSH...)', icon: '🌐' },
        { name: 'VLAN deployment', icon: '🔌' },
        { name: 'Cisco Packet Tracer / GNS3', icon: '📡' }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: 'Scan & Pentest tools', icon: '🛡️' },
        { name: 'IT Security Knowledge', icon: '🔐' },
        { name: 'Kali Linux', icon: '🐉' }
      ]
    },
    {
      title: "Dev & Data",
      skills: [
        { name: 'Python / JavaScript', icon: '🐍' },
        { name: 'HTML / CSS', icon: '💻' },
        { name: 'Machine Learning basics', icon: '🧠' },
        { name: 'SQL', icon: '🗄️' }
      ]
    },
    {
      title: "Systems & Cloud",
      skills: [
        { name: 'Linux (Ubuntu) / Windows Server', icon: '🐧' },
        { name: 'Docker / Virtualization', icon: '🐳' },
        { name: 'Low Code / No Code', icon: '⚙️' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & <span className="text-cyan-400">Technologies</span>
        </h2>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-6 text-gray-400 border-l-4 border-cyan-400 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-[#112240] p-6 rounded-xl border border-cyan-900/30 flex items-center gap-4 transition-all hover:border-cyan-400 hover:bg-[#1d335a] group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-200">
                      {skill.name}
                    </span>
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