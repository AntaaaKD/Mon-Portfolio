import React from 'react';
import { Users, Globe, ShieldCheck, Heart } from 'lucide-react';

const Community = () => {
  const experiences = [
    {
      organization: "WiMLDS Dakar",
      role: "Secretary General",
      icon: <Users className="text-pink-400" />,
      description: "Community dedicated to supporting women in Machine Learning and Data Science. I oversee administration and ensure the smooth execution of all community activities and initiatives.",
      tags: ["Leadership", "Gender Diversity", "AI"]
    },
    {
      organization: "Cyber221",
      role: "Digital Ambassador",
      icon: <ShieldCheck className="text-cyan-400" />,
      description: "Promoting cybersecurity culture and digital education in Senegal. Focused on online safety for children and fostering responsible digital behavior among citizens.",
      tags: ["Cyber Awareness", "Education", "Digital Safety"]
    },
    {
      organization: "Galsen AI",
      role: "MeetUp & Program Organizer",
      icon: <Globe className="text-blue-400" />,
      description: "Coordinating workshops and conferences focused on AI, Big Data, and IoT. Managing logistics and collaborating with speakers to enrich the tech ecosystem in Senegal.",
      tags: ["Event Planning", "AI Outreach", "Networking"]
    },
    {
      organization: "Association Xeweul bi",
      role: "Active Member",
      icon: <Heart className="text-red-400" />,
      description: "Providing holistic support to homeless and underprivileged individuals. Working to restore dignity and social integration through essential needs assistance.",
      tags: ["Social Impact", "Volunteerism", "Community"]
    }
  ];

  return (
    <section id="community" className="w-full py-24 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-cyan-400 uppercase tracking-tighter">
            Featured <span className="text-white">Projects</span>
            
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4 rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-4 italic">Academic works at ESP Dakar</p>
        </div>       
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-l-4 border-cyan-400 pl-6">
          <h2 className="text-5xl font-extrabold tracking-tighter">
            Community <br /> <span className="text-cyan-400">Engagement</span>
          </h2>
          <p className="text-gray-400 max-w-md mt-4 md:mt-0 italic">
            Active involvement in promoting technology, cybersecurity, and social impact within the Senegalese ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-[#112240] p-8 rounded-2xl border border-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#0a192f] rounded-xl group-hover:scale-110 transition-transform shadow-inner">
                  {exp.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.organization}
                  </h3>
                  <h4 className="text-cyan-500 font-medium mb-4 italic">
                    {exp.role}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-gray-500 border border-gray-700 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;