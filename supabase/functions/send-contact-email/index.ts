import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'npm:resend@2.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, query } = await req.json()

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Store the contact submission in database
    const { error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          query,
          is_processed: false
        }
      ])

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`)
    }

    // Initialize Resend client
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

    // Send confirmation email to the user
    const confirmationEmailResponse = await resend.emails.send({
      from: 'White Devils Tech <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting White Devils Tech Community!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            Thank you for reaching out!
          </h1>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Hi ${name},
          </p>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            We have successfully received your message and appreciate you taking the time to contact us.
          </p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007acc; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
            <p style="color: #666; font-style: italic;">"${query}"</p>
          </div>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Our team will review your inquiry and get back to you as soon as possible. We typically respond within 24-48 hours.
          </p>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Best regards,<br>
            <strong>White Devils Tech Community Team</strong>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 14px; text-align: center;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </div>
      `,
    })

    console.log(`Contact form submission from ${name} (${email}): ${query}`)
    console.log('Confirmation email sent:', confirmationEmailResponse)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact submission received and confirmation email sent successfully',
        emailId: confirmationEmailResponse.data?.id
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})