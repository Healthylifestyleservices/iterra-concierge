import React from 'react';
import { logError, logErrorWithContext } from '@/lib/error-logger';

interface ErrorLoggerProps {
  children: React.ReactNode;
}

export function ErrorLogger({ children }: ErrorLoggerProps) {
  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      logErrorWithContext(event.error || event.message, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        type: 'javascript_error'
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logErrorWithContext(event.reason, {
        type: 'unhandled_promise_rejection',
        promise_stack: event.reason?.stack
      });
    };

    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'SCRIPT' || target.tagName === 'LINK')) {
        logErrorWithContext('Resource load error', {
          type: 'resource_error',
          tag: target.tagName,
          src: (target as any).src || (target as any).href,
          outerHTML: target.outerHTML
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleResourceError, true);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, []);

  return <>{children}</>;
}