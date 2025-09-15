import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, Users, Zap } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    {
      icon: Brain,
      title: "Route Optimization",
      value: "94%",
      description: "Match accuracy using ML algorithms",
      trend: "+12%"
    },
    {
      icon: Users,
      title: "Active Students",
      value: "847",
      description: "Currently looking for rides",
      trend: "+23%"
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      value: "₹2,847",
      description: "Average monthly savings per student",
      trend: "+8%"
    },
    {
      icon: Zap,
      title: "Response Time",
      value: "1.2s",
      description: "Average match finding time",
      trend: "-15%"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {insights.map((insight, index) => (
        <Card key={index} className="backdrop-blur-glass border-white/20 hover:scale-105 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/80">
              {insight.title}
            </CardTitle>
            <insight.icon className="h-4 w-4 text-campus-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{insight.value}</div>
            <p className="text-xs text-white/60 mt-1">
              {insight.description}
            </p>
            <Badge variant="secondary" className="mt-2 text-xs bg-campus-green/20 text-campus-green border-campus-green/20">
              {insight.trend} from last week
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AIInsights;