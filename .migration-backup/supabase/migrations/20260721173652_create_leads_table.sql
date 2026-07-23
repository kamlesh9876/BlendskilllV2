/*
# Create leads table for BlendSkills contact form

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's name
  - `email` (text, not null) — submitter's work email
  - `phone` (text, nullable) — optional phone number
  - `message` (text, nullable) — optional message
  - `created_at` (timestamptz, default now())
  - `status` (text, default 'new') — lead status for tracking

2. Security
- Enable RLS on `leads`.
- This is a no-auth public contact form, so allow anon + authenticated to INSERT only.
- No SELECT/UPDATE/DELETE for anon — leads are private to the business owner.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
