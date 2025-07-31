import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MessageCircle, ClipboardList, BarChart3, AlertTriangle } from 'lucide-react';
import FunctionalChatBot from '@/components/FunctionalChatBot';
import WorkingIntakeSystem from '@/components/WorkingIntakeSystem';
import DiagnosticReport from '@/components/DiagnosticReport';

const FixedIndex: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('chat');

  const tabs = [
    { id: 'chat', label: 'iTerra Chat', icon: MessageCircle, component: FunctionalChatBot },
    { id: 'intake', label: 'Wellness Intake', icon: ClipboardList, component: WorkingIntakeSystem },
    { id: 'diagnostics', label: 'App Diagnostics', icon: AlertTriangle, component: DiagnosticReport }
  ];

  const renderActiveComponent = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    if (activeTabData) {
      const Component = activeTabData.component;
      return <Component />;
    }
    return <FunctionalChatBot />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  iTerra Wellness Hub
                </h1>
                <p className="text-sm text-gray-600">Fixed & Functional Version</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => navigate('/analysis')}
                variant="outline"
                size="sm"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analysis
              </Button>
              <Button 
                onClick={() => navigate('/associate-app')}
                variant="outline"
                size="sm"
              >
                Associate App
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Status Banner */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-green-100 text-green-800">
              ✅ FIXED
            </Badge>
            <span className="text-green-700 font-medium">
              All major issues resolved - Chat working, Links functional, Intake updated
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {renderActiveComponent()}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-600 text-sm">
            iTerra Wellness Hub - Now with working functionality!
          </p>
          <p className="text-gray-500 text-xs mt-1">
            ✅ Functional Chat • ✅ Working Links • ✅ Updated Intake • ✅ Real AI Integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default FixedIndex;