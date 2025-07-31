import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Gift, Heart, Sparkles, Sun, Leaf, Snowflake, ShoppingBag } from 'lucide-react';
import { holidayProductCatalog } from '@/data/holidayProductCatalog';
import HolidayProductCard from './HolidayProductCard';

const HolidayToolsSection: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState('all');

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case 'Christmas': return <Snowflake className="h-4 w-4" />;
      case 'Valentine\'s Day': return <Heart className="h-4 w-4" />;
      case 'Summer': return <Sun className="h-4 w-4" />;
      case 'Easter': return <Leaf className="h-4 w-4" />;
      default: return <Sparkles className="h-4 w-4" />;
    }
  };

  const seasonalGroups = {
    winter: holidayProductCatalog.filter(product => 
      ['Christmas', 'Winter'].includes(product.holidayTheme)
    ),
    spring: holidayProductCatalog.filter(product => 
      ['Easter', 'Mother\'s Day'].includes(product.holidayTheme)
    ),
    summer: holidayProductCatalog.filter(product => 
      ['Summer'].includes(product.holidayTheme)
    ),
    fall: holidayProductCatalog.filter(product => 
      ['Back to School', 'Thanksgiving'].includes(product.holidayTheme)
    ),
    special: holidayProductCatalog.filter(product => 
      ['Valentine\'s Day'].includes(product.holidayTheme)
    )
  };

  const upcomingHolidays = [
    { name: 'Valentine\'s Day', date: 'Feb 14', theme: 'Love & Self-Care', color: 'bg-pink-500' },
    { name: 'Easter', date: 'Mar 31', theme: 'Renewal & Growth', color: 'bg-purple-500' },
    { name: 'Mother\'s Day', date: 'May 12', theme: 'Appreciation', color: 'bg-rose-500' },
    { name: 'Summer', date: 'Jun 21', theme: 'Energy & Vitality', color: 'bg-yellow-500' },
    { name: 'Back to School', date: 'Aug-Sep', theme: 'Focus & Learning', color: 'bg-blue-500' },
    { name: 'Thanksgiving', date: 'Nov 28', theme: 'Gratitude', color: 'bg-orange-500' },
    { name: 'Christmas', date: 'Dec 25', theme: 'Joy & Peace', color: 'bg-green-500' },
    { name: 'Winter', date: 'Dec-Feb', theme: 'Immunity & Warmth', color: 'bg-slate-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🎄 Holiday Wellness Products
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real essential oil products and wellness solutions for every holiday and season
        </p>
      </div>

      {/* Upcoming Holidays Calendar */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Calendar className="h-5 w-5" />
            Seasonal Wellness Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
            {upcomingHolidays.map((holiday, index) => (
              <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className={`w-3 h-3 ${holiday.color} rounded-full mx-auto mb-1`}></div>
                <div className="font-medium text-sm">{holiday.name}</div>
                <div className="text-xs text-gray-500">{holiday.date}</div>
                <div className="text-xs text-gray-600 mt-1">{holiday.theme}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="winter">Winter</TabsTrigger>
          <TabsTrigger value="spring">Spring</TabsTrigger>
          <TabsTrigger value="summer">Summer</TabsTrigger>
          <TabsTrigger value="fall">Fall</TabsTrigger>
          <TabsTrigger value="special">Special</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              All Holiday Products ({holidayProductCatalog.length})
            </h3>
            <p className="text-gray-600">
              Complete collection of seasonal wellness products with real links
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidayProductCatalog.map((product) => (
              <HolidayProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {Object.entries(seasonalGroups).map(([season, products]) => (
          <TabsContent key={season} value={season} className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 capitalize">
                {season} Holiday Products ({products.length})
              </h3>
              <p className="text-gray-600">
                Seasonal wellness products for {season} holidays and celebrations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <HolidayProductCard key={product.id} product={product} />
              ))}
            </div>
            {products.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    More {season} products coming soon!
                  </h3>
                  <p className="text-gray-500">
                    We're adding new seasonal products regularly.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default HolidayToolsSection;