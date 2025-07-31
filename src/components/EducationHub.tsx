import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, BookOpen, Users, Award, ExternalLink, Zap, GraduationCap, Library, Building2, Leaf, ShoppingCart, Crown } from 'lucide-react';
import { educationVideos, educationArticles, certificationPrograms, membershipPrograms, EducationItem } from '@/data/educationContent';

const EducationHub: React.FC = () => {
  const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => {
    const getIcon = () => {
      if (item.isCertification) return <GraduationCap className="h-5 w-5" />;
      if (item.isMembership) return <Crown className="h-5 w-5" />;
      switch (item.type) {
        case 'video': return <Play className="h-5 w-5" />;
        case 'article': return <BookOpen className="h-5 w-5" />;
        default: return <BookOpen className="h-5 w-5" />;
      }
    };

    const getLevelColor = () => {
      switch (item.level) {
        case 'Beginner': return 'bg-green-100 text-green-800';
        case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
        case 'Advanced': return 'bg-red-100 text-red-800';
        case 'Professional': return 'bg-purple-100 text-purple-800';
        case 'Open to All': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    const handleClick = () => {
      if (item.url && item.isExternal) {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              {getIcon()}
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </div>
            <Badge className={getLevelColor()}>{item.level}</Badge>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{item.duration}</span>
            {item.price && (
              <Badge variant="outline" className="text-green-600">
                {item.price}
              </Badge>
            )}
            {item.instructor && (
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {item.instructor}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">{item.description}</p>
          {item.highlights && (
            <ul className="text-sm text-gray-600 space-y-1">
              {item.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          <Button 
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            onClick={handleClick}
          >
            {item.isCertification ? <GraduationCap className="h-4 w-4 mr-2" /> : 
             item.isMembership ? <Crown className="h-4 w-4 mr-2" /> :
             <ExternalLink className="h-4 w-4 mr-2" />}
            {item.isCertification ? 'Learn More & Enroll' :
             item.isMembership ? 'Join Free Today' :
             item.type === 'video' ? 'Watch Now' : 'Read Article'}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-4 text-green-800">iTERRA - Your Personal Gateway to Wellness</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          <strong>Explore free wellness education covering essential oils, nutrition, fitness, business, and holistic health for yourself and your pets.<br/>
          Become a certified Aroma Alchemist with courses for both human and animal aromatherapy!</strong>
        </p>
      </div>

      <div className="space-y-8">
        {/* Education Videos */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationVideos.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
            {educationArticles.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationPrograms.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Membership */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {membershipPrograms.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Social Media Call to Action */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4 text-purple-800">
            📱 Share on Social Media
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Explore, share, or embed these resources into your social and professional platforms.<br/>
            Every module is ready to be reshared on Instagram, Facebook (Meta), X, TikTok, and Pinterest—helping both you and your community deepen their safe holistic wellness journey!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export { EducationHub };
export default EducationHub;