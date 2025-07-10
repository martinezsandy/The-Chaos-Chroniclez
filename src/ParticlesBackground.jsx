// src/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the tsparticles full package
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: {
            value: 65,
            density: {
              enable: true,
              area: 800,
            },
          },
          links:{
            enable: true,
            distance:180,
          },
          color: {
            value: "#D7D6D6",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 2 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
  events: {
    onHover: {
      enable: true,
      mode: "repulse"
    },
    onClick: {
      enable: true,
      mode: "push"
    }
  },
  modes: {
    repulse: {
      distance: 100,
      duration: 0.4
    },
    push: {
      quantity: 4
    }
  }
}
,
        background: {
          color: "#000000",
        },
      }}
    />
  );
};

export default ParticlesBackground;
