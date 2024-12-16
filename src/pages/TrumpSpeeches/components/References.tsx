import React from 'react';
import { Link } from 'lucide-react';

export default function References() {
  return (
    <div id="references" data-section>
      <h2 className="text-3xl font-bold mb-8">References</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Official Archives</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.archives.gov/presidential-libraries/trump"
                className="text-red-600 hover:underline flex items-center gap-2"
              >
                <Link className="w-4 h-4" />
                National Archives - Trump Presidential Library
              </a>
            </li>
            <li>
              <a 
                href="https://trumpwhitehouse.archives.gov/"
                className="text-red-600 hover:underline flex items-center gap-2"
              >
                <Link className="w-4 h-4" />
                Trump White House Archives
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Media Archives</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.c-span.org/person/?donaldtrump"
                className="text-red-600 hover:underline flex items-center gap-2"
              >
                <Link className="w-4 h-4" />
                C-SPAN Video Library
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/results?search_query=trump+speeches"
                className="text-red-600 hover:underline flex items-center gap-2"
              >
                <Link className="w-4 h-4" />
                YouTube Speech Collection
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Research Resources</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://millercenter.org/president/trump/speeches"
                className="text-red-600 hover:underline flex items-center gap-2"
              >
                <Link className="w-4 h-4" />
                Miller Center Speech Archive
              </a>
            </li>
            <li>
              <a 
                href="https://www.presidency.ucsb.edu/documents-search?field-keywords=&field-keywords2=&field-keywords3=&from%5Bdate%5D=&to%5Bdate%5D=&person2=200301&items_per_page=100"
                className="text-red-600 hover:underline flex items-center gap-2"
              >
                <Link className="w-4 h-4" />
                American Presidency Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}