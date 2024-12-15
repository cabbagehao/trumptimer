import React from 'react';
import { Flag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-red-600 text-white py-6 mb-8">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Flag className="w-8 h-8 mr-3" />
        <h1 className="text-3xl font-bold text-center">
          Donald Trump Inauguration Countdown 2025
        </h1>
      </div>
    </header>
  );
}