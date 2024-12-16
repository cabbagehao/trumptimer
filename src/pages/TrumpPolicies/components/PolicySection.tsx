import React from 'react';

interface PolicySectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export default function PolicySection({ id, icon, title, content }: PolicySectionProps) {
  return (
    <section id={id} data-section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-700">
        {content}
      </div>
    </section>
  );
}