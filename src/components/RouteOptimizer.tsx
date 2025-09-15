import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Route, Clock, Fuel, TreePine, TrendingUp } from 'lucide-react';

interface OptimizationResult {
  originalDistance: number;
  optimizedDistance: number;
  timeSaved: number;
  fuelSaved: number;
  carbonReduced: number;
  matchQuality: number;
}

const RouteOptimizer: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [result, setResult] = useState<OptimizationResult | null>(null);

  const runOptimization = () => {
    setIsOptimizing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResult: OptimizationResult = {
        originalDistance: 12.5,
        optimizedDistance: 8.3,
        timeSaved: 15,
        fuelSaved: 2.1,
        carbonReduced: 4.8,
        matchQuality: 94
      };
      setResult(mockResult);
      setIsOptimizing(false);
    }, 2000);
  };

  useEffect(() => {
    // Auto-run optimization on component mount
    runOptimization();
  }, []);

  return (
    <Card className="backdrop-blur-glass border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Brain className="w-5 h-5 text-campus-green" />
          AI Route Optimization
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {isOptimizing ? (
          <div className="flex items-center justify-center py-8">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-campus-green/20 border-t-campus-green rounded-full animate-spin"></div>
              <Brain className="absolute inset-0 m-auto w-6 h-6 text-campus-green animate-pulse" />
            </div>
            <div className="ml-4 text-white">
              <p className="font-medium">Analyzing routes...</p>
              <p className="text-sm text-white/60">Using machine learning algorithms</p>
            </div>
          </div>
        ) : result ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <Route className="w-6 h-6 text-campus-blue mx-auto mb-1" />
                <div className="text-xl font-bold text-white">{result.optimizedDistance}km</div>
                <div className="text-xs text-white/60">Optimized Route</div>
                <div className="text-xs text-red-400 line-through">{result.originalDistance}km</div>
              </div>
              
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <Clock className="w-6 h-6 text-campus-purple mx-auto mb-1" />
                <div className="text-xl font-bold text-white">{result.timeSaved}min</div>
                <div className="text-xs text-white/60">Time Saved</div>
                <div className="text-xs text-campus-green">per trip</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-white/5 rounded">
                <Fuel className="w-4 h-4 text-campus-orange mx-auto mb-1" />
                <div className="text-sm font-bold text-white">₹{result.fuelSaved}</div>
                <div className="text-xs text-white/60">Fuel Saved</div>
              </div>
              
              <div className="text-center p-2 bg-white/5 rounded">
                <TreePine className="w-4 h-4 text-campus-green mx-auto mb-1" />
                <div className="text-sm font-bold text-white">{result.carbonReduced}kg</div>
                <div className="text-xs text-white/60">CO₂ Reduced</div>
              </div>
              
              <div className="text-center p-2 bg-white/5 rounded">
                <TrendingUp className="w-4 h-4 text-campus-blue mx-auto mb-1" />
                <div className="text-sm font-bold text-white">{result.matchQuality}%</div>
                <div className="text-xs text-white/60">Match Quality</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-campus-green/20 text-campus-green border-campus-green/20">
                AI Optimized
              </Badge>
              <Button variant="ghost" size="sm" onClick={runOptimization} className="text-white/60 hover:text-white">
                Re-optimize
              </Button>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default RouteOptimizer;