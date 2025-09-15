import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Shield, Clock } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'other';
  message: string;
  timestamp: string;
}

interface ChatInterfaceProps {
  recipientName: string;
  isOnline: boolean;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ recipientName, isOnline, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'other',
      message: 'Hey! I saw you\'re going to the same campus. Want to share a ride?',
      timestamp: '2 min ago'
    },
    {
      id: '2',
      sender: 'user',
      message: 'Sure! What time are you planning to leave?',
      timestamp: '1 min ago'
    },
    {
      id: '3',
      sender: 'other',
      message: 'Around 8:30 AM. I have a car and can pick you up on the way.',
      timestamp: 'Just now'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        message: newMessage,
        timestamp: 'Just now'
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <Card className="w-full max-w-md backdrop-blur-glass border-white/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            {recipientName}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant={isOnline ? "default" : "secondary"} className="text-xs">
              {isOnline ? "Online" : "Offline"}
            </Badge>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white/60 hover:text-white">
              ×
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-white/60">
          <Shield className="w-3 h-3" />
          End-to-end encrypted chat
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="h-64 overflow-y-auto space-y-3 mb-4 pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-campus-green text-white'
                    : 'bg-white/10 text-white border border-white/20'
                }`}
              >
                <p className="text-sm">{message.message}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 opacity-60" />
                  <span className="text-xs opacity-60">{message.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            onClick={handleSendMessage} 
            variant="blabla" 
            size="icon"
            disabled={!newMessage.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;