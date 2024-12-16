import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function InauguralSpeech() {
  return (
    <div id="inaugural-speech" data-section>
      <h2 className="text-3xl font-bold mb-8">Inaugural Speech</h2>
      <div className="prose max-w-none">
        <p className="mb-4">
          Trump's 2025 inaugural address is expected to focus on key themes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Economic revival and job creation</li>
          <li>Border security and immigration reform</li>
          <li>"America First" foreign policy</li>
          <li>National unity and patriotism</li>
          <li>Election integrity and democratic values</li>
        </ul>
      </div>
    </div>
  );
}