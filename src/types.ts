export interface Card {
  id: number
  kanji: string
}

export interface Jukugo {
  word: string
  type: 'surname' | 'general' | 'number'
  meaning: string // 熟語の意味
  reverse?: string // 逆順でも意味が通じる場合、その熟語
}

export interface CompletedJukugo {
  word: string
  score: number
  type: 'surname' | 'general' | 'number'
  meaning: string
  hasReverseBonus: boolean
}

export interface GameResult {
  totalScore: number
  completedJukugos: CompletedJukugo[]
}
