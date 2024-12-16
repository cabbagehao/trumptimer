import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { trumpSpeeches, Speech } from '../../../data/trumpSpeeches';

type SpeechCategory = 'all' | 'campaign' | 'presidential' | 'international' | 'domestic';

export default function SpeechList() {
  const [category, setCategory] = useState<SpeechCategory>('all');

  const filterSpeeches = (speeches: Speech[]): Speech[] => {
    switch (category) {
      case 'campaign':
        return speeches.filter(speech => 
          speech.topic.toLowerCase().includes('campaign') || 
          speech.topic.toLowerCase().includes('rally')
        );
      case 'presidential':
        return speeches.filter(speech => 
          speech.topic.toLowerCase().includes('state of the union') || 
          speech.topic.toLowerCase().includes('inaugural')
        );
      case 'international':
        return speeches.filter(speech => 
          speech.topic.toLowerCase().includes('united nations') || 
          speech.location.toLowerCase().includes('switzerland') ||
          speech.location.toLowerCase().includes('belgium')
        );
      case 'domestic':
        return speeches.filter(speech => 
          speech.location.toLowerCase().includes('usa') &&
          !speech.topic.toLowerCase().includes('campaign')
        );
      default:
        return speeches;
    }
  };

  const filteredSpeeches = filterSpeeches(trumpSpeeches);

  return (
    <div id="archive" data-section>
      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'campaign', 'presidential', 'international', 'domestic'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full capitalize transition-colors ${
              category === cat
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredSpeeches.map((speech, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">{speech.topic}</h3>
            <p className="text-gray-600 mb-3">{speech.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {speech.date}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {speech.location}
              </div>
              <a
                href={speech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-600 hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Watch Speech
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}