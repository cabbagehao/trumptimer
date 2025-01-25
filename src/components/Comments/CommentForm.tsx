import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../../utils/supabase';
import type { NewComment } from '../../types/comments';
import type { Profile } from '../../types/auth';

interface CommentFormProps {
  eventTitle: string;
  parentId?: string;
  onSuccess: (newComment: any) => void;
  onCancel?: () => void;
}

export default function CommentForm({ eventTitle, parentId, onSuccess, onCancel }: CommentFormProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profile) {
          setProfile(profile);
        }
      } else if (event === 'SIGNED_OUT') {
        setProfile(null);
      }
    });

    // Initial profile check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
          .then(({ data: profile }) => {
            if (profile) {
              setProfile(profile);
            }
          });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) {
      setError('Please sign in to comment');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const newComment: NewComment = {
        event_title: eventTitle,
        content: content.trim(),
        user_id: user.id,
        ...(parentId && { parent_id: parentId }),
      };

      const { data: commentData, error: submitError } = await supabase
        .from('comments')
        .insert([newComment])
        .select()
        .single();

      if (submitError) throw submitError;

      if (commentData) {
        onSuccess({
          ...commentData,
          user: {
            nickname: profile.nickname,
            avatar_url: profile.avatar_url
          }
        });
      }

      setContent('');
    } catch (err: any) {
      console.error('Error posting comment:', err);
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!profile) {
    return (
      <div className="bg-gray-50 p-4 rounded-md text-center">
        <p className="text-gray-600">Please sign in to join the discussion</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          rows={4}
          required
          maxLength={1000}
          placeholder={parentId ? "Post your reply..." : "Share your thoughts..."}
        />
      </div>

      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? 'Posting...' : (parentId ? 'Reply Submit' : 'Post Comment')}
        </button>
      </div>
    </form>
  );
}