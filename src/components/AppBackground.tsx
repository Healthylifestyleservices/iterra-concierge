import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const AppBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("🎯 FORCE INITIALIZING PARTICLES...");
    await loadFull(engine);
    console.log("✅ PARTICLES FORCE INITIALIZED");
  }, []);

  const particlesLoaded = useCallback(async (container?: any) => {
    console.log("🔥 PARTICLES CONTAINER FORCE LOADED:", container);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          background: {
            color: {
              value: "#1a1a1a"
            }
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#FFD788"
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 0.3,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
};

export default AppBackground;