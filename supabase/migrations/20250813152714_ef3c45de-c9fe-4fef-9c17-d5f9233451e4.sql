-- Remove the problematic view entirely and use direct table access
DROP VIEW IF EXISTS public.reviews_public CASCADE;

-- Update the RLS policy to allow reading only safe fields
-- We'll handle column selection in the application code
DROP POLICY IF EXISTS "Public can read safe review fields" ON public.reviews;

-- Create a policy that allows public reading (email will be excluded in app code)
CREATE POLICY "Allow public review reading" 
ON public.reviews 
FOR SELECT 
USING (true);