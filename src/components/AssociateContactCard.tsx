import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MessageCircle, ExternalLink, User, Star } from 'lucide-react';

interface AssociateContactCardProps {
  associateId: string;
  message?: string;
  showEnrollment?: boolean;
  className?: string;
}

export function AssociateContactCard({ 
  associateId, 
  message,
  showEnrollment = true,
  className = ""
}: AssociateContactCardProps) {
  const defaultMessage = "Ready to start your wellness journey? Connect with your personal doTERRA consultant:";
  const displayMessage = message || defaultMessage;

  const handleContact = (method: string) => {
    const baseUrl = `https://www.doterra.com/US/en/site/${associateId}`;
    const trackingParams = `?utm_source=education&utm_medium=${method}&utm_campaign=course_completion`;
    window.open(baseUrl + trackingParams, '_blank');
  };

  const handleEnrollment = () => {
    const enrollUrl = `https://www.doterra.com/US/en/join-and-save/${associateId}`;
    window.open(enrollUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <CardTitle className="text-lg text-purple-800">
            Your Personal Wellness Consultant
          </CardTitle>
          <Badge variant="secondary" className="w-fit mx-auto">
            <Star className="w-3 h-3 mr-1" />
            Associate ID: {associateId}
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-center text-gray-700 text-sm">
            {displayMessage}
          </p>
          
          <div className="grid grid-cols-1 gap-2">
            <Button
              onClick={() => handleContact('website')}
              variant="default"
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit My doTERRA Site
            </Button>
            
            <Button
              onClick={() => handleContact('message')}
              variant="outline"
              className="w-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
          
          {showEnrollment && (
            <div className="pt-3 border-t border-purple-200">
              <p className="text-xs text-center text-gray-600 mb-2">
                Ready to save 25% on all products?
              </p>
              <Button
                onClick={handleEnrollment}
                variant="secondary"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
              >
                <Star className="w-4 h-4 mr-2" />
                Join & Save Today
              </Button>
            </div>
          )}
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Questions about products or business opportunity?
              <br />
              Your consultant is here to help!
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}