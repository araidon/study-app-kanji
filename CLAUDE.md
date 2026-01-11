# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Japanese Kanji Compound Word Game (漢字熟語ゲーム) for 1st-grade elementary school students. Players select two kanji cards to form valid compound words (jukugo) within a 3-minute time limit.

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
├── App.tsx           # Screen router (title → game → result)
├── types.ts          # TypeScript interfaces (Card, Jukugo, GameResult)
├── components/       # Screen components with paired CSS Modules
├── data/
│   ├── kanji.ts      # 80 grade-1 kanji characters
│   └── jukugo.ts     # Compound word dictionary (~200+ entries) with JUKUGO_MAP
└── hooks/
    └── useGame.ts    # Core game engine (timer, scoring, card management)
```

**Key patterns:**
- Game logic isolated in `useGame` hook, not in components
- Screen navigation via React state in App.tsx (no router)
- Jukugo lookup uses Map for O(1) validation

## Game Rules Reference

- **Scoring**: General jukugo = 2pts, Surname/Number = 1pt, Reverse bonus = +2pts
- **Constants**: `GAME_DURATION = 180` seconds, `HAND_SIZE = 10` cards
- **Jukugo types**: `'general' | 'surname' | 'number'`
- **All kanji must come from the 80-character set** in `data/kanji.ts`

## Mobile Optimizations

- `100dvh` for iOS Safari dynamic viewport
- Safe area insets for notch handling
- Touch optimizations (no overscroll, no highlight, no select)

## Deployment

Cloudflare Pages config:
- Build command: `npm run build`
- Output directory: `dist`
