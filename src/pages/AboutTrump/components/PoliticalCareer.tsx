import React from 'react';
import { Award, Crown, Flag } from 'lucide-react';

export default function PoliticalCareer() {
  return (
    <div id="political-career" data-section className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Political Career</h2>
      
      <div id="election-victory" data-section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-red-600" />
          2016 Election Victory
        </h3>
        <div className="prose max-w-none">
          <p className="mb-4">
            Trump's 2016 presidential campaign marked his first entry into politics, defeating Hillary Clinton to become 
            the first U.S. president without prior military or government service. His victory was secured through:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Electoral College victory with 304 votes</li>
            <li>Strong support from rural and working-class voters</li>
            <li>"Make America Great Again" campaign message</li>
            <li>Focus on economic nationalism and immigration reform</li>
          </ul>
        </div>
      </div>

      <div id="presidency" data-section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Crown className="w-6 h-6 text-red-600" />
          Presidential Term (2017-2021)
        </h3>
        <div className="prose max-w-none">
          <p className="mb-4">
            Trump's presidency was marked by significant policy changes and notable achievements:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Major tax reform legislation</li>
            <li>Appointment of three Supreme Court Justices</li>
            <li>Middle East peace agreements</li>
            <li>Border security initiatives</li>
            <li>Economic growth and low unemployment rates</li>
          </ul>
        </div>
      </div>

      <div id="2024-campaign" data-section>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Flag className="w-6 h-6 text-red-600" />
          2024 Campaign
        </h3>
        <div className="prose max-w-none">
          <p className="mb-4">
            Trump's 2024 presidential campaign focuses on key themes:
          </p>
          <ul className="list-disc pl-6">
            <li>Economic recovery and job creation</li>
            <li>Border security and immigration reform</li>
            <li>America First foreign policy</li>
            <li>Election integrity measures</li>
            <li>Energy independence initiatives</li>
          </ul>
        </div>
      </div>
    </div>
  );
}