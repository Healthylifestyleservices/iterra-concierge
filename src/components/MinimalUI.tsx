import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Droplets, Sparkles, Heart, Leaf } from 'lucide-react';

interface MinimalCardProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  gradient: string;
  children: React.ReactNode;
  badge?: string;
}

const MinimalCard: React.FC<MinimalCardProps> = ({ title, subtitle, icon, gradient, children, badge }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-light tracking-wide text-gray-900">{title}</h3>
              {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
            </div>
          </div>
          {badge && (
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0 font-light">
              {badge}
            </Badge>
          )}
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

const MinimalDropdown: React.FC<{ label: string; options: string[]; selected?: string }> = ({ 
  label, 
  options, 
  selected 
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-light text-gray-600 tracking-wide">{label}</label>
      <div className="relative">
        <select className="w-full p-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-transparent transition-all duration-300 appearance-none text-gray-700">
          <option value="">{selected || 'Select...'}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const MinimalButton: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}> = ({ children, variant = 'primary', size = 'md', onClick }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white/80 hover:bg-white text-gray-700 border border-gray-200 hover:border-gray-300',
    ghost: 'bg-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-900'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <Button 
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-xl font-light tracking-wide transition-all duration-300 border-0`}
    >
      {children}
    </Button>
  );
};

const MinimalUI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/30 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
              <h1 className="text-2xl font-light tracking-wide text-gray-900">iTerra</h1>
            </div>
            <div className="flex items-center space-x-4">
              <MinimalButton variant="ghost" size="sm">Profile</MinimalButton>
              <MinimalButton variant="secondary" size="sm">Settings</MinimalButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wide text-gray-900 mb-4">
            Your Wellness Journey
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Discover personalized protocols crafted for your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <MinimalCard
            title="Wellness Assessment"
            subtitle="Personalized for you"
            icon={<Heart className="h-6 w-6" />}
            gradient="from-pink-500 to-rose-500"
            badge="New"
          >
            <MinimalDropdown 
              label="Primary Focus"
              options={['Relaxation', 'Energy', 'Focus', 'Sleep', 'Immunity']}
              selected="Select your focus"
            />
            <MinimalDropdown 
              label="Experience Level"
              options={['Beginner', 'Intermediate', 'Advanced']}
            />
            <MinimalButton size="lg" onClick={() => {}}>
              Begin Assessment
            </MinimalButton>
          </MinimalCard>

          <MinimalCard
            title="Protocol Library"
            subtitle="Curated collections"
            icon={<Droplets className="h-6 w-6" />}
            gradient="from-blue-500 to-indigo-500"
          >
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <h4 className="font-medium text-gray-900">Evening Serenity</h4>
                <p className="text-sm text-gray-600 mt-1">Lavender • Serenity • Frankincense</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <h4 className="font-medium text-gray-900">Morning Vitality</h4>
                <p className="text-sm text-gray-600 mt-1">Peppermint • Wild Orange • Motivate</p>
              </div>
            </div>
            <MinimalButton variant="secondary" size="lg">
              View All Protocols
            </MinimalButton>
          </MinimalCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MinimalCard
            title="Impact Dashboard"
            icon={<Leaf className="h-5 w-5" />}
            gradient="from-green-500 to-emerald-500"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-light">Trees Planted</span>
                <span className="font-medium">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-light">Families Supported</span>
                <span className="font-medium">156</span>
              </div>
            </div>
          </MinimalCard>

          <MinimalCard
            title="Membership"
            icon={<Sparkles className="h-5 w-5" />}
            gradient="from-purple-500 to-violet-500"
            badge="Wellness"
          >
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-light text-green-600">25%</div>
                <p className="text-sm text-gray-600">Savings on all products</p>
              </div>
              <MinimalButton variant="ghost" size="sm">
                Upgrade to Associate
              </MinimalButton>
            </div>
          </MinimalCard>

          <MinimalCard
            title="Quick Actions"
            icon={<Heart className="h-5 w-5" />}
            gradient="from-rose-500 to-pink-500"
          >
            <div className="space-y-2">
              <MinimalButton variant="ghost" size="sm">
                Reorder Favorites
              </MinimalButton>
              <MinimalButton variant="ghost" size="sm">
                Track Shipment
              </MinimalButton>
              <MinimalButton variant="ghost" size="sm">
                Contact Support
              </MinimalButton>
            </div>
          </MinimalCard>
        </div>
      </div>
    </div>
  );
};

export default MinimalUI;