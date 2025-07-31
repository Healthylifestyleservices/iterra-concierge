import React from 'react';
import FullyIntegratedWellnessExperience from '../components/FullyIntegratedWellnessExperience';
import PersonalizedWellnessAssistant from '../components/PersonalizedWellnessAssistant';
import LuxuryProductIntegration from '../components/LuxuryProductIntegration';
import WellnessJourneyTracker from '../components/WellnessJourneyTracker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';
import { Sparkles, MessageCircle, ShoppingBag, Target } from 'lucide-react';

const EnhancedWellnessChat: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 
            className="text-5xl font-light text-amber-900 mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            <Sparkles className="inline w-10 h-10 mr-3 text-amber-600" />
            iTERRA™ Wellness Sanctuary
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Your complete luxury wellness experience with personalized guidance, 
            curated products, and journey tracking
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-amber-100 border border-amber-200">
            <TabsTrigger 
              value="experience" 
              className="flex items-center gap-2 data-[state=active]:bg-amber-200 data-[state=active]:text-amber-900"
            >
              <Sparkles className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger 
              value="chat" 
              className="flex items-center gap-2 data-[state=active]:bg-amber-200 data-[state=active]:text-amber-900"
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger 
              value="products" 
              className="flex items-center gap-2 data-[state=active]:bg-amber-200 data-[state=active]:text-amber-900"
            >
              <ShoppingBag className="w-4 h-4" />
              Products
            </TabsTrigger>
            <TabsTrigger 
              value="journey" 
              className="flex items-center gap-2 data-[state=active]:bg-amber-200 data-[state=active]:text-amber-900"
            >
              <Target className="w-4 h-4" />
              Journey
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            <Card className="bg-gradient-to-r from-amber-50 to-stone-50 border-amber-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-light text-amber-900 mb-4">Interactive Wellness Experience</h2>
                <p className="text-amber-800 mb-6">
                  Immerse yourself in our luxury wellness sanctuary with animated guidance, 
                  floating particles, and personalized recommendations.
                </p>
                <FullyIntegratedWellnessExperience />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card className="bg-gradient-to-r from-stone-50 to-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-light text-amber-900 mb-4">Personal Wellness Assistant</h2>
                <p className="text-amber-800 mb-6">
                  Chat with your dedicated wellness guide for personalized recommendations, 
                  oil suggestions, and wellness support.
                </p>
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <p className="text-amber-700">
                    Your floating wellness assistant is available in the bottom-right corner.
                    Click the chat button to start your personalized wellness conversation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className="bg-gradient-to-b from-amber-50 to-stone-50 border-amber-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-light text-amber-900 mb-4">Curated Wellness Products</h2>
                <p className="text-amber-800 mb-6">
                  Discover our handpicked selection of premium essential oils and wellness products, 
                  each chosen for their therapeutic benefits and quality.
                </p>
                <LuxuryProductIntegration />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="journey" className="space-y-6">
            <Card className="bg-gradient-to-r from-stone-50 to-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-light text-amber-900 mb-4">Your Wellness Journey</h2>
                <p className="text-amber-800 mb-6">
                  Track your progress, set wellness goals, and celebrate achievements 
                  on your personalized path to natural wellness.
                </p>
                <WellnessJourneyTracker />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Floating Assistant - Always Available */}
      <PersonalizedWellnessAssistant />
    </div>
  );
};

export default EnhancedWellnessChat;