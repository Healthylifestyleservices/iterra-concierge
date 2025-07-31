import React, { createContext, useContext, useEffect, useState } from 'react';

interface FamousAITheme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: {
      base: string;
      velvet: string;
      accent: string;
      chocolate: string;
    };
    foiling: {
      rosegold: string;
      gold: string;
      bronze: string;
    };
  };
  textures: {
    velvet: boolean;
    onyx: boolean;
    chocolate: boolean;
    sacredGeometry: boolean;
    shimmer: boolean;
  };
  effects: {
    glow: {
      intensity: number;
      radius: string;
      colors: string[];
    };
    depth: {
      shadowIntensity: number;
      material: string;
    };
    animation: {
      shimmer: boolean;
      hover: string;
      transition: string;
    };
  };
}

interface FamousAIThemeContextType {
  theme: FamousAITheme;
  applyTheme: (theme: FamousAITheme) => void;
  isLoaded: boolean;
}

const defaultTheme: FamousAITheme = {
  name: 'velvet-onyx-luxury-supreme',
  colors: {
    primary: '#D4AF37', // Rich Gold
    secondary: '#B76E79', // Rose Gold
    tertiary: '#CD7F32', // Bronze
    background: {
      base: '#0B0A0A', // Deep onyx black
      velvet: '#2B201A', // Rich chocolate velvet
      accent: '#1A1A1A', // Deep black velvet
      chocolate: '#3C2414' // Deep chocolate tones
    },
    foiling: {
      rosegold: '#E6B8A2',
      gold: '#FFD700',
      bronze: '#B87333'
    }
  },
  textures: {
    velvet: true,
    onyx: true,
    chocolate: true,
    sacredGeometry: true,
    shimmer: true
  },
  effects: {
    glow: {
      intensity: 0.9,
      radius: '25px',
      colors: ['#D4AF37', '#B76E79', '#CD7F32']
    },
    depth: {
      shadowIntensity: 0.9,
      material: 'velvet-onyx-chocolate'
    },
    animation: {
      shimmer: true,
      hover: 'luxury-glow',
      transition: 'smooth-velvet'
    }
  }
};

const FamousAIThemeContext = createContext<FamousAIThemeContextType | undefined>(undefined);

export const useFamousAITheme = () => {
  const context = useContext(FamousAIThemeContext);
  if (!context) {
    throw new Error('useFamousAITheme must be used within a FamousAIThemeProvider');
  }
  return context;
};

interface FamousAIThemeProviderProps {
  children: React.ReactNode;
}

export const FamousAIThemeProvider: React.FC<FamousAIThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<FamousAITheme>(defaultTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  const applyTheme = (newTheme: FamousAITheme) => {
    setTheme(newTheme);
    
    // Apply CSS custom properties for the theme
    const root = document.documentElement;
    root.style.setProperty('--famous-ai-primary', newTheme.colors.primary);
    root.style.setProperty('--famous-ai-secondary', newTheme.colors.secondary);
    root.style.setProperty('--famous-ai-tertiary', newTheme.colors.tertiary);
    root.style.setProperty('--famous-ai-bg-base', newTheme.colors.background.base);
    root.style.setProperty('--famous-ai-bg-velvet', newTheme.colors.background.velvet);
    root.style.setProperty('--famous-ai-bg-chocolate', newTheme.colors.background.chocolate);
    root.style.setProperty('--famous-ai-rosegold', newTheme.colors.foiling.rosegold);
    root.style.setProperty('--famous-ai-gold', newTheme.colors.foiling.gold);
    root.style.setProperty('--famous-ai-bronze', newTheme.colors.foiling.bronze);
    root.style.setProperty('--famous-ai-glow-intensity', newTheme.effects.glow.intensity.toString());
    root.style.setProperty('--famous-ai-glow-radius', newTheme.effects.glow.radius);
    
    console.log('Famous AI Theme Applied:', newTheme.name);
  };

  useEffect(() => {
    // Apply default theme on mount
    applyTheme(defaultTheme);
    setIsLoaded(true);
    
    // Dispatch theme ready event for Famous AI integration
    const event = new CustomEvent('FamousAIThemeReady', {
      detail: { theme: defaultTheme }
    });
    window.dispatchEvent(event);
  }, []);

  return (
    <FamousAIThemeContext.Provider value={{ theme, applyTheme, isLoaded }}>
      {children}
    </FamousAIThemeContext.Provider>
  );
};

export default FamousAIThemeProvider;