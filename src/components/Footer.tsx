import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blabla-blue">Smart Campus Commute</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Popular rides on Smart Campus Commute</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Mumbai → Pune</li>
                  <li>Delhi → Gurgaon</li>
                  <li>Bangalore → Mysore</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Popular carpool destinations</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Pune → Aurangabad</li>
                  <li>Mumbai → Nashik</li>
                  <li>Bangalore → Chennai</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Travel Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Travel with carpool</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Mumbai → Pune</li>
              <li>Mumbai → Nashik</li>
              <li>Pune → Aurangabad</li>
              <li>Bangalore → Mysore</li>
              <li>Gurgaon → Jaipur</li>
              <li>Mysore → Coimbatore</li>
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Find out more</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Who we are</li>
              <li>How does Smart Campus Commute work?</li>
              <li>Help Centre</li>
              <li>Press</li>
              <li>We're Hiring!</li>
            </ul>
          </div>

          {/* Language & Social */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Language</h4>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>English (India)</option>
                <option>हिन्दी</option>
                <option>मराठी</option>
              </select>
            </div>
            
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-blabla-blue cursor-pointer hover:text-blabla-darkBlue" />
              <Twitter className="w-6 h-6 text-blabla-blue cursor-pointer hover:text-blabla-darkBlue" />
              <Youtube className="w-6 h-6 text-blabla-blue cursor-pointer hover:text-blabla-darkBlue" />
              <Instagram className="w-6 h-6 text-blabla-blue cursor-pointer hover:text-blabla-darkBlue" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">
            <a href="#" className="hover:text-blabla-blue">Terms and Conditions</a>
          </div>
          <div className="text-sm text-gray-600 mt-4 md:mt-0">
            Smart Campus Commute 2025 ©
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;