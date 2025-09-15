import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Search, ArrowRight } from 'lucide-react';

interface SearchFormProps {
  onSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl bg-white border-none">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Leaving from</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-blabla-blue" />
              <Input
                placeholder="Enter pickup location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="pl-10 h-12 border-gray-300 focus:border-blabla-blue"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Going to</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-blabla-green" />
              <Input
                placeholder="Enter destination"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="pl-10 h-12 border-gray-300 focus:border-blabla-blue"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-blabla-blue" />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 h-12 border-gray-300 focus:border-blabla-blue"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Passengers</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-blabla-blue" />
              <Input
                type="number"
                min="1"
                max="8"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="pl-10 h-12 border-gray-300 focus:border-blabla-blue"
              />
            </div>
          </div>
          
          <Button 
            onClick={onSearch} 
            variant="blabla" 
            size="lg" 
            className="h-12 px-8"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchForm;