// 80×79の全組み合わせを生成し、調査済みデータを反映したCSVを作成
import { FIRST_GRADE_KANJI } from '../src/data/kanji'
import { JUKUGO_DATABASE } from './jukugo-database'

// データベースをMapに変換
const jukugoMap = new Map<string, { meaning: string; type: string }>()
for (const entry of JUKUGO_DATABASE) {
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
