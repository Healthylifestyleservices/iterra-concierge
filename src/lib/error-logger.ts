import { supabase } from './supabase';

// Silent error logger (NO configuration)
export function logError(error: unknown) {
  const errorData = {
    timestamp: new Date().toISOString(),
    route: window.location.pathname,
    error_type: error instanceof Error ? error.name : 'Unknown',
    stack: error instanceof Error ? error.stack : String(error),
    user_agent: navigator.userAgent,
    environment: import.meta.env.MODE || 'production',
    custom_metadata: {
      url: window.location.href,
      timestamp_local: Date.now()
    }
  };

  // Try Supabase insert first
  supabase
    .from('error_logs')
    .insert(errorData)
    .then(() => null)
    .catch(() => {
      // Fallback to console if Supabase fails
      console.error('Error logged:', error);
    });
}

// Alternative silent logger for development
export function logErrorLocal(error: unknown) {
  try {
    console.error('Silent Error:', String(error));
  } catch {
    // Fail completely silently
  }
}

// Enhanced error logging with more context
export function logErrorWithContext(error: unknown, context?: Record<string, any>) {
  const errorData = {
    timestamp: new Date().toISOString(),
    route: window.location.pathname,
    error_type: error instanceof Error ? error.name : 'Unknown',
    stack: error instanceof Error ? error.stack : String(error),
    user_agent: navigator.userAgent,
    environment: import.meta.env.MODE || 'production',
    custom_metadata: {
      url: window.location.href,
      timestamp_local: Date.now(),
      ...context
    }
  };

  supabase
    .from('error_logs')
    .insert(errorData)
    .catch(() => console.error('Error logged:', error));
}