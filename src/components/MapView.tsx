import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Users, MapPin, Clock, Bot } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import RouteOptimizer from '@/components/RouteOptimizer';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Student {
  id: string;
  username: string;
  position: LatLngExpression;
  destination: LatLngExpression;
  route: LatLngExpression[];
  isOnline: boolean;
  departsAt: string;
  seatsAvailable: number;
}

const MapView: React.FC = () => {
  const [userPosition, setUserPosition] = useState<LatLngExpression>([19.0760, 72.8777]); // Mumbai default
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [chatPartner, setChatPartner] = useState<Student | null>(null);

  // Simulate AI-powered student matching
  useEffect(() => {
    const mockStudents: Student[] = [
      {
        id: '1',
        username: 'CampusRider_42',
        position: [19.0820, 72.8820],
        destination: [19.0896, 72.8656], // University area
        route: [[19.0820, 72.8820], [19.0850, 72.8750], [19.0896, 72.8656]],
        isOnline: true,
        departsAt: '08:30 AM',
        seatsAvailable: 2
      },
      {
        id: '2',
        username: 'StudyBuddy_ML',
        position: [19.0750, 72.8900],
        destination: [19.0896, 72.8656],
        route: [[19.0750, 72.8900], [19.0800, 72.8800], [19.0896, 72.8656]],
        isOnline: true,
        departsAt: '08:45 AM',
        seatsAvailable: 1
      },
      {
        id: '3',
        username: 'TechNinja_99',
        position: [19.0700, 72.8850],
        destination: [19.0896, 72.8656],
        route: [[19.0700, 72.8850], [19.0780, 72.8750], [19.0896, 72.8656]],
        isOnline: false,
        departsAt: '09:00 AM',
        seatsAvailable: 3
      }
    ];
    setStudents(mockStudents);
  }, []);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleStartChat = (student: Student) => {
    setChatPartner(student);
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
    setChatPartner(null);
  };

  return (
    <div className="w-full h-screen relative">
      <MapContainer
        center={userPosition}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* User's position */}
        <Marker position={userPosition}>
          <Popup>
            <div className="text-center">
              <strong>Your Location</strong>
              <br />
              Ready to find carpool matches!
            </div>
          </Popup>
        </Marker>

        {/* Student markers and routes */}
        {students.map((student) => (
          <React.Fragment key={student.id}>
            <Marker 
              position={student.position}
              eventHandlers={{
                click: () => handleStudentClick(student)
              }}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={student.isOnline ? "default" : "secondary"}>
                      {student.isOnline ? "Online" : "Offline"}
                    </Badge>
                  </div>
                  <p className="font-semibold">{student.username}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Clock className="w-3 h-3" />
                    Departs: {student.departsAt}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-3 h-3" />
                    {student.seatsAvailable} seats available
                  </div>
                  <Button 
                    size="sm" 
                    variant="blabla" 
                    className="w-full mt-2"
                    onClick={() => handleStartChat(student)}
                  >
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Chat
                  </Button>
                </div>
              </Popup>
            </Marker>
            
            {/* Route visualization */}
            <Polyline 
              positions={student.route} 
              color={student.isOnline ? "#22c55e" : "#64748b"}
              weight={3}
              opacity={0.7}
            />
          </React.Fragment>
        ))}
      </MapContainer>

      {/* AI Insights Panel */}
      <Card className="absolute top-4 left-4 w-80 backdrop-blur-glass border-white/20 z-10">
        <CardContent className="p-4">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Bot className="w-4 h-4 text-campus-green" />
            AI Route Matches
          </h3>
          <div className="space-y-2">
            {students.filter(s => s.isOnline).map(student => (
              <div key={student.id} className="p-2 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-all duration-200" onClick={() => handleStartChat(student)}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-sm text-white">{student.username}</p>
                    <p className="text-xs text-white/70">Similarity: 94%</p>
                    <p className="text-xs text-campus-green">Click to chat</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {student.seatsAvailable} seats
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Route Optimizer Panel */}
      <div className="absolute top-4 right-4 w-80 z-10">
        <RouteOptimizer />
      </div>

      {/* Quick Actions */}
      <div className="absolute bottom-4 right-4 space-y-2 z-10">
        <Button variant="hero" size="lg" className="shadow-2xl">
          <Users className="w-5 h-5 mr-2" />
          Find Matches
        </Button>
        <Button variant="outline" size="lg" onClick={() => alert('Feature coming soon!')}>
          <MessageCircle className="w-5 h-5 mr-2" />
          Active Chats (2)
        </Button>
      </div>

      {/* Chat Interface */}
      {showChat && chatPartner && (
        <div className="absolute bottom-4 left-4 z-20">
          <ChatInterface
            recipientName={chatPartner.username}
            isOnline={chatPartner.isOnline}
            onClose={handleCloseChat}
          />
        </div>
      )}
    </div>
  );
};

export default MapView;