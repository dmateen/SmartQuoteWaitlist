-- Create email_leads table for lead capture
CREATE TABLE public.email_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  event_id VARCHAR(100),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.email_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert emails (for lead capture)
-- This is safe because we only allow INSERT and the data is non-sensitive
CREATE POLICY "Allow public email insertion" ON public.email_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read/update/delete emails
CREATE POLICY "Authenticated users can read emails" ON public.email_leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update emails" ON public.email_leads
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete emails" ON public.email_leads
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_email_leads_email ON public.email_leads(email);
CREATE INDEX idx_email_leads_created_at ON public.email_leads(created_at);