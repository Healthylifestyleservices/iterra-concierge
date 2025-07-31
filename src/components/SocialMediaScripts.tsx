import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Copy, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialScript {
  id: string;
  platform: string;
  content: string;
  hashtags: string[];
  category: string;
}

const SocialMediaScripts: React.FC = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('wellness');

  const scripts: SocialScript[] = [
    {
      id: '1',
      platform: 'Instagram',
      content: "🌿 Transform your evening routine with the power of Lavender! This ancient botanical has been cherished for centuries for its calming properties. Create your own DIY pillow spray tonight!",
      hashtags: ['#EssentialOils', '#NaturalWellness', '#SelfCare', '#Aromatherapy', '#WellnessBotanicals', '#NaturalLiving', '#Mindfulness', '#DIYWellness'],
      category: 'wellness'
    },
    {
      id: '2',
      platform: 'Facebook',
      content: "Did you know that Frankincense was once more valuable than gold? Ancient civilizations prized this sacred oil for meditation and spiritual practices. Discover the science behind this timeless treasure!",
      hashtags: ['#Frankincense', '#AncientWisdom', '#Meditation', '#SacredOils', '#WellnessJourney', '#EssentialOilEducation', '#NaturalHealth'],
      category: 'education'
    },
    {
      id: '3',
      platform: 'Twitter',
      content: "🐕🐱 Pet parents, did you know some essential oils can support your furry friends' wellness too? Always dilute properly and consult your vet first!",
      hashtags: ['#PetSafety', '#NaturalPetCare', '#EssentialOils', '#PetWellness', '#CatsAndDogs', '#PetHealth'],
      category: 'pets'
    },
    {
      id: '4',
      platform: 'Instagram',
      content: "💼 Building a wellness business that truly serves others! Start with just $10 and grow at your own pace. No quotas, no pressure - just pure education and support.",
      hashtags: ['#WellnessBusiness', '#MLMAlternative', '#EssentialOilsBusiness', '#WorkFromHome', '#WellnessEntrepreneur', '#NaturalBusiness'],
      category: 'business'
    },
    {
      id: '5',
      platform: 'Facebook',
      content: "🌱 Protective Blend Recipe Alert! Mix Wild Orange, Clove, and Cinnamon for a natural immune-supporting blend. Perfect for diffusing during seasonal changes!",
      hashtags: ['#ProtectiveBlend', '#ImmuneSupport', '#EssentialOilBlends', '#SeasonalWellness', '#NaturalImmunity'],
      category: 'wellness'
    },
    {
      id: '6',
      platform: 'Instagram',
      content: "📚 Did you know our team includes a certified aromatherapist? Get expert guidance on safe usage, blending tips, and personalized wellness recommendations!",
      hashtags: ['#CertifiedAromatherapist', '#ExpertGuidance', '#EssentialOilEducation', '#SafeUsage', '#PersonalizedWellness', '#ProfessionalSupport'],
      category: 'education'
    }
  ];

  const copyToClipboard = (script: SocialScript) => {
    const fullContent = `${script.content}\n\n${script.hashtags.map(tag => tag).join(' ')}`;
    navigator.clipboard.writeText(fullContent);
    toast({
      title: "Copied to clipboard!",
      description: `${script.platform} post ready to share`,
    });
  };

  const categories = ['wellness', 'education', 'pets', 'business'];
  const filteredScripts = scripts.filter(script => script.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Social Media Scripts with Hashtags</h2>
        <p className="text-gray-600">Ready-to-use content for all your social platforms</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredScripts.map((script) => (
          <Card key={script.id} className="h-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{script.platform} Post</CardTitle>
                <Badge variant="secondary">{script.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={script.content}
                readOnly
                className="min-h-[100px] resize-none"
              />
              <div>
                <h4 className="font-medium text-sm mb-2">Hashtags:</h4>
                <div className="flex flex-wrap gap-1">
                  {script.hashtags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => copyToClipboard(script)}
                  className="flex-1"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Post
                </Button>
                <Button variant="outline" size="icon">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaScripts;