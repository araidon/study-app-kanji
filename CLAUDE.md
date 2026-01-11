# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Japanese Kanji Compound Word Game (漢字熟語ゲーム) for 1st-grade elementary school students. Players select two kanji cards to form valid compound words (jukugo). Time limit is configurable from 1-10 minutes (default: 5 minutes).

## Commands

```bash
npm run dev      # Start Vite dev server with hot reload
npm run build    # TypeScript check + Vite production build
npm run preview  # Preview production build locally
```

## Tech Stack

- React 19 + TypeScript 5 + Vite 7
- CSS Modules for component-scoped styling
- Deployed to Cloudflare Pages (auto-deploys on push to main)

## Architecture

```
src/
├── App.tsx           # Screen router (title → game → result), manages gameDuration
├── types.ts          # TypeScript interfaces (Card, Jukugo, GameResult)
├── components/
│   ├── TitleScreen   # Time selection slider, game rules
│   ├── GameScreen    # 4x4 card grid, action buttons
│   └── ResultScreen  # Score display, jukugo list with meanings
├── data/
│   ├── kanji.ts      # 80 grade-1 kanji characters
│   └── jukugo.ts     # Compound word dictionary (1,197 entries) with JUKUGO_MAP
└── hooks/
    └── useGame.ts    # Core game engine (timer, scoring, card management)

scripts/
├── jukugo-database.ts    # Master jukugo database (source of truth)
└── generate-valid-csv.ts # Generate CSV from database

data/
└── jukugo-reference.csv  # 80×79 combinations reference (6,320 entries)
```

**Key patterns:**
- Game logic isolated in `useGame(onGameEnd, gameDuration)` hook
- Screen navigation via React state in App.tsx (no router)
- Jukugo lookup uses Map for O(1) validation
- Time selection passed from TitleScreen → App → GameScreen → useGame

## Game Rules Reference

- **Time**: 1-10 minutes (configurable via slider, default 5 minutes)
- **Hand size**: 16 cards (4x4 grid)
- **Scoring**: General jukugo = 2pts, Surname/Number = 1pt, Reverse bonus = +2pts
- **Jukugo types**: `'general' | 'surname' | 'number'`
- **All kanji must come from the 80-character set** in `data/kanji.ts`

## Action Buttons

- 🗑 すてる: Discard 1 selected card
- 🔄 ぜんぶすてる: Discard all cards and redraw
- 🏁 おわる: End game immediately

## Mobile Optimizations (iPhone Safari)

- `min-height: 100dvh` for dynamic viewport
- Safe area insets for notch handling
- Touch optimizations (no overscroll, no highlight, no select)
- Scrollable title screen for smaller devices

## Jukugo Database Management

**Master database**: `scripts/jukugo-database.ts`
- Contains 1,197 valid jukugo entries
- Format: `{ word: '熟語', meaning: 'よみがな' or 'よみがな/意味', type: 'general' | 'surname' | 'number' }`

**Update workflow**:
1. Edit `scripts/jukugo-database.ts` to add/modify entries
2. Run script to regenerate game data:
   ```bash
   npx tsx -e "
   import { FIRST_GRADE_KANJI } from './src/data/kanji'
   import { JUKUGO_DATABASE } from './scripts/jukugo-database'
   // ... generate src/data/jukugo.ts
   "
   ```
3. Regenerate reference CSV: `npx tsx scripts/generate-valid-csv.ts > data/jukugo-reference.csv`

**Statistics** (as of 2025-01):
- Total combinations: 6,320 (80×79)
- Valid jukugo: 1,197 (18.9%)
  - General: 794
  - Surname: 297
  - Number: 106

## Deployment

Cloudflare Pages config:
- Build command: `npm run build`
- Output directory: `dist`
