/*
  # Fix comments and profiles relationship

  1. Changes
    - Drop and recreate comments table with proper foreign key relationship
    - Add RLS policies
    - Remove view as it's not needed with proper foreign key relationship
  
  2. Security
    - Maintain existing RLS policies
    - Ensure proper access control
*/

-- First drop existing comments table and view
DROP VIEW IF EXISTS comment_details;
DROP TABLE IF EXISTS comments;

-- Recreate comments table with proper foreign key relationship
CREATE TABLE comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_title text NOT NULL,
  content text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES comments(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT content_length CHECK (char_length(content) >= 1 AND char_length(content) <= 1000)
);

-- Enable RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX comments_event_title_idx ON comments(event_title);
CREATE INDEX comments_user_id_idx ON comments(user_id);
CREATE INDEX comments_parent_id_idx ON comments(parent_id);

-- Create policies
CREATE POLICY "Comments are viewable by everyone"
ON comments FOR SELECT
TO public
USING (true);

CREATE POLICY "Authenticated users can create comments"
ON comments FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments"
ON comments FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments"
ON comments FOR DELETE
TO authenticated
USING (auth.uid() = user_id);