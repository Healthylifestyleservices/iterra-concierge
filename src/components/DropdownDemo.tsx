import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedDropdown from './AnimatedDropdown';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const DropdownDemo: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [sharedItems, setSharedItems] = useState<string[]>([]);

  const handleSave = () => {
    const timestamp = new Date().toLocaleTimeString();
    setSavedItems(prev => [...prev, `Saved at ${timestamp}`]);
  };

  const handleShare = () => {
    const timestamp = new Date().toLocaleTimeString();
    setSharedItems(prev => [...prev, `Shared at ${timestamp}`]);
    
    // Simulate sharing functionality
    if (navigator.share) {
      navigator.share({
        title: 'iTERRA Wellness Experience',
        text: 'Check out this amazing wellness journey!',
        url: window.location.href
      });
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-white/80 backdrop-blur-sm border-rose-200">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-rose-800">
              Luxury Animated Dropdown Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-rose-600 hover:bg-rose-700"
              >
                {showDropdown ? 'Hide' : 'Show'} Dropdown
              </Button>
              
              <AnimatePresence>
                <AnimatedDropdown 
                  isVisible={showDropdown}
                  onSave={handleSave}
                  onShare={handleShare}
                  className="ml-4"
                />
              </AnimatePresence>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-green-50 p-4 rounded-lg border border-green-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-semibold text-green-800 mb-2">Saved Items</h3>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {savedItems.length === 0 ? (
                    <p className="text-green-600 text-sm">No items saved yet</p>
                  ) : (
                    savedItems.map((item, index) => (
                      <motion.p 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-green-700"
                      >
                        {item}
                      </motion.p>
                    ))
                  )}
                </div>
              </motion.div>

              <motion.div 
                className="bg-blue-50 p-4 rounded-lg border border-blue-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-semibold text-blue-800 mb-2">Shared Items</h3>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {sharedItems.length === 0 ? (
                    <p className="text-blue-600 text-sm">No items shared yet</p>
                  ) : (
                    sharedItems.map((item, index) => (
                      <motion.p 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-blue-700"
                      >
                        {item}
                      </motion.p>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DropdownDemo;