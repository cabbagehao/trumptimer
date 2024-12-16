import React from 'react';
import { Link, Book, Video } from 'lucide-react';

export default function AdditionalResources() {
  return (
    <div id="additional-resources" data-section className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5 text-red-600" />
            Official Documents
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="https://www.donaldjtrump.com/" 
                 className="text-red-600 hover:underline flex items-center gap-2">
                <Link className="w-4 h-4" />
                Official Campaign Website
              </a>
            </li>
            <li>
              <a href="https://www.trumplibrary.gov/" 
                 className="text-red-600 hover:underline flex items-center gap-2">
                <Link className="w-4 h-4" />
                Trump Presidential Library
              </a>
            </li>
            <li>
              <a href="https://www.whitehouse.gov/about-the-white-house/presidents/donald-j-trump/" 
                 className="text-red-600 hover:underline flex items-center gap-2">
                <Link className="w-4 h-4" />
                White House Biography
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-red-600" />
            Media Archives
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="https://www.c-span.org/person/?donaldtrump" 
                 className="text-red-600 hover:underline flex items-center gap-2">
                <Link className="w-4 h-4" />
                C-SPAN Video Library
              </a>
            </li>
            <li>
              <a href="https://truthsocial.com/@realDonaldTrump" 
                 className="text-red-600 hover:underline flex items-center gap-2">
                <Link className="w-4 h-4" />
                Truth Social Updates
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/results?search_query=trump+speeches" 
                 className="text-red-600 hover:underline flex items-center gap-2">
                <Link className="w-4 h-4" />
                Speech Archives
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}