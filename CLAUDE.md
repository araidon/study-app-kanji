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
│   └── jukugo.ts     # Compound word dictionary (~550 entries) with JUKUGO_MAP
└── hooks/
    └── useGame.ts    # Core game engine (timer, scoring, card management)
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

## Deployment

Cloudflare Pages config:
- Build command: `npm run build`
- Output directory: `dist`
