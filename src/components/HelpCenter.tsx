import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Plus } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const faqs = [
    {
      question: "How do I book a carpool ride?",
      answer: "You can book a carpool ride on our mobile app or on our website. Simply search for your destination, choose the ride that suits you best, and book your seat."
    },
    {
      question: "How do I publish a carpool ride?",
      answer: "Offering a carpool ride on Smart Campus Commute is easy. To publish your ride, use our mobile app or Smart Campus Commute's website, indicate your departure and arrival points, the date and time of your departure, vehicle details."
    },
    {
      question: "How do I cancel my carpool ride?",
      answer: "If you have a change of plans, you can always cancel your carpool ride from the 'Your rides' section of our app. The sooner you cancel the better. That way the driver has time to accept new passengers."
    },
    {
      question: "What are the benefits of traveling by carpool?",
      answer: "There are multiple advantages to carpooling: you can offer means of transport, travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-friendly."
    },
    {
      question: "How much does a carpool ride cost?",
      answer: "The costs of a carpool ride can greatly vary and depend on factors like distance, time of departure, the demand of that ride and more. It is also up to the driver to decide how much to charge."
    },
    {
      question: "How do I start carpooling?",
      answer: "Carpooling with Smart Campus Commute is super easy and free! Simply sign up for an account and tell us some basic details about yourself. Once you have a Smart Campus Commute account you can start booking."
    }
  ];

  return (
    <div className="py-20 bg-surface-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Carpool Help Centre</h2>
          <p className="text-gray-600 text-lg">Find answers to common questions about carpooling</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-all duration-300">
              <CardHeader className="cursor-pointer">
                <CardTitle className="text-lg font-semibold text-gray-800 flex items-center justify-between">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                <div className="mt-4">
                  <Button variant="link" className="text-blabla-blue p-0 h-auto">
                    Read more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="blabla" size="lg">
            Read our Help Center
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;