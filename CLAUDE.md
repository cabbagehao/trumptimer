# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based countdown timer web application tracking Donald Trump's inauguration date (2029-01-20). The app includes user authentication, discussions, quotes, policies, and historical information about Trump.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with forms plugin
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth + Supabase integration
- **Database**: Supabase (PostgreSQL)
- **Analytics**: Baidu Analytics
- **Icons**: Lucide React

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build locally

## Architecture

### Authentication Flow
The app uses a dual authentication system:
1. Firebase Auth for Google OAuth
2. Supabase for user data storage and session management

When users sign in with Google via Firebase, the app automatically:
- Creates a corresponding Supabase user account
- Stores user profile in `profiles` table
- Syncs authentication between both systems

### Key Directories

- `src/components/` - Reusable UI components organized by feature
- `src/pages/` - Route-level page components with their own component folders
- `src/utils/` - Utility functions for Firebase, Supabase, date calculations, analytics
- `src/constants/` - Application constants including important dates
- `src/types/` - TypeScript type definitions
- `src/data/` - Static data files (timeline events, quotes, speeches)
- `supabase/migrations/` - Database migration files

### Date Management
The core countdown functionality centers around:
- `INAUGURATION_DATE` set to 2029-01-20T17:00:00.000Z (UTC)
- Date utilities in `src/utils/dateUtils.ts` for countdown calculations
- All dates stored and calculated in UTC

### Component Structure
- Pages follow a pattern: main index file + `components/` subfolder for page-specific components
- Shared components in `src/components/` organized by feature (Auth, Comments, Layout, etc.)
- Each major feature (Timeline, CountdownTimer) may have both a simple component and a folder structure

### Environment Variables Required
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

Firebase config is hardcoded in `src/utils/firebase.ts` (public keys only).

### Build Configuration
- Vite config excludes `lucide-react` from optimization
- Manual chunks for vendor libraries (React, React DOM, React Router)
- ESLint with TypeScript, React Hooks, and React Refresh rules