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
    <section id="achievements" className="w-full py-24 bg-transparent text-white">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold">
            Latest <span className="text-cyan-400">Achievements</span>
          </h2>
        </div>

        {/* Conteneur de la Timeline */}
        <div className="relative">
          
          {/* LA LIGNE EN DÉGRADÉ : Centrée à gauche */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-cyan-600 to-transparent rounded-full"></div>

          {achievements.map((item, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-20 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* L'ESPACE VIDE (pour le côté opposé à la carte sur desktop) */}
              <div className="hidden md:block w-5/12"></div>

              {/* LE POINT : Parfaitement centré sur la ligne */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a192f] border-4 border-cyan-400 z-20 shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                <div className="w-full h-full rounded-full animate-ping bg-cyan-400 opacity-20"></div>
              </div>

              {/* LA CARTE : Design élégant */}
              <div className="w-full md:w-5/12 ml-12 md:ml-0 bg-[#112240] p-6 rounded-2xl border border-cyan-900/50 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-gray-400 text-sm italic mb-4">
                  {item.institution}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
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