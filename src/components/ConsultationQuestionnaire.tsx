import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { User, PawPrint } from 'lucide-react';

interface QuestionnaireProps {
  type: 'people' | 'pets';
  onComplete: (recommendations: any) => void;
}

const ConsultationQuestionnaire: React.FC<QuestionnaireProps> = ({ type, onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [currentStep, setCurrentStep] = useState(0);

  const peopleQuestions = [
    {
      id: 'gender',
      question: 'What is your gender?',
      type: 'single',
      options: ['Male', 'Female']
    },
    {
      id: 'wellness_goals',
      question: 'What are your primary wellness goals?',
      type: 'multiple',
      options: ['Stress Management', 'Better Sleep', 'Energy Optimization', 'Emotional Balance', 'Immune Support']
    },
    {
      id: 'experience_level',
      question: 'What is your experience with essential oils?',
      type: 'single',
      options: ['Complete Beginner', 'Some Experience', 'Regular User', 'Very Experienced']
    }
  ];

  const petQuestions = [
    {
      id: 'pet_gender',
      question: 'What is your pet\'s gender?',
      type: 'single',
      options: ['Male', 'Female']
    },
    {
      id: 'pet_type',
      question: 'What type of animal companion do you have?',
      type: 'single',
      options: ['Cat', 'Small Dog', 'Medium Dog', 'Large Dog', 'Horse', 'Other']
    },
    {
      id: 'pet_concerns',
      question: 'What wellness concerns do you have for your pet?',
      type: 'multiple',
      options: ['Restlessness', 'Skin Issues', 'Digestive Wellness', 'Joint Support', 'Immune Support']
    }
  ];

  const questions = type === 'people' ? peopleQuestions : petQuestions;
  const currentQuestion = questions[currentStep];

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const recommendations = {
        type,
        answers,
        products: ['Essential Oil Starter Kit', 'Safety Guide'],
        safetyTips: ['Always dilute oils', 'Consult professionals'],
        usageGuide: ['Start with small amounts', 'Monitor reactions']
      };
      onComplete(recommendations);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {type === 'people' ? <User className="h-5 w-5" /> : <PawPrint className="h-5 w-5" />}
          {type === 'people' ? 'Wellness' : 'Pet Aromatherapy'} Assessment
        </CardTitle>
        <p className="text-sm text-gray-600">
          Question {currentStep + 1} of {questions.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-6">{currentQuestion.question}</h3>
          
          {currentQuestion.type === 'single' && (
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
              className="space-y-3"
            >
              {currentQuestion.options?.map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === 'multiple' && (
            <div className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Checkbox
                    id={option}
                    checked={(answers[currentQuestion.id] || []).includes(option)}
                    onCheckedChange={(checked) => {
                      const current = answers[currentQuestion.id] || [];
                      const updated = checked
                        ? [...current, option]
                        : current.filter((item: string) => item !== option);
                      handleAnswer(currentQuestion.id, updated);
                    }}
                  />
                  <Label htmlFor={option} className="flex-1 cursor-pointer">{option}</Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="bg-gradient-to-r from-purple-500 to-amber-500"
          >
            {currentStep === questions.length - 1 ? 'Generate Protocol' : 'Next'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsultationQuestionnaire;