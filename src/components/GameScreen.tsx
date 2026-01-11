import { useGame } from '../hooks/useGame'
import type { GameResult } from '../types'
import styles from './GameScreen.module.css'

interface Props {
  onGameEnd: (result: GameResult) => void
  gameDuration: number
}

export default function GameScreen({ onGameEnd, gameDuration }: Props) {
  const {
    hand,
    selectedCards,
    score,
    timeLeft,
    deckCount,
    lastResult,
    lastWord,
    lastMeaning,
    selectCard,
    discardCard,
    discardAll,
    endGame,
  } = useGame(onGameEnd, gameDuration)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const selectedCard = selectedCards[0]

  return (
    <div className={styles.container}>
      {/* 情報表示エリア */}
      <div className={styles.infoBar}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>のこり</span>
          <span className={styles.infoValue}>{formatTime(timeLeft)}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>とくてん</span>
          <span className={styles.infoValue}>{score}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>やまふだ</span>
          <span className={styles.infoValue}>{deckCount}</span>
        </div>
      </div>

      {/* 結果表示エリア（固定高さ） */}
      <div className={styles.resultArea}>
        {lastResult && (
          <div className={`${styles.resultBanner} ${styles[lastResult]}`}>
            {lastResult === 'correct' ? (
              <>
                <div className={styles.resultWord}>「{lastWord}」せいかい!</div>
                <div className={styles.resultMeaning}>{lastMeaning}</div>
              </>
            ) : (
              <span>「{lastWord}」ざんねん...</span>
            )}
          </div>
        )}
      </div>

      {/* 手札エリア - 2行5列 */}
      <div className={styles.handArea}>
        <div className={styles.handGrid}>
          {hand.map((card) => {
            const isSelected = selectedCards.some(c => c.id === card.id)
            return (
              <button
                key={card.id}
                className={`${styles.card} ${isSelected ? styles.selected : ''}`}
                onClick={() => selectCard(card)}
              >
                {card.kanji}
              </button>
            )
          })}
        </div>
      </div>

      {/* アクションエリア */}
      <div className={styles.actionArea}>
        <button
          className={`${styles.actionButton} ${selectedCard ? styles.active : ''}`}
          onClick={() => selectedCard && discardCard(selectedCard)}
          disabled={!selectedCard}
        >
          <span className={styles.actionIcon}>🗑</span>
          <span className={styles.actionLabel}>すてる</span>
        </button>
        <button
          className={`${styles.actionButton} ${styles.discardAll}`}
          onClick={discardAll}
          disabled={deckCount < hand.length}
        >
          <span className={styles.actionIcon}>🔄</span>
          <span className={styles.actionLabel}>ぜんぶすてる</span>
        </button>
        <button
          className={`${styles.actionButton} ${styles.endGame}`}
          onClick={endGame}
        >
          <span className={styles.actionIcon}>🏁</span>
          <span className={styles.actionLabel}>おわる</span>
        </button>
      </div>
    </div>
  )
}
