import React from 'react';

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "votre.email@esp.sn", // À remplacer
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002 2H5a2 2 0 00-2-2zm14-11V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10",
      link: "mailto:votre.email@esp.sn"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/votre-profil", // À remplacer
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
      link: "https://linkedin.com/in/votre-profil"
    },
    {
      name: "GitHub",
      value: "github.com/votre-username", // À remplacer
      icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.458-1.11-1.458-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z",
      link: "https://github.com/votre-username"
    }
  ];

  return (
    <section id="contact" className="w-full py-24 bg-transparent text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-6">Let's <span className="text-white">Connect</span></h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          I am currently open to new opportunities and collaborations in 
          <span className="text-cyan-400 font-bold"> Cybersecurity</span> and 
          <span className="text-cyan-400 font-bold"> Artificial Intelligence</span>. 
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#112240] p-8 rounded-2xl border border-cyan-900/30 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-400 transition-colors">
                <svg className="w-6 h-6 text-cyan-400 group-hover:text-[#0a192f] fill-current" viewBox="0 0 24 24">
                  <path d={contact.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{contact.name}</h3>
              <p className="text-gray-400 text-sm truncate">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-cyan-900/30 text-gray-500 text-sm italic">
          &copy; {new Date().getFullYear()} — Designed & Built with ❤️ by BS
        </div>
      </div>
    </section>
  );
};

export default Contact;