import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, Clock, Hash, ExternalLink } from 'lucide-react';
import { TikTokVideoTool } from '@/data/tiktokVideoTools';

interface TikTokVideoCardProps {
  video: TikTokVideoTool;
}

const TikTokVideoCard: React.FC<TikTokVideoCardProps> = ({ video }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Wellness': return 'bg-green-100 text-green-800';
      case 'DIY': return 'bg-purple-100 text-purple-800';
      case 'Mental Health': return 'bg-blue-100 text-blue-800';
      case 'Home': return 'bg-yellow-100 text-yellow-800';
      case 'Sleep': return 'bg-indigo-100 text-indigo-800';
      case 'Fitness': return 'bg-red-100 text-red-800';
      case 'Health': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-pink-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold group-hover:text-pink-600 transition-colors">
            {video.title}
          </CardTitle>
          <Badge className={getCategoryColor(video.category)}>
            {video.category}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {video.duration}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {video.views} views
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-gray-800 flex items-center gap-1">
            <Hash className="h-4 w-4" />
            Hashtags:
          </h4>
          <div className="flex flex-wrap gap-1">
            {video.hashtags.map((hashtag, index) => (
              <Badge key={index} variant="outline" className="text-xs text-pink-600">
                {hashtag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm mb-2 text-gray-800">💡 Pro Tips:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {video.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-1">
                <span className="text-pink-500 font-bold">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold"
          onClick={() => window.open(video.videoUrl, '_blank')}
        >
          <Play className="h-4 w-4 mr-2" />
          Watch on TikTok
        </Button>
      </CardContent>
    </Card>
  );
};

export default TikTokVideoCard;