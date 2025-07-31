import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Gift, Sparkles, Calendar } from 'lucide-react';
import { businessToolsData, holidayBusinessTools, platformSpecificTools } from '@/data/businessToolsData';
import BusinessToolCard from './BusinessToolCard';

const BusinessToolsLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allTools = [...businessToolsData, ...holidayBusinessTools];
  
  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || tool.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    
    return matchesSearch && matchesPlatform && matchesCategory;
  });

  const regularTools = filteredTools.filter(tool => !tool.isHoliday);
  const holidayTools = filteredTools.filter(tool => tool.isHoliday);

  const platforms = ['Instagram', 'Facebook', 'TikTok', 'Pinterest', 'YouTube', 'LinkedIn'];
  const categories = ['Social Media', 'Marketing', 'Analytics', 'Content Creation'];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🚀 Business Tools Library
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive collection of social media tools, marketing resources, and holiday campaigns
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Find Your Perfect Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger>
                <SelectValue placeholder="Select Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                {platforms.map(platform => (
                  <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            All Tools ({allTools.length})
          </TabsTrigger>
          <TabsTrigger value="regular" className="flex items-center gap-2">
            Regular ({regularTools.length})
          </TabsTrigger>
          <TabsTrigger value="holiday" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Holiday ({holidayTools.length})
          </TabsTrigger>
          <TabsTrigger value="platforms" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            By Platform
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <BusinessToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="regular" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTools.map((tool) => (
              <BusinessToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="holiday" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-amber-600">🎄 Holiday & Seasonal Tools</h2>
            <p className="text-gray-600">Special campaigns and content for holidays and seasons</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidayTools.map((tool) => (
              <BusinessToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-6">
          {platforms.map(platform => {
            const platformTools = platformSpecificTools[platform as keyof typeof platformSpecificTools] || [];
            if (platformTools.length === 0) return null;
            
            return (
              <div key={platform} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">
                  {platform} Tools ({platformTools.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platformTools.map((tool) => (
                    <BusinessToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { BusinessToolsLibrary };
export default BusinessToolsLibrary;