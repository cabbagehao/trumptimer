import React from 'react';

interface EventSectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  time: string;
  content: React.ReactNode;
}

export default function EventSection({ id, icon, title, time, content }: EventSectionProps) {
  return (
    <section id={id} data-section className="mb-12">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-red-600 font-medium mb-4">{time}</p>
      <div className="text-gray-700">
        {content}
      </div>
    </section>
  );
}