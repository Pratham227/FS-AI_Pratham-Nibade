import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Users } from 'lucide-react';

const PopularRoutes: React.FC = () => {
  const routes = [
    { from: "Mumbai Central", to: "Andheri", price: "₹45-65" },
    { from: "Borivali", to: "Bandra", price: "₹35-55" },
    { from: "Thane", to: "Powai", price: "₹40-60" },
    { from: "Kalyan", to: "CST", price: "₹55-75" },
    { from: "Dadar", to: "Goregaon", price: "₹30-50" },
    { from: "Vashi", to: "Worli", price: "₹65-85" }
  ];

  return (
    <div className="py-16 bg-blabla-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Where do you want to go?</h2>
          <p className="text-white/80">Popular routes for students</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {routes.map((route, index) => (
            <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blabla-lightBlue" />
                        <span className="text-sm font-medium">{route.from}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/60 ml-6" />
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blabla-green" />
                        <span className="text-sm font-medium">{route.to}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blabla-lightBlue">{route.price}</div>
                    <div className="text-xs text-white/60">per seat</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">See our most popular rides</p>
        </div>
      </div>
    </div>
  );
};

export default PopularRoutes;