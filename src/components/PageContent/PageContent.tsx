import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  );
}