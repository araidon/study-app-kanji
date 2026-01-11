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
          <li>せいげんじかんは 3ぷん</li>
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
