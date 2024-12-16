import React from 'react';
import { Link } from 'lucide-react';

export default function References() {
  return (
    <div id="references" data-section>
      <h2 className="text-3xl font-bold mb-8">References and Links</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Official Sources</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://www.donaldjtrump.com/" className="text-red-600 hover:underline">
                Trump Campaign Official Website
              </a>
            </li>
            <li>
              <a href="https://gop.com/" className="text-red-600 hover:underline">
                Republican National Committee
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Policy Analysis</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://www.cfr.org/" className="text-red-600 hover:underline">
                Council on Foreign Relations
              </a>
            </li>
            <li>
              <a href="https://www.brookings.edu/" className="text-red-600 hover:underline">
                Brookings Institution
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}