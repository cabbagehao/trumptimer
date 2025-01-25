import React, { useState, useEffect } from 'react';
import { LogIn } from 'lucide-react';
import { supabase } from '../../utils/supabase';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';

export default function AuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsSignedIn(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsSignedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isSignedIn) {
    return <UserMenu />;
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg border border-red-600"
      >
        <LogIn className="w-5 h-5" />
        <span>Sign In</span>
      </button>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}