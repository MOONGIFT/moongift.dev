/**
 * テキストをURL用のスラグ形式に変換します
 * 
 * @param {string} text - スラグ化する元のテキスト
 * @returns {string} URL用に最適化されたスラグ文字列
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // アクセントやダイアクリティカルマークを除去
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // 英数字・スペース・ハイフン以外をスペースに置換
    .replace(/[^a-z0-9\s-]/g, ' ')
    // 複数のスペース／ハイフンを単一のハイフンに
    .replace(/[\s-]+/g, '-')
    // 先頭・末尾のハイフンを除去
    .replace(/^-+|-+$/g, '');
}