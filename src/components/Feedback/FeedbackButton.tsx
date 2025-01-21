import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';
import FeedbackModal from './FeedbackModal';

interface FeedbackButtonProps {
  isMobile?: boolean;
  isOpen?: boolean;
}

export default function FeedbackButton({ isMobile, isOpen }: FeedbackButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClasses = `
    flex items-center gap-2 
    bg-gray-700 hover:bg-gray-600 text-white 
    px-4 py-2 rounded-lg font-medium 
    shadow-lg hover:shadow-xl transition-all
    ${isMobile ? 'relative' : 'fixed right-4 bottom-4 z-50 hidden lg:flex'}
  `;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={buttonClasses}
        aria-label="Open feedback form"
      >
        <MessageSquarePlus className="w-5 h-5" />
        <span className="hidden sm:inline">Feedback</span>
      </button>

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}