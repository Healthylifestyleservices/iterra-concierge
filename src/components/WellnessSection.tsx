import React from 'react';
import { Card } from './ui/card';

interface WellnessSectionProps {
  title: string;
  description: string;
  items?: string[];
}

const WellnessSection: React.FC<WellnessSectionProps> = ({ title, description, items = [] }) => {
  return (
    <Card className="p-6 bg-black/40 border-amber-700/30 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-amber-100 mb-4">{title}</h3>
      <p className="text-amber-200 mb-4">{description}</p>
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-amber-300 flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default WellnessSection;