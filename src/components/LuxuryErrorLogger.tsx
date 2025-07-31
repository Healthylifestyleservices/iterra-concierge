import { useEffect } from 'react';
import { logLuxuryError } from '@/lib/error-handling';

export function LuxuryErrorLogger() {
  useEffect(() => {
    // Global error handler
    const handleError = (event: ErrorEvent) => {
      logLuxuryError(event.error || event.message, 'GlobalErrorHandler');
    };

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logLuxuryError(event.reason, 'UnhandledPromiseRejection');
    };

    // Resource loading error handler
    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName) {
        logLuxuryError(
          `Resource failed to load: ${target.tagName} ${target.getAttribute('src') || target.getAttribute('href') || ''}`,
          'ResourceLoadError'
        );
      }
    };

    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleResourceError, true);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for manual error logging
export function useLuxuryErrorLogger() {
  return {
    logError: (error: unknown, context?: string) => {
      logLuxuryError(error, context);
    },
    logInfo: (message: string, context?: string) => {
      logLuxuryError(new Error(message), context);
    }
  };
}