-- Drop the existing overly permissive policy
DROP POLICY "Anyone can view reviews" ON public.reviews;

-- Create a secure view for public review data without emails
CREATE OR REPLACE VIEW public.reviews_public AS
SELECT 
  id,
  name,
  college,
  rating,
  review_text,
  created_at,
  updated_at
FROM public.reviews;

-- Enable RLS on the view
ALTER VIEW public.reviews_public SET (security_invoker = true);

-- Create a more restrictive policy for the reviews table
CREATE POLICY "Public can view non-sensitive review data" 
ON public.reviews 
FOR SELECT 
USING (false); -- Block direct access to the table

-- Grant usage on the view to anon and authenticated users
GRANT SELECT ON public.reviews_public TO anon;
GRANT SELECT ON public.reviews_public TO authenticated;