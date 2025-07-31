import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Video, Sparkles, ExternalLink } from 'lucide-react';
import { realBusinessTools } from '@/data/realBusinessTools';
import { tiktokVideoTools } from '@/data/tiktokVideoTools';
import RealBusinessToolCard from './RealBusinessToolCard';
import TikTokVideoCard from './TikTokVideoCard';

const UpdatedBusinessToolsLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = realBusinessTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || tool.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    
    return matchesSearch && matchesPlatform && matchesCategory;
  });

  const filteredVideos = tiktokVideoTools.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const platforms = ['TikTok', 'Instagram', 'YouTube', 'Facebook', 'Pinterest'];
  const categories = ['Social Media', 'Marketing', 'Analytics', 'Content Creation', 'Wellness', 'DIY'];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🚀 Real Business Tools & Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Actual working tools, platforms, and TikTok videos to grow your wellness business
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
                placeholder="Search tools and videos..."
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

      <Tabs defaultValue="tools" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Business Tools ({realBusinessTools.length})
          </TabsTrigger>
          <TabsTrigger value="tiktok" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            TikTok Videos ({tiktokVideoTools.length})
          </TabsTrigger>
          <TabsTrigger value="all" className="flex items-center gap-2">
            All Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">🛠️ Real Business Tools</h2>
            <p className="text-gray-600">Actual platforms and tools with working links</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <RealBusinessToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tiktok" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">🎬 TikTok Wellness Videos</h2>
            <p className="text-gray-600">Trending wellness content and tutorials</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <TikTokVideoCard key={video.id} video={video} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🛠️ Business Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.slice(0, 6).map((tool) => (
                  <RealBusinessToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🎬 TikTok Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.slice(0, 6).map((video) => (
                  <TikTokVideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UpdatedBusinessToolsLibrary;