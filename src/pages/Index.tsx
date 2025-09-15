import React, { useState } from 'react';
import NewHeroSection from '@/components/NewHeroSection';
import MapView from '@/components/MapView';

const Index = () => {
  const [showMap, setShowMap] = useState(false);

  const handleGetStarted = () => {
    setShowMap(true);
  };

  const handleBackToHome = () => {
    setShowMap(false);
  };

  if (showMap) {
    return (
      <div className="relative">
        <MapView />
        <button
          onClick={handleBackToHome}
          className="absolute top-4 right-4 z-20 px-4 py-2 bg-surface-elevated text-white rounded-lg hover:bg-surface transition-all duration-300"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return <NewHeroSection onGetStarted={handleGetStarted} />;
};

export default Index;