import React from 'react';
import { BarChart2, Globe, Users, Video } from 'lucide-react';

export default function Statistics() {
  return (
    <div id="statistics" data-section className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Trump Speech Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-red-50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Video className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold">Total Speeches</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">700+</p>
          <p className="text-sm text-gray-600">Documented public addresses</p>
        </div>

        <div className="bg-red-50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold">Campaign Events</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">500+</p>
          <p className="text-sm text-gray-600">2016 & 2020 campaigns</p>
        </div>

        <div className="bg-red-50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold">International</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">50+</p>
          <p className="text-sm text-gray-600">Global addresses</p>
        </div>

        <div className="bg-red-50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold">Media Events</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">150+</p>
          <p className="text-sm text-gray-600">Press conferences & interviews</p>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="mb-4">
          Based on comprehensive analysis of public records, Donald Trump has delivered approximately 700-800 
          significant speeches and public addresses throughout his political career. This includes formal speeches, 
          campaign rallies, international addresses, and media appearances.
        </p>
        <p>
          These statistics can be verified through various official sources including:
        </p>
        <ul>
          <li>The National Archives</li>
          <li>Trump White House Archives</li>
          <li>C-SPAN Speech Repository</li>
          <li>Campaign Records</li>
        </ul>
      </div>
    </div>
  );
}