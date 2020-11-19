/**
 * 验证回文字符串
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) {
      return true
  }
  let regexp = /[^0-9a-zA-Z]/gi
  s = s.replace(regexp, '').toLowerCase()
  return s === s.split('').reverse().join('')
};
