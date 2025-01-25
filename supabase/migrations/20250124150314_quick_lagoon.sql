/*
  # Create user profiles table

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `nickname` (text, unique)
      - `avatar_url` (text)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `profiles` table
    - Add policies for public read access
    - Add policies for owner-only write access
    - Add nickname validation
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  nickname text UNIQUE NOT NULL,
  avatar_url text,
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_nickname CHECK (
    nickname ~ '^[^\s*]+$' AND  -- No spaces (including full-width) or asterisks
    length(nickname) BETWEEN 2 AND 30 -- Length between 2 and 30 characters
  )
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read profiles
CREATE POLICY "Profiles are viewable by everyone"
  ON profiles
  FOR SELECT
  TO anon
  USING (true);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create trigger to update timestamp
CREATE OR REPLACE FUNCTION update_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_profiles_updated_at();

-- Create function to check nickname availability
CREATE OR REPLACE FUNCTION check_nickname_available(nickname text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN NOT EXISTS (
    SELECT 1 FROM profiles WHERE profiles.nickname = check_nickname_available.nickname
  );
END;
$$;