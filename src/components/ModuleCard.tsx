import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, ExternalLink, User } from 'lucide-react';
import { CourseModule } from '@/data/educationalCourseContent';

interface ModuleCardProps {
  module: CourseModule;
  isCompleted: boolean;
  onComplete: () => void;
  getResourceIcon: (type: string) => React.ReactNode;
  associateId?: string;
}

export function ModuleCard({ 
  module, 
  isCompleted, 
  onComplete, 
  getResourceIcon,
  associateId 
}: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleResourceClick = (url: string) => {
    // Add associate tracking to resource URLs
    const trackedUrl = associateId ? `${url}?associate=${associateId}` : url;
    window.open(trackedUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className={`h-full transition-all duration-300 ${
        isCompleted 
          ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
          : 'bg-white/80 backdrop-blur-sm hover:shadow-lg'
      }`}>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg leading-tight">{module.title}</CardTitle>
            {isCompleted && (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{module.duration}</span>
            <Badge variant="outline" className="text-xs">
              {module.resources.length} Resources
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-3">
            <Button
              variant={isExpanded ? "secondary" : "default"}
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full"
            >
              {isExpanded ? 'Hide Resources' : 'View Resources'}
            </Button>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                {module.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => handleResourceClick(resource.url)}
                  >
                    <div className="flex items-center gap-2 flex-1">
                      {getResourceIcon(resource.type)}
                      <span className="text-sm font-medium truncate">
                        {resource.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs capitalize">
                        {resource.type}
                      </Badge>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {!isCompleted && (
              <Button
                onClick={onComplete}
                variant="outline"
                size="sm"
                className="w-full mt-3"
              >
                Mark as Complete
              </Button>
            )}

            {associateId && (
              <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                <User className="w-3 h-3" />
                <span>Associate: {associateId}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}