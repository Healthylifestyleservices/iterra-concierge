import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { AssociateSignup } from './AssociateSignup';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { associateInfo } = useAppContext();
  const [showSignup, setShowSignup] = useState(false);
  const [brandedGreeting, setBrandedGreeting] = useState('');

  useEffect(() => {
    const associateContext = localStorage.getItem('associate_context');
    if (associateContext) {
      try {
        const context = JSON.parse(associateContext);
        setBrandedGreeting(context.greeting);
      } catch (error) {
        console.error('Failed to parse associate context:', error);
      }
    }
  }, []);

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onMenuClick}
                className="text-white hover:bg-white/20 md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
              
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://d64gsuwffb70l.cloudfront.net/681cb76de125a7f27911a55d_1748060337382_447b6801.jpg" 
                    alt="iTerra" 
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">iTerra Wellness Hub</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-2">
                {associateInfo ? (
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    👤 {associateInfo.companyName} Associate
                  </span>
                ) : (
                  <Button
                    onClick={() => setShowSignup(true)}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm border-0"
                    variant="ghost"
                  >
                    <User className="h-4 w-4 mr-1" />
                    Associate Setup
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Dialog open={showSignup} onOpenChange={setShowSignup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Associate Registration</DialogTitle>
          </DialogHeader>
          <AssociateSignup onComplete={() => setShowSignup(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;