'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuxuryCard } from '../../components/luxury/LuxuryCard';
import { LuxuryButton } from '../../components/luxury/LuxuryButton';
import { LuxuryInput } from '../../components/luxury/LuxuryInput';
import { FlowerOfLife } from '../../components/sacred-geometry/FlowerOfLife';
import UpdatedIntakeForm from '../../components/UpdatedIntakeForm';

const WellnessPage: React.FC = () => {
  const [showIntake, setShowIntake] = useState(false);
  const [userInput, setUserInput] = useState('');

  if (showIntake) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto py-12">
          <div className="mb-8">
            <LuxuryButton 
              variant="sage" 
              onClick={() => setShowIntake(false)}
              className="mb-4"
            >
              ← Back to Wellness
            </LuxuryButton>
          </div>
          <UpdatedIntakeForm />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <FlowerOfLife size={100} className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Wellness Intelligence</h1>
          <p className="text-lg text-gray-600">
            Discover personalized wellness recommendations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <LuxuryCard variant="sage">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Wellness Intake</h3>
              <p className="text-gray-600">Complete our comprehensive wellness assessment</p>
              <LuxuryButton
                variant="sage"
                onClick={() => setShowIntake(true)}
              >
                Start Intake Form
              </LuxuryButton>
            </div>
          </LuxuryCard>

          <LuxuryCard variant="gold">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Analysis</h3>
              <LuxuryInput
                label="How are you feeling today?"
                placeholder="Describe your current state..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                variant="gold"
              />
              <LuxuryButton
                variant="gold"
                disabled={!userInput.trim()}
              >
                Get Recommendations
              </LuxuryButton>
            </div>
          </LuxuryCard>
        </div>
      </div>
    </div>
  );
};

export default WellnessPage;