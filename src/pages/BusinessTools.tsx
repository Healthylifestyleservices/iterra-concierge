import React from 'react';
import { EnhancedBusinessToolsLibrary } from '../components/EnhancedBusinessToolsLibrary';
import { ErrorBoundaryWithFallback } from '../components/ErrorBoundaryWithFallback';
import { EnhancedBusinessToolsFallback } from '../components/EnhancedBusinessToolsFallback';

const BusinessTools: React.FC = () => {
  return (
    <ErrorBoundaryWithFallback 
      fallbackComponent={EnhancedBusinessToolsFallback}
      componentName="BusinessToolsPage"
    >
      <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] to-white">
        <div className="container mx-auto px-4 py-8">
          <EnhancedBusinessToolsLibrary />
        </div>
      </div>
    </ErrorBoundaryWithFallback>
  );
};

export default BusinessTools;