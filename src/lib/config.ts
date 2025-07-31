export const config = {
  doterra: {
    associateId: import.meta.env.VITE_DOTERRA_ASSOCIATE_ID,
    apiKey: import.meta.env.VITE_DOTERRA_API_KEY,
  },
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  famousAI: {
    apiKey: import.meta.env.VITE_FAMOUS_AI_KEY,
    url: import.meta.env.VITE_FAMOUS_AI_URL || 'https://api.famous.ai/v1',
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'iTERRA',
    environment: import.meta.env.VITE_ENVIRONMENT || 'production',
  },
  theme: {
    colors: {
      primary: '#D4AF37',
      secondary: '#B76E79',
      accent: '#CD7F32',
      background: '#FAF9F6',
      surface: '#E2DFD2',
      highlight: '#F7E7CE',
      text: '#333333'
    },
    fonts: {
      primary: 'font-avenir',
      heading: 'font-cormorant'
    }
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.iterra.com',
    timeout: 10000
  },
  features: {
    sacredGeometry: true,
    animations: true,
    assistantChat: true,
    productIntegration: true,
    famousAI: true
  }
};