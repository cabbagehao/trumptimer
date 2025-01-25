/*
  # Create comments table for event discussions

  1. New Tables
    - `comments`
      - `id` (uuid, primary key)
      - `event_title` (text)
      - `content` (text)
      - `user_id` (uuid)
      - `parent_id` (uuid)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for public reading
    - Add policies for authenticated users to create/update/delete

  3. Indexes
    - event_title
    - user_id
    - parent_id
*/

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_title text NOT NULL,
  content text NOT NULL,
  user_id uuid NOT NULL,
  parent_id uuid,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT content_length CHECK (char_length(content) >= 1 AND char_length(content) <= 1000)
);

-- Enable RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX IF NOT EXISTS comments_event_title_idx ON comments(event_title);
CREATE INDEX IF NOT EXISTS comments_user_id_idx ON comments(user_id);
CREATE INDEX IF NOT EXISTS comments_parent_id_idx ON comments(parent_id);

-- Create policies
-- Allow anyone to read comments
CREATE POLICY "Comments are viewable by everyone"
ON comments FOR SELECT
TO public
USING (true);

-- Allow authenticated users to create comments
CREATE POLICY "Authenticated users can create comments"
ON comments FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own comments
CREATE POLICY "Users can update own comments"
ON comments FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own comments
CREATE POLICY "Users can delete own comments"
ON comments FOR DELETE
TO authenticated
USING (auth.uid() = user_id);