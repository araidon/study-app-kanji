import { useState } from 'react'
import styles from './TitleScreen.module.css'

interface Props {
  onStart: (duration: number) => void
}

const DEFAULT_MINUTES = 5

export default function TitleScreen({ onStart }: Props) {
  const [minutes, setMinutes] = useState(DEFAULT_MINUTES)

  const handleStart = () => {
    onStart(minutes * 60)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>漢字熟語ゲーム</h1>
      <p className={styles.subtitle}>小学1年生のかんじ80字</p>

      <div className={styles.timeSelector}>
        <label className={styles.timeLabel}>じかん: {minutes}ふん</label>
        <input
          type="range"
          min="1"
          max="10"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className={styles.timeSlider}
        />
        <div className={styles.timeRange}>
          <span>1ふん</span>
          <span>10ふん</span>
        </div>
      </div>

      <button className={styles.startButton} onClick={handleStart}>
        ゲームスタート
      </button>
      <div className={styles.rules}>
        <h2>あそびかた</h2>
        <ul>
          <li>カードを2まいえらんで じゅくごをつくろう</li>
        </ul>
        <h3>とくてん</h3>
        <ul>
          <li>じゅくご: 2てん</li>
          <li>みょうじ・すうじ: 1てん</li>
          <li>ぎゃくじゅんボーナス: +2てん</li>
        </ul>
        <h3>ボタン</h3>
        <ul>
          <li>🗑 すてる: 1まいすてる</li>
          <li>🔄 ぜんぶすてる: ぜんぶいれかえ</li>
          <li>🏁 おわる: ゲームしゅうりょう</li>
        </ul>
      </div>
    </div>
  )
}
