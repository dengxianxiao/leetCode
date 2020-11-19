/**
 * 409. 最长回文串
 * 使用obj
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let obj = {}
  for (t of s) {
      if (obj[t]) {
          obj[t]++
      } else {
          obj[t] = 1
      }
  }
  len = 0
  for (t in obj) {
      len += parseInt(obj[t] / 2) * 2
      if (obj[t] % 2 === 1 && len % 2 === 0) {
          len++
      }
  }
  return len
};

/**
 * 使用set
 * @param {string} s
 * @return {number}
 */
var longestPalindrome2 = function(s) {
  let set = new Set()
  let count = 0
  for (let t of s) {
      if (set.has(t)) {
          set.delete(t)
          count++
      } else {
          set.add(t)
      }
  }
  if (set.size > 0) {
      return count * 2 + 1
  }
  return count * 2
};
