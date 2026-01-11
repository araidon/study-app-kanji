import type { Jukugo } from '../types'

// 小学1年生の漢字80字で作れる熟語リスト
// 80字: 一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六

export const JUKUGO_LIST: Jukugo[] = [
  // ========== 一 ==========
  { word: '一人', type: 'number', meaning: 'ひとり' },
  { word: '一日', type: 'number', meaning: 'ついたち、いちにち' },
  { word: '一月', type: 'number', meaning: 'いちがつ' },
  { word: '一年', type: 'number', meaning: 'いちねん' },
  { word: '一本', type: 'number', meaning: 'いっぽん' },
  { word: '一円', type: 'number', meaning: 'いちえん' },
  { word: '一生', type: 'number', meaning: 'いっしょう' },
  { word: '一口', type: 'number', meaning: 'ひとくち' },
  { word: '一手', type: 'number', meaning: 'ひとて' },
  { word: '一目', type: 'number', meaning: 'ひとめ' },
  { word: '一文', type: 'number', meaning: 'いちもん' },
  { word: '一休', type: 'general', meaning: 'ひとやすみ' },

  // ========== 右 ==========
  { word: '右手', type: 'general', meaning: 'みぎて' },
  { word: '右足', type: 'general', meaning: 'みぎあし' },
  { word: '右目', type: 'general', meaning: 'みぎめ' },
  { word: '右耳', type: 'general', meaning: 'みぎみみ' },

  // ========== 雨 ==========
  { word: '雨天', type: 'general', meaning: 'あめの日' },
  { word: '雨水', type: 'general', meaning: 'あまみず' },
  { word: '雨音', type: 'general', meaning: 'あまおと' },

  // ========== 円 ==========
  { word: '円玉', type: 'general', meaning: 'えんだま' },

  // ========== 王 ==========
  { word: '王子', type: 'general', meaning: 'おうじ' },
  { word: '王女', type: 'general', meaning: 'おうじょ' },
  { word: '王手', type: 'general', meaning: 'おうて（しょうぎ）' },
  { word: '王金', type: 'general', meaning: 'おうごん' },

  // ========== 音 ==========

  // ========== 下 ==========
  { word: '下山', type: 'general', meaning: '山をおりる' },
  { word: '下水', type: 'general', meaning: 'げすい' },
  { word: '下手', type: 'general', meaning: 'へた' },
  { word: '下車', type: 'general', meaning: '車をおりる' },
  { word: '下校', type: 'general', meaning: '学校からかえる' },
  { word: '下足', type: 'general', meaning: 'げそく（くつ）' },
  { word: '下火', type: 'general', meaning: 'おとろえること' },

  // ========== 火 ==========
  { word: '火山', type: 'general', meaning: 'かざん' },
  { word: '火力', type: 'general', meaning: 'かりょく' },
  { word: '火気', type: 'general', meaning: 'ひやねつ' },
  { word: '火花', type: 'general', meaning: 'ひばな' },
  { word: '火口', type: 'general', meaning: 'かこう' },
  { word: '火中', type: 'general', meaning: 'ひのなか' },
  { word: '火田', type: 'general', meaning: 'やきばた' },

  // ========== 花 ==========
  { word: '花火', type: 'general', meaning: 'はなび' },
  { word: '花見', type: 'general', meaning: 'はなみ' },
  { word: '花木', type: 'general', meaning: 'かぼく' },
  { word: '花田', type: 'surname', meaning: 'みょうじ' },
  { word: '花山', type: 'surname', meaning: 'みょうじ' },

  // ========== 貝 ==========

  // ========== 学 ==========
  { word: '学生', type: 'general', meaning: 'がくせい' },
  { word: '学校', type: 'general', meaning: 'がっこう' },
  { word: '学年', type: 'general', meaning: 'がくねん' },
  { word: '学力', type: 'general', meaning: 'がくりょく' },
  { word: '学名', type: 'general', meaning: 'がくめい' },

  // ========== 気 ==========
  { word: '気力', type: 'general', meaning: 'きりょく' },
  { word: '気休', type: 'general', meaning: 'きやすめ' },

  // ========== 九 ==========
  { word: '九人', type: 'number', meaning: 'きゅうにん' },
  { word: '九日', type: 'number', meaning: 'ここのか' },
  { word: '九月', type: 'number', meaning: 'くがつ' },
  { word: '九十', type: 'number', meaning: 'きゅうじゅう' },

  // ========== 休 ==========
  { word: '休日', type: 'general', meaning: 'やすみの日' },
  { word: '休火', type: 'general', meaning: 'きゅうか' },
  { word: '休校', type: 'general', meaning: '学校がやすみ' },

  // ========== 玉 ==========
  { word: '玉石', type: 'general', meaning: 'たまいし' },
  { word: '玉入', type: 'general', meaning: 'たまいれ' },
  { word: '玉川', type: 'surname', meaning: 'みょうじ' },
  { word: '玉田', type: 'surname', meaning: 'みょうじ' },
  { word: '玉木', type: 'surname', meaning: 'みょうじ' },

  // ========== 金 ==========
  { word: '金玉', type: 'general', meaning: 'きんぎょく' },
  { word: '金田', type: 'surname', meaning: 'みょうじ' },
  { word: '金山', type: 'surname', meaning: 'みょうじ' },
  { word: '金子', type: 'surname', meaning: 'みょうじ' },
  { word: '金森', type: 'surname', meaning: 'みょうじ' },
  { word: '金本', type: 'surname', meaning: 'みょうじ' },

  // ========== 空 ==========
  { word: '空気', type: 'general', meaning: 'くうき' },
  { word: '空中', type: 'general', meaning: 'くうちゅう' },
  { word: '空車', type: 'general', meaning: 'くうしゃ' },
  { word: '空白', type: 'general', meaning: 'くうはく' },

  // ========== 月 ==========
  { word: '月日', type: 'general', meaning: 'つきひ' },
  { word: '月見', type: 'general', meaning: 'つきみ' },
  { word: '月火', type: 'general', meaning: '月曜と火曜' },
  { word: '月金', type: 'general', meaning: '月曜と金曜' },
  { word: '月田', type: 'surname', meaning: 'みょうじ' },

  // ========== 犬 ==========

  // ========== 見 ==========
  { word: '見学', type: 'general', meaning: 'けんがく' },
  { word: '見本', type: 'general', meaning: 'みほん' },
  { word: '見出', type: 'general', meaning: 'みだし' },

  // ========== 五 ==========
  { word: '五人', type: 'number', meaning: 'ごにん' },
  { word: '五日', type: 'number', meaning: 'いつか' },
  { word: '五月', type: 'number', meaning: 'ごがつ' },
  { word: '五本', type: 'number', meaning: 'ごほん' },
  { word: '五円', type: 'number', meaning: 'ごえん' },
  { word: '五十', type: 'number', meaning: 'ごじゅう' },
  { word: '五木', type: 'surname', meaning: 'みょうじ' },

  // ========== 口 ==========
  { word: '口車', type: 'general', meaning: 'くちぐるま' },
  { word: '口火', type: 'general', meaning: 'くちび' },

  // ========== 校 ==========
  { word: '校正', type: 'general', meaning: 'こうせい' },

  // ========== 左 ==========
  { word: '左手', type: 'general', meaning: 'ひだりて' },
  { word: '左足', type: 'general', meaning: 'ひだりあし' },
  { word: '左目', type: 'general', meaning: 'ひだりめ' },
  { word: '左耳', type: 'general', meaning: 'ひだりみみ' },
  { word: '左右', type: 'general', meaning: 'さゆう', reverse: '右左' },

  // ========== 三 ==========
  { word: '三人', type: 'number', meaning: 'さんにん' },
  { word: '三日', type: 'number', meaning: 'みっか' },
  { word: '三月', type: 'number', meaning: 'さんがつ' },
  { word: '三本', type: 'number', meaning: 'さんぼん' },
  { word: '三十', type: 'number', meaning: 'さんじゅう' },
  { word: '三木', type: 'surname', meaning: 'みょうじ' },

  // ========== 山 ==========
  { word: '山火', type: 'general', meaning: 'やまび' },
  { word: '山林', type: 'general', meaning: 'さんりん' },
  { word: '山川', type: 'general', meaning: 'やまかわ' },
  { word: '山中', type: 'general', meaning: 'さんちゅう' },
  { word: '山村', type: 'general', meaning: 'さんそん' },
  { word: '山口', type: 'surname', meaning: 'みょうじ' },
  { word: '山田', type: 'surname', meaning: 'みょうじ' },
  { word: '山本', type: 'surname', meaning: 'みょうじ' },
  { word: '山上', type: 'surname', meaning: 'みょうじ' },
  { word: '山下', type: 'surname', meaning: 'みょうじ' },

  // ========== 子 ==========
  { word: '子犬', type: 'general', meaning: 'こいぬ' },
  { word: '子女', type: 'general', meaning: 'しじょ' },

  // ========== 四 ==========
  { word: '四人', type: 'number', meaning: 'よにん' },
  { word: '四日', type: 'number', meaning: 'よっか' },
  { word: '四月', type: 'number', meaning: 'しがつ' },
  { word: '四本', type: 'number', meaning: 'よんほん' },
  { word: '四十', type: 'number', meaning: 'よんじゅう' },

  // ========== 糸 ==========
  { word: '糸口', type: 'general', meaning: 'いとぐち' },
  { word: '糸目', type: 'general', meaning: 'いとめ' },

  // ========== 字 ==========
  { word: '字名', type: 'general', meaning: 'あざな' },

  // ========== 耳 ==========
  { word: '耳目', type: 'general', meaning: 'じもく' },

  // ========== 七 ==========
  { word: '七人', type: 'number', meaning: 'しちにん' },
  { word: '七日', type: 'number', meaning: 'なのか' },
  { word: '七月', type: 'number', meaning: 'しちがつ' },
  { word: '七十', type: 'number', meaning: 'ななじゅう' },

  // ========== 車 ==========
  { word: '車中', type: 'general', meaning: 'しゃちゅう' },

  // ========== 手 ==========
  { word: '手足', type: 'general', meaning: 'てあし' },
  { word: '手本', type: 'general', meaning: 'てほん' },
  { word: '手入', type: 'general', meaning: 'ていれ' },
  { word: '手先', type: 'general', meaning: 'てさき' },
  { word: '手下', type: 'general', meaning: 'てした' },
  { word: '手中', type: 'general', meaning: 'しゅちゅう' },

  // ========== 十 ==========
  { word: '十人', type: 'number', meaning: 'じゅうにん' },
  { word: '十日', type: 'number', meaning: 'とおか' },
  { word: '十月', type: 'number', meaning: 'じゅうがつ' },
  { word: '十本', type: 'number', meaning: 'じゅっぽん' },
  { word: '十円', type: 'number', meaning: 'じゅうえん' },
  { word: '十字', type: 'number', meaning: 'じゅうじ' },
  { word: '十中', type: 'general', meaning: 'じゅっちゅう' },

  // ========== 出 ==========
  { word: '出入', type: 'general', meaning: 'でいり', reverse: '入出' },
  { word: '出口', type: 'general', meaning: 'でぐち' },
  { word: '出火', type: 'general', meaning: 'しゅっか' },
  { word: '出生', type: 'general', meaning: 'しゅっせい' },
  { word: '出金', type: 'general', meaning: 'しゅっきん' },
  { word: '出力', type: 'general', meaning: 'しゅつりょく' },
  { word: '出目', type: 'general', meaning: 'でめ' },
  { word: '出足', type: 'general', meaning: 'であし' },

  // ========== 女 ==========
  { word: '女王', type: 'general', meaning: 'じょおう' },
  { word: '女子', type: 'general', meaning: 'じょし' },

  // ========== 小 ==========
  { word: '小人', type: 'general', meaning: 'しょうにん・こびと' },
  { word: '小石', type: 'general', meaning: 'こいし' },
  { word: '小川', type: 'surname', meaning: 'みょうじ' },
  { word: '小山', type: 'surname', meaning: 'みょうじ' },
  { word: '小林', type: 'surname', meaning: 'みょうじ' },
  { word: '小田', type: 'surname', meaning: 'みょうじ' },
  { word: '小雨', type: 'general', meaning: 'こさめ' },
  { word: '小学', type: 'general', meaning: 'しょうがく' },
  { word: '小休', type: 'general', meaning: 'しょうきゅう' },
  { word: '小金', type: 'general', meaning: 'こがね' },
  { word: '小犬', type: 'general', meaning: 'こいぬ' },
  { word: '小火', type: 'general', meaning: 'ぼや' },
  { word: '小手', type: 'general', meaning: 'こて' },
  { word: '小文', type: 'general', meaning: 'こもん' },
  { word: '小木', type: 'surname', meaning: 'みょうじ' },

  // ========== 上 ==========
  { word: '上下', type: 'general', meaning: 'じょうげ' },
  { word: '上手', type: 'general', meaning: 'じょうず' },
  { word: '上気', type: 'general', meaning: 'じょうき' },
  { word: '上田', type: 'surname', meaning: 'みょうじ' },
  { word: '上山', type: 'surname', meaning: 'みょうじ' },

  // ========== 森 ==========
  { word: '森林', type: 'general', meaning: 'しんりん' },
  { word: '森田', type: 'surname', meaning: 'みょうじ' },
  { word: '森山', type: 'surname', meaning: 'みょうじ' },
  { word: '森本', type: 'surname', meaning: 'みょうじ' },
  { word: '森川', type: 'surname', meaning: 'みょうじ' },
  { word: '森中', type: 'surname', meaning: 'みょうじ' },

  // ========== 人 ==========
  { word: '人口', type: 'general', meaning: 'じんこう' },
  { word: '人名', type: 'general', meaning: 'じんめい' },
  { word: '人力', type: 'general', meaning: 'じんりき' },
  { word: '人生', type: 'general', meaning: 'じんせい' },
  { word: '人目', type: 'general', meaning: 'ひとめ' },
  { word: '人気', type: 'general', meaning: 'にんき' },
  { word: '人手', type: 'general', meaning: 'ひとで' },

  // ========== 水 ==========
  { word: '水田', type: 'general', meaning: 'すいでん' },
  { word: '水中', type: 'general', meaning: 'すいちゅう' },
  { word: '水車', type: 'general', meaning: 'すいしゃ' },
  { word: '水力', type: 'general', meaning: 'すいりょく' },
  { word: '水気', type: 'general', meaning: 'みずけ' },
  { word: '水玉', type: 'general', meaning: 'みずたま' },
  { word: '水草', type: 'general', meaning: 'みずくさ' },
  { word: '水虫', type: 'general', meaning: 'みずむし' },
  { word: '水金', type: 'general', meaning: 'すいきん' },
  { word: '水口', type: 'surname', meaning: 'みょうじ' },
  { word: '水本', type: 'surname', meaning: 'みょうじ' },
  { word: '水川', type: 'surname', meaning: 'みょうじ' },

  // ========== 正 ==========
  { word: '正月', type: 'general', meaning: 'しょうがつ' },
  { word: '正気', type: 'general', meaning: 'しょうき' },
  { word: '正文', type: 'general', meaning: 'せいぶん' },
  { word: '正本', type: 'general', meaning: 'せいほん' },
  { word: '正目', type: 'general', meaning: 'まさめ' },
  { word: '正木', type: 'surname', meaning: 'みょうじ' },

  // ========== 生 ==========
  { word: '生年', type: 'general', meaning: 'せいねん' },
  { word: '生花', type: 'general', meaning: 'せいか・いけばな' },
  { word: '生気', type: 'general', meaning: 'せいき' },
  { word: '生水', type: 'general', meaning: 'なまみず' },
  { word: '生日', type: 'general', meaning: 'せいじつ' },
  { word: '生田', type: 'surname', meaning: 'みょうじ' },

  // ========== 青 ==========
  { word: '青年', type: 'general', meaning: 'せいねん' },
  { word: '青空', type: 'general', meaning: 'あおぞら' },
  { word: '青虫', type: 'general', meaning: 'あおむし' },
  { word: '青竹', type: 'general', meaning: 'あおだけ' },
  { word: '青草', type: 'general', meaning: 'あおくさ' },
  { word: '青山', type: 'surname', meaning: 'みょうじ' },
  { word: '青木', type: 'surname', meaning: 'みょうじ' },
  { word: '青田', type: 'surname', meaning: 'みょうじ' },

  // ========== 夕 ==========
  { word: '夕日', type: 'general', meaning: 'ゆうひ' },
  { word: '夕立', type: 'general', meaning: 'ゆうだち' },

  // ========== 石 ==========
  { word: '石田', type: 'surname', meaning: 'みょうじ' },
  { word: '石山', type: 'surname', meaning: 'みょうじ' },
  { word: '石川', type: 'surname', meaning: 'みょうじ' },

  // ========== 赤 ==========
  { word: '赤字', type: 'general', meaning: 'あかじ' },
  { word: '赤木', type: 'surname', meaning: 'みょうじ' },
  { word: '赤田', type: 'surname', meaning: 'みょうじ' },
  { word: '赤川', type: 'surname', meaning: 'みょうじ' },

  // ========== 千 ==========
  { word: '千円', type: 'number', meaning: 'せんえん' },
  { word: '千人', type: 'number', meaning: 'せんにん' },
  { word: '千本', type: 'number', meaning: 'せんぼん' },
  { word: '千年', type: 'number', meaning: 'せんねん' },
  { word: '千日', type: 'number', meaning: 'せんにち' },
  { word: '千田', type: 'surname', meaning: 'みょうじ' },

  // ========== 川 ==========
  { word: '川上', type: 'general', meaning: 'かわかみ' },
  { word: '川下', type: 'general', meaning: 'かわしも' },
  { word: '川中', type: 'general', meaning: 'かわなか' },
  { word: '川口', type: 'surname', meaning: 'みょうじ' },
  { word: '川田', type: 'surname', meaning: 'みょうじ' },

  // ========== 先 ==========
  { word: '先人', type: 'general', meaning: 'せんじん' },
  { word: '先手', type: 'general', meaning: 'せんて' },
  { word: '先月', type: 'general', meaning: 'せんげつ' },
  { word: '先日', type: 'general', meaning: 'せんじつ' },
  { word: '先生', type: 'general', meaning: 'せんせい' },
  { word: '先入', type: 'general', meaning: 'せんにゅう' },

  // ========== 早 ==========
  { word: '早口', type: 'general', meaning: 'はやくち' },
  { word: '早足', type: 'general', meaning: 'はやあし' },
  { word: '早川', type: 'surname', meaning: 'みょうじ' },

  // ========== 草 ==========
  { word: '草花', type: 'general', meaning: 'くさばな' },
  { word: '草木', type: 'general', meaning: 'くさき' },
  { word: '草虫', type: 'general', meaning: 'くさむし' },
  { word: '草田', type: 'surname', meaning: 'みょうじ' },
  { word: '草川', type: 'surname', meaning: 'みょうじ' },

  // ========== 足 ==========
  { word: '足音', type: 'general', meaning: 'あしおと' },
  { word: '足下', type: 'general', meaning: 'あしもと' },

  // ========== 村 ==========
  { word: '村人', type: 'general', meaning: 'むらびと' },
  { word: '村上', type: 'surname', meaning: 'みょうじ' },
  { word: '村田', type: 'surname', meaning: 'みょうじ' },
  { word: '村山', type: 'surname', meaning: 'みょうじ' },
  { word: '村中', type: 'surname', meaning: 'みょうじ' },

  // ========== 大 ==========
  { word: '大人', type: 'general', meaning: 'おとな' },
  { word: '大火', type: 'general', meaning: 'たいか' },
  { word: '大雨', type: 'general', meaning: 'おおあめ' },
  { word: '大木', type: 'general', meaning: 'たいぼく' },
  { word: '大金', type: 'general', meaning: 'たいきん' },
  { word: '大空', type: 'general', meaning: 'おおぞら' },
  { word: '大小', type: 'general', meaning: 'だいしょう' },
  { word: '大水', type: 'general', meaning: 'おおみず' },
  { word: '大石', type: 'general', meaning: 'おおいし' },
  { word: '大中', type: 'general', meaning: 'だいちゅう' },
  { word: '大学', type: 'general', meaning: 'だいがく' },
  { word: '大山', type: 'surname', meaning: 'みょうじ' },
  { word: '大田', type: 'surname', meaning: 'みょうじ' },
  { word: '大川', type: 'surname', meaning: 'みょうじ' },
  { word: '大林', type: 'surname', meaning: 'みょうじ' },
  { word: '大森', type: 'surname', meaning: 'みょうじ' },
  { word: '大口', type: 'general', meaning: 'おおぐち' },

  // ========== 男 ==========
  { word: '男子', type: 'general', meaning: 'だんし' },
  { word: '男女', type: 'general', meaning: 'だんじょ' },

  // ========== 竹 ==========
  { word: '竹林', type: 'general', meaning: 'ちくりん' },
  { word: '竹中', type: 'surname', meaning: 'みょうじ' },
  { word: '竹田', type: 'surname', meaning: 'みょうじ' },
  { word: '竹本', type: 'surname', meaning: 'みょうじ' },
  { word: '竹村', type: 'surname', meaning: 'みょうじ' },
  { word: '竹山', type: 'surname', meaning: 'みょうじ' },

  // ========== 中 ==========
  { word: '中火', type: 'general', meaning: 'ちゅうび' },
  { word: '中学', type: 'general', meaning: 'ちゅうがく' },
  { word: '中年', type: 'general', meaning: 'ちゅうねん' },
  { word: '中村', type: 'surname', meaning: 'みょうじ' },
  { word: '中山', type: 'surname', meaning: 'みょうじ' },
  { word: '中田', type: 'surname', meaning: 'みょうじ' },
  { word: '中川', type: 'surname', meaning: 'みょうじ' },
  { word: '中日', type: 'general', meaning: 'ちゅうにち' },

  // ========== 虫 ==========
  { word: '虫目', type: 'general', meaning: 'むしめ' },

  // ========== 町 ==========
  { word: '町中', type: 'general', meaning: 'まちなか' },
  { word: '町人', type: 'general', meaning: 'ちょうにん' },
  { word: '町田', type: 'surname', meaning: 'みょうじ' },

  // ========== 天 ==========
  { word: '天下', type: 'general', meaning: 'てんか' },
  { word: '天上', type: 'general', meaning: 'てんじょう' },
  { word: '天女', type: 'general', meaning: 'てんにょ' },
  { word: '天王', type: 'general', meaning: 'てんのう' },
  { word: '天気', type: 'general', meaning: 'てんき' },
  { word: '天空', type: 'general', meaning: 'てんくう' },
  { word: '天日', type: 'general', meaning: 'てんぴ' },
  { word: '天文', type: 'general', meaning: 'てんもん' },
  { word: '天田', type: 'surname', meaning: 'みょうじ' },
  { word: '天川', type: 'surname', meaning: 'みょうじ' },

  // ========== 田 ==========
  { word: '田中', type: 'surname', meaning: 'みょうじ' },
  { word: '田村', type: 'surname', meaning: 'みょうじ' },
  { word: '田口', type: 'surname', meaning: 'みょうじ' },

  // ========== 土 ==========
  { word: '土中', type: 'general', meaning: 'どちゅう' },
  { word: '土手', type: 'general', meaning: 'どて' },
  { word: '土日', type: 'general', meaning: 'どにち' },
  { word: '土木', type: 'general', meaning: 'どぼく' },
  { word: '土田', type: 'surname', meaning: 'みょうじ' },
  { word: '土山', type: 'surname', meaning: 'みょうじ' },
  { word: '土川', type: 'surname', meaning: 'みょうじ' },

  // ========== 二 ==========
  { word: '二人', type: 'number', meaning: 'ふたり' },
  { word: '二日', type: 'number', meaning: 'ふつか' },
  { word: '二月', type: 'number', meaning: 'にがつ' },
  { word: '二本', type: 'number', meaning: 'にほん' },
  { word: '二十', type: 'number', meaning: 'にじゅう' },

  // ========== 日 ==========
  { word: '日中', type: 'general', meaning: 'にっちゅう' },
  { word: '日本', type: 'general', meaning: 'にほん・にっぽん' },
  { word: '日出', type: 'general', meaning: 'にっしゅつ' },
  { word: '日入', type: 'general', meaning: 'にちにゅう' },
  { word: '日田', type: 'surname', meaning: 'みょうじ' },
  { word: '日下', type: 'surname', meaning: 'みょうじ' },
  { word: '日山', type: 'surname', meaning: 'みょうじ' },

  // ========== 入 ==========
  { word: '入口', type: 'general', meaning: 'いりぐち' },
  { word: '入学', type: 'general', meaning: 'にゅうがく' },
  { word: '入金', type: 'general', meaning: 'にゅうきん' },
  { word: '入手', type: 'general', meaning: 'にゅうしゅ' },
  { word: '入水', type: 'general', meaning: 'にゅうすい' },
  { word: '入力', type: 'general', meaning: 'にゅうりょく' },

  // ========== 年 ==========
  { word: '年中', type: 'general', meaning: 'ねんじゅう' },
  { word: '年月', type: 'general', meaning: 'ねんげつ' },
  { word: '年金', type: 'general', meaning: 'ねんきん' },

  // ========== 白 ==========
  { word: '白人', type: 'general', meaning: 'はくじん' },
  { word: '白金', type: 'general', meaning: 'はっきん' },
  { word: '白玉', type: 'general', meaning: 'しらたま' },
  { word: '白目', type: 'general', meaning: 'しろめ' },
  { word: '白糸', type: 'general', meaning: 'しらいと' },
  { word: '白石', type: 'surname', meaning: 'みょうじ' },
  { word: '白川', type: 'surname', meaning: 'みょうじ' },
  { word: '白木', type: 'surname', meaning: 'みょうじ' },
  { word: '白田', type: 'surname', meaning: 'みょうじ' },

  // ========== 八 ==========
  { word: '八人', type: 'number', meaning: 'はちにん' },
  { word: '八日', type: 'number', meaning: 'ようか' },
  { word: '八月', type: 'number', meaning: 'はちがつ' },
  { word: '八本', type: 'number', meaning: 'はっぽん' },
  { word: '八十', type: 'number', meaning: 'はちじゅう' },
  { word: '八木', type: 'surname', meaning: 'みょうじ' },

  // ========== 百 ==========
  { word: '百円', type: 'number', meaning: 'ひゃくえん' },
  { word: '百人', type: 'number', meaning: 'ひゃくにん' },
  { word: '百年', type: 'number', meaning: 'ひゃくねん' },
  { word: '百日', type: 'number', meaning: 'ひゃくにち' },
  { word: '百本', type: 'number', meaning: 'ひゃっぽん' },

  // ========== 文 ==========
  { word: '文中', type: 'general', meaning: 'ぶんちゅう' },
  { word: '文字', type: 'general', meaning: 'もじ' },

  // ========== 木 ==========
  { word: '木立', type: 'general', meaning: 'こだち' },
  { word: '木目', type: 'general', meaning: 'もくめ' },
  { word: '木石', type: 'general', meaning: 'ぼくせき' },
  { word: '木下', type: 'surname', meaning: 'みょうじ' },
  { word: '木村', type: 'surname', meaning: 'みょうじ' },
  { word: '木田', type: 'surname', meaning: 'みょうじ' },
  { word: '木山', type: 'surname', meaning: 'みょうじ' },

  // ========== 本 ==========
  { word: '本人', type: 'general', meaning: 'ほんにん' },
  { word: '本名', type: 'general', meaning: 'ほんみょう' },
  { word: '本日', type: 'general', meaning: 'ほんじつ' },
  { word: '本文', type: 'general', meaning: 'ほんぶん' },
  { word: '本気', type: 'general', meaning: 'ほんき' },
  { word: '本田', type: 'surname', meaning: 'みょうじ' },
  { word: '本山', type: 'surname', meaning: 'みょうじ' },

  // ========== 名 ==========
  { word: '名人', type: 'general', meaning: 'めいじん' },
  { word: '名字', type: 'general', meaning: 'みょうじ' },
  { word: '名月', type: 'general', meaning: 'めいげつ' },
  { word: '名目', type: 'general', meaning: 'めいもく' },
  { word: '名文', type: 'general', meaning: 'めいぶん' },

  // ========== 目 ==========
  { word: '目上', type: 'general', meaning: 'めうえ' },
  { word: '目下', type: 'general', meaning: 'めした' },
  { word: '目玉', type: 'general', meaning: 'めだま' },
  { word: '目立', type: 'general', meaning: 'めだつ' },

  // ========== 立 ==========
  { word: '立入', type: 'general', meaning: 'たちいり' },

  // ========== 力 ==========

  // ========== 林 ==========
  { word: '林中', type: 'general', meaning: 'りんちゅう' },
  { word: '林田', type: 'surname', meaning: 'みょうじ' },
  { word: '林本', type: 'surname', meaning: 'みょうじ' },
  { word: '林山', type: 'surname', meaning: 'みょうじ' },

  // ========== 六 ==========
  { word: '六人', type: 'number', meaning: 'ろくにん' },
  { word: '六日', type: 'number', meaning: 'むいか' },
  { word: '六月', type: 'number', meaning: 'ろくがつ' },
  { word: '六本', type: 'number', meaning: 'ろっぽん' },
  { word: '六十', type: 'number', meaning: 'ろくじゅう' },
]

// 熟語を検索するためのマップを作成
export const JUKUGO_MAP = new Map<string, Jukugo>()
JUKUGO_LIST.forEach(jukugo => {
  JUKUGO_MAP.set(jukugo.word, jukugo)
})
