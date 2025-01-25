import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import RegisterModal from './RegisterModal';

export default function RegisterButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
      >
        <LogIn className="w-5 h-5" />
        <span>Register</span>
      </button>

      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}