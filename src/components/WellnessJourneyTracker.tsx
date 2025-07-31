import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Award, TrendingUp, Leaf, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface WellnessGoal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  category: 'sleep' | 'stress' | 'energy' | 'focus';
  oils: string[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  date?: Date;
}

const WellnessJourneyTracker: React.FC = () => {
  const [goals, setGoals] = useState<WellnessGoal[]>([
    {
      id: '1',
      title: 'Better Sleep Quality',
      description: 'Use Lavender for 7 consecutive nights',
      progress: 4,
      target: 7,
      category: 'sleep',
      oils: ['Lavender', 'Cedarwood']
    },
    {
      id: '2',
      title: 'Stress Management',
      description: 'Daily Frankincense meditation',
      progress: 12,
      target: 21,
      category: 'stress',
      oils: ['Frankincense', 'Bergamot']
    },
    {
      id: '3',
      title: 'Morning Energy',
      description: 'Start day with energizing blend',
      progress: 8,
      target: 14,
      category: 'energy',
      oils: ['Peppermint', 'Wild Orange']
    }
  ]);

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'First Steps',
      description: 'Started your wellness journey',
      icon: '🌱',
      unlocked: true,
      date: new Date('2024-01-01')
    },
    {
      id: '2',
      title: 'Sleep Champion',
      description: 'Achieved 7 nights of quality sleep',
      icon: '😴',
      unlocked: false
    },
    {
      id: '3',
      title: 'Zen Master',
      description: 'Completed 21 days of meditation',
      icon: '🧘',
      unlocked: false
    },
    {
      id: '4',
      title: 'Energy Guru',
      description: 'Maintained morning routine for 2 weeks',
      icon: '⚡',
      unlocked: false
    }
  ]);

  const [weeklyProgress, setWeeklyProgress] = useState({
    sleep: 85,
    stress: 72,
    energy: 90,
    focus: 68
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      sleep: 'from-purple-500 to-purple-600',
      stress: 'from-blue-500 to-blue-600',
      energy: 'from-orange-500 to-orange-600',
      focus: 'from-green-500 to-green-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const updateGoalProgress = (goalId: string) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id === goalId && goal.progress < goal.target) {
        const newProgress = goal.progress + 1;
        
        // Check if goal is completed
        if (newProgress === goal.target) {
          // Unlock achievement
          const achievementMap = {
            'sleep': '2',
            'stress': '3',
            'energy': '4'
          };
          const achievementId = achievementMap[goal.category as keyof typeof achievementMap];
          if (achievementId) {
            setAchievements(prev => prev.map(achievement => 
              achievement.id === achievementId 
                ? { ...achievement, unlocked: true, date: new Date() }
                : achievement
            ));
          }
        }
        
        return { ...goal, progress: newProgress };
      }
      return goal;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Weekly Overview */}
      <Card className="bg-gradient-to-r from-amber-50 to-stone-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-900">
            <TrendingUp className="w-5 h-5 mr-2" />
            Weekly Wellness Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(weeklyProgress).map(([category, progress]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{progress}%</span>
                </div>
                <h3 className="text-sm font-medium text-amber-900 capitalize">{category}</h3>
                <Progress value={progress} className="mt-2 h-2" />
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Goals */}
      <Card className="bg-gradient-to-b from-amber-50 to-stone-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-900">
            <Target className="w-5 h-5 mr-2" />
            Active Wellness Goals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/50 p-4 rounded-lg border border-amber-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium text-amber-900">{goal.title}</h3>
                  <p className="text-sm text-amber-700">{goal.description}</p>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`bg-gradient-to-r ${getCategoryColor(goal.category)} text-white capitalize`}
                >
                  {goal.category}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex flex-wrap gap-1">
                  {goal.oils.map(oil => (
                    <span key={oil} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full flex items-center">
                      <Leaf className="w-3 h-3 mr-1" />
                      {oil}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-amber-900">
                  {goal.progress}/{goal.target}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Progress 
                  value={(goal.progress / goal.target) * 100} 
                  className="flex-1 h-3"
                />
                <Button
                  size="sm"
                  onClick={() => updateGoalProgress(goal.id)}
                  disabled={goal.progress >= goal.target}
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                >
                  {goal.progress >= goal.target ? 'Complete!' : 'Mark Done'}
                </Button>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gradient-to-r from-stone-50 to-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-900">
            <Award className="w-5 h-5 mr-2" />
            Wellness Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  achievement.unlocked
                    ? 'bg-gradient-to-r from-amber-100 to-amber-200 border-amber-300 shadow-lg'
                    : 'bg-gray-100 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{achievement.icon}</span>
                  <div>
                    <h3 className={`font-medium ${
                      achievement.unlocked ? 'text-amber-900' : 'text-gray-600'
                    }`}>
                      {achievement.title}
                    </h3>
                    {achievement.unlocked && achievement.date && (
                      <p className="text-xs text-amber-700">
                        Unlocked {achievement.date.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                <p className={`text-sm ${
                  achievement.unlocked ? 'text-amber-800' : 'text-gray-500'
                }`}>
                  {achievement.description}
                </p>
                {achievement.unlocked && (
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                    <span className="text-xs text-amber-700 font-medium">Achievement Unlocked!</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellnessJourneyTracker;