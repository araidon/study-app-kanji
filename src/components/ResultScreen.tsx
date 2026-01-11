import type { GameResult } from '../types'
import styles from './ResultScreen.module.css'

interface Props {
  result: GameResult
  onPlayAgain: () => void
  onBackToTitle: () => void
}

export default function ResultScreen({ result, onPlayAgain, onBackToTitle }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>けっか</h1>

      <div className={styles.scoreCard}>
        <div className={styles.totalScore}>
          <span className={styles.scoreLabel}>とくてん</span>
          <span className={styles.scoreValue}>{result.totalScore}</span>
          <span className={styles.scoreUnit}>てん</span>
        </div>

        <div className={styles.stats}>
          <span>つくった じゅくご: {result.completedJukugos.length}こ</span>
        </div>
      </div>

      {result.completedJukugos.length > 0 && (
        <div className={styles.jukugoList}>
          <h2 className={styles.listTitle}>つくった じゅくご</h2>
          <ul>
            {result.completedJukugos.map((jukugo, index) => (
              <li key={index} className={styles.jukugoItem}>
                <div className={styles.jukugoMain}>
                  <span className={styles.word}>{jukugo.word}</span>
                  <span className={styles.points}>+{jukugo.score}</span>
                </div>
                <div className={styles.jukugoSub}>
                  <span className={styles.meaning}>{jukugo.meaning}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.buttonArea}>
        <button className={styles.playAgainButton} onClick={onPlayAgain}>
          もういちど
        </button>
        <button className={styles.backToTitleButton} onClick={onBackToTitle}>
          タイトルへ
        </button>
      </div>
    </div>
  )
}
