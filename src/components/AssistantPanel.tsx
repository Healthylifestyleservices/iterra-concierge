import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assistantOptions } from '../data/assistantOptions';

const AssistantPanel = () => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 shadow-lg rounded-2xl p-4 w-[320px] z-50 border border-neutral-300">
      <h2 className="text-lg font-bold mb-2">Hello 👋 I'm here to help.</h2>
      <p className="text-sm text-neutral-700 mb-3">What would you like support with?</p>
      <div className="flex flex-col gap-2">
        {assistantOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleClick(opt.route)}
            className="text-left text-sm bg-[#F2EDE3] hover:bg-[#E9D9C3] px-4 py-2 rounded-lg transition"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssistantPanel;