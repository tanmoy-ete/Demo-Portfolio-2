import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: "#0a0a0a",
        },
        fpsLimit: 60,
        interactivity: {
          detect_on: "window",
          events: {
            onHover: {
              enable: true,
              mode: "connect", // Subtle connection effect
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 100,
              links: {
                opacity: 0.3
              },
              radius: 200
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff", // Pure white particles
          },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0.15, // Very subtle
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 0.5, // Slow, graceful movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000, // More sparse
            },
            value: 40, // Fewer particles
          },
          opacity: {
            value: 0.5, // Semi-transparent
          },
          shape: {
            type: "circle", // Only circles
          },
          size: {
            value: { min: 1, max: 2 }, // Smaller particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;