import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface HealthMetric {
  name: string;
  value: number;
  status: 'good' | 'warning' | 'critical';
  unit: string;
  recommendation?: string;
}

export const SystemHealthCheck: React.FC = () => {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [overallScore, setOverallScore] = useState(0);

  const checkSystemHealth = async () => {
    setIsChecking(true);
    const healthMetrics: HealthMetric[] = [];

    // Performance metrics
    if ('performance' in window && window.performance.memory) {
      const memory = (window.performance as any).memory;
      const memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      
      healthMetrics.push({
        name: 'Memory Usage',
        value: Math.round(memoryUsage),
        status: memoryUsage > 80 ? 'critical' : memoryUsage > 60 ? 'warning' : 'good',
        unit: '%',
        recommendation: memoryUsage > 60 ? 'Consider optimizing components' : undefined
      });
    }

    // Load time
    const loadTime = performance.now();
    healthMetrics.push({
      name: 'Page Load Time',
      value: Math.round(loadTime),
      status: loadTime > 3000 ? 'critical' : loadTime > 1500 ? 'warning' : 'good',
      unit: 'ms',
      recommendation: loadTime > 1500 ? 'Optimize bundle size and lazy load components' : undefined
    });

    // DOM elements count
    const domElements = document.querySelectorAll('*').length;
    healthMetrics.push({
      name: 'DOM Elements',
      value: domElements,
      status: domElements > 1500 ? 'warning' : 'good',
      unit: 'elements',
      recommendation: domElements > 1500 ? 'Consider virtual scrolling for large lists' : undefined
    });

    // CSS rules count
    const cssRules = Array.from(document.styleSheets).reduce((total, sheet) => {
      try {
        return total + (sheet.cssRules?.length || 0);
      } catch {
        return total;
      }
    }, 0);

    healthMetrics.push({
      name: 'CSS Rules',
      value: cssRules,
      status: cssRules > 5000 ? 'warning' : 'good',
      unit: 'rules',
      recommendation: cssRules > 5000 ? 'Consider CSS optimization and purging' : undefined
    });

    // Network connectivity
    const connectionSpeed = (navigator as any).connection?.effectiveType || 'unknown';
    const speedScore = connectionSpeed === '4g' ? 100 : connectionSpeed === '3g' ? 75 : 50;
    
    healthMetrics.push({
      name: 'Network Speed',
      value: speedScore,
      status: speedScore > 80 ? 'good' : speedScore > 50 ? 'warning' : 'critical',
      unit: '%',
      recommendation: speedScore < 80 ? 'Optimize images and enable compression' : undefined
    });

    // Calculate overall score
    const avgScore = healthMetrics.reduce((sum, metric) => {
      const score = metric.status === 'good' ? 100 : metric.status === 'warning' ? 60 : 30;
      return sum + score;
    }, 0) / healthMetrics.length;

    setMetrics(healthMetrics);
    setOverallScore(Math.round(avgScore));
    setIsChecking(false);
  };

  useEffect(() => {
    checkSystemHealth();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          ⚡ System Health Check
          <Button 
            onClick={checkSystemHealth} 
            disabled={isChecking}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isChecking ? '🔄 Checking...' : '🔍 Check Health'}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Score */}
        <div className="text-center">
          <div className={`text-4xl font-bold ${getScoreColor(overallScore)}`}>
            {overallScore}%
          </div>
          <p className="text-gray-300 text-sm">Overall Health Score</p>
          <Progress value={overallScore} className="mt-2" />
        </div>

        {/* Individual Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">{metric.name}</h3>
                <span className={`font-bold ${getStatusColor(metric.status)}`}>
                  {metric.value}{metric.unit}
                </span>
              </div>
              <div className={`text-xs ${getStatusColor(metric.status)} mb-2`}>
                Status: {metric.status.toUpperCase()}
              </div>
              {metric.recommendation && (
                <p className="text-yellow-300 text-xs">
                  💡 {metric.recommendation}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white/5 rounded-lg p-4">
          <h3 className="text-white font-medium mb-3">🛠️ Quick Optimizations</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div>• Clear browser cache and reload</div>
            <div>• Disable browser extensions temporarily</div>
            <div>• Check network connection stability</div>
            <div>• Close unused browser tabs</div>
            <div>• Update browser to latest version</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};