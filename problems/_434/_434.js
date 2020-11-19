/**
 * 434. 字符串中的单词数
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  if (!s) return 0
  s = s.trim()
  if (s === '') return 0
  return s.split(/\s+/g).length
};

/**
 * @param {string} s
 * @return {number}
 */
var countSegments2 = function(s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
      if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
          count++
      }
  }
  return count
};
