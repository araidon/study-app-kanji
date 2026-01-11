// 80文字の漢字のみで構成される熟語のCSVを生成
import { FIRST_GRADE_KANJI } from '../src/data/kanji'
import { JUKUGO_DATABASE } from './jukugo-database'

// 80文字セット
const kanjiSet = new Set(FIRST_GRADE_KANJI)

// 80文字の組み合わせのみをフィルタリング
const validJukugo = JUKUGO_DATABASE.filter(entry => {
  if (entry.word.length !== 2) return false
  const chars = entry.word.split('')
  return chars.every(char => kanjiSet.has(char as typeof FIRST_GRADE_KANJI[number]))
})

// データベースをMapに変換
const jukugoMap = new Map<string, { meaning: string; type: string }>()
for (const entry of validJukugo) {
  jukugoMap.set(entry.word, { meaning: entry.meaning, type: entry.type })
}

// CSVヘッダー
console.log('熟語,意味,ジャンル')

// 80×79の全組み合わせを生成
for (const kanji1 of FIRST_GRADE_KANJI) {
  for (const kanji2 of FIRST_GRADE_KANJI) {
    if (kanji1 === kanji2) continue

    const word = kanji1 + kanji2
    const entry = jukugoMap.get(word)

    if (entry) {
      console.log(`${word},${entry.meaning},${entry.type}`)
    } else {
      console.log(`${word},意味なし,none`)
    }
  }
}
