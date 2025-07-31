import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Home, X, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeSection, onSectionChange }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, action: () => onSectionChange('home') },
    { id: 'wellness-hub', label: 'Wellness Hub', icon: Heart, action: () => navigate('/wellness-hub') },
    { id: 'ask-iterra', label: 'Ask iTERRA', icon: MessageCircle, action: () => navigate('/ask-iterra') }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden" onClick={onClose} />
      <div className="relative bg-white w-64 h-full shadow-xl">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-green-700">iTERRA Menu</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
            <X className="w-4 h-4" />
          </Button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={item.action}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;