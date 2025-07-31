import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Clock, Award } from 'lucide-react';

interface CourseProgressTrackerProps {
  completedModules: Set<string>;
  totalModules: number;
  associateId?: string;
}

export function CourseProgressTracker({ 
  completedModules, 
  totalModules,
  associateId 
}: CourseProgressTrackerProps) {
  const completionPercentage = (completedModules.size / totalModules) * 100;
  const isComplete = completedModules.size === totalModules;

  const getAchievementLevel = () => {
    if (completionPercentage === 100) return { level: 'Master', color: 'text-yellow-600', icon: Trophy };
    if (completionPercentage >= 75) return { level: 'Advanced', color: 'text-purple-600', icon: Award };
    if (completionPercentage >= 50) return { level: 'Intermediate', color: 'text-blue-600', icon: BookOpen };
    return { level: 'Beginner', color: 'text-green-600', icon: Clock };
  };

  const achievement = getAchievementLevel();
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="sticky top-6"
    >
      <Card className={`transition-all duration-300 ${
        isComplete 
          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Icon className={`w-5 h-5 ${achievement.color}`} />
            Course Progress
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-600">
                {completedModules.size}/{totalModules} modules
              </span>
            </div>
            <Progress value={completionPercentage} className="h-3" />
            <div className="text-center">
              <span className={`text-lg font-bold ${achievement.color}`}>
                {Math.round(completionPercentage)}%
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Badge 
              variant="secondary" 
              className={`${achievement.color} bg-opacity-10 border-current`}
            >
              <Icon className="w-3 h-3 mr-1" />
              {achievement.level} Level
            </Badge>
          </div>

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-3 bg-yellow-100 rounded-lg border border-yellow-200"
            >
              <Trophy className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
              <p className="text-sm font-semibold text-yellow-800">
                Congratulations!
              </p>
              <p className="text-xs text-yellow-700">
                Course completed successfully
              </p>
            </motion.div>
          )}

          <div className="text-center pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Your progress is automatically saved
              {associateId && (
                <>
                  <br />
                  <span className="font-medium">Associate: {associateId}</span>
                </>
              )}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}