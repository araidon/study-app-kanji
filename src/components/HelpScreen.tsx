import styles from './HelpScreen.module.css'

interface Props {
  onBack: () => void
}

export default function HelpScreen({ onBack }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>あそびかた</h1>

      {/* 画面説明セクション */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>がめんのせつめい</h2>

        <div className={styles.screenDemo}>
          <div className={styles.demoInfoBar}>
            <div className={styles.demoInfoItem}>
              <span className={styles.demoLabel}>のこり</span>
              <span className={styles.demoValue}>4:32</span>
            </div>
            <div className={styles.demoInfoItem}>
              <span className={styles.demoLabel}>とくてん</span>
              <span className={styles.demoValue}>12</span>
            </div>
            <div className={styles.demoInfoItem}>
              <span className={styles.demoLabel}>やまふだ</span>
              <span className={styles.demoValue}>48</span>
            </div>
          </div>
        </div>

        <div className={styles.explanationList}>
          <div className={styles.explanationItem}>
            <span className={styles.term}>のこり</span>
            <span className={styles.description}>のこりじかん。0になるとゲームがおわります。</span>
          </div>
          <div className={styles.explanationItem}>
            <span className={styles.term}>とくてん</span>
            <span className={styles.description}>いままでにとったてんすうです。</span>
          </div>
          <div className={styles.explanationItem}>
            <span className={styles.term}>やまふだ</span>
            <span className={styles.description}>のこりのカードのまいすう。これがなくなるとゲームがおわります。</span>
          </div>
        </div>
      </section>

      {/* 操作方法セクション */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>そうさほうほう</h2>

        <div className={styles.stepList}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>カードを2まいえらぶ</div>
              <div className={styles.stepDemo}>
                <div className={`${styles.demoCard} ${styles.selected}`}>山</div>
                <span className={styles.arrow}>+</span>
                <div className={`${styles.demoCard} ${styles.selected}`}>川</div>
                <span className={styles.arrow}>=</span>
                <span className={styles.resultWord}>「山川」</span>
              </div>
              <p className={styles.stepDescription}>
                カードをタップしてえらびます。2まいめをえらぶと、じゅくごかどうかチェックします。
              </p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>せいかいすると...</div>
              <div className={styles.resultDemo}>
                <div className={styles.correctBanner}>「山川」せいかい!</div>
              </div>
              <p className={styles.stepDescription}>
                えらんだ2まいがきえて、やまふだからあたらしいカードが2まいはいります。
              </p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>せんたくをやめる</div>
              <div className={styles.stepDemo}>
                <div className={`${styles.demoCard} ${styles.selected}`}>山</div>
                <span className={styles.arrow}>→</span>
                <span className={styles.tapIcon}>タップ</span>
                <span className={styles.arrow}>→</span>
                <div className={styles.demoCard}>山</div>
              </div>
              <p className={styles.stepDescription}>
                えらんだカードをもういちどタップすると、せんたくがとりけせます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 得点セクション */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>とくてんのしくみ</h2>

        <div className={styles.scoreList}>
          <div className={styles.scoreItem}>
            <div className={styles.scorePoints}>2てん</div>
            <div className={styles.scoreType}>じゅくご</div>
            <div className={styles.scoreExample}>れい: 山川、入口、大小</div>
          </div>
          <div className={styles.scoreItem}>
            <div className={styles.scorePoints}>1てん</div>
            <div className={styles.scoreType}>すうじ</div>
            <div className={styles.scoreExample}>れい: 一人、三日、四月</div>
          </div>
        </div>
      </section>

      {/* ボタン説明セクション */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ボタンのせつめい</h2>

        <div className={styles.buttonList}>
          <div className={styles.buttonItem}>
            <div className={styles.buttonIcon}>🗑</div>
            <div className={styles.buttonInfo}>
              <div className={styles.buttonName}>すてる</div>
              <div className={styles.buttonDescription}>せんたくした1まいをすてて、あたらしいカードをもらいます。</div>
            </div>
          </div>
          <div className={styles.buttonItem}>
            <div className={styles.buttonIcon}>🔄</div>
            <div className={styles.buttonInfo}>
              <div className={styles.buttonName}>ぜんぶすてる</div>
              <div className={styles.buttonDescription}>てふだをぜんぶすてて、あたらしいカードにいれかえます。</div>
            </div>
          </div>
          <div className={styles.buttonItem}>
            <div className={styles.buttonIcon}>🏁</div>
            <div className={styles.buttonInfo}>
              <div className={styles.buttonName}>おわる</div>
              <div className={styles.buttonDescription}>ゲームをとちゅうでおわらせます。</div>
            </div>
          </div>
        </div>
      </section>

      {/* ヒント説明セクション */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ヒントきのう</h2>
        <div className={styles.hintExplanation}>
          <div className={styles.hintDemo}>
            <div className={`${styles.demoCard} ${styles.hintCard}`}>山</div>
            <div className={`${styles.demoCard} ${styles.hintCard}`}>川</div>
          </div>
          <p className={styles.stepDescription}>
            しばらくそうさしないと、せいかいになるカードがきいろくひかります。
            ヒントはタイトルがめんでON/OFFできます。
          </p>
        </div>
      </section>

      <button className={styles.backButton} onClick={onBack}>
        もどる
      </button>
    </div>
  )
}
