import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Flower, Zap, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import FixedChatSystem from './FixedChatSystem';

interface ConsultationOption {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  textColor: string;
  action: () => void;
}

const WorkingConsultationOptions: React.FC = () => {
  const [activeConsultation, setActiveConsultation] = useState<string | null>(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleWellnessConsultation = () => {
    setSelectedTopic('wellness consultation');
    setActiveConsultation('wellness');
    setChatVisible(true);
  };

  const handleOilRecommendations = () => {
    setSelectedTopic('essential oil guidance');
    setActiveConsultation('oils');
    setChatVisible(true);
  };

  const handleWellnessProtocol = () => {
    setSelectedTopic('custom wellness protocol');
    setActiveConsultation('protocol');
    setChatVisible(true);
  };

  const handleChatSupport = () => {
    setSelectedTopic('live wellness support');
    setActiveConsultation('chat');
    setChatVisible(true);
  };

  const consultationOptions: ConsultationOption[] = [
    {
      id: 'wellness-consultation',
      title: 'Personal Wellness Consultation',
      description: 'Get personalized wellness recommendations',
      icon: Heart,
      gradient: 'from-pink-400 to-rose-400',
      textColor: 'text-pink-600',
      action: handleWellnessConsultation
    },
    {
      id: 'oil-recommendations',
      title: 'Essential Oil Guidance',
      description: 'Discover the perfect oils for your needs',
      icon: Flower,
      gradient: 'from-green-400 to-emerald-400',
      textColor: 'text-green-600',
      action: handleOilRecommendations
    },
    {
      id: 'wellness-protocol',
      title: 'Custom Wellness Protocol',
      description: 'Receive a tailored wellness plan',
      icon: Zap,
      gradient: 'from-blue-400 to-teal-400',
      textColor: 'text-blue-600',
      action: handleWellnessProtocol
    },
    {
      id: 'chat-support',
      title: 'Live Wellness Support',
      description: 'Chat with wellness experts',
      icon: MessageCircle,
      gradient: 'from-purple-400 to-violet-400',
      textColor: 'text-purple-600',
      action: handleChatSupport
    }
  ];

  const handleSuggestionAccepted = (suggestion: string) => {
    console.log('Suggestion accepted:', suggestion);
    // Could trigger additional actions like saving preferences
  };

  if (chatVisible) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-6xl mx-auto p-6">
          <div className="mb-6">
            <Button 
              onClick={() => {
                setChatVisible(false);
                setActiveConsultation(null);
              }}
              variant="outline"
              className="mb-4"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Options
            </Button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-purple-700 mb-2">
                {selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)}
              </h2>
              <p className="text-gray-600">Interactive consultation session</p>
            </div>
          </div>
          <FixedChatSystem onSuggestionAccepted={handleSuggestionAccepted} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {consultationOptions.map((option, index) => {
        const Icon = option.icon;
        return (
          <Card 
            key={index}
            className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden bg-white/90 backdrop-blur-sm"
          >
            <div className={`h-1 bg-gradient-to-r ${option.gradient}`} />
            <CardHeader className="text-center pb-4">
              <div className={`mx-auto mb-4 p-3 rounded-full bg-gradient-to-r ${option.gradient} w-fit`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className={`text-lg ${option.textColor}`}>
                {option.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">{option.description}</p>
              <Button 
                onClick={option.action}
                className={`bg-gradient-to-r ${option.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white border-0`}
                size="sm"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Start
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default WorkingConsultationOptions;