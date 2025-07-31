import React from 'react';

interface NavigationItem {
  label: string;
  onClick?: () => void;
}

interface LuxuryNavigationProps {
  onCategorySelect?: (category: string) => void;
}

const LuxuryNavigation: React.FC<LuxuryNavigationProps> = ({ onCategorySelect }) => {
  const navigationItems: NavigationItem[] = [
    { label: 'Masculine Vitality' },
    { label: 'Feminine Energy' },
    { label: 'Pet Harmony' },
    { label: 'Home' },
    { label: 'Wellness Sanctuary' },
    { label: 'Wellness Entrepreneurship' },
    { label: 'Wisdom of Wellness' },
    { label: 'Crafted Wellness Intake' }
  ];

  const handleItemClick = (item: NavigationItem) => {
    if (onCategorySelect) {
      onCategorySelect(item.label);
    }
  };

  return (
    <nav className="relative z-10 flex justify-center gap-8 px-6 py-6 border-b border-amber-600/30">
      {navigationItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleItemClick(item)}
          className="bg-transparent border-none text-amber-100 text-base font-light tracking-wide cursor-pointer transition-colors duration-300 hover:text-amber-400 font-serif"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default LuxuryNavigation;