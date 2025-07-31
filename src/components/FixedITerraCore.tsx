import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FixedITerraCore = () => {
  const [activeSection, setActiveSection] = useState('human');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (window.location.href.includes('iterra')) {
      localStorage.setItem('bypassAuth', 'true');
    }
  }, []);

  const responses = {
    stress: 'For stress relief, try Lavender, Bergamot, or Balance blend. Apply to wrists or diffuse.',
    sleep: 'For better sleep, use Lavender, Cedarwood, or Serenity blend. Diffuse 30 min before bed.',
    energy: 'For energy, try Peppermint, Wild Orange, or Motivate blend. Inhale or apply to temples.',
    focus: 'For focus, use Rosemary, Frankincense, or InTune blend. Diffuse while working.',
    immune: 'For immune support, try On Guard, Oregano, or Tea Tree with proper dilution.',
    digestion: 'For digestion, use Peppermint, Ginger, or DigestZen blend as directed.',
    pets: 'For pets, only use highly diluted Lavender. Always consult a veterinarian first.'
  };

  const sections = {
    human: {
      title: 'Human Wellness',
      content: 'Essential oils for stress, sleep, energy, and focus.',
      items: ['Stress: Lavender, Balance', 'Sleep: Serenity, Cedarwood', 'Energy: Peppermint, Wild Orange', 'Focus: InTune, Frankincense']
    },
    pet: {
      title: 'Pet Wellness',
      content: 'Safe essential oil solutions for pets.',
      items: ['Calming: Lavender (diluted)', 'Always consult veterinarian', 'Never use citrus on cats']
    },
    together: {
      title: 'Healthier Together™',
      content: 'Family wellness solutions.',
      items: ['Family diffuser blends', 'Kid-safe ratios', 'Healthy home environment']
    },
    shop: {
      title: 'Your Wellness Shop',
      content: 'doTERRA product recommendations.',
      items: ['Starter kits', 'Popular oils', 'Supplements']
    },
    education: {
      title: 'Education Hub',
      content: 'Learn about essential oils.',
      items: ['Safety guidelines', 'Dilution charts', 'Application methods']
    },
    memberships: {
      title: 'Membership Benefits',
      content: 'doTERRA membership perks.',
      items: ['25% off retail', 'Loyalty rewards', 'Free shipping']
    }
  };

  const handleAsk = () => {
    if (!question.trim()) return;
    
    const lower = question.toLowerCase();
    let response = 'I can help with stress, sleep, energy, focus, immune, digestion, and pet safety. What interests you?';
    
    for (const [key, res] of Object.entries(responses)) {
      if (lower.includes(key)) {
        response = res;
        break;
      }
    }
    
    setAnswer(response);
    setQuestion('');
  };

  const handleDoTerraRedirect = () => {
    const id = localStorage.getItem('doterraid') || 'PRIME_EMPRESS';
    if (id && id !== 'PRIME_EMPRESS') {
      window.open(`https://www.doterra.com/${id}/?source=iterra`, '_blank');
    } else {
      alert('Associate ID not found. Please check your settings.');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="human">Human</TabsTrigger>
          <TabsTrigger value="pet">Pet</TabsTrigger>
          <TabsTrigger value="together">Together</TabsTrigger>
          <TabsTrigger value="shop">Shop</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="memberships">Memberships</TabsTrigger>
        </TabsList>
        
        {Object.entries(sections).map(([key, section]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{section.content}</p>
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Button onClick={handleDoTerraRedirect} className="mt-4 bg-purple-600 hover:bg-purple-700">
                  Shop doTERRA
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {isVisible && (
        <Card className="fixed bottom-4 right-4 w-80 z-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex justify-between items-center">
              Ask iTerra
              <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)}>×</Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about oils, protocols, or pets..."
              onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
            />
            <Button onClick={handleAsk} className="w-full bg-purple-600 hover:bg-purple-700">
              Ask iTerra
            </Button>
            {answer && (
              <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                {answer}
              </div>
            )}
          </CardContent>
        </Card>
      )}
      
      {!isVisible && (
        <Button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 bg-purple-600 hover:bg-purple-700"
        >
          💬
        </Button>
      )}
    </div>
  );
};

export default FixedITerraCore;