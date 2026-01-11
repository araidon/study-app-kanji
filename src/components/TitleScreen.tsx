import styles from './TitleScreen.module.css'

interface Props {
  onStart: () => void
}

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>漢字熟語ゲーム</h1>
      <p className={styles.subtitle}>小学1年生のかんじ80字</p>
      <button className={styles.startButton} onClick={onStart}>
        ゲームスタート
      </button>
      <div className={styles.rules}>
        <h2>あそびかた</h2>
        <ul>
          <li>カードを2まいえらんで じゅくごをつくろう</li>
          <li>じゅくご: 2てん / みょうじ: 1てん</li>
          <li>つかわないカードはゴミばこへすてよう</li>
          <li>3ふんでおわりだよ</li>
        </ul>
      </div>
    </div>
  )
}
