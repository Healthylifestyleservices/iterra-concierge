import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Gift, Sparkles, Calendar, AlertTriangle } from 'lucide-react';
import { businessToolsData, holidayBusinessTools, platformSpecificTools } from '@/data/businessToolsData';
import BusinessToolCard from './BusinessToolCard';
import { EnhancedBusinessToolsFallback } from './EnhancedBusinessToolsFallback';
import { ErrorBoundaryWithFallback } from './ErrorBoundaryWithFallback';
import { useErrorHandler } from '../hooks/useErrorHandler';

const EnhancedBusinessToolsLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { error, handleError, clearError } = useErrorHandler();

  // Safely access data with error handling
  const safeGetTools = () => {
    try {
      return [...(businessToolsData || []), ...(holidayBusinessTools || [])];
    } catch (err) {
      return handleError(err, []);
    }
  };

  const allTools = safeGetTools();
  
  const filteredTools = allTools.filter(tool => {
    try {
      const matchesSearch = tool.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlatform = selectedPlatform === 'all' || tool.platform === selectedPlatform;
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      
      return matchesSearch && matchesPlatform && matchesCategory;
    } catch (err) {
      handleError(err, `Filter error for tool: ${tool?.id}`);
      return false;
    }
  });

  const regularTools = filteredTools.filter(tool => !tool.isHoliday);
  const holidayTools = filteredTools.filter(tool => tool.isHoliday);

  const platforms = ['Instagram', 'Facebook', 'TikTok', 'Pinterest', 'YouTube', 'LinkedIn'];
  const categories = ['Social Media', 'Marketing', 'Analytics', 'Content Creation'];

  // If there's a critical error, show fallback
  if (error && allTools.length === 0) {
    return <EnhancedBusinessToolsFallback error={error} />;
  }

  return (
    <ErrorBoundaryWithFallback 
      fallbackComponent={EnhancedBusinessToolsFallback}
      componentName="BusinessToolsLibrary"
    >
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-cormorant mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
            🚀 Business Tools Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of social media tools, marketing resources, and holiday campaigns
          </p>
          {error && (
            <div className="mt-4 flex items-center justify-center gap-2 text-amber-600">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Some features may be limited - fallback content active</span>
              <Button size="sm" variant="outline" onClick={clearError}>
                Retry
              </Button>
            </div>
          )}
        </div>

        {/* Search and Filters */}
        <Card className="bg-[#FAF9F6] border-[#CD7F32]/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#D4AF37] font-cormorant">
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
                  className="pl-10 border-[#CD7F32]/30 focus:border-[#D4AF37]"
                />
              </div>
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="border-[#CD7F32]/30">
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
                <SelectTrigger className="border-[#CD7F32]/30">
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
          <TabsList className="grid w-full grid-cols-4 bg-[#FAF9F6]">
            <TabsTrigger value="all" className="flex items-center gap-2 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white">
              <Sparkles className="h-4 w-4" />
              All Tools ({allTools.length})
            </TabsTrigger>
            <TabsTrigger value="regular" className="flex items-center gap-2 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white">
              Regular ({regularTools.length})
            </TabsTrigger>
            <TabsTrigger value="holiday" className="flex items-center gap-2 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white">
              <Gift className="h-4 w-4" />
              Holiday ({holidayTools.length})
            </TabsTrigger>
            <TabsTrigger value="platforms" className="flex items-center gap-2 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white">
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
              <h2 className="text-2xl font-cormorant mb-2 text-[#CD7F32]">🎄 Holiday & Seasonal Tools</h2>
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
              const platformTools = platformSpecificTools?.[platform as keyof typeof platformSpecificTools] || [];
              if (platformTools.length === 0) return null;
              
              return (
                <div key={platform} className="space-y-4">
                  <h3 className="text-xl font-cormorant text-[#D4AF37] border-b border-[#CD7F32]/30 pb-2">
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
    </ErrorBoundaryWithFallback>
  );
};

export { EnhancedBusinessToolsLibrary };
export default EnhancedBusinessToolsLibrary;