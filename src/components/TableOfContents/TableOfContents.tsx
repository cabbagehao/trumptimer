import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  subsections?: Section[];
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = React.useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = (section: Section, depth = 0) => (
    <div key={section.id} className={`ml-${depth * 4}`}>
      <button
        className={`flex items-center py-2 px-4 rounded-lg transition-colors w-full text-left ${
          activeSection === section.id
            ? 'bg-red-50 text-red-600 font-medium'
            : 'hover:bg-gray-50'
        }`}
        onClick={() => {
          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }}
      >
        {depth > 0 && <ChevronRight className="w-4 h-4 mr-2" />}
        {section.title}
      </button>
      {section.subsections?.map((subsection) => renderSection(subsection, depth + 1))}
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-red-600 text-white p-3 rounded-full shadow-lg"
        aria-label="Toggle table of contents"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Table of Contents */}
      <nav 
        className={`
          fixed lg:sticky top-0 lg:top-4 h-screen lg:h-auto
          ${isOpen ? 'inset-0 z-40' : 'hidden'} 
          lg:block lg:w-64 flex-shrink-0
        `}
      >
        <div className={`
          w-64 bg-white rounded-xl shadow-lg p-4 
          max-h-[calc(100vh-2rem)] overflow-y-auto
          ${isOpen ? 'fixed right-4 top-4' : ''}
          lg:sticky lg:top-4
        `}>
          <h2 className="text-lg font-bold mb-4 px-4">Contents</h2>
          <div className="space-y-1">
            {sections.map((section) => renderSection(section))}
          </div>
        </div>
        
        {/* Backdrop for mobile */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
}