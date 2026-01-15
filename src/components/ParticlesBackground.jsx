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
        fullScreen: {
            enable: true,
            zIndex: 0 // On le met à 0 pour qu'il soit juste au dessus du fond bleu
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
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
            color: { value: "#ff007f" }, // BLANC pour le test
            links: {
                color: "#7000ff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: { default: "out" },
            },
            number: {
                density: { enable: true, area: 800 },
                value: 100,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (init) {
        return <Particles id="tsparticles" options={options} />;
    }

    return null;
};

export default ParticlesBackground;