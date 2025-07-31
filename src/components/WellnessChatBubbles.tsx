import React from 'react';

interface ChatBubbleProps {
  type: 'user' | 'ai';
  children: React.ReactNode;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ type, children }) => {
  const baseClasses = "max-w-[70%] px-5 py-3 mx-2 my-2 rounded-3xl";
  const userClasses = "bg-[#F7E7CE] border border-[#B76E79] ml-auto";
  const aiClasses = "bg-[#E2DFD2] border border-[#CD7F32]";
  
  return (
    <div 
      className={`${baseClasses} ${type === 'user' ? userClasses : aiClasses}`}
      style={{ fontFamily: "'Avenir Next', sans-serif" }}
    >
      {children}
    </div>
  );
};

interface OilMentionProps {
  children: React.ReactNode;
}

const OilMention: React.FC<OilMentionProps> = ({ children }) => {
  return (
    <span className="pl-6 bg-[url('/oil-icon.svg')] bg-no-repeat bg-left-center">
      {children}
    </span>
  );
};

const WellnessChatBubbles: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto p-4">
      <ChatBubble type="user">
        What's today's wellness focus?
      </ChatBubble>
      
      <ChatBubble type="ai">
        Start with <OilMention>Lavender</OilMention> for calm.
      </ChatBubble>
    </div>
  );
};

export default WellnessChatBubbles;
export { ChatBubble, OilMention };