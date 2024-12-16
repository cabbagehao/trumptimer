import React from 'react';
import { Flag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-red-600 text-white py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <Flag className="w-8 h-8 mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Donald Trump Inauguration 2025
            </h1>
          </Link>
          
          <nav className="grid grid-cols-2 sm:flex flex-wrap justify-center gap-2 w-full sm:w-auto">
            <Link 
              to="/about"
              className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors text-sm sm:text-base text-center"
            >
              About Trump
            </Link>
            <Link 
              to="/policies"
              className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors text-sm sm:text-base text-center"
            >
              Policies
            </Link>
            <Link 
              to="/speeches"
              className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors text-sm sm:text-base text-center"
            >
              Speeches
            </Link>
            <Link 
              to="/inauguration"
              className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors text-sm sm:text-base text-center"
            >
              Inauguration
            </Link>
            <Link 
              to="/quotes"
              className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors text-sm sm:text-base text-center col-span-2 sm:col-span-1"
            >
              Quotes
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}