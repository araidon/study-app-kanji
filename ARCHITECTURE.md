# 漢字熟語ゲーム アーキテクチャ概要

## 1. アプリ概要

小学1年生向けの教育用ゲームで、80個の漢字カードから2枚を選んで熟語を作るゲームです。

| 項目 | 内容 |
|------|------|
| **URL** | https://study-app-kanji.pages.dev/ |
| **技術スタック** | React 19 + TypeScript 5 + Vite 7 |
| **スタイリング** | CSS Modules |
| **ホスティング** | Cloudflare Pages |

---

## 2. アーキテクチャ

### 画面遷移フロー

```
main.tsx (エントリーポイント)
    ↓
App.tsx (画面状態管理)
    ├── TitleScreen → 設定選択 → onStart()
    │       ↓
    ├── GameScreen → useGame Hook → onGameEnd()
    │       ↓
    └── ResultScreen → onPlayAgain() → TitleScreen
```

### 状態管理パターン

- **App.tsx**: 画面遷移 (`'title' | 'game' | 'result'`) とゲーム設定を管理
- **useGame Hook**: ゲーム内の全状態とロジックをカプセル化（カスタムフック）

---

## 3. ファイル構成と役割

### コアファイル

| ファイル | 役割 | 行数 |
|----------|------|------|
| `src/main.tsx` | React 19 エントリーポイント | 10行 |
| `src/App.tsx` | 画面遷移・設定管理 | 46行 |
| `src/types.ts` | 型定義 (Card, Jukugo, HintSettings等) | 29行 |

### コンポーネント (`src/components/`)

| ファイル | 役割 |
|----------|------|
| `TitleScreen.tsx` | タイトル画面: 時間設定(1-10分)、ヒント設定(ON/OFF, 5-60秒)、ルール説明 |
| `GameScreen.tsx` | ゲーム画面: 4x4カードグリッド、スコア表示、アクションボタン |
| `ResultScreen.tsx` | 結果画面: 最終スコア、作成した熟語一覧 |
| `*.module.css` | 各コンポーネントのスコープ付きスタイル |

### データ層 (`src/data/`)

| ファイル | 役割 |
|----------|------|
| `kanji.ts` | 小学1年生漢字80字の配列 |
| `jukugo.ts` | 熟語辞書 (Map形式、1,280+件) |

### ゲームロジック (`src/hooks/`)

| ファイル | 役割 |
|----------|------|
| `useGame.ts` | ゲームの全ロジック (270行) |

### スクリプト (`scripts/`)

| ファイル | 役割 |
|----------|------|
| `jukugo-database.ts` | 熟語マスターデータベース |
| `generate-valid-csv.ts` | 80字用熟語CSV生成ツール |

---

## 4. プログラムロジック詳細

### useGame Hook の状態管理

```typescript
// 主要な状態
hand: Card[]               // 手札（16枚）
deck: Card[]               // 山札（残り64枚）
selectedCards: Card[]      // 選択中のカード（0-2枚）
score: number              // 現在のスコア
timeLeft: number           // 残り時間（秒）
completedJukugos: []       // 作成した熟語履歴
hintCardIds: number[]      // ヒント対象カードID
```

### 主要関数

| 関数 | 処理内容 |
|------|----------|
| `initGame()` | 80枚シャッフル → 16枚を手札に配布 |
| `selectCard(card)` | カード選択 → 2枚目で熟語判定 → 正解なら得点加算・補充 |
| `discardCard(card)` | 選択中のカード1枚を捨てる → 1枚補充 |
| `discardAll()` | 手札全体を捨てる → 全数補充 |
| `findValidPairs()` | 現在の手札で作れるペアを検索（ヒント用） |
| `endGame()` | タイマー停止 → 結果をコールバック |

### 熟語判定ロジック (`selectCard` 内)

```typescript
// 2枚選択時の処理 (useGame.ts)
const word = firstCard.kanji + card.kanji  // 例: "火" + "山" = "火山"
const jukugo = JUKUGO_MAP.get(word)        // 熟語辞書から検索

if (jukugo && jukugo.type !== 'surname') {
  // 正解: 名字以外の熟語
  const earnedScore = jukugo.type === 'general' ? 2 : 1
  // 得点加算、カード消費・補充
} else {
  // 不正解: 熟語なし or 名字
  // 選択解除のみ
}
```

### 得点システム

| 熟語タイプ | 点数 | 例 |
|------------|------|-----|
| `general` | 2点 | 火山、天気、学校 |
| `number` | 1点 | 一円、百人、三日 |
| `surname` | 0点（不正解扱い） | 山田、田中 |

### ヒント機能ロジック

```typescript
// useGame.ts
// 500msごとにチェック
if (操作なし時間 >= hintSettings.delay * 1000) {
  const validPair = findValidPairs()  // 手札から正解ペア検索
  setHintCardIds(validPair)           // 該当カードを光らせる
}
```

### 終了条件

1. **時間切れ**: `timeLeft === 0`
2. **カード枯渇**: `deck.length === 0 && hand.length === 0`

---

## 5. データフロー図

```
[TitleScreen]
    │
    │ onStart(duration, hintSettings)
    ▼
[App.tsx] ─── gameDuration, hintSettings ───▶ [GameScreen]
                                                  │
                                                  ▼
                                            [useGame Hook]
                                                  │
                    ◀─── JUKUGO_MAP.get(word) ───┤
                    │                             │
              [jukugo.ts]                   selectCard()
                                            discardCard()
                                            discardAll()
                                                  │
                                                  │ onGameEnd(result)
                                                  ▼
                                            [ResultScreen]
                                                  │
                                                  │ onPlayAgain()
                                                  ▼
                                            [TitleScreen]
```

---

## 6. 型定義 (`types.ts`)

```typescript
interface Card {
  id: number
  kanji: string
}

interface Jukugo {
  word: string
  type: 'surname' | 'general' | 'number'
  meaning: string
  reverse?: string
}

interface HintSettings {
  enabled: boolean
  delay: number  // 秒
}

interface GameResult {
  totalScore: number
  completedJukugos: CompletedJukugo[]
}
```

---

## 7. UI/UX設計

### モバイル最適化 (iPhone Safari対応)

- `100dvh` 使用（アドレスバー問題対策）
- セーフエリア対応（ノッチ）
- オーバースクロール防止
- ダブルタップズーム無効

### 視覚的フィードバック

| 状態 | 表現 |
|------|------|
| カード選択中 | 青枠 + 10%拡大 + シャドウ |
| ヒント対象 | 金色点滅（1秒周期） |
| 正解時 | 緑バナー |
| 不正解時 | 赤バナー |

---

## 8. 用語集

### モバイル・ブラウザ関連

| 用語 | 説明 |
|------|------|
| **ノッチ (Notch)** | iPhone X以降の画面上部にある切り欠き部分。カメラやセンサーが入っている黒い領域。この部分にコンテンツが隠れないよう「セーフエリア」を考慮する必要がある |
| **セーフエリア (Safe Area)** | ノッチやホームバーに重ならない、コンテンツを安全に表示できる領域 |
| **100dvh** | Dynamic Viewport Height の100%。`vh`（Viewport Height）の改良版で、モバイルブラウザのアドレスバーが表示/非表示で変わる高さに動的に対応する単位 |
| **オーバースクロール** | ページの端に到達した後もスクロールを続けると起きる「跳ね返り」効果。iOS Safariで顕著 |

### React・TypeScript関連

| 用語 | 説明 |
|------|------|
| **Hook (フック)** | Reactの機能で、関数コンポーネント内で状態管理や副作用を扱う仕組み。`useState`, `useEffect` など |
| **カスタムフック** | 開発者が作成する独自のHook。このアプリでは `useGame` がゲームロジックをまとめたカスタムフック |
| **CSS Modules** | CSSのクラス名がファイルごとに自動でユニークになる仕組み。スタイルの衝突を防ぐ |
| **型定義 (Type Definition)** | TypeScriptでデータの形を定義すること。`interface Card { id: number }` のように書く |

### ビルド・開発関連

| 用語 | 説明 |
|------|------|
| **Vite** | 高速なフロントエンド開発ツール。開発サーバーの起動やプロダクションビルドを行う |
| **エントリーポイント** | プログラムの実行開始地点。このアプリでは `main.tsx` |
| **ビルド (Build)** | ソースコードを本番環境用に変換・最適化すること。`npm run build` で実行 |

### ゲーム用語

| 用語 | 説明 |
|------|------|
| **手札 (hand)** | プレイヤーが現在持っているカード（16枚） |
| **山札 (deck)** | まだ配られていない残りのカード |
| **熟語辞書 (JUKUGO_MAP)** | 有効な熟語とその情報を格納したデータ構造
