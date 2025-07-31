import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import WellnessSanctuary from './WellnessSanctuary';
import { MensSection } from './MensSection';
import { WomensSection } from './WomensSection';
import { BusinessToolsLibrary } from './BusinessToolsLibrary';
import { EducationHub } from './EducationHub';
import { HomeSection } from './HomeSection';

interface CategoryPagesProps {
  category: string;
}

const CategoryPages: React.FC<CategoryPagesProps> = ({ category }) => {
  const renderCategory = () => {
    switch (category) {
      case 'masculine-vitality':
        return <MensSection />;
      case 'divine-feminine-energy':
        return <WomensSection />;
      case 'wellness-sanctuary':
        return <WellnessSanctuary />;
      case 'wellness-entrepreneurship':
        return <BusinessToolsLibrary />;
      case 'wisdom-of-wellness':
        return <EducationHub />;
      case 'home':
        return <HomeSection />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <p className="text-gray-600">The requested category could not be found.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {renderCategory()}
      </div>
    </div>
  );
};

export default CategoryPages;