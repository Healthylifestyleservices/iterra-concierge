import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Instagram, Facebook, Youtube, Linkedin, Twitter, Camera, Video, Image, ExternalLink } from 'lucide-react';
import { socialPlatformTools } from '@/data/socialPlatformTools';
import BusinessToolCard from './BusinessToolCard';

const PlatformSpecificTools: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <Instagram className="h-4 w-4" />;
      case 'Facebook': return <Facebook className="h-4 w-4" />;
      case 'YouTube': return <Youtube className="h-4 w-4" />;
      case 'LinkedIn': return <Linkedin className="h-4 w-4" />;
      case 'Twitter': return <Twitter className="h-4 w-4" />;
      case 'TikTok': return <Video className="h-4 w-4" />;
      case 'Pinterest': return <Image className="h-4 w-4" />;
      case 'Snapchat': return <Camera className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  const platforms = ['Instagram', 'Facebook', 'YouTube', 'TikTok', 'Pinterest', 'LinkedIn', 'Twitter', 'Snapchat'];
  
  const platformGroups = platforms.reduce((acc, platform) => {
    acc[platform] = socialPlatformTools.filter(tool => tool.platform === platform);
    return acc;
  }, {} as Record<string, typeof socialPlatformTools>);

  const platformStats = {
    Instagram: { users: '2B+', engagement: 'High', format: 'Visual' },
    Facebook: { users: '3B+', engagement: 'Medium', format: 'Community' },
    YouTube: { users: '2.7B+', engagement: 'High', format: 'Video' },
    TikTok: { users: '1B+', engagement: 'Very High', format: 'Short Video' },
    Pinterest: { users: '450M+', engagement: 'Medium', format: 'Visual Search' },
    LinkedIn: { users: '900M+', engagement: 'Professional', format: 'Business' },
    Twitter: { users: '450M+', engagement: 'Real-time', format: 'Text' },
    Snapchat: { users: '750M+', engagement: 'High', format: 'Stories' }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          📱 Platform-Specific Business Tools
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tailored content and strategies for each social media platform
        </p>
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {platforms.map((platform) => {
          const stats = platformStats[platform as keyof typeof platformStats];
          return (
            <Card key={platform} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  {getPlatformIcon(platform)}
                </div>
                <h3 className="font-medium text-sm mb-1">{platform}</h3>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>{stats.users} users</div>
                  <div>{stats.engagement} engagement</div>
                  <Badge variant="outline" className="text-xs">{stats.format}</Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9">
          <TabsTrigger value="all">All</TabsTrigger>
          {platforms.map((platform) => (
            <TabsTrigger key={platform} value={platform} className="text-xs">
              {platform}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPlatformTools.map((tool) => (
              <BusinessToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </TabsContent>

        {platforms.map((platform) => (
          <TabsContent key={platform} value={platform} className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                {getPlatformIcon(platform)}
                <h3 className="text-2xl font-bold">{platform} Tools</h3>
              </div>
              <p className="text-gray-600">
                Specialized content and strategies for {platform}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformGroups[platform]?.map((tool) => (
                <BusinessToolCard key={tool.id} tool={tool} />
              )) || []}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PlatformSpecificTools;