import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Plus, DollarSign, Calendar } from 'lucide-react';

const DriverSection: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-blabla-lightBlue to-white shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blabla-blue rounded-full flex items-center justify-center mx-auto">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800">Start Earning Today</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-white rounded-lg">
                        <DollarSign className="w-6 h-6 text-blabla-green mx-auto mb-1" />
                        <div className="text-lg font-bold text-gray-800">₹150-300</div>
                        <div className="text-xs text-gray-600">per trip</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg">
                        <Calendar className="w-6 h-6 text-blabla-blue mx-auto mb-1" />
                        <div className="text-lg font-bold text-gray-800">2-3</div>
                        <div className="text-xs text-gray-600">trips/day avg</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Driving in your car soon?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let's make this your least expensive journey ever. Offer rides to fellow students 
              and split the cost of fuel, tolls, and parking. Turn your daily commute into 
              a profitable and social experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Cover your fuel costs and more</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">Meet new people from your campus</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Help reduce traffic and emissions</span>
              </div>
            </div>
            <Button variant="blabla" size="lg" className="mt-6">
              <Car className="w-5 h-5 mr-2" />
              Offer a ride
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSection;