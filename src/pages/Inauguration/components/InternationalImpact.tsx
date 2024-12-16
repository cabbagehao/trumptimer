import React from 'react';
import { Globe } from 'lucide-react';

export default function InternationalImpact() {
  return (
    <div id="international-impact" data-section>
      <h2 className="text-3xl font-bold mb-8">International Impact</h2>
      <div className="prose max-w-none">
        <p className="mb-4">
          Trump's return to the presidency carries significant international implications:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Renewed US-China trade tensions</li>
          <li>NATO alliance dynamics shift</li>
          <li>Global trade policy changes</li>
          <li>Middle East peace initiatives</li>
          <li>Climate accord reconsiderations</li>
        </ul>
      </div>
    </div>
  );
}