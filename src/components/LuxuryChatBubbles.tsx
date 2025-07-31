import React from 'react';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp?: Date;
}

interface LuxuryChatBubblesProps {
  messages: ChatMessage[];
  className?: string;
}

const LuxuryChatBubbles: React.FC<LuxuryChatBubblesProps> = ({ 
  messages, 
  className = '' 
}) => {
  const userBubbleStyle = {
    background: 'linear-gradient(135deg, #B76E79 0%, #D4AF37 100%)',
    boxShadow: '0 8px 32px rgba(183, 110, 121, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
  };

  const aiBubbleStyle = {
    background: 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)',
    boxShadow: '0 8px 32px rgba(205, 127, 50, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`
              max-w-xs lg:max-w-md px-6 py-4 rounded-2xl text-white
              ${message.isUser ? 'rounded-br-sm' : 'rounded-bl-sm'}
              backdrop-blur-sm border border-white/10
            `}
            style={message.isUser ? userBubbleStyle : aiBubbleStyle}
          >
            <p className="text-sm leading-relaxed font-medium">
              {message.text}
            </p>
            {message.timestamp && (
              <div className="text-xs opacity-70 mt-2">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LuxuryChatBubbles;