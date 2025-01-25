import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, MessageSquare, RefreshCw } from 'lucide-react';
import { supabase } from '../../../utils/supabase';
import type { TimelineEvent } from '../../../types';
import type { Comment } from '../../../types/comments';
import CommentForm from '../../../components/Comments/CommentForm';
import CommentList from '../../../components/Comments/CommentList';

interface EventDiscussionProps {
  event: TimelineEvent;
}

export default function EventDiscussion({ event }: EventDiscussionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [replyToId, setReplyToId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      setError('');

      // First get the comments
      const { data: commentsData, error: commentsError } = await supabase
        .from('comments')
        .select(`
          id,
          event_title,
          content,
          user_id,
          parent_id,
          created_at
        `)
        .eq('event_title', event.title)
        .order('created_at', { ascending: true });

      if (commentsError) {
        console.error('Error fetching comments:', commentsError);
        throw new Error('Failed to load comments');
      }

      if (!commentsData) {
        throw new Error('No comments data received');
      }

      // Then get the profiles for these comments
      const userIds = [...new Set(commentsData.map(c => c.user_id))];
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('id, nickname, avatar_url')
        .in('id', userIds);

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        throw new Error('Failed to load user profiles');
      }

      // Create a map of profiles
      const profileMap = (profilesData || []).reduce((acc, profile) => {
        acc[profile.id] = profile;
        return acc;
      }, {} as Record<string, any>);

      // Combine comments with profile data
      const transformedComments = commentsData.map(comment => ({
        ...comment,
        user: {
          nickname: profileMap[comment.user_id]?.nickname || 'Unknown User',
          avatar_url: profileMap[comment.user_id]?.avatar_url
        }
      }));

      setComments(transformedComments);
      setError('');
    } catch (err: any) {
      console.error('Error in fetchComments:', err);
      setError(err.message || 'Failed to load comments. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [event.title, retryCount]);

  const handleNewComment = async (newComment: Comment) => {
    // Get the profile data for the new comment
    const { data: profile } = await supabase
      .from('profiles')
      .select('nickname, avatar_url')
      .eq('id', newComment.user_id)
      .single();

    const commentWithUser = {
      ...newComment,
      user: {
        nickname: profile?.nickname || 'Unknown User',
        avatar_url: profile?.avatar_url
      }
    };

    setComments(prevComments => [...prevComments, commentWithUser]);
    if (replyToId) {
      setReplyToId(null);
    }
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  return (
    <div className="space-y-6">
      <Link 
        to="/discussions"
        className="inline-flex items-center text-red-600 hover:text-red-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Discussions
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Calendar className="w-4 h-4" />
          {event.date.toLocaleDateString()}
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:underline ml-2"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Source
            </a>
          )}
        </div>
        <p className="text-gray-700 mb-6">{event.description}</p>

        <div className="border-t pt-6">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-semibold">Discussion</h2>
          </div>

          {error ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
              <div className="flex items-center justify-between">
                <p>{error}</p>
                <button
                  onClick={handleRetry}
                  className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700"
                >
                  <RefreshCw className="w-4 h-4" />
                  Retry
                </button>
              </div>
            </div>
          ) : isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin inline-block w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full mb-2"></div>
              <p className="text-gray-600">Loading comments...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <CommentForm 
                eventTitle={event.title}
                onSuccess={handleNewComment}
              />
              
              <CommentList 
                comments={comments}
                onReply={setReplyToId}
                replyToId={replyToId}
                eventTitle={event.title}
                onReplySuccess={handleNewComment}
                onReplyCancel={() => setReplyToId(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}