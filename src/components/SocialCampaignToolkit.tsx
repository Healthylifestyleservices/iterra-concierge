import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Copy, Instagram, MessageSquare, Sparkles, Calendar, Heart } from 'lucide-react';
import { socialCampaignToolkit } from '@/data/socialCampaignToolkit';
import { useToast } from '@/hooks/use-toast';

const SocialCampaignToolkit: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const { toast } = useToast();

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const copyToClipboard = (text: string, hashtags: string) => {
    const fullText = `${text}\n\n${hashtags}`;
    navigator.clipboard.writeText(fullText);
    toast({
      title: "Copied to clipboard!",
      description: "Content and hashtags copied successfully.",
    });
  };

  const campaignCategories = {
    instagram: {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram Campaigns",
      campaigns: [
        { key: 'sleepReset', title: '🌙 Sleep Reset Challenge', data: socialCampaignToolkit.instagram.sleepReset },
        { key: 'weightLoss', title: '🔥 Weight Loss Glow-Up', data: socialCampaignToolkit.instagram.weightLoss },
        { key: 'stressFree', title: '🌟 Stress-Free Morning Series', data: socialCampaignToolkit.instagram.stressFree },
        { key: 'summerGlow', title: '💖 Summer Glow-Up (Beauty/Detox)', data: socialCampaignToolkit.instagram.summerGlow },
        { key: 'eventHoliday', title: '🎉 Event & Holiday Wellness', data: socialCampaignToolkit.instagram.eventHoliday }
      ]
    },
    tiktok: {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "TikTok Campaigns",
      campaigns: [
        { key: 'energyFocus', title: '🌞 Energy & Focus Hacks', data: socialCampaignToolkit.tiktok.energyFocus },
        { key: 'weightLoss', title: '🔥 Real Weight Loss Diaries', data: socialCampaignToolkit.tiktok.weightLoss }
      ]
    }
  };

  const CampaignCard: React.FC<{ campaign: any, platform: string }> = ({ campaign, platform }) => {
    const isOpen = openSections.includes(`${platform}-${campaign.key}`);
    
    return (
      <Card className="mb-4">
        <Collapsible 
          open={isOpen} 
          onOpenChange={() => toggleSection(`${platform}-${campaign.key}`)}
        >
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{campaign.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{campaign.data.length} posts</Badge>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="space-y-4">
              {campaign.data.map((post: any, index: number) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      {post.type && (
                        <Badge className="mb-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                          {post.type}
                        </Badge>
                      )}
                      <p className="text-gray-800 mb-2">{post.content}</p>
                      <p className="text-blue-600 text-sm font-medium">{post.hashtags}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(post.content, post.hashtags)}
                      className="ml-2 flex-shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          🌿 Hot Social Wellness Campaign Toolkit
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Platform-ready content with trending hashtags for Sleep, Weight, Energy, Stress, Detox, Beauty & Events
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Badge className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
            <Heart className="h-3 w-3 mr-1" />
            Brand-Free
          </Badge>
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <Sparkles className="h-3 w-3 mr-1" />
            Copy-Paste Ready
          </Badge>
          <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <Calendar className="h-3 w-3 mr-1" />
            Trending Topics
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="instagram" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instagram" className="flex items-center space-x-2">
            <Instagram className="h-4 w-4" />
            <span>Instagram</span>
          </TabsTrigger>
          <TabsTrigger value="tiktok" className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4" />
            <span>TikTok</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="instagram" className="space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Instagram Campaigns</h2>
            <p className="text-gray-600">5 platform-ready options per campaign with engagement-boosting hashtags</p>
          </div>
          {campaignCategories.instagram.campaigns.map((campaign) => (
            <CampaignCard key={campaign.key} campaign={campaign} platform="instagram" />
          ))}
        </TabsContent>

        <TabsContent value="tiktok" className="space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">TikTok Campaigns</h2>
            <p className="text-gray-600">Trending wellness content with viral hashtags</p>
          </div>
          {campaignCategories.tiktok.campaigns.map((campaign) => (
            <CampaignCard key={campaign.key} campaign={campaign} platform="tiktok" />
          ))}
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">✨ Pro Tips for Maximum Engagement</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold mb-2">📱 Platform Optimization</h4>
            <p className="text-sm text-gray-600">Each post is optimized for its specific platform's algorithm and audience behavior</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold mb-2">🎯 Trending Hashtags</h4>
            <p className="text-sm text-gray-600">All hashtags are current and designed to boost visibility and engagement</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold mb-2">🌟 Seasonal Content</h4>
            <p className="text-sm text-gray-600">Includes event-driven and seasonal tie-ins for year-round relevance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCampaignToolkit;