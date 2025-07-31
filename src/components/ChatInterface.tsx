import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface ChatMessage {
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      text: 'Welcome! Ask me about oils, protocols, or pets...',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const userMessage: ChatMessage = {
      text: chatInput,
      sender: 'user',
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    
    // Simple response logic based on keywords
    setTimeout(() => {
      let response = 'Thank you for your question. I\'m here to help with wellness guidance.';
      
      const input = chatInput.toLowerCase();
      if (input.includes('oil')) {
        response = 'Essential oils can support many wellness goals. What specific area would you like to explore?';
      } else if (input.includes('pet')) {
        response = 'Pet wellness is important! I can help you find safe, pet-friendly protocols.';
      } else if (input.includes('protocol')) {
        response = 'I can guide you through wellness protocols. What specific support are you looking for?';
      }
      
      const assistantMessage: ChatMessage = {
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, assistantMessage]);
    }, 1000);
    
    setChatInput('');
  };

  return (
    <Card className="p-6 bg-black/40 border-amber-700/30 backdrop-blur-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-amber-100">Ask iTerra</h3>
        <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
      </div>
      
      <p className="text-amber-200 text-sm mb-4">Ask about oils, protocols, or pets...</p>
      
      <div className="h-64 overflow-y-auto mb-4 space-y-3 scrollbar-thin scrollbar-thumb-amber-700">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`flex ${
            msg.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}>
            <div className={`max-w-xs p-3 rounded-2xl ${
              msg.sender === 'user' 
                ? 'bg-amber-700/40 text-amber-100 rounded-br-sm' 
                : 'bg-amber-900/40 text-amber-200 rounded-bl-sm'
            }`}>
              <p className="text-sm">{msg.text}</p>
              <p className="text-xs opacity-60 mt-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleChatSubmit} className="flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask about oils, protocols, or pets..."
          className="flex-1 px-4 py-2 rounded-xl bg-black/60 border border-amber-700/30 text-amber-100 placeholder-amber-400/60 focus:border-amber-500 focus:outline-none transition-colors"
        />
        <Button 
          type="submit"
          disabled={!chatInput.trim()}
          className="px-6 py-2 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white rounded-xl transition-all duration-200 disabled:opacity-50"
        >
          Send
        </Button>
      </form>
    </Card>
  );
};

export default ChatInterface;