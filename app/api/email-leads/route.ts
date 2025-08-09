import { NextRequest, NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    // Check environment variables first
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.error('Missing NEXT_PUBLIC_SUPABASE_URL');
      return NextResponse.json(
        { error: 'Server configuration error: Missing Supabase URL' },
        { status: 500 }
      );
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY) {
      console.error('Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY');
      return NextResponse.json(
        { error: 'Server configuration error: Missing Supabase Key' },
        { status: 500 }
      );
    }

    const { email, eventId, metadata } = await request.json();

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create Supabase client with service role for bypassing RLS temporarily
    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!
    );

    // Insert the email lead
    const { data, error } = await supabase
      .from('email_leads')
      .insert({
        email: email.toLowerCase().trim(),
        event_id: eventId || 'unknown',
        metadata: metadata || {}
      })
      .select('id, email, created_at')
      .single();

    if (error) {
      console.error('API Route: Supabase error:', error);
      
      // Handle duplicate email case
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'Email already registered', success: true },
          { status: 200 }
        );
      }

      // Handle table doesn't exist case
      if (error.code === '42P01') {
        return NextResponse.json(
          { error: 'Database table not found. Please run migrations.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to save email', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Email saved successfully',
        success: true,
        data: {
          id: data.id,
          email: data.email,
          created_at: data.created_at
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API Route: Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    message: 'Email leads API is working',
    timestamp: new Date().toISOString(),
    env: {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY,
    }
  });
}