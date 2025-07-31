import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <Avatar className="w-8 h-8 bg-green-600">
          <AvatarFallback className="text-white text-sm">iT</AvatarFallback>
        </Avatar>
      )}
      <Card className={`max-w-[70%] ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
        <CardContent className="p-3">
          <p className="text-sm">{message}</p>
          {timestamp && (
            <span className={`text-xs ${isUser ? 'text-blue-200' : 'text-gray-500'} mt-1 block`}>
              {timestamp.toLocaleTimeString()}
            </span>
          )}
        </CardContent>
      </Card>
      {isUser && (
        <Avatar className="w-8 h-8 bg-blue-600">
          <AvatarFallback className="text-white text-sm">You</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;