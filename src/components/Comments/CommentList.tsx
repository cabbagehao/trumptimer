import React from 'react';
import { Clock } from 'lucide-react';
import type { Comment } from '../../types/comments';
import CommentForm from './CommentForm';
import AuthModal from '../Auth/AuthModal';
import { supabase } from '../../utils/supabase';

interface CommentListProps {
  comments: Comment[];
  onReply: (parentId: string) => void;
  replyToId?: string | null;
  eventTitle: string;
  onReplySuccess: () => void;
  onReplyCancel: () => void;
}

export default function CommentList({ 
  comments, 
  onReply,
  replyToId,
  eventTitle,
  onReplySuccess,
  onReplyCancel
}: CommentListProps) {
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const commentsByParent = comments.reduce((acc, comment) => {
    const parentId = comment.parent_id || 'root';
    acc[parentId] = acc[parentId] || [];
    acc[parentId].push(comment);
    return acc;
  }, {} as Record<string, Comment[]>);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const findParentComment = (comment: Comment) => {
    return comments.find(c => c.id === comment.parent_id);
  };

  const handleReplyClick = async (commentId: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      onReply(commentId);
    } else {
      setShowAuthModal(true);
    }
  };

  const renderComment = (comment: Comment) => {
    const parentComment = findParentComment(comment);

    return (
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-start gap-3">
          {comment.user.avatar_url ? (
            <img
              src={comment.user.avatar_url}
              alt={comment.user.nickname}
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
          )}
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">{comment.user.nickname}</span>
              {parentComment && (
                <span className="text-gray-500 text-sm">
                  reply to @{parentComment.user.nickname}
                </span>
              )}
            </div>
            
            <p className="text-gray-700 mb-2">{comment.content}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatDate(comment.created_at)}
              </span>
              <button
                onClick={() => handleReplyClick(comment.id)}
                className="text-red-600 hover:underline"
              >
                Reply
              </button>
            </div>

            {replyToId === comment.id && (
              <div className="mt-4">
                <CommentForm
                  eventTitle={eventTitle}
                  parentId={replyToId}
                  onSuccess={onReplySuccess}
                  onCancel={onReplyCancel}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderComments = () => {
    // First render root comments
    const rootComments = commentsByParent['root'] || [];
    
    return rootComments.map((comment) => (
      <div key={comment.id}>
        {renderComment(comment)}
        
        {/* Render replies with single-level indentation */}
        {commentsByParent[comment.id] && (
          <div className="ml-8">
            {commentsByParent[comment.id].map((reply) => (
              <div key={reply.id}>
                {renderComment(reply)}
                
                {/* Render nested replies at the same level */}
                {commentsByParent[reply.id]?.map((nestedReply) => (
                  <div key={nestedReply.id}>
                    {renderComment(nestedReply)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="space-y-4">
      {comments.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        renderComments()
      )}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}