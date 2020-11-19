/**
 * 通过空格分割字符串取最后一个不为空的字符
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function(s) {
  if (!s) {
      return 0
  }
  let arr = s.split(/\s+/g).filter(str => !!str)
  return arr.length && arr.pop().length
};


/**
 * 从后往前循环取第一个不为空的字符串
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) {
      return 0
  }
  let len = s.length - 1
  let strLen = 0
  while (len >= 0 && s[len] === ' ') {
      len--
  }
  while (len >= 0 && s[len] !== ' ') {
      len--
      strLen++
  }
  return strLen
};