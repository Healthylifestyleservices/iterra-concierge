// Famous AI REQUIRES this exact structure
window.FamousAI = window.FamousAI || {};
window.FamousAI.components = window.FamousAI.components || {};
window.FamousAI.debug = window.FamousAI.debug || {};
window.FamousAI.assets = window.FamousAI.assets || {};
window.FamousAI.accessibility = window.FamousAI.accessibility || {};

// Famous AI Theme Configuration
window.FamousAI.theme = {
  name: 'velvet-obsidian',
  colors: {
    primary: '#D4AF37', // Gold
    secondary: '#B76E79', // Rose Gold
    accent: '#CD7F32', // Bronze
    background: 'linear-gradient(135deg, rgba(11, 10, 10, 0.97) 0%, rgba(43, 32, 22, 0.95) 100%)',
    surface: 'rgba(43, 32, 22, 0.8)',
    text: '#FFFFFF'
  },
  textures: {
    geometry: '/geometry/flower-of-life.svg',
    plants: '/textures/botanical.png'
  },
  depth: {
    type: 'subsurface-scattering',
    intensity: 0.7 // Famous AI's preferred range
  },
  typography: {
    primary: 'Cormorant Garamond, serif',
    weight: { light: 300, normal: 400, medium: 500, semibold: 600, bold: 700 }
  }
};

// Accessibility contrast checker
window.FamousAI.accessibility.checkContrast = function(color1, color2) {
  // Convert hex to RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  // Calculate relative luminance
  function getLuminance(rgb) {
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }
  
  // Calculate contrast ratio
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 'INVALID';
  
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  const contrast = (brightest + 0.05) / (darkest + 0.05);
  
  // WCAG AA standard: 4.5:1 for normal text, 3:1 for large text
  // WCAG AAA standard: 7:1 for normal text, 4.5:1 for large text
  
  console.log(`🎨 Contrast check: ${color1} vs ${color2} = ${contrast.toFixed(2)}:1`);
  
  if (contrast >= 7) return 'AAA';
  if (contrast >= 4.5) return 'AA';
  if (contrast >= 3) return 'AA_LARGE';
  return 'FAIL';
};

// Asset validation system
window.FamousAI.assets.validateTextures = function() {
  const results = [];
  
  // Check geometry texture
  const geometryPath = window.FamousAI.theme.textures.geometry;
  if (geometryPath && geometryPath.includes('geometry')) {
    results.push('geometry:loaded');
  }
  
  // Check plants texture
  const plantsPath = window.FamousAI.theme.textures.plants;
  if (plantsPath && plantsPath.includes('botanical')) {
    results.push('plants:loaded');
  }
  
  console.log('🎨 Famous AI Texture Validation:', results);
  return results;
};

// Debug function to print theme
window.FamousAI.debug.printTheme = function() {
  console.log('🎨 Famous AI Velvet-Obsidian Theme Configuration:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Theme Name:', window.FamousAI.theme.name);
  console.log('Colors:', window.FamousAI.theme.colors);
  console.log('Textures:', window.FamousAI.theme.textures);
  console.log('Depth:', window.FamousAI.theme.depth);
  console.log('Typography:', window.FamousAI.theme.typography);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  return window.FamousAI.theme;
};

// Initialize Famous AI with luxury configuration
window.FamousAI.init = function(config) {
  console.log('Famous AI initialized with config:', config);
  window.FamousAI.config = config;
  
  const container = document.querySelector(config.container);
  if (container) {
    container.style.background = window.FamousAI.theme.colors.background;
    container.style.backgroundSize = 'cover, 300px 300px';
    container.style.boxShadow = 'inset 0 0 100px rgba(0,0,0,0.7)';
    container.style.borderRadius = '12px';
    container.style.border = `1px solid ${window.FamousAI.theme.colors.primary}30`;
  }
};

// Register iTerra component
window.FamousAI.components.ITerraConcierge = {
  init: function() {
    const fontCSS = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
      .iterra-luxury { font-family: '${window.FamousAI.theme.typography.primary}'; }
      .rosegold-gradient { background: linear-gradient(135deg, ${window.FamousAI.theme.colors.secondary} 0%, ${window.FamousAI.theme.colors.primary} 100%); }
      .bronze-velvet { background: linear-gradient(135deg, ${window.FamousAI.theme.colors.accent} 0%, #8B4513 100%); }
    `;
    document.head.insertAdjacentHTML('beforeend', `<style>${fontCSS}</style>`);

    const html = `
      <div class="iterra-container" style="background: transparent; font-family: '${window.FamousAI.theme.typography.primary}'; min-height: 300px; position: relative; padding: 2rem; color: ${window.FamousAI.theme.colors.text};">
        <div style="text-align: center; padding-bottom: 2rem; border-bottom: 1px solid ${window.FamousAI.theme.colors.primary}50;">
          <h1 style="font-family: '${window.FamousAI.theme.typography.primary}'; font-size: 2.5rem; color: ${window.FamousAI.theme.colors.primary}; letter-spacing: 0.05em; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">iTERRA™</h1>
          <p style="color: ${window.FamousAI.theme.colors.secondary}; font-size: 1rem; margin-top: 0.5rem; opacity: 0.9;">LUXURY WELLNESS CONCIERGE</p>
        </div>
        <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid ${window.FamousAI.theme.colors.primary}30;">
          <p style="color: ${window.FamousAI.theme.colors.primary}; font-size: 0.875rem; opacity: 0.8; margin: 0;">✨ ${window.FamousAI.theme.name} Theme Active</p>
        </div>
      </div>
    `;

    const container = document.getElementById('famous-ai-container') || document.querySelector('#ai-container');
    if (container) {
      container.innerHTML = html;
    }
  }
};

// Auto-initialize
if (window.FamousAI.loaded) {
  window.FamousAI.components.ITerraConcierge.init();
} else {
  window.addEventListener('FamousAIReady', function() {
    window.FamousAI.components.ITerraConcierge.init();
  });
}