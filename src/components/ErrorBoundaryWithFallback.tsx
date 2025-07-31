import React, { Component, ErrorInfo, ReactNode } from 'react';
import { handleComponentError } from '../lib/error-handler';
import { BusinessToolsFallback } from './BusinessToolsFallback';

interface Props {
  children: ReactNode;
  fallbackComponent?: React.ComponentType<any>;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundaryWithFallback extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error using our silent error handler
    handleComponentError(error, this.props.componentName || 'Unknown Component');
    
    this.setState({
      error,
      errorInfo
    });
  }

  public render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallbackComponent || BusinessToolsFallback;
      
      return (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <FallbackComponent error={this.state.error} />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// HOC wrapper for functional components
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallbackComponent?: React.ComponentType<any>
) {
  const WithErrorBoundaryComponent = (props: P) => (
    <ErrorBoundaryWithFallback 
      fallbackComponent={fallbackComponent}
      componentName={WrappedComponent.displayName || WrappedComponent.name}
    >
      <WrappedComponent {...props} />
    </ErrorBoundaryWithFallback>
  );

  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithErrorBoundaryComponent;
}