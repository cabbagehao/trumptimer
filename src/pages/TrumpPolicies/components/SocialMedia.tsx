import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function SocialMedia() {
  return (
    <div id="social-media" data-section>
      <h2 className="text-3xl font-bold mb-8">Social Media Presence</h2>
      <div className="prose max-w-none">
        <p className="mb-4">
          Trump's social media strategy continues to shape public discourse through platforms like Truth Social:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Regular updates on border wall progress</li>
          <li>Economic achievements and statistics</li>
          <li>Commentary on opposition policies</li>
          <li>International relations updates</li>
          <li>Campaign promise fulfillment tracking</li>
        </ul>
      </div>
    </div>
  );
}