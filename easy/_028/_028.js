/**
 * indexOf
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function(haystack, needle) {
  if (!needle) {
      return 0
  }
  return haystack.indexOf(needle)
};

/**
 * 滑动窗口
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {
  if (!needle) {
      return 0
  }
  let i = 0
  let j = needle.length
  let len = haystack.length
  for (let k = 0; k < len, j <= len; k++) {
      if (haystack.slice(i, j) === needle) {
          return i
      }
      i++
      j++
  }
  return -1
};

/**
 * 先在haystack找到第一个匹配的字符，随后开始匹配其它所有字符
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
        if (j === needle.length) {
            return i
        }
        if (i + j === haystack.length) {
            return -1
        }
        if (needle[j] !== haystack[i + j]) {
            break
        }
    }
  }
};