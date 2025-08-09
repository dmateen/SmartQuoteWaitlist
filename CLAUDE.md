# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application built with the App Router, using Supabase for authentication and database functionality. It's based on the official Next.js with Supabase starter template and configured as a roofing leads magnet application.

## Architecture

**Framework Stack:**
- Next.js 15 with App Router and React 19
- TypeScript for type safety
- Supabase for authentication, database, and real-time features
- Tailwind CSS for styling with shadcn/ui components
- next-themes for dark/light mode support

**Key Directories:**
- `app/` - Next.js App Router structure with pages and API routes
- `app/auth/` - Authentication pages (login, sign-up, password reset, etc.)
- `app/protected/` - Protected routes requiring authentication
- `components/` - Reusable React components
- `components/ui/` - shadcn/ui component library
- `lib/supabase/` - Supabase client configuration for different contexts
- `lib/utils.ts` - Utility functions and shared helpers

**Authentication Flow:**
- Uses Supabase Auth with cookie-based sessions via `@supabase/ssr`
- Server-side authentication handled through `lib/supabase/server.ts`
- Client-side authentication through `lib/supabase/client.ts`
- Middleware configuration in `lib/supabase/middleware.ts`

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Environment Setup

Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY` - Your Supabase anon key

## Component System

Uses shadcn/ui with "new-york" style variant. Components are configured in `components.json`:
- Import aliases: `@/components`, `@/lib/utils`, `@/components/ui`
- Tailwind CSS with CSS variables for theming
- Lucide React for icons

## Supabase Integration

- Server components use `createClient()` from `lib/supabase/server.ts`
- Client components use the client from `lib/supabase/client.ts` 
- Middleware handles auth state management and redirects
- Authentication forms are pre-built and styled with shadcn/ui

## Styling Approach

- Tailwind CSS with CSS custom properties for theming
- Dark/light mode support via next-themes
- shadcn/ui component system with consistent design tokens
- Geist font from Next.js/Google Fonts