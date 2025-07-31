import { fallbackBusinessContent } from '../data/fallbackBusinessContent';

// Pre-configured to handle ALL cases without prompts
type ErrorHandlerConfig = {
  silent: boolean; // No user alerts
  fallback: any;   // Your curated content
  logEndpoint: string;
};

const defaultConfig: ErrorHandlerConfig = {
  silent: true,
  fallback: fallbackBusinessContent, 
  logEndpoint: process.env.SUPABASE_ERROR_LOGGING_URL || '/api/error-log'
};

export function handleError(error: unknown, config = defaultConfig) {
  // 1. Auto-log without prompting
  fetch(config.logEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      error: error instanceof Error ? error.stack : String(error),
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown'
    }),
    headers: { 'Content-Type': 'application/json' }
  }).catch(() => null); // Fail silently

  // 2. Return pre-approved fallback
  return config.fallback;
}

// Specific error handlers for different scenarios
export function handleBusinessToolsError(error: unknown) {
  return handleError(error, {
    ...defaultConfig,
    fallback: fallbackBusinessContent
  });
}

export function handleApiError(error: unknown, fallbackData: any = null) {
  return handleError(error, {
    ...defaultConfig,
    fallback: fallbackData || { message: 'Service temporarily unavailable' }
  });
}

export function handleComponentError(error: unknown, componentName: string) {
  return handleError(error, {
    ...defaultConfig,
    fallback: {
      error: true,
      component: componentName,
      message: 'Component temporarily unavailable'
    }
  });
}