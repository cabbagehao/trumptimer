import React from 'react';
import { Calendar, Flag, Globe, MapPin } from 'lucide-react';
import { trumpSpeeches } from '../../../data/trumpSpeeches';

interface TimelineItemProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  speeches: typeof trumpSpeeches;
}

function TimelineItem({ id, icon, title, speeches }: TimelineItemProps) {
  return (
    <div id={id} data-section className="mb-8">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="space-y-4">
        {speeches.map((speech, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{speech.topic}</h4>
            <p className="text-gray-600 text-sm mb-2">{speech.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {speech.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {speech.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const campaignSpeeches = trumpSpeeches.filter(speech => 
    speech.topic.toLowerCase().includes('campaign') || 
    speech.topic.toLowerCase().includes('rally')
  );

  const presidentialSpeeches = trumpSpeeches.filter(speech => 
    speech.topic.toLowerCase().includes('state of the union') || 
    speech.topic.toLowerCase().includes('inaugural')
  );

  const internationalSpeeches = trumpSpeeches.filter(speech => 
    speech.topic.toLowerCase().includes('united nations') || 
    speech.location.toLowerCase().includes('switzerland') ||
    speech.location.toLowerCase().includes('belgium')
  );

  const domesticSpeeches = trumpSpeeches.filter(speech => 
    speech.location.toLowerCase().includes('usa') &&
    !speech.topic.toLowerCase().includes('campaign')
  );

  return (
    <div id="timeline" data-section>
      <h2 className="text-3xl font-bold mb-8">Speech Timeline</h2>
      
      <TimelineItem
        id="campaign"
        icon={<Flag className="w-6 h-6 text-red-600" />}
        title="Campaign Speeches"
        speeches={campaignSpeeches}
      />
      
      <TimelineItem
        id="presidential"
        icon={<Calendar className="w-6 h-6 text-red-600" />}
        title="Presidential Speeches"
        speeches={presidentialSpeeches}
      />
      
      <TimelineItem
        id="international"
        icon={<Globe className="w-6 h-6 text-red-600" />}
        title="International Addresses"
        speeches={internationalSpeeches}
      />
      
      <TimelineItem
        id="domestic"
        icon={<MapPin className="w-6 h-6 text-red-600" />}
        title="Domestic Events"
        speeches={domesticSpeeches}
      />
    </div>
  );
}