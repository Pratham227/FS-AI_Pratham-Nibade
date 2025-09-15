import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-campus-green/20 border-t-campus-green rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-campus-blue rounded-full animate-spin animation-delay-150"></div>
      </div>
      <div className="ml-4 text-foreground font-medium">
        Loading Smart Campus Commute...
      </div>
    </div>
  );
};

export default LoadingSpinner;