import React, { useState } from 'react';
import { Flag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-red-600 text-white py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Flag className="w-8 h-8 mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Trump Inauguration Countdown
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <nav className="flex gap-2">
              <Link 
                to="/term-countdown/"
                className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
              >
                Term Countdown
              </Link>
              <Link 
                to="/policies/"
                className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
              >
                Policies
              </Link>
              <Link 
                to="/quotes/"
                className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
              >
                Quotes
              </Link>
              <Link 
                to="/trump-die/"
                className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Trump Die?
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-red-500 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <nav className="flex flex-col gap-2">
              <Link 
                to="/term-countdown/"
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Term Countdown
              </Link>
              <Link 
                to="/policies/"
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Policies
              </Link>
              <Link 
                to="/quotes/"
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quotes
              </Link>
              <Link 
                to="/trump-die/"
                className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trump Die?
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}