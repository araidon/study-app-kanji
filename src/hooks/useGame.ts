import { useState, useCallback, useEffect, useRef } from 'react'
import type { Card, CompletedJukugo, GameResult } from '../types'
import { FIRST_GRADE_KANJI } from '../data/kanji'
import { JUKUGO_MAP } from '../data/jukugo'

const GAME_DURATION = 180 // 3分 = 180秒
const HAND_SIZE = 16

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function createDeck(): Card[] {
  const shuffledKanji = shuffleArray([...FIRST_GRADE_KANJI])
  return shuffledKanji.map((kanji, index) => ({
    id: index,
    kanji,
  }))
}

export function useGame(onGameEnd: (result: GameResult) => void) {
  const [deck, setDeck] = useState<Card[]>([])
  const [hand, setHand] = useState<Card[]>([])
  const [selectedCards, setSelectedCards] = useState<Card[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION)
  const [completedJukugos, setCompletedJukugos] = useState<CompletedJukugo[]>([])
  const [lastResult, setLastResult] = useState<'correct' | 'incorrect' | null>(null)
  const [lastWord, setLastWord] = useState<string>('')
  const [lastMeaning, setLastMeaning] = useState<string>('')
  const timerRef = useRef<number | null>(null)
  const gameEndedRef = useRef(false)
  const gameStartedRef = useRef(false)

  // ゲーム初期化
  const initGame = useCallback(() => {
    gameEndedRef.current = false
    gameStartedRef.current = true
    const newDeck = createDeck()
    const initialHand = newDeck.slice(0, HAND_SIZE)
    const remainingDeck = newDeck.slice(HAND_SIZE)

    setDeck(remainingDeck)
    setHand(initialHand)
    setSelectedCards([])
    setScore(0)
    setTimeLeft(GAME_DURATION)
    setCompletedJukugos([])
    setLastResult(null)
    setLastWord('')
    setLastMeaning('')
  }, [])

  // ゲーム終了処理
  const endGame = useCallback(() => {
    if (gameEndedRef.current) return
    gameEndedRef.current = true

    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    onGameEnd({
      totalScore: score,
      completedJukugos,
    })
  }, [score, completedJukugos, onGameEnd])

  // タイマー
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // 時間切れまたは山札がなくなったら終了
  useEffect(() => {
    if (timeLeft === 0) {
      endGame()
    }
  }, [timeLeft, endGame])

  useEffect(() => {
    if (gameStartedRef.current && deck.length === 0 && hand.length < HAND_SIZE) {
      endGame()
    }
  }, [deck.length, hand.length, endGame])

  // カード選択
  const selectCard = useCallback((card: Card) => {
    setLastResult(null)

    // 既に選択されているカードをタップした場合は選択解除
    if (selectedCards.some(c => c.id === card.id)) {
      setSelectedCards(selectedCards.filter(c => c.id !== card.id))
      return
    }

    // 1枚目の選択
    if (selectedCards.length === 0) {
      setSelectedCards([card])
      return
    }

    // 2枚目の選択 - 熟語判定
    if (selectedCards.length === 1) {
      const firstCard = selectedCards[0]
      const word = firstCard.kanji + card.kanji
      const jukugo = JUKUGO_MAP.get(word)

      if (jukugo) {
        // 正解
        let earnedScore = jukugo.type === 'general' ? 2 : 1 // general: 2点, surname/number: 1点
        let hasReverseBonus = false

        // 逆順ボーナスチェック
        if (jukugo.reverse) {
          earnedScore += 2
          hasReverseBonus = true
        }

        setScore(prev => prev + earnedScore)
        setCompletedJukugos(prev => [...prev, {
          word,
          score: earnedScore,
          type: jukugo.type,
          meaning: jukugo.meaning,
          hasReverseBonus,
        }])

        // カードを手札から削除して補充
        const newHand = hand.filter(c => c.id !== firstCard.id && c.id !== card.id)
        const cardsToAdd = deck.slice(0, 2)
        const newDeck = deck.slice(2)

        setHand([...newHand, ...cardsToAdd])
        setDeck(newDeck)
        setSelectedCards([])
        setLastResult('correct')
        setLastWord(word)
        setLastMeaning(jukugo.meaning)
      } else {
        // 不正解
        setSelectedCards([])
        setLastResult('incorrect')
        setLastWord(word)
        setLastMeaning('')
      }
    }
  }, [selectedCards, hand, deck])

  // カードを捨てる
  const discardCard = useCallback((card: Card) => {
    if (!selectedCards.some(c => c.id === card.id)) return

    const newHand = hand.filter(c => c.id !== card.id)
    const cardToAdd = deck[0]
    const newDeck = deck.slice(1)

    if (cardToAdd) {
      setHand([...newHand, cardToAdd])
    } else {
      setHand(newHand)
    }
    setDeck(newDeck)
    setSelectedCards([])
    setLastResult(null)
  }, [selectedCards, hand, deck])

  // 手札をすべて捨てる
  const discardAll = useCallback(() => {
    const handCount = hand.length
    const cardsToAdd = deck.slice(0, handCount)
    const newDeck = deck.slice(handCount)

    setHand(cardsToAdd)
    setDeck(newDeck)
    setSelectedCards([])
    setLastResult(null)
  }, [hand, deck])

  // 初期化
  useEffect(() => {
    initGame()
  }, [initGame])

  return {
    hand,
    selectedCards,
    score,
    timeLeft,
    deckCount: deck.length,
    lastResult,
    lastWord,
    lastMeaning,
    selectCard,
    discardCard,
    discardAll,
    endGame,
  }
}
