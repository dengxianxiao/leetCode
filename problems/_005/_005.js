/**
 *
 * 动态规划
 * 时间复杂度O(n²)
 * 空间复杂度O(n²)
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
      dp[i] = new Array(n)
  }
  let res = ''
  for (let i = n - 1; i >= 0; i--) {
      for (let j = i; j < n; j++) {
          dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])
          if (dp[i][j] && j - i + 1 > res.length) {
              res = s.substring(i, j + 1)
          }
      }
  }
  return res
};

/**
 *
 * 中心拓展法
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length
  if (n <= 1) {
      return s
  }
  const expandPalindrome = (s, left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          left--
          right++
      }
      return s.substring(left + 1, right)
  }
  let max = ''
  for (let i = 0; i < n; i++) {
      // 回文为奇数个
      const s1 = expandPalindrome(s, i, i)
      // 回文为偶数个
      const s2 = expandPalindrome(s, i, i + 1)
      if (s1.length > max.length) {
          max = s1
      }
      if (s2.length > max.length) {
          max = s2
      }
  }
  return max
};
