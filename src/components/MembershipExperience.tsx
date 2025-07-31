import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Play, Youtube, BookOpen, Users } from 'lucide-react';
import MeditationCard from './MeditationCard';
import { meditations } from '@/data/experiencesData';

const MembershipExperience: React.FC = () => {
  const myMeditations = meditations.slice(0, 3); // User's purchased meditations
  
  const myContent = {
    youtube: [
      { title: 'Essential Oils 101', views: '15K', duration: '12:34' },
      { title: 'DIY Wellness Recipes', views: '8.2K', duration: '18:45' },
      { title: 'Meditation & Aromatherapy', views: '22K', duration: '25:12' }
    ],
    courses: [
      { title: 'Aromatherapy Certification', progress: 75, lessons: 24 },
      { title: 'Business Building Basics', progress: 100, lessons: 12 },
      { title: 'Advanced Blending Techniques', progress: 45, lessons: 18 }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Crown className="h-8 w-8 text-yellow-500" />
          <h2 className="text-3xl font-bold">My Membership Experience</h2>
        </div>
        <p className="text-gray-600">Your personalized wellness journey and content library</p>
      </div>

      <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Crown className="h-6 w-6" />
            <span>Premium Membership Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{myMeditations.length}</div>
              <div className="text-sm opacity-90">Meditations Owned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{myContent.youtube.length}</div>
              <div className="text-sm opacity-90">YouTube Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{myContent.courses.length}</div>
              <div className="text-sm opacity-90">Courses Enrolled</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="meditations" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="meditations">My Meditations</TabsTrigger>
          <TabsTrigger value="youtube">YouTube Content</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        
        <TabsContent value="meditations" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">My Meditation Library</h3>
            <Button variant="outline">Browse More Meditations</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myMeditations.map((meditation) => (
              <MeditationCard key={meditation.id} meditation={meditation} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="youtube" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">My YouTube Channel</h3>
            <Button className="bg-red-600 hover:bg-red-700">
              <Youtube className="h-4 w-4 mr-2" />
              Visit Channel
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myContent.youtube.map((video, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-video bg-gray-200 rounded mb-3 flex items-center justify-center">
                    <Play className="h-8 w-8 text-gray-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{video.title}</h4>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{video.views} views</span>
                    <span>{video.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="courses" className="space-y-4">
          <h3 className="text-xl font-semibold">My Learning Journey</h3>
          <div className="space-y-4">
            {myContent.courses.map((course, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{course.title}</h4>
                    <Badge variant={course.progress === 100 ? "default" : "secondary"}>
                      {course.progress}% Complete
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{course.lessons} lessons</span>
                    <Button size="sm" variant="outline">
                      {course.progress === 100 ? 'Review' : 'Continue'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="community" className="space-y-4">
          <h3 className="text-xl font-semibold">Community & Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Member Community</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Connect with fellow wellness enthusiasts and share your journey.</p>
                <Button className="w-full">Join Community</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Resource Library</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Access exclusive guides, recipes, and educational materials.</p>
                <Button variant="outline" className="w-full">Browse Resources</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MembershipExperience;