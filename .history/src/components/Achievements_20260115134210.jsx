import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      date: "In Press - November 2025",
      title: "Scientific Publication: Android App Security",
      institution: "17th EAI AFRICOMM Conference",
      description: "Co-authored the research paper: 'On the security of pre-installed Android apps in low-cost devices'. Study conducted in collaboration with University of Luxembourg (SnT).",
      isResearch: true,
      link: "https://orbilu.uni.lu/handle/10993/66902"
    },
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
          <h2 className="text-5xl font-extrabold tracking-tight">
            Latest <span className="text-[#7d1e68]">Achievements</span>
            
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#7d1e68] to-transparent mx-auto mt-4 rounded-full"></div>
          </h2>
        </div>

        <div className="relative">
          {/* LIGNE EN DÉGRADÉ */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-[#7d1e68] via-cyan-600 to-transparent rounded-full opacity-50"></div>

          {achievements.map((item, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-24 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              <div className="hidden md:block w-5/12"></div>

              {/* POINT DE LA TIMELINE */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a192f] border-[3px] border-[#7d1e68] z-20 shadow-[0_0_15px_rgba(34,211,238,0.8)] flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-[#7d1e68]"></div>
              </div>

              {/* CARTE */}
              <div className="w-full md:w-5/12 ml-12 md:ml-0 bg-[#241140] p-8 rounded-2xl border border-cyan-900/50 hover:border-[#7d1e68]/50 transition-all duration-500 shadow-2xl group relative overflow-hidden">
                {item.isResearch && (
                  <div className="absolute top-0 right-0 bg-[#7d1e68] text-[#0a192f] text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">
                    Research
                  </div>
                )}
                
                <span className="text-[#7d1e68] font-mono text-xs font-bold uppercase block mb-2">{item.date}</span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7d1e68] transition-colors">{item.title}</h3>
                <h4 className="text-[#74318b] text-sm italic mb-4">{item.institution}</h4>
                <p className="text-gray-300 font-light text-[15px] mb-4">{item.description}</p>

                {/* --- ICI C'EST LE BOUTON QUE TU CHERCHAIS --- */}
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#7d1e68] hover:text-white transition-colors group/link"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest border-b border-[#7d1e68] group-hover/link:border-white pb-1">
                      Read Publication
                    </span>
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M5 12h14" />
                    </svg>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;