import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { iTERRAAPI } from '../lib/api-integrations';
import WellnessSanctuary from './WellnessSanctuary';

const WELLNESS_CATEGORIES = [
  {
    id: 'mens-wellness',
    title: 'Masculine Vitality',
    icon: '💪',
    description: 'Holistic protocols for men\'s peak performance',
    color: 'bg-blue-50 text-blue-800',
    hoverColor: 'hover:bg-blue-100'
  },
  {
    id: 'womens-wellness',
    title: 'Divine Feminine Energy',
    icon: '🌸',
    description: 'Nurturing wellness for hormonal balance',
    color: 'bg-pink-50 text-pink-800',
    hoverColor: 'hover:bg-pink-100'
  },
  {
    id: 'wellness-sanctuary',
    title: 'Wellness Sanctuary',
    icon: '🌿',
    description: 'Sacred Botanicals, Collections, Blends, Home & Pet Wellness',
    color: 'bg-green-50 text-green-800',
    hoverColor: 'hover:bg-green-100'
  },
  {
    id: 'business-tools',
    title: 'Wellness Entrepreneurship',
    icon: '💼',
    description: 'Transform passion into purpose',
    color: 'bg-amber-50 text-amber-800',
    hoverColor: 'hover:bg-amber-100'
  },
  {
    id: 'education-hub',
    title: 'Wisdom of Wellness',
    icon: '📖',
    description: 'Learn holistic health principles',
    color: 'bg-teal-50 text-teal-800',
    hoverColor: 'hover:bg-teal-100'
  }
];

export function WellnessHub() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [aiAssistantQuery, setAiAssistantQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [showSanctuary, setShowSanctuary] = useState(false);

  const handleAIQuery = async () => {
    if (!aiAssistantQuery.trim()) return;

    try {
      const response = await iTERRAAPI.queryFamousAI(aiAssistantQuery);
      setAiResponse(response.response);
    } catch (error) {
      setAiResponse('I apologize, but I couldn\'t process your request right now.');
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'wellness-sanctuary') {
      setShowSanctuary(true);
    } else {
      navigate(`/${categoryId}`);
    }
  };

  if (showSanctuary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div>
            <button 
              onClick={() => setShowSanctuary(false)}
              className="text-emerald-600 hover:text-emerald-800 mb-2"
            >
              ← Back to Hub
            </button>
            <h1 className="text-2xl font-bold text-emerald-800">iTERRA Wellness Hub</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <WellnessSanctuary />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-emerald-800">iTERRA Wellness Hub</h1>
          <p className="text-sm text-gray-600">👤 {user?.email || 'Jenna Williams'} - dōTERRA Associate</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">🤖 iTERRA AI Assistant</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              value={aiAssistantQuery}
              onChange={(e) => setAiAssistantQuery(e.target.value)}
              placeholder="Ask about wellness, oils, or protocols..."
              className="flex-grow p-2 border rounded"
            />
            <button 
              onClick={handleAIQuery}
              className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
            >
              Ask
            </button>
          </div>
          {aiResponse && (
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p>{aiResponse}</p>
            </div>
          )}
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WELLNESS_CATEGORIES.map((category) => (
            <div 
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                ${category.color} 
                ${category.hoverColor}
                cursor-pointer 
                rounded-lg 
                p-6 
                shadow-md 
                transition-all 
                hover:shadow-lg
                transform 
                hover:-translate-y-2
              `}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm">{category.description}</p>
              <div className="mt-4 flex items-center text-sm font-semibold">
                Explore →
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-white py-6 text-center">
        <p className="text-gray-600 mb-2">
          © 2024 iTERRA Wellness. Powered by dōTERRA Essential Oils.
        </p>
      </footer>
    </div>
  );
}