/**
 * 482. 密钥格式化
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let str = S.replace(/-/g, '')
  let sLen = str.length
  let remainder = sLen % K
  let i = 0
  let result = ''
  if (remainder !== 0) {
      result += str.slice(0, remainder)
      result += '-'
      i += remainder
  }
  while (i <= sLen) {
      result += str.slice(i, i + K)
      result += '-'
      i += K
  }
  // 去掉最后一个-
  return result.slice(0, result.length - 2).toUpperCase()
};
