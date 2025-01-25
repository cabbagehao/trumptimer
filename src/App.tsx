import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth, googleProvider } from './utils/firebase';
import { getRedirectResult } from 'firebase/auth';
import { supabase } from './utils/supabase';
import Home from './pages/Home';
import TrumpPolicies from './pages/TrumpPolicies';
import TrumpQuotes from './pages/TrumpQuotes';
import AboutTrump from './pages/AboutTrump';
import Discussions from './pages/Discussions';

export default function App() {
  useEffect(() => {
    // Handle redirect result
    getRedirectResult(auth).then(async (result) => {
      if (result?.user) {
        try {
          // Sign in with Supabase using the Firebase token
          const { data: { session }, error: signInError } = await supabase.auth.signInWithPassword({
            email: result.user.email!,
            password: result.user.uid,
          });

          if (signInError?.message.includes('Invalid login credentials')) {
            // User doesn't exist in Supabase, create them
            const { error: signUpError } = await supabase.auth.signUp({
              email: result.user.email!,
              password: result.user.uid,
            });

            if (signUpError) throw signUpError;

            // Create profile
            const { error: profileError } = await supabase
              .from('profiles')
              .insert([{
                id: result.user.uid,
                nickname: result.user.displayName || `user_${result.user.uid.slice(0, 8)}`,
                avatar_url: result.user.photoURL || null,
              }]);

            if (profileError) throw profileError;
          }
        } catch (err) {
          console.error('Error handling redirect result:', err);
        }
      }
    }).catch(err => {
      console.error('Error getting redirect result:', err);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutTrump />} />
        <Route path="/about/" element={<AboutTrump />} />
        <Route path="/policies" element={<TrumpPolicies />} />
        <Route path="/policies/" element={<TrumpPolicies />} />
        <Route path="/quotes" element={<TrumpQuotes />} />
        <Route path="/quotes/" element={<TrumpQuotes />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/discussions/" element={<Discussions />} />
        <Route path="/discussions/event/:eventTitle" element={<Discussions />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}