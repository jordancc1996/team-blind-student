# Supabase Setup Instructions

## Environment Variables

Add these environment variables to your `.env.local` file (for local development) and to Vercel (for production):

```env
NEXT_PUBLIC_SUPABASE_URL=https://dcjisguvsofa.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjamlzZ3V2c29mYSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzM3MDg4MDAwLCJleHAiOjIwNTI2NjQwMDB9.sb_publishable_DC3icGUVsO_FA6PkA7K2nQ_DiNeL286
```

## Database Schema

The application expects the following tables in your Supabase database:

### `universities` table
```sql
CREATE TABLE universities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  domain TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sample data
INSERT INTO universities (name, domain) VALUES
  ('Stanford University', 'stanford.edu'),
  ('MIT', 'mit.edu'),
  ('Harvard University', 'harvard.edu'),
  ('UC Berkeley', 'berkeley.edu'),
  ('NYU', 'nyu.edu'),
  ('USC', 'usc.edu'),
  ('Columbia University', 'columbia.edu'),
  ('University of Washington', 'uw.edu'),
  ('Carnegie Mellon University', 'cmu.edu'),
  ('UCLA', 'ucla.edu'),
  ('Boston University', 'bu.edu'),
  ('Purdue University', 'purdue.edu'),
  ('UT Austin', 'utexas.edu'),
  ('UIUC', 'illinois.edu'),
  ('Northeastern University', 'northeastern.edu');
```

### `profiles` table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL UNIQUE,
  university_id UUID REFERENCES universities(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view all profiles" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

## Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add both environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Redeploy your application

## Authentication Flow

1. **Signup**: User provides university email (.edu), regular email, and password
   - System extracts domain from university email
   - Creates auth user with Supabase
   - Matches domain to universities table
   - Creates profile with anonymous username (e.g., "Student_1234")
   - Redirects to login

2. **Login**: User signs in with email and password
   - Authenticates with Supabase
   - Fetches profile data
   - Redirects to home page

3. **Navbar**: Shows authentication state
   - Logged out: "Sign in" / "Sign up" buttons
   - Logged in: Username with dropdown menu (Profile, Logout)

## Local Development

1. Create `.env.local` file in root directory with the environment variables
2. Run `npm install` to install dependencies including `@supabase/supabase-js`
3. Run `npm run dev` to start development server
4. Test signup and login flows
