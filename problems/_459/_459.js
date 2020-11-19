/**
 * 459. 重复的子字符串
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let len = s.length
  if (len <= 1) {
      return false
  }
  for (let i = 0; i < len / 2; i++) {
      // 从第一位开始要到第一个符合的子字符串
      if (len % (i + 1) === 0) {
          let str = s.slice(0, i + 1)
          let n = len / (i + 1)
          let newStr = ''
          while (n > 0) {
              newStr += str
              n--
          }
          if (newStr === s) {
              return true
          }
      }
  }
  return false
};
