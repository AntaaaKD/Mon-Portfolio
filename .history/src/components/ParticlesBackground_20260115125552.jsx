import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        background: {
            color: { value: "transparent" }, // On garde ton fond bleu sombre du CSS
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // Crée un lien avec le curseur
                },
            },
            modes: {
                grab: {
                    distance: 200,
                    links: { opacity: 0.5 }
                },
            },
        },
        particles: {
            color: { value: "#ffffff" }, // Teste avec du blanc pur pour voir si elles apparaissent
            number: {
                density: { 
                    enable: true, 
                    area: 1000 // Augmente la zone
                },
                value: 150, // Augmente le nombre pour le test
            },
            opacity: { value: 0.8 }, // Augmente l'opacité
            // ... reste du code
        }
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                outModes: { default: "out" },
            },
            number: {
                density: { enable: true, area: 800 },
                value: 80, // Nombre de points
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <Particles 
                id="tsparticles" 
                options={options} 
                className="fixed inset-0 -z-10 w-full h-full pointer-events-none" 
            />
        );
    }

    return null;
};

export default ParticlesBackground;