import React from 'react';
import { Radio } from 'lucide-react';

export default function MediaCoverage() {
  return (
    <div id="media-coverage" data-section>
      <h2 className="text-3xl font-bold mb-8">Media Coverage</h2>
      <div className="prose max-w-none">
        <p className="mb-4">
          Comprehensive media coverage of the inauguration includes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Live television broadcasts</li>
          <li>Social media streaming</li>
          <li>International news coverage</li>
          <li>Documentary productions</li>
          <li>Historical archives</li>
        </ul>
      </div>
    </div>
  );
}