import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuestionnaireProps {
  gender: 'women' | 'men';
  onComplete: (results: any) => void;
  onBack: () => void;
}

interface FormData {
  age: string;
  weightGain: string;
  hormone: string;
  hair: string;
  skin: string;
  energy: string;
  behavior: string;
  longevity: string;
}

const WellnessQuestionnaire: React.FC<QuestionnaireProps> = ({ gender, onComplete, onBack }) => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    weightGain: '',
    hormone: '',
    hair: '',
    skin: '',
    energy: '',
    behavior: '',
    longevity: ''
  });

  const questions = {
    women: {
      title: "Women's Wellness Assessment",
      subtitle: "Help us create your personalized wellness plan",
      fields: [
        {
          key: 'age' as keyof FormData,
          label: 'Age Range',
          type: 'select',
          options: ['18-25', '26-35', '36-45', '46-55', '55+']
        },
        {
          key: 'behavior' as keyof FormData,
          label: 'Daily Behavior & Mood Patterns',
          type: 'radio',
          options: ['Consistently positive', 'Generally stable', 'Occasional fluctuations', 'Frequent mood changes']
        },
        {
          key: 'longevity' as keyof FormData,
          label: 'Longevity & Preventative Care Goals',
          type: 'radio',
          options: ['Maintain current health', 'Improve vitality', 'Prevent aging signs', 'Comprehensive wellness']
        },
        {
          key: 'weightGain' as keyof FormData,
          label: 'Weight Management Concerns',
          type: 'radio',
          options: ['No concerns', 'Slight weight gain', 'Moderate weight gain', 'Significant concerns']
        },
        {
          key: 'hormone' as keyof FormData,
          label: 'Hormonal Balance',
          type: 'radio',
          options: ['Balanced', 'Mild fluctuations', 'Noticeable changes', 'Significant imbalance']
        },
        {
          key: 'hair' as keyof FormData,
          label: 'Hair Health',
          type: 'radio',
          options: ['Healthy & strong', 'Mild thinning', 'Noticeable changes', 'Significant concerns']
        },
        {
          key: 'skin' as keyof FormData,
          label: 'Skin Condition',
          type: 'radio',
          options: ['Clear & healthy', 'Occasional issues', 'Regular concerns', 'Persistent problems']
        },
        {
          key: 'energy' as keyof FormData,
          label: 'Energy Levels',
          type: 'radio',
          options: ['High energy', 'Good energy', 'Low energy', 'Very low energy']
        }
      ]
    },
    men: {
      title: "Men's Wellness Assessment",
      subtitle: "Help us create your personalized wellness plan",
      fields: [
        {
          key: 'age' as keyof FormData,
          label: 'Age Range',
          type: 'select',
          options: ['18-25', '26-35', '36-45', '46-55', '55+']
        },
        {
          key: 'behavior' as keyof FormData,
          label: 'Daily Behavior & Focus Patterns',
          type: 'radio',
          options: ['Sharp & focused', 'Generally clear', 'Occasional brain fog', 'Frequent distractions']
        },
        {
          key: 'longevity' as keyof FormData,
          label: 'Longevity & Preventative Care Goals',
          type: 'radio',
          options: ['Maintain strength', 'Improve performance', 'Prevent decline', 'Optimize health']
        },
        {
          key: 'weightGain' as keyof FormData,
          label: 'Weight Management',
          type: 'radio',
          options: ['Maintaining well', 'Slight increase', 'Moderate gain', 'Significant concerns']
        },
        {
          key: 'hormone' as keyof FormData,
          label: 'Hormonal Health',
          type: 'radio',
          options: ['Optimal', 'Minor changes', 'Noticeable decline', 'Significant concerns']
        },
        {
          key: 'hair' as keyof FormData,
          label: 'Hair Health',
          type: 'radio',
          options: ['Full & healthy', 'Minor thinning', 'Moderate loss', 'Significant loss']
        },
        {
          key: 'skin' as keyof FormData,
          label: 'Skin Health',
          type: 'radio',
          options: ['Clear & healthy', 'Minor issues', 'Regular concerns', 'Persistent problems']
        },
        {
          key: 'energy' as keyof FormData,
          label: 'Energy & Vitality',
          type: 'radio',
          options: ['High energy', 'Good energy', 'Declining energy', 'Low energy']
        }
      ]
    }
  };

  const currentQuestions = questions[gender];
  const isComplete = Object.values(formData).every(value => value !== '');

  const handleSubmit = () => {
    if (isComplete) {
      onComplete({ gender, ...formData });
    }
  };

  const updateFormData = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className={`text-center ${gender === 'women' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-green-500'} text-white`}>
        <CardTitle className="text-2xl">{currentQuestions.title}</CardTitle>
        <p className="opacity-90">{currentQuestions.subtitle}</p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {currentQuestions.fields.map((field) => (
          <div key={field.key} className="space-y-3">
            <Label className="text-base font-medium">{field.label}</Label>
            {field.type === 'select' ? (
              <Select value={formData[field.key]} onValueChange={(value) => updateFormData(field.key, value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your age range" />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <RadioGroup value={formData[field.key]} onValueChange={(value) => updateFormData(field.key, value)}>
                {field.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${field.key}-${option}`} />
                    <Label htmlFor={`${field.key}-${option}`} className="cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        ))}
        
        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!isComplete}
            className={`flex-1 ${gender === 'women' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-green-500'} text-white`}
          >
            Get My Recommendations <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessQuestionnaire;