import React from 'react';
import AppLayout from '@/components/AppLayout';
import iTerraAssistantBubble from '@/components/iTerraAssistantBubble';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AppLayout />
      <iTerraAssistantBubble />
    </div>
  );
};

export default Index;