import React from 'react';

const SimpleWelcome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to iTerra
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A clean, simple wellness platform
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-600">
            This is a simplified version of the iTerra wellness platform. 
            Navigate through the different sections to explore wellness tools and resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleWelcome;