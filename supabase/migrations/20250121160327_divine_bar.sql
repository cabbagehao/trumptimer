/*
  # Create feedback system tables

  1. New Tables
    - `feedback`
      - `id` (uuid, primary key)
      - `type` (text) - feedback type (suggestion, bug, content, other)
      - `message` (text) - feedback content
      - `email` (text, optional) - user's email
      - `created_at` (timestamp) - when feedback was submitted
      - `status` (text) - feedback status (new, in_progress, completed)
  
  2. Security
    - Enable RLS on feedback table
    - Add policy for inserting feedback
    - Add policy for admins to read feedback
*/

CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  message text NOT NULL,
  email text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert feedback
CREATE POLICY "Anyone can submit feedback"
  ON feedback
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users with admin role can read feedback
CREATE POLICY "Admins can read feedback"
  ON feedback
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');