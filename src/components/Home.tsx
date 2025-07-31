import React from 'react';
import { useNavigate } from 'react-router-dom';
import AssistantPanel from './AssistantPanel';
import { catalogCategories } from '../data/catalogCategories';

const additionalCategories = [
  { id: 'intake', title: 'iTERRA™ Intake', emoji: '📋', route: '/intake' },
];

const Home = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (route: string) => {
    if (route.startsWith('/category/')) {
      // Use window.location.href for category routes as requested
      window.location.href = route;
    } else {
      navigate(route);
    }
  };

  const allCategories = [...additionalCategories, ...catalogCategories];

  return (
    <div className="bg-gradient-to-b from-[#F5EFE5] to-[#D1BFA4] min-h-screen font-serif text-[#4A3C2F] relative">
      <div className="text-center py-8">
        <h1 className="text-5xl font-semibold mb-2">iTERRA™ Concierge</h1>
        <p className="text-sm italic text-[#7A6E5D]">Powered by Healthy Lifestyle Education Services</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-20">
        {allCategories.map(({ id, title, emoji, route }) => (
          <div
            key={id}
            className={`cursor-pointer bg-white/70 backdrop-blur-md shadow-lg p-6 rounded-xl hover:bg-white transition ${
              id === 'intake' ? 'ring-2 ring-[#8E735B] bg-white/90' : ''
            } ${
              id === 'digestive' ? 'ring-2 ring-green-500 bg-green-50/90' : ''
            }`}
            onClick={() => handleCategoryClick(route)}
          >
            <div className="text-3xl mb-2">{emoji}</div>
            <h2 className="text-xl font-bold">{title}</h2>
            {id === 'intake' && (
              <p className="text-sm text-[#7A6E5D] mt-2">Start your wellness journey</p>
            )}
            {id === 'digestive' && (
              <p className="text-sm text-green-700 mt-2">Support for digestive wellness</p>
            )}
            {catalogCategories.find(cat => cat.id === id)?.description && id !== 'digestive' && (
              <p className="text-sm text-[#7A6E5D] mt-2">
                {catalogCategories.find(cat => cat.id === id)?.description}
              </p>
            )}
          </div>
        ))}
      </div>
      <footer className="text-xs text-center text-[#5A4B3F] absolute bottom-4 w-full">
        ⚠️ This app is for educational use only. It does not diagnose, treat, or replace professional care. AI responses may contain errors.
      </footer>
      <AssistantPanel />
    </div>
  );
};

export default Home;