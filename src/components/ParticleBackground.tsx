import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'attract',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        attract: {
          distance: 150,
          duration: 0.6,
          factor: 3,
        },
      },
    },
    particles: {
      color: {
        value: ['#A0522D', '#8B4513', '#722F37', '#654321', '#8B0000'],
      },
      links: {
        color: '#722F37',
        distance: 120,
        enable: true,
        opacity: 0.08,
        width: 0.5,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 0.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 60,
      },
      opacity: {
        value: { min: 0.05, max: 0.25 },
        animation: {
          enable: true,
          speed: 0.3,
          minimumValue: 0.05,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle'],
      },
      size: {
        value: { min: 0.8, max: 2.5 },
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.3,
          sync: false,
        },
      },
      shadow: {
        blur: 8,
        color: '#8B0000',
        enable: true,
        offset: {
          x: 0,
          y: 0,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;