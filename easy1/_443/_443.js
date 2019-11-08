/**
 * 443. 压缩字符串
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let count = 1
  let i
  for (i = 1; i < chars.length; i++) {
      if (chars[i] === chars[i - 1]) {
          count++
          chars.splice(i, 1)
          i--
      } else {
          if (count > 1) {
              let arr = (count + '').split('')
              chars.splice(i, 0, ...arr)
              count = 1
              i += arr.length
          }
      }
  }
  if (count > 1) {
      let arr = (count + '').split('')
      chars.splice(i, 0, ...arr)
  }
  return chars.length
};


/**
 * 双指针法
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let anchor = 0
  let write = 0
  for (let i = 0; i < chars.length; i++) {
      if (i + 1 === chars.length || chars[i + 1] !== chars[i]) {
          chars[write++] = chars[anchor]
          if (i > anchor) {
              for (c of (i - anchor + 1 + '').split('')) {
                  chars[write++] = c
              }
          }
          anchor = i + 1
      }
  }
  return write
};
