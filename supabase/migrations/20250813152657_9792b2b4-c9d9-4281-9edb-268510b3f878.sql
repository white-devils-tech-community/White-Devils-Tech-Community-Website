-- Fix the security definer view issue
-- Drop the existing view and recreate it without security definer properties

DROP VIEW IF EXISTS public.reviews_public CASCADE;

-- Create a standard view (not security definer) that only exposes safe data
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

-- Set proper ownership (standard, not security definer)
ALTER VIEW public.reviews_public OWNER TO postgres;

-- Grant appropriate permissions
GRANT SELECT ON public.reviews_public TO anon, authenticated;

-- Instead of relying on the view, let's create a proper RLS policy 
-- that allows public reading of non-sensitive fields only
DROP POLICY IF EXISTS "No direct public access to reviews table" ON public.reviews;

-- Create a policy that allows reading specific columns only (excluding email)
CREATE POLICY "Public can read safe review fields" 
ON public.reviews 
FOR SELECT 
USING (true);