import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../../utils/supabase';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { auth, googleProvider } from '../../utils/firebase';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [signInError, setSignInError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleGoogleAuth = async (user: any) => {
    try {
      // Sign in with Supabase using the Firebase token
      const { data: { session }, error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email!,
        password: user.uid, // Use Firebase UID as password
      });

      if (signInError?.message.includes('Invalid login credentials')) {
        // User doesn't exist in Supabase, create them
        const { error: signUpError } = await supabase.auth.signUp({
          email: user.email!,
          password: user.uid,
        });

        if (signUpError) throw signUpError;

        // Create profile with Google display name and photo
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{
            id: user.uid,
            nickname: user.displayName || `user_${user.uid.slice(0, 8)}`,
            avatar_url: user.photoURL,
          }]);

        if (profileError) throw profileError;
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      console.error('Error in Google auth:', err);
      setSignInError(err.message);
      throw err;
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setSignInError('');
      setSignUpError('');

      // Try popup first
      try {
        const result = await signInWithPopup(auth, googleProvider);
        await handleGoogleAuth(result.user);
      } catch (popupError: any) {
        // If popup is blocked, fall back to redirect
        if (popupError.code === 'auth/popup-blocked') {
          await signInWithRedirect(auth, googleProvider);
        } else {
          throw popupError;
        }
      }
    } catch (err: any) {
      console.error('Google sign in error:', err);
      setSignInError(err.message || 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      setSignInError('');
      setLoading(true);
      
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      console.error('Sign in error:', err);
      setSignInError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (email: string, password: string, nickname: string) => {
    try {
      setSignUpError('');
      setLoading(true);

      // 1. Check if nickname is available
      const { data: nicknameAvailable, error: checkError } = await supabase
        .rpc('check_nickname_available', { nickname });

      if (checkError) throw new Error('Failed to check nickname availability');
      if (!nicknameAvailable) throw new Error('This nickname is already taken');

      // 2. Create auth user
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        if (signUpError.message.includes('User already registered')) {
          throw new Error('This email is already registered. Please sign in instead.');
        }
        throw signUpError;
      }
      if (!data.user) throw new Error('Failed to create user');

      // 3. Create profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ 
          id: data.user.id,
          nickname,
          avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${nickname}`,
        }]);

      if (profileError) {
        await supabase.auth.signOut();
        throw new Error('Failed to create profile. Please try again.');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      console.error('Sign up error:', err);
      setSignUpError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setSignInError('');
    setSignUpError('');
    setSuccess(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </h2>

          {mode === 'signin' && signInError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4">
              {signInError}
            </div>
          )}

          {mode === 'signup' && signUpError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4">
              {signUpError}
            </div>
          )}

          {success && (
            <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm mb-4">
              {mode === 'signin' ? 'Sign in successful!' : 'Registration successful!'} Redirecting...
            </div>
          )}

          {mode === 'signin' ? (
            <SignInForm
              onSubmit={handleSignIn}
              loading={loading}
            />
          ) : (
            <SignUpForm
              onSubmit={handleSignUp}
              loading={loading}
            />
          )}

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            {loading ? 'Signing in...' : 'Continue with Google'}
          </button>

          <div className="mt-6 text-center text-sm">
            <button
              onClick={switchMode}
              className="text-red-600 hover:underline"
            >
              {mode === 'signin'
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}