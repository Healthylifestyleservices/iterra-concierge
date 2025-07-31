import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, BookOpen, MessageSquare, Award, ExternalLink, Heart, Zap, Rocket, Gift, Palette } from 'lucide-react';
import SocialCampaignToolkit from './SocialCampaignToolkit';
import EducationHub from './EducationHub';
import UpdatedBusinessToolsLibrary from './UpdatedBusinessToolsLibrary';
import HolidayToolsSection from './HolidayToolsSection';
import PlatformSpecificTools from './PlatformSpecificTools';
import { platformSpecificTools } from '@/data/businessToolsData';

const BusinessSection: React.FC = () => {
  const healthLifestyleServices = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Health & Lifestyle Education Services',
      description: 'Comprehensive wellness education and lifestyle guidance',
      features: ['Wellness consultations', 'Lifestyle coaching', 'Health education', 'Nutrition guidance'],
      tips: ['Focus on holistic wellness approach', 'Personalized guidance for each client']
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Master Aromatherapy Certification - People',
      description: 'Professional certification program for human aromatherapy',
      features: ['Advanced oil chemistry', 'Clinical applications', 'Safety protocols', 'Business integration'],
      tips: ['Hands-on practical training', 'Ongoing mentorship included']
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Master Aromatherapy Certification - Pets',
      description: 'Specialized certification for pet aromatherapy practitioners',
      features: ['Pet-safe oil selection', 'Species-specific protocols', 'Veterinary collaboration', 'Safety guidelines'],
      tips: ['Work with veterinarians', 'Focus on pet safety first']
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Educational Resources & Library',
      description: 'Extensive library of articles, blogs, and research',
      features: ['Research database', 'Weekly blog updates', 'Video tutorials', 'Case studies'],
      tips: ['Stay updated with latest research', 'Share knowledge with clients']
    }
  ];

  const quickAccessTools = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Real Business Tools',
      description: 'Actual working platforms and tools with live links',
      count: '12+ Tools',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: 'TikTok Wellness Videos',
      description: 'Trending wellness content and video tutorials',
      count: '8+ Videos',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Social Campaign Toolkit',
      description: 'Ready-to-use social media campaigns with trending hashtags',
      count: '20+ Campaigns',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Content Creation',
      description: 'Professional design and video creation tools',
      count: '6+ Creators',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const ServiceCard: React.FC<{ service: typeof healthLifestyleServices[0] }> = ({ service }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
            {service.icon}
          </div>
          <CardTitle className="text-lg">{service.title}</CardTitle>
        </div>
        <p className="text-gray-600">{service.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {service.features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
          <div>
            <h4 className="font-medium text-sm mb-1">Key Benefits:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {service.tips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
          <Button 
            className="w-full bg-gradient-to-r from-green-500 to-blue-500"
            onClick={() => window.open('https://www.doterra.com/US/en/site/yoursite', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🌿 Business Tools & Marketing Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Social campaign toolkits, real working tools, and professional wellness education resources
        </p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickAccessTools.map((tool, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className={`p-3 bg-gradient-to-r ${tool.color} rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <div className="text-white">{tool.icon}</div>
              </div>
              <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
              <Badge className={`bg-gradient-to-r ${tool.color} text-white`}>
                {tool.count}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="campaigns">Social Campaigns</TabsTrigger>
          <TabsTrigger value="tools">Real Tools</TabsTrigger>
          <TabsTrigger value="holiday">Holiday Tools</TabsTrigger>
          <TabsTrigger value="services">Education</TabsTrigger>
          <TabsTrigger value="education">Library</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <SocialCampaignToolkit />
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <UpdatedBusinessToolsLibrary />
        </TabsContent>

        <TabsContent value="holiday" className="space-y-6">
          <HolidayToolsSection />
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Professional Education & Certification Programs</h2>
            <p className="text-gray-600">Master aromatherapy certifications and health lifestyle education services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthLifestyleServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <EducationHub />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessSection;