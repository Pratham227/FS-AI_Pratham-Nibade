import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Users, AlertTriangle } from 'lucide-react';

const SafetySection: React.FC = () => {
  return (
    <div className="py-20 gradient-blue">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Help us keep you safe from scams
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              At Smart Campus Commute, we're working hard to make our platform as secure as it 
              can be. But when scams do happen, we want you to know exactly how 
              to avoid and report them. Follow our tips to help us keep you safe.
            </p>
            <Button variant="outline" size="lg" className="bg-white text-blabla-blue hover:bg-gray-50">
              <Shield className="w-5 h-5 mr-2" />
              Learn more
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <Card className="bg-white/95 backdrop-blur">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Verified Profiles</h4>
                      <p className="text-sm text-gray-600">All users verified with student ID</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Community Reviews</h4>
                      <p className="text-sm text-gray-600">Rate and review your travel partners</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Help available around the clock</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;