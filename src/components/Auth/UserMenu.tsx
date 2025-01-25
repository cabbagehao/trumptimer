import React, { useState, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import { supabase } from '../../utils/supabase';
import type { Profile } from '../../types/auth';

export default function UserMenu() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createProfile = async (userId: string) => {
    try {
      // First check if profile already exists
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (existingProfile) {
        setProfile(existingProfile);
        return;
      }

      // Create new profile only if one doesn't exist
      const { data: newProfile, error: insertError } = await supabase
        .from('profiles')
        .insert([{
          id: userId,
          nickname: `user_${userId.slice(0, 8)}`,
          avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`,
        }])
        .select()
        .single();

      if (insertError) {
        console.error('Error creating profile:', insertError);
        return;
      }

      if (newProfile) {
        setProfile(newProfile);
      }
    } catch (err) {
      console.error('Error in profile creation:', err);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Get profile from profiles table
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profile) {
          setProfile(profile);
        } else {
          await createProfile(user.id);
        }
      } catch (err) {
        console.error('Error in profile management:', err);
      }
    };

    fetchProfile();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profile) {
          setProfile(profile);
        } else {
          await createProfile(session.user.id);
        }
      } else if (event === 'SIGNED_OUT') {
        setProfile(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setProfile(null);
      setIsMenuOpen(false);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  if (!profile) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition-colors"
      >
        {profile.avatar_url ? (
          <img
            src={profile.avatar_url}
            alt={profile.nickname}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-red-600" />
          </div>
        )}
        <span className="font-medium">{profile.nickname}</span>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}