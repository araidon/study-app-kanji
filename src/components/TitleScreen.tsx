import { useState } from 'react'
import styles from './TitleScreen.module.css'

interface HintSettings {
  enabled: boolean
  delay: number
}

interface Props {
  onStart: (duration: number, hintSettings: HintSettings) => void
}

const DEFAULT_MINUTES = 5
const DEFAULT_HINT_DELAY = 20

export default function TitleScreen({ onStart }: Props) {
  const [minutes, setMinutes] = useState(DEFAULT_MINUTES)
  const [hintEnabled, setHintEnabled] = useState(true)
  const [hintDelay, setHintDelay] = useState(DEFAULT_HINT_DELAY)

  const handleStart = () => {
    onStart(minutes * 60, { enabled: hintEnabled, delay: hintDelay })
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

      <div className={styles.hintSelector}>
        <div className={styles.hintToggle}>
          <span className={styles.hintToggleLabel}>ヒント</span>
          <button
            className={`${styles.toggleButton} ${hintEnabled ? styles.toggleOn : styles.toggleOff}`}
            onClick={() => setHintEnabled(!hintEnabled)}
          >
            <span className={styles.toggleKnob} />
            <span className={styles.toggleText}>{hintEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>
        {hintEnabled && (
          <div className={styles.hintDelaySection}>
            <label className={styles.hintDelayLabel}>{hintDelay}びょうご</label>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={hintDelay}
              onChange={(e) => setHintDelay(Number(e.target.value))}
              className={styles.hintSlider}
            />
            <div className={styles.hintRange}>
              <span>5びょう</span>
              <span>60びょう</span>
            </div>
          </div>
        )}
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
          <li>すうじ: 1てん</li>
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
