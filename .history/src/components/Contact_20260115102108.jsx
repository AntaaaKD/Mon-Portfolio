import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "Soxna Anta", 
      icon: <Mail size={28} />,
      link: "mailto:soxnaanta844@gmail.com",
      color: "hover:text-red-400"
    },
    {
      name: "LinkedIn",
      value: "Anta DIOP",
      icon: <Linkedin size={28} />,
      link: "https://www.linkedin.com/in/anta-diop-2332092a1/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      value: "AntaaaKD",
      icon: <Github size={28} />,
      link: "https://github.com/AntaaaKD",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <section id="contact" className="w-full py-24 bg-transparent text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-6 tracking-tighter">
          Let's <span className="text-white">Connect</span>
        </h2>
        
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          I'm always open to discussing <span className="text-cyan-400">Cybersecurity</span> research, 
          AI projects, or professional opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#112240] p-10 rounded-3xl border border-cyan-900/30 transition-all duration-300 group shadow-xl flex flex-col items-center hover:border-cyan-400/50 hover:-translate-y-3`}
            >
              {/* Icône avec cercle de fond */}
              <div className="w-16 h-16 bg-[#0a192f] rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-[#0a192f] transition-all duration-300 shadow-inner">
                {contact.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">{contact.name}</h3>
              <p className="text-gray-400 text-sm mb-4 break-all">{contact.value}</p>
              
              {/* Petit indicateur d'action */}
              <div className="flex items-center text-xs font-bold text-cyan-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Contact Me</span>
                <ExternalLink size={12} className="ml-2" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer simple */}
        <div className="mt-32 pt-10 border-t border-cyan-900/20 text-gray-500 text-sm">
          <p>© {} — Built with React & Tailwind</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;