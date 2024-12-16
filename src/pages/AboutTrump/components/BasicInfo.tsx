import React from 'react';
import { User, MapPin, Calendar, Flag } from 'lucide-react';

export default function BasicInfo() {
  return (
    <div id="basic-info" data-section>
      <h1 className="text-3xl font-bold mb-8">About Donald J. Trump</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <User className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="font-semibold">Full Name:</span>
            <span>Donald John Trump</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="font-semibold">Born:</span>
            <span>June 14, 1946</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="font-semibold">Birthplace:</span>
            <span>Queens, New York City, NY</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <Flag className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="font-semibold">Political Party:</span>
            <span>Republican</span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Career Highlights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>45th President of the United States (2017-2021)</li>
            <li>Successful Real Estate Developer</li>
            <li>Television Personality ("The Apprentice")</li>
            <li>Author of Multiple Bestselling Books</li>
          </ul>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">
        Donald Trump is a prominent American political figure, businessman, and television personality who served as the 
        45th President of the United States. Before entering politics, he was known for his real estate development 
        business and his role as host of "The Apprentice."
      </p>
      
      <p className="text-gray-700">
        His political career has been marked by his signature "Make America Great Again" campaign slogan and his 
        America First policies. Trump's presidency saw significant changes in areas including trade, immigration, 
        and foreign policy.
      </p>
    </div>
  );
}