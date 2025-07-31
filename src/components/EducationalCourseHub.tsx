import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { comprehensiveEducationalCourse, courseCategories } from '@/data/educationalCourseContent';
import { ModuleCard } from './ModuleCard';
import { CourseProgressTracker } from './CourseProgressTracker';
import { AssociateContactCard } from './AssociateContactCard';
import { Play, Download, BookOpen } from 'lucide-react';

interface EducationalCourseHubProps {
  associateId?: string;
}

export function EducationalCourseHub({ associateId }: EducationalCourseHubProps) {
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());

  const markModuleComplete = (moduleId: string) => {
    setCompletedModules(prev => new Set([...prev, moduleId]));
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': case 'webinar': return <Play className="w-4 h-4" />;
      case 'pdf': case 'ebook': return <BookOpen className="w-4 h-4" />;
      case 'podcast': return <Download className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getAllModules = () => {
    return [
      ...comprehensiveEducationalCourse.foundationCourse.modules,
      ...comprehensiveEducationalCourse.personalWellness.modules,
      ...comprehensiveEducationalCourse.businessBuilding.modules
    ];
  };

  const totalModules = getAllModules().length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            doTERRA Educational Academy
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Master the art of wellness entrepreneurship with comprehensive training modules
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Tabs defaultValue="foundation" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {courseCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    <span className="mr-2">{category.icon}</span>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="foundation">
                <CourseTrackDisplay 
                  track={comprehensiveEducationalCourse.foundationCourse}
                  completedModules={completedModules}
                  onModuleComplete={markModuleComplete}
                  getResourceIcon={getResourceIcon}
                  associateId={associateId}
                />
              </TabsContent>

              <TabsContent value="wellness">
                <CourseTrackDisplay 
                  track={comprehensiveEducationalCourse.personalWellness}
                  completedModules={completedModules}
                  onModuleComplete={markModuleComplete}
                  getResourceIcon={getResourceIcon}
                  associateId={associateId}
                />
              </TabsContent>

              <TabsContent value="business">
                <CourseTrackDisplay 
                  track={comprehensiveEducationalCourse.businessBuilding}
                  completedModules={completedModules}
                  onModuleComplete={markModuleComplete}
                  getResourceIcon={getResourceIcon}
                  associateId={associateId}
                />
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <CourseProgressTracker 
              completedModules={completedModules}
              totalModules={totalModules}
              associateId={associateId}
            />
            
            {associateId && (
              <AssociateContactCard 
                associateId={associateId}
                message="Questions about the course content? Connect with your consultant:"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface CourseTrackDisplayProps {
  track: any;
  completedModules: Set<string>;
  onModuleComplete: (moduleId: string) => void;
  getResourceIcon: (type: string) => React.ReactNode;
  associateId?: string;
}

function CourseTrackDisplay({ 
  track, 
  completedModules, 
  onModuleComplete, 
  getResourceIcon,
  associateId 
}: CourseTrackDisplayProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{track.title}</CardTitle>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {track.modules.map((module: any) => (
          <ModuleCard
            key={module.id}
            module={module}
            isCompleted={completedModules.has(module.id)}
            onComplete={() => onModuleComplete(module.id)}
            getResourceIcon={getResourceIcon}
            associateId={associateId}
          />
        ))}
      </div>
    </div>
  );
}