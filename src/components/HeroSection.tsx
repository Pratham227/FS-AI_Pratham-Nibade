import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Brain, MapPin, MessageCircle, Clock, Shield } from 'lucide-react';
import AIInsights from '@/components/AIInsights';
import heroImage from '@/assets/hero-campus.jpg';
import studentsImage from '@/assets/students-commute.jpg';
import aiRoutesImage from '@/assets/ai-routes.jpg';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-campus-green border-campus-green/20">
                  <Brain className="w-3 h-3 mr-1" />
                  AI-Powered Matching
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Smart</span>
                  <br />
                  <span className="text-gradient">Campus</span>
                  <br />
                  <span className="text-white">Commute</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                  Revolutionary carpooling platform that uses AI to match students traveling similar routes. 
                  Save money, reduce carbon footprint, and make new connections.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" onClick={onGetStarted}>
                  <MapPin className="w-5 h-5 mr-2" />
                  Start Matching
                </Button>
                <Button variant="outline" size="xl">
                  <Users className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/60">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">94%</div>
                  <div className="text-sm text-white/60">Match Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">₹2.5k</div>
                  <div className="text-sm text-white/60">Avg. Monthly Savings</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="space-y-6 animate-float">
              <Card className="backdrop-blur-glass border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-campus-green/20 rounded-lg">
                      <Brain className="w-6 h-6 text-campus-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">AI Route Optimization</h3>
                      <p className="text-white/70 text-sm">
                        Advanced machine learning algorithms analyze travel patterns to find the most efficient carpool matches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-glass border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-campus-blue/20 rounded-lg">
                      <Shield className="w-6 h-6 text-campus-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Anonymous & Safe</h3>
                      <p className="text-white/70 text-sm">
                        Protected identity with unique usernames. Chat safely before revealing personal details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-glass border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-campus-purple/20 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-campus-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Real-time Chat</h3>
                      <p className="text-white/70 text-sm">
                        Instant messaging to coordinate pickups, share travel preferences, and build trust.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our AI-powered platform makes carpooling effortless and intelligent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative">
                <img 
                  src={aiRoutesImage} 
                  alt="AI Route Analysis" 
                  className="w-32 h-32 mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-campus-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">Set Your Route</h3>
              <p className="text-white/60">
                Input your home and destination. Our AI analyzes your travel pattern and preferences.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <img 
                  src={studentsImage} 
                  alt="Student Matching" 
                  className="w-32 h-32 mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-campus-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">Get Matched</h3>
              <p className="text-white/60">
                AI finds students with similar routes and compatible schedules automatically.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-accent flex items-center justify-center shadow-2xl">
                  <MessageCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-campus-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">Connect & Go</h3>
              <p className="text-white/60">
                Chat anonymously, coordinate details, and enjoy a shared, eco-friendly commute.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Dashboard */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-surface to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-gradient">AI-Powered</span> Analytics
            </h2>
            <p className="text-white/70">
              Real-time insights from our machine learning algorithms
            </p>
          </div>
          <AIInsights />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;