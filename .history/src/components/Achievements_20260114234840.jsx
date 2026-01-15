import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      date: "Octobre 2025",
      title: "Dynamic Analysis of Android Applications ",
      institution: "École Supérieure Polytechnique de Dakar (ESP)",
      description: "Travail de recherche approfondi sur l'intégration de modèles d'apprentissage automatique pour la détection proactive d'intrusions et l'automatisation de la réponse aux incidents dans les infrastructures critiques.",
    },
    {
      date: "Septembre 2024",
      title: "Participation au Deep Learning Indaba 2024",
      institution: "Événement Africain sur l'IA",
      description: "Immersion au cœur de l'un des plus grands événements africains sur l'IA. Cette expérience a permis d'explorer des applications concrètes de l'IA pour renforcer la sécurité informatique et d'échanger avec des experts internationaux.",
    },
    {
      date: "2024",
      title: "Concours LAMBTech : CyberSecurity - 3e place",
      institution: "Compétition Technique",
      description: "Compétition intense sur plusieurs week-ends axée sur le hacking éthique : accès et sécurisation de machines distantes et exploitation de failles web. Collaboration d'équipe efficace menant à la 3e place du podium.",
    },
    {
      date: "Juin 2022 – Juillet 2022",
      title: "Projet de Fin de Cycle : Renforcement de la Sécurité Réseau",
      institution: "École Supérieure Polytechnique de Dakar (ESP)",
      description: "Mise en place d'une infrastructure réseau sécurisée intégrant des listes de contrôle d'accès (ACL), des tunnels VPN chiffrés et des mécanismes d'authentification robuste (AAA).",
    }
  ];

  return (
    <section id="achievements" className="w-full py-20 bg-[#0a192f] text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Titre style image 5 */}
       <h2 className="text-5xl font-bold text-center mb-20">
          Latest <span className="text-cyan-400">Achievements</span>
        </h2>

        <div className="relative border-l-2 border-cyan-500/50 ml-4 md:ml-10">
          {achievements.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative">
              {/* Le point sur la ligne (style image 5) */}
              <div className="absolute -left-[43px] mt-1.5 w-6 h-6 rounded-full bg-[#112240] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                 <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Carte de contenu (style image 5) */}
              <div className="bg-[#112240] p-8 rounded-2xl border border-cyan-900/30 shadow-xl hover:border-cyan-400/50 transition-all duration-300">
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider italic">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold mt-2 text-white">
                  {item.title}
                </h3>
                <h4 className="text-cyan-500 font-medium text-sm mt-1 mb-4 italic">
                  {item.institution}
                </h4>
                <p className="text-gray-300 leading-relaxed text-base">
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