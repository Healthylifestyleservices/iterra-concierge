// TypeScript declarations for Famous AI global object
declare global {
  interface Window {
    FamousAI: {
      theme: {
        name: string;
        colors: {
          primary: string;
          secondary: string;
          accent: string;
          background: string;
          surface: string;
          text: string;
        };
        textures: {
          geometry: string;
          plants: string;
        };
        depth: {
          type: string;
          intensity: number;
        };
        typography: {
          primary: string;
          weight: {
            light: number;
            normal: number;
            medium: number;
            semibold: number;
            bold: number;
          };
        };
      };
      debug: {
        printTheme: () => any;
      };
      assets: {
        validateTextures: () => string[];
      };
      accessibility: {
        checkContrast: (color1: string, color2: string) => string;
      };
      config?: any;
      loaded?: boolean;
      components: {
        ITerraConcierge: {
          init: () => void;
        };
      };
      init: (config: any) => void;
    };
  }
}

export {};