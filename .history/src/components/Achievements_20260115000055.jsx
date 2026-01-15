import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      date: "October 2025",
      title: "Master's Thesis: Dynamic Analysis of Android Applications ",
      institution: "SnT - University of Luxembourg",
      description: "Conducting a study and implementing dynamic analysis methods, supported by Artificial Intelligence, for the evaluation of preinstalled Android applications.",
    },
    {
      date: "September 2024",
      title: "Deep Learning Indaba 2024 Participant",
      institution: "Université Amadou Mahtar MBOW",
      description: "Attended one of Africa's largest AI events. Gained insights into cutting-edge AI applications for network security and connected with global industry experts.",
    },
    {
      date: "Mai 2024",
      title: "LAMBTech Competition: 3rd Place",
      institution: "Institut Informatique Business School (IIBS), Dakar",
      description: "Successfully secured and defended remote systems in an intensive ethical hacking competition. Demonstrated expertise in web vulnerability exploitation and team leadership.",
    },
    {
      date: "June 2022 - July 2022",
      title: "Undergraduate Project: Network Security Hardening",
      institution: "École Supérieure Polytechnique de Dakar (ESP)",
      description: "Architected a secure infrastructure using Cisco technologies, implementing ACLs, encrypted VPN tunnels, and robust AAA authentication mechanisms.",
    }
  ];

return (
    <section id="projects" className="w-full py-24 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre avec un style plus "Tech" */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight">
            My <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative border-l-4 border-cyan-900 ml-6 md:ml-20">
          {achievements.map((item, index) => (
            <div key={index} className="mb-16 ml-10 relative">
              
              {/* Le "Point" lumineux de la timeline */}
              <div className="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-[#0a192f] border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)] z-10">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>

              {/* Contenu de la réalisation */}
              <div className="bg-[#112240] p-8 rounded-3xl border border-cyan-900/50 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl relative group">
                {/* Petit effet de reflet au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-cyan-400 font-mono text-sm bg-cyan-400/10 px-4 py-1 rounded-full border border-cyan-400/20 mt-2 md:mt-0 self-start">
                    {item.date}
                  </span>
                </div>

                <h4 className="text-gray-400 font-medium italic mb-4">
                  {item.institution}
                </h4>

                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;