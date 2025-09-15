import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Shield, Zap, Users, CheckCircle, Star } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Your pick of rides at low prices",
      description: "No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
      color: "text-blabla-blue"
    },
    {
      icon: Shield,
      title: "Trust who you travel with",
      description: "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with and can book your ride at ease on our secure platform.",
      color: "text-blabla-green"
    },
    {
      icon: Zap,
      title: "Scroll, click, tap and go!",
      description: "Booking a ride has never been easier! Thanks to our simple app powered by green technology, you can book a ride close to you in just a few minutes.",
      color: "text-blabla-orange"
    }
  ];

  return (
    <div className="py-16 bg-surface-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 max-w-xs mx-auto">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;