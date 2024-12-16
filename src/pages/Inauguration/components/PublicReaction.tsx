import React from 'react';
import { Users } from 'lucide-react';

export default function PublicReaction() {
  return (
    <div id="public-reaction" data-section>
      <h2 className="text-3xl font-bold mb-8">Public Reaction</h2>
      <div className="prose max-w-none">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Supporter Expectations</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Economic growth through tax reform</li>
            <li>Enhanced border security measures</li>
            <li>Conservative values preservation</li>
            <li>America First policy implementation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Opposition Concerns</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Political polarization</li>
            <li>Environmental policy changes</li>
            <li>International relations impact</li>
            <li>Democratic institutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}