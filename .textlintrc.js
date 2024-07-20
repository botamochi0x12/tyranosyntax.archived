module.exports = {
  "plugins": {
    "@textlint/textlint-plugin-text": true
  },
  "filters": {},
  "rules": {
    "general-novel-style-ja": {
      // 各段落の先頭に許可する文字 (false: チェックしない)
      "chars_leading_paragraph": false,
      // 閉じ括弧の手前に句読点(。、)を置かない
      "no_punctuation_at_closing_quote": true,
      // 疑問符(？)と感嘆符(！)の直後にスペースを置く
      "space_after_marks": true,
      // 連続した三点リーダー(…)の数は偶数にする
      "even_number_ellipsises": true,
      // 連続したダッシュ(―)の数は偶数にする
      "even_number_dashes": true,
      // 連続した句読点(。、)を許可しない
      "appropriate_use_of_punctuation": true,
      // 連続した中黒(・)を許可しない
      "appropriate_use_of_interpunct": true,
      // 連続した長音符(ー)を許可しない
      "appropriate_use_of_choonpu": true,
      // マイナス記号(−)は数字の前にしか許可しない
      "appropriate_use_of_minus_sign": true,
      // アラビア数字の桁数は2桁まで (false: チェックしない)
      "max_arabic_numeral_digits": 2
    }
  }
}
