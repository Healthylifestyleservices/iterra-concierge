// Docker deployment configuration for iTERRA
export const dockerConfig = {
  // Environment detection
  isDocker: process.env.NODE_ENV === 'production',
  
  // Container health check endpoint
  healthEndpoint: '/health',
  
  // Supabase configuration for Docker deployment
  supabase: {
    // Use environment variable injected at runtime
    anonKey: process.env.SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY,
    url: import.meta.env.VITE_SUPABASE_URL || 'https://erevryxpkuqorebmjefc.supabase.co'
  },
  
  // Container metadata
  container: {
    name: 'iterra-wellness-app',
    port: 80,
    hostPort: 3000,
    network: 'iterra-wellness-network'
  },
  
  // Deployment settings
  deployment: {
    restartPolicy: 'unless-stopped',
    healthCheck: {
      interval: '30s',
      timeout: '10s',
      retries: 3,
      startPeriod: '40s'
    }
  }
};

// Docker environment validation
export const validateDockerEnvironment = () => {
  const requiredVars = ['SUPABASE_ANON_KEY'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.warn(`⚠️  Missing Docker environment variables: ${missing.join(', ')}`);
    return false;
  }
  
  return true;
};

// Container status helper
export const getContainerStatus = () => {
  return {
    environment: process.env.NODE_ENV || 'development',
    hasSupabaseKey: !!dockerConfig.supabase.anonKey,
    timestamp: new Date().toISOString()
  };
};