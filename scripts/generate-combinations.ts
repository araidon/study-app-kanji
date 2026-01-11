// 80×79の全組み合わせを生成し、既存の熟語情報を含むCSVを作成
import { FIRST_GRADE_KANJI } from '../src/data/kanji'
import { JUKUGO_MAP } from '../src/data/jukugo'

// CSVヘッダー
console.log('熟語,意味,ジャンル')

// 80×79の全組み合わせを生成
for (const kanji1 of FIRST_GRADE_KANJI) {
  for (const kanji2 of FIRST_GRADE_KANJI) {
    if (kanji1 === kanji2) continue // 同じ漢字の組み合わせはスキップ

    const word = kanji1 + kanji2
    const existing = JUKUGO_MAP.get(word)

    if (existing) {
      console.log(`${word},${existing.meaning},${existing.type}`)
    } else {
      console.log(`${word},未調査,未調査`)
    }
  }
}
