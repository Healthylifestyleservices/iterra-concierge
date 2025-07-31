const SUPABASE_CONFIG = {
  url: 'https://mqfewevqghimmxqrnyiv.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZmV3ZXZxZ2hpbW14cXJueWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MTIwNjcsImV4cCI6MjA2ODI4ODA2N30.HuaGcuncl7UaXjwT2ObIQgYCwksj6KLvDSagW-GyIao'
} as const;

interface ErrorLog {
  timestamp: string;
  route: string;
  error_type: string;
  stack?: string;
  user_agent: string;
  environment: 'production' | 'development';
  custom_metadata: {
    component?: string;
    severity: 'low' | 'medium' | 'high';
  };
}

function getErrorType(error: unknown): string {
  if (error instanceof Error) return error.name;
  if (typeof error === 'string') return 'StringError';
  return 'UnknownError';
}

function getReactComponentName(): string {
  try {
    const stack = new Error().stack;
    const match = stack?.match(/at (\w+)/);
    return match?.[1] || 'Unknown';
  } catch {
    return 'Unknown';
  }
}

export async function logLuxuryError(error: unknown, context?: string): Promise<void> {
  try {
    const logData: ErrorLog = {
      timestamp: new Date().toISOString(),
      route: typeof window !== 'undefined' ? window.location.pathname : 'server',
      error_type: getErrorType(error),
      stack: error instanceof Error ? error.stack : undefined,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server',
      environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
      custom_metadata: {
        component: context || getReactComponentName(),
        severity: 'medium'
      }
    };

    await fetch(`${SUPABASE_CONFIG.url}/rest/v1/error_logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
      },
      body: JSON.stringify(logData)
    });
  } catch {
    // Absolute silence - no error about the error
  }
}