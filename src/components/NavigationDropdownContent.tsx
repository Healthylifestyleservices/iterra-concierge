import React from 'react';
import { FlowerOfLife } from './sacred-geometry/FlowerOfLife';
import { HexagramGrid } from './sacred-geometry/HexagramGrid';
import { FibonacciSpiral } from './sacred-geometry/FibonacciSpiral';
import { navigationDropdowns, DropdownItem } from '../data/navigationDropdowns';

interface NavigationDropdownContentProps {
  buttonName: string;
}

const getGeometryIcon = (index: number) => {
  const icons = [FlowerOfLife, HexagramGrid, FibonacciSpiral];
  const IconComponent = icons[index % 3];
  return IconComponent;
};

export const NavigationDropdownContent: React.FC<NavigationDropdownContentProps> = ({ buttonName }) => {
  const dropdownItems = navigationDropdowns[buttonName] || [];

  if (dropdownItems.length === 0) {
    const GeometryIcon = getGeometryIcon(0);
    return (
      <div className="p-6 text-center" style={{ color: '#F5EBD8' }}>
        <GeometryIcon size={40} color="#FFD700" className="mx-auto mb-3 opacity-70" />
        <p className="text-sm opacity-80 font-light">Sacred wellness awaits...</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3">
      {dropdownItems.map((item: DropdownItem, index: number) => {
        const GeometryIcon = getGeometryIcon(index);
        return (
          <div 
            key={item.title}
            className="flex items-start space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/10 cursor-pointer group"
          >
            <div className="flex-shrink-0 mt-1">
              <GeometryIcon 
                size={20} 
                color="#FFD700" 
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
            <div className="flex-1">
              <h4 
                className="text-sm font-medium mb-1 group-hover:text-yellow-300 transition-colors duration-300"
                style={{ color: '#F5EBD8' }}
              >
                {item.title}
              </h4>
              <p 
                className="text-xs opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                style={{ color: '#F5EBD8' }}
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};