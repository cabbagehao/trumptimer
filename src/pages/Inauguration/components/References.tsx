import React from 'react';
import { Link } from 'lucide-react';

export default function References() {
  return (
    <div id="references" data-section>
      <h2 className="text-3xl font-bold mb-8">References and Links</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Official Resources</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://www.inaugural.senate.gov/" className="text-red-600 hover:underline">
                Joint Congressional Committee on Inaugural Ceremonies
              </a>
            </li>
            <li>
              <a href="https://www.whitehouse.gov/" className="text-red-600 hover:underline">
                White House Official Website
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Media Coverage</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://www.c-span.org/inauguration/" className="text-red-600 hover:underline">
                C-SPAN Inauguration Coverage
              </a>
            </li>
            <li>
              <a href="https://www.foxnews.com/category/person/donald-trump" className="text-red-600 hover:underline">
                Fox News - Trump Coverage
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}