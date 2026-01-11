import type { GameResult } from '../types'
import styles from './ResultScreen.module.css'

interface Props {
  result: GameResult
  onPlayAgain: () => void
}

export default function ResultScreen({ result, onPlayAgain }: Props) {
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
                <span className={styles.word}>{jukugo.word}</span>
                <span className={styles.details}>
                  {jukugo.type === 'surname' ? 'みょうじ' : 'じゅくご'}
                  {jukugo.hasReverseBonus && ' +ぎゃくボーナス'}
                </span>
                <span className={styles.points}>+{jukugo.score}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className={styles.playAgainButton} onClick={onPlayAgain}>
        もういちど あそぶ
      </button>
    </div>
  )
}
