-- Fix the security issues with reviews access

-- First, drop the existing view properly
DROP VIEW IF EXISTS public.reviews_public CASCADE;

-- Create a secure view that only exposes safe review data (without emails)
CREATE VIEW public.reviews_public AS 
SELECT 
  id,
  name,
  college,
  rating,
  review_text,
  created_at,
  updated_at
FROM public.reviews;

-- Grant SELECT permissions on the view to public users
GRANT SELECT ON public.reviews_public TO anon, authenticated;

-- Update the reviews table policies to be more restrictive
DROP POLICY IF EXISTS "Anyone can view safe review fields" ON public.reviews;
DROP POLICY IF EXISTS "Public can view non-sensitive review data" ON public.reviews;
DROP POLICY IF EXISTS "Anyone can submit reviews" ON public.reviews;

-- Create a policy that only allows INSERT (no SELECT for direct table access)
CREATE POLICY "Allow public review submission only" 
ON public.reviews 
FOR INSERT 
WITH CHECK (true);

-- Ensure no direct SELECT access to the main reviews table
CREATE POLICY "No direct public access to reviews table" 
ON public.reviews 
FOR SELECT 
USING (false);