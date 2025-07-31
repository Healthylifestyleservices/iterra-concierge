import { useState, useCallback } from 'react';
import { handleError, handleApiError, handleComponentError } from '../lib/error-handler';

interface UseErrorHandlerReturn {
  error: Error | null;
  isError: boolean;
  handleError: (error: unknown, fallbackData?: any) => any;
  handleApiError: (error: unknown, fallbackData?: any) => any;
  handleComponentError: (error: unknown, componentName: string) => any;
  clearError: () => void;
  retry: (fn: () => Promise<any>) => Promise<any>;
}

export function useErrorHandler(): UseErrorHandlerReturn {
  const [error, setError] = useState<Error | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const handleErrorWithState = useCallback((error: unknown, fallbackData?: any) => {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    setError(errorObj);
    return handleError(error, { silent: true, fallback: fallbackData, logEndpoint: process.env.SUPABASE_ERROR_LOGGING_URL || '/api/error-log' });
  }, []);

  const handleApiErrorWithState = useCallback((error: unknown, fallbackData?: any) => {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    setError(errorObj);
    return handleApiError(error, fallbackData);
  }, []);

  const handleComponentErrorWithState = useCallback((error: unknown, componentName: string) => {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    setError(errorObj);
    return handleComponentError(error, componentName);
  }, []);

  const retry = useCallback(async (fn: () => Promise<any>) => {
    try {
      clearError();
      return await fn();
    } catch (error) {
      return handleErrorWithState(error);
    }
  }, [clearError, handleErrorWithState]);

  return {
    error,
    isError: error !== null,
    handleError: handleErrorWithState,
    handleApiError: handleApiErrorWithState,
    handleComponentError: handleComponentErrorWithState,
    clearError,
    retry
  };
}

// Async wrapper hook for API calls
export function useAsyncWithErrorHandler<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const { error, handleApiError, clearError } = useErrorHandler();

  const execute = useCallback(async (asyncFn: () => Promise<T>, fallbackData?: T) => {
    try {
      setLoading(true);
      clearError();
      const result = await asyncFn();
      setData(result);
      return result;
    } catch (err) {
      const fallback = handleApiError(err, fallbackData);
      setData(fallback);
      return fallback;
    } finally {
      setLoading(false);
    }
  }, [handleApiError, clearError]);

  return { data, loading, error, execute };
}