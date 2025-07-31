// Texture configuration for Famous AI theme
export const textures = {
  geometry: '/geometry/flower-of-life.svg',
  plants: '/textures/botanical.png'
};

// Texture utility functions
export const getTextureUrl = (type: keyof typeof textures): string => {
  return textures[type];
};

export const getBackgroundImageStyle = () => {
  return {
    backgroundImage: `
      url('${textures.plants}'),
      url('${textures.geometry}')
    `,
    backgroundBlendMode: 'overlay, soft-light' as const,
    backgroundSize: '400px 400px, 200px 200px',
    backgroundRepeat: 'repeat' as const
  };
};