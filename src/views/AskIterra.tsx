import React from 'react';
import FixedChatInterface from '@/components/FixedChatInterface';

const AskIterra: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Ask iTERRA Consultant
        </h1>
        <FixedChatInterface />
      </div>
    </div>
  );
};

export default AskIterra;