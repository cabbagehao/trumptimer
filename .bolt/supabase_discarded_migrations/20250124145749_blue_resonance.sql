/*
  # Create comments table for discussions

  1. New Tables
    - `comments`
      - `id` (uuid, primary key)
      - `event_title` (text, references timeline events)
      - `user_name` (text)
      - `content` (text)
      - `created_at` (timestamp)
      - `parent_id` (uuid, for nested replies)

  2. Security
    - Enable RLS on `comments` table
    - Add policies for public read access
    - Add policies for public write access
    - Add content length validation
*/

CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_title text NOT NULL,
  user_name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  parent_id uuid REFERENCES comments(id),
  CONSTRAINT content_length CHECK (char_length(content) >= 1 AND char_length(content) <= 1000)
);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read comments
CREATE POLICY "Comments are viewable by everyone"
  ON comments
  FOR SELECT
  TO anon
  USING (true);

-- Allow anyone to create comments (no authentication required)
CREATE POLICY "Anyone can create comments"
  ON comments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX comments_event_title_idx ON comments(event_title);
CREATE INDEX comments_parent_id_idx ON comments(parent_id);