import React from 'react';
import { Button } from '@/components/ui/button';
import SearchForm from '@/components/SearchForm';
import FeatureSection from '@/components/FeatureSection';
import SafetySection from '@/components/SafetySection';
import DriverSection from '@/components/DriverSection';
import PopularRoutes from '@/components/PopularRoutes';
import HelpCenter from '@/components/HelpCenter';
import Footer from '@/components/Footer';
import heroLandscape from '@/assets/hero-landscape.jpg';

interface NewHeroSectionProps {
  onGetStarted: () => void;
}

const NewHeroSection: React.FC<NewHeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blabla-blue">
              Smart Campus Commute
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-gray-600 hover:text-blabla-blue">
                Search
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-blabla-blue">
                Publish a ride
              </Button>
              <Button variant="blabla">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative py-24 hero-pattern"
        style={{ 
          backgroundImage: `linear-gradient(rgba(195, 231, 255, 0.8), rgba(59, 130, 246, 0.6)), url(${heroLandscape})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Your pick of rides at low prices
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Share rides with fellow students, split costs, and travel sustainably across campus and beyond.
            </p>
          </div>
          
          <div className="mt-12">
            <SearchForm onSearch={onGetStarted} />
          </div>
        </div>
      </div>

      {/* Features */}
      <FeatureSection />

      {/* Safety Section */}
      <SafetySection />

      {/* Driver Section */}
      <DriverSection />

      {/* Popular Routes */}
      <PopularRoutes />

      {/* Help Center */}
      <HelpCenter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewHeroSection;