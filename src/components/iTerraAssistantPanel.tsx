import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Category {
  emoji: string;
  title: string;
  subtitle: string;
}

interface AssistantPanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string | null;
}

const iTerraAssistantPanel: React.FC<AssistantPanelProps> = ({ isOpen, onClose, selectedCategory }) => {
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);
  const [inputText, setInputText] = useState('');
  const [currentCategory, setCurrentCategory] = useState<string | null>(selectedCategory || null);

  // Categories from assistant_ui.json
  const categories: Category[] = [
    { emoji: "💪", title: "Masculine Vitality", subtitle: "Hormone balance, endurance, libido, stamina" },
    { emoji: "🌹", title: "Divine Feminine Energy", subtitle: "Cycles, radiance, sensuality, emotional wellness" },
    { emoji: "✨", title: "Wellness Sanctuary", subtitle: "Curated oils, blends, sacred botanicals" },
    { emoji: "💼", title: "Wellness Entrepreneurship", subtitle: "Business tools, team building, leadership" },
    { emoji: "📿", title: "Wisdom of Wellness", subtitle: "Courses, rituals, lifestyle protocols" },
    { emoji: "🐾", title: "Pets", subtitle: "Pet-safe oils, behavior blends, care protocols" },
    { emoji: "🏡", title: "Home", subtitle: "Natural cleaning, ambiance, DIY recipes" }
  ];

  const handleCategorySelect = (category: Category) => {
    setCurrentCategory(category.title);
    setMessages([{ text: `Welcome to ${category.title}! How can I assist you today?`, isUser: false }]);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages(prev => [...prev, { text: inputText, isUser: true }]);
      const userInput = inputText;
      setInputText('');
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: `I can help you with ${currentCategory || 'your wellness journey'}. What specific guidance are you looking for regarding "${userInput}"?`, 
          isUser: false 
        }]);
      }, 1000);
    }
  };

  React.useEffect(() => {
    if (selectedCategory && selectedCategory !== currentCategory) {
      setCurrentCategory(selectedCategory);
      setMessages([{ text: `Welcome to ${selectedCategory}! How can I assist you today?`, isUser: false }]);
    }
  }, [selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 border border-amber-500/30 rounded-2xl w-full max-w-2xl h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-500/20">
          <div>
            <h2 className="text-2xl font-bold text-amber-200">iTERRA™ Concierge</h2>
            <p className="text-sm text-amber-100/60">Powered by Healthy Lifestyle Education Services</p>
          </div>
          <button onClick={onClose} className="text-amber-200 hover:text-amber-100 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {!currentCategory ? (
            <div className="grid grid-cols-1 gap-4">
              <p className="text-amber-200 mb-4 text-center">Choose your wellness focus:</p>
              {categories.map((category, index) => (
                <div key={index} onClick={() => handleCategorySelect(category)} className="bg-black/40 border border-amber-500/20 rounded-lg p-4 hover:border-amber-400/50 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{category.emoji}</span>
                    <div>
                      <h3 className="text-amber-200 font-semibold">{category.title}</h3>
                      <p className="text-amber-100/60 text-sm">{category.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl text-amber-200 font-semibold">{currentCategory}</h3>
                <button onClick={() => setCurrentCategory(null)} className="text-amber-100/60 text-sm hover:text-amber-100 mt-2">← Back to categories</button>
              </div>
              <div className="space-y-3 mb-4">
                {messages.map((message, index) => (
                  <div key={index} className={`p-3 rounded-lg ${message.isUser ? 'bg-amber-600/20 text-amber-100 ml-8' : 'bg-black/40 text-amber-200 mr-8'}`}>
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        {currentCategory && (
          <div className="p-6 border-t border-amber-500/20">
            <div className="flex space-x-3">
              <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Ask me about your wellness journey..." className="flex-1 bg-black/40 border border-amber-500/20 rounded-lg px-4 py-2 text-amber-200 placeholder-amber-100/40 focus:outline-none focus:border-amber-400/50" />
              <button onClick={handleSendMessage} className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-all">Send</button>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="p-4 text-center">
          <p className="text-xs text-amber-100/40">This AI is for educational use only. It is not a substitute for professional or veterinary advice. Results may vary.</p>
        </div>
      </div>
    </div>
  );
};

export default iTerraAssistantPanel;