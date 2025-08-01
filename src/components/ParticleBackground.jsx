import React from 'react';
import Particles from 'react-tsparticles';

export default function ParticleBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#D4AF37" },
          opacity: { value: 0.3 }
        }
      }}
    />
  );
}
