import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const { email, eventId, metadata } = await request.json();

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

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
      // Handle duplicate email case
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'Email already registered', success: true },
          { status: 200 }
        );
      }

      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save email' },
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
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}