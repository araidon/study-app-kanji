# ひらがなポーカー 開発仕様書

## 1. プロジェクト概要

ひらがな47枚のカードを使い、5枚の手札から「言葉」を作ってポーカー役を成立させるゲーム。

| 項目 | 内容 |
|------|------|
| **ゲーム名** | ひらがなポーカー |
| **ターゲット** | 日本語学習者、子供向け |
| **プラットフォーム** | Webブラウザ（モバイル対応） |

---

## 2. 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | React 19 + TypeScript 5 |
| ビルドツール | Vite 7 |
| スタイリング | CSS Modules |
| ホスティング | Cloudflare Pages |
| 言葉判定API | **OCI GenAI** |

### 参考リポジトリ

漢字熟語ゲーム（アーキテクチャを踏襲）:
- リポジトリ構成、画面遷移パターン、CSS設計を参考にする

---

## 3. カード構成

### 47枚（各1枚ずつ）

```
あ い う え お （5枚）
か き く け こ （5枚）
さ し す せ そ （5枚）
た ち つ て と （5枚）
な に ぬ ね の （5枚）
は ひ ふ へ ほ （5枚）
ま み む め も （5枚）
や ゆ よ       （3枚）
ら り る れ ろ （5枚）
わ を ん       （3枚）
ー（伸ばし棒） （1枚）
```

**合計: 47枚**

---

## 4. ゲームルール

### 基本ルール

| 項目 | 内容 |
|------|------|
| 手札枚数 | 5枚 |
| カードチェンジ | 1回のみ、0〜5枚交換可能 |
| 1ラウンド使用枚数 | 最大10枚（初期5枚＋交換5枚） |
| ラウンド数 | 最大4ラウンド |
| 総カード枚数 | 47枚 |

### ゲームフロー

```
【ラウンド開始】
    │
    ▼
┌─────────────────────────────────┐
│  1. 山札から5枚配布             │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│  2. 手札確認                    │
│     プレイヤーが5枚を確認       │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│  3. カードチェンジ（1回のみ）    │
│     0〜5枚を選択して交換        │
│     ※交換したカードは捨て札へ   │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│  4. 勝負（判定実行）             │
│     OCI GenAI APIで言葉判定     │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│  5. 結果表示                    │
│     役・得点・作れた言葉を表示   │
└──────────────┬──────────────────┘
               ▼
    【次のラウンドへ or ゲーム終了】
```

### 終了条件

- 4ラウンド完了
- または山札が5枚未満になった時点で終了

---

## 5. 役と得点システム

### 役一覧

5枚の手札から**言葉を作って役を成立**させる。

| 役名 | 構成 | 例 | 得点 |
|------|------|-----|:----:|
| **5カード** | 5文字で1つの単語/文章 | 「あさがお」等 | 6点 |
| **フルハウス** | 3文字の単語 + 2文字の単語 | 「さくら」+「はな」 | 5点 |
| **4カード** | 4文字の単語 | 「ひまわり」+ 余り1文字 | 4点 |
| **3カード** | 3文字の単語 | 「さくら」+ 余り2文字 | 3点 |
| **2ペア** | 2文字の単語 × 2 | 「はな」+「そら」+ 余り1文字 | 2点 |
| **1ペア** | 2文字の単語 | 「はな」+ 余り3文字 | 1点 |
| **ブタ** | 言葉が作れない | - | 0点 |

### 役の判定優先順位

```
1. 5文字で1単語/文章が作れるか → 5カード (6点)
2. 3文字 + 2文字の組み合わせがあるか → フルハウス (5点)
3. 4文字で1単語が作れるか → 4カード (4点)
4. 2文字 × 2の組み合わせがあるか → 2ペア (2点)
5. 3文字で1単語が作れるか → 3カード (3点)
6. 2文字で1単語が作れるか → 1ペア (1点)
7. どれも無理 → ブタ (0点)
```

※ 2ペアと3カードは同点だが、2ペアを優先（2単語作れている方が価値が高い）

### 最大得点

- 4ラウンド × 6点（5カード）= **24点が理論上の最高**

---

## 6. OCI GenAI 連携仕様

### 判定タイミング

- カードチェンジ確定後、「勝負」ボタン押下時に1回だけAPI呼び出し
- ローディング画面を表示中に判定

### API呼び出し設計

```typescript
interface JudgeRequest {
  hand: string[]  // 手札5文字の配列 例: ['さ', 'く', 'ら', 'は', 'な']
}

interface JudgeResponse {
  bestHand: HandType        // 'five_card' | 'full_house' | 'four_card' | etc.
  score: number             // 0-6
  words: WordResult[]       // 認識された言葉
  explanation: string       // 判定理由（表示用）
}

interface WordResult {
  word: string              // 言葉 例: 'さくら'
  reading?: string          // 読み（漢字変換がある場合）
  meaning?: string          // 意味
  length: number            // 文字数
}
```

### プロンプト設計案

```
あなたはひらがなポーカーの審判です。
以下の5文字のひらがなカードから作れる言葉を判定してください。

手札: さ, く, ら, は, な

【判定ルール】
- 手札の文字を並べ替えて、日本語として意味のある言葉を探す
- 言葉は辞書に載っている一般的な単語、または文法的に正しい文章
- 固有名詞（人名・地名）は除外
- 1つの文字は1回しか使えない

【役の判定】
- 5カード: 5文字全部で1つの言葉/文章 (6点)
- フルハウス: 3文字の言葉 + 2文字の言葉 (5点)
- 4カード: 4文字の言葉 (4点)
- 3カード: 3文字の言葉 (3点)
- 2ペア: 2文字の言葉 × 2 (2点)
- 1ペア: 2文字の言葉 (1点)
- ブタ: 言葉なし (0点)

最も高得点となる役を1つ選び、JSON形式で回答してください:
{
  "bestHand": "full_house",
  "score": 5,
  "words": [
    {"word": "さくら", "meaning": "桜", "length": 3},
    {"word": "はな", "meaning": "花", "length": 2}
  ],
  "explanation": "「さくら」(3文字) と「はな」(2文字) でフルハウス成立"
}
```

### エラーハンドリング

| 状況 | 対応 |
|------|------|
| APIタイムアウト | リトライ1回、それでも失敗なら「判定エラー」表示 |
| レスポンス不正 | 0点（ブタ）として処理 |
| ネットワークエラー | エラーメッセージ表示、リトライボタン |

---

## 7. 画面構成

### 画面一覧

| 画面 | ファイル名 | 役割 |
|------|-----------|------|
| タイトル | `TitleScreen.tsx` | ゲーム開始、ルール説明リンク |
| ゲーム | `GameScreen.tsx` | 手札表示、カード選択、チェンジ/勝負ボタン |
| 判定中 | `JudgingScreen.tsx` | API呼び出し中のローディング表示 |
| ラウンド結果 | `RoundResultScreen.tsx` | 役・得点・作れた言葉を表示 |
| 最終結果 | `FinalResultScreen.tsx` | 全ラウンド合計、統計表示 |
| ヘルプ | `HelpScreen.tsx` | ルール説明 |

### 画面遷移フロー

```
main.tsx (エントリーポイント)
    │
    ▼
App.tsx (画面状態管理)
    │
    ├── TitleScreen
    │       │ onStart()
    │       ▼
    ├── GameScreen (ラウンド1〜4)
    │       │ onJudge()
    │       ▼
    ├── JudgingScreen
    │       │ onJudgeComplete()
    │       ▼
    ├── RoundResultScreen
    │       │ onNextRound() or onGameEnd()
    │       ▼
    ├── FinalResultScreen
    │       │ onPlayAgain() / onBackToTitle()
    │       ▼
    └── TitleScreen
```

### GameScreen UI設計

```
┌──────────────────────────────────┐
│  ラウンド 1/4        合計: 0点   │
│  山札: 42枚                      │
├──────────────────────────────────┤
│                                  │
│    ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
│    │ さ │ │ く │ │ ら │ │ は │ │ な │
│    └────┘ └────┘ └────┘ └────┘ └────┘
│      ☑      □      □      ☑      □
│                                  │
│   「交換するカードを選んでください」│
│                                  │
├──────────────────────────────────┤
│  [チェンジする]  [このままで勝負]  │
│                                  │
│  ※チェンジは1回だけです          │
└──────────────────────────────────┘
```

### RoundResultScreen UI設計

```
┌──────────────────────────────────┐
│         ラウンド1 結果           │
├──────────────────────────────────┤
│                                  │
│          フルハウス！            │
│            +5点                  │
│                                  │
│   ┌─────────────────────────┐    │
│   │  さくら (桜)            │    │
│   │  はな (花)              │    │
│   └─────────────────────────┘    │
│                                  │
│        合計: 5点                 │
│                                  │
├──────────────────────────────────┤
│         [次のラウンドへ]         │
└──────────────────────────────────┘
```

---

## 8. ファイル構成

```
src/
├── components/
│   ├── TitleScreen.tsx         # タイトル画面
│   ├── TitleScreen.module.css
│   ├── GameScreen.tsx          # ゲーム画面
│   ├── GameScreen.module.css
│   ├── JudgingScreen.tsx       # 判定中画面
│   ├── JudgingScreen.module.css
│   ├── RoundResultScreen.tsx   # ラウンド結果画面
│   ├── RoundResultScreen.module.css
│   ├── FinalResultScreen.tsx   # 最終結果画面
│   ├── FinalResultScreen.module.css
│   ├── HelpScreen.tsx          # ヘルプ画面
│   └── HelpScreen.module.css
├── hooks/
│   └── useGame.ts              # ゲームロジック
├── services/
│   └── ociGenai.ts             # OCI GenAI API連携
├── data/
│   └── hiragana.ts             # ひらがな47文字
├── App.tsx                     # 画面遷移・状態管理
├── types.ts                    # 型定義
├── index.css                   # グローバルスタイル
└── main.tsx                    # エントリーポイント

public/
└── (静的ファイル)

.env                            # OCI GenAI認証情報（gitignore対象）
```

---

## 9. 型定義

```typescript
// カード
interface Card {
  id: number
  character: string  // ひらがな1文字
}

// 役の種類
type HandType =
  | 'five_card'    // 5カード
  | 'full_house'   // フルハウス
  | 'four_card'    // 4カード
  | 'three_card'   // 3カード
  | 'two_pair'     // 2ペア
  | 'one_pair'     // 1ペア
  | 'bust'         // ブタ

// 役の得点マッピング
const HAND_SCORES: Record<HandType, number> = {
  five_card: 6,
  full_house: 5,
  four_card: 4,
  three_card: 3,
  two_pair: 2,
  one_pair: 1,
  bust: 0,
}

// 判定結果の言葉
interface WordResult {
  word: string
  meaning?: string
  length: number
}

// ラウンド結果
interface RoundResult {
  round: number
  hand: Card[]
  handType: HandType
  score: number
  words: WordResult[]
  explanation: string
}

// ゲーム全体の状態
interface GameState {
  currentRound: number        // 現在のラウンド (1-4)
  totalScore: number          // 合計得点
  deck: Card[]                // 山札
  hand: Card[]                // 現在の手札
  selectedForChange: Card[]   // 交換選択中のカード
  hasChanged: boolean         // このラウンドでチェンジ済みか
  roundResults: RoundResult[] // 各ラウンドの結果
}

// ゲーム結果
interface GameResult {
  totalScore: number
  roundResults: RoundResult[]
  bestRound: RoundResult | null
}
```

---

## 10. useGame Hook 設計

```typescript
interface UseGameReturn {
  // 状態
  gameState: GameState
  isLoading: boolean          // API判定中

  // アクション
  startGame: () => void                    // ゲーム開始
  selectCardForChange: (card: Card) => void // 交換カード選択
  executeChange: () => void                 // チェンジ実行
  judge: () => Promise<void>               // 勝負（API呼び出し）
  nextRound: () => void                    // 次のラウンドへ
  endGame: () => GameResult                // ゲーム終了
}

function useGame(): UseGameReturn {
  // 実装
}
```

---

## 11. UI/UX仕様

### モバイル最適化（iPhone Safari対応）

```css
/* index.css */
html, body {
  min-height: 100dvh;
  overscroll-behavior: none;
  -webkit-tap-highlight-color: transparent;
}

#root {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

### 視覚的フィードバック

| 状態 | 表現 |
|------|------|
| カード通常 | 白背景、黒文字 |
| 交換選択中 | 青枠 + 半透明オーバーレイ |
| チェンジ済み | 新しいカードは軽くハイライト |
| 判定中 | ローディングアニメーション |
| 役成立 | 役名を大きく表示 + 得点アニメーション |

### カードデザイン

```
┌────────┐
│        │
│   あ   │  ← 大きなひらがな（中央配置）
│        │
└────────┘
```

---

## 12. OCI GenAI 設定

### 必要な環境変数

```env
# .env
VITE_OCI_GENAI_ENDPOINT=https://xxx.xxx.oraclecloud.com
VITE_OCI_GENAI_COMPARTMENT_ID=ocid1.compartment.xxx
VITE_OCI_GENAI_MODEL_ID=xxx
```

### 認証方式

- Cloudflare Workers/Functions経由でAPIキーを隠蔽
- または、OCI API Gateway + 認証トークン方式

---

## 13. デプロイ

### Cloudflare Pages設定

| 項目 | 値 |
|------|-----|
| Build command | `npm run build` |
| Build output directory | `dist` |
| 環境変数 | OCI GenAI認証情報 |

### 開発コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run preview  # ビルド結果プレビュー
```

---

## 14. 実装優先順位

### Phase 1: 基本機能
1. プロジェクトセットアップ（Vite + React + TypeScript）
2. ひらがなデータ作成
3. タイトル画面
4. ゲーム画面（手札表示、カード選択）
5. カードチェンジ機能

### Phase 2: 判定機能
6. OCI GenAI連携（サービス層）
7. 判定中画面
8. ラウンド結果画面
9. 複数ラウンド対応

### Phase 3: 完成
10. 最終結果画面
11. ヘルプ画面
12. UIブラッシュアップ
13. モバイル最適化
14. デプロイ

---

## 15. 用語集

### ゲーム用語

| 用語 | 説明 |
|------|------|
| **手札 (hand)** | プレイヤーが持っている5枚のカード |
| **山札 (deck)** | まだ配られていない残りのカード |
| **カードチェンジ** | 手札の一部を新しいカードと交換すること |
| **役 (hand type)** | 手札から作れた言葉の組み合わせパターン |
| **ラウンド** | 1回のゲームプレイ単位（配布→チェンジ→判定） |

### 技術用語

| 用語 | 説明 |
|------|------|
| **OCI GenAI** | Oracle Cloud Infrastructure の生成AIサービス |
| **CSS Modules** | CSSのクラス名がファイルごとにユニークになる仕組み |
| **カスタムフック** | Reactで独自に作成する状態管理ロジック |
| **100dvh** | Dynamic Viewport Height。モバイルブラウザ対応の高さ単位 |
