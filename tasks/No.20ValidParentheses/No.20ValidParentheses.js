/**
 * 使用栈存储括号，当出现左括号是放入，右括号时取出
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = []
  let obj = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
      if (Object.keys(obj).indexOf(s[i]) !== -1) {
          arr.unshift(s[i])
      } else {
          let str = arr.shift()
          if (obj[str] !== s[i]) {
              return false
          }
      }
  }
  return arr.length === 0
};

/**
 * 使用栈存储括号，当出现左括号是放入右括号，出现右括号时取出匹配
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = []
  let obj = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
      if (Object.keys(obj).indexOf(s[i]) !== -1) {
          arr.unshift(obj[s[i]])
      } else if (arr.shift() !== s[i]) {
          return false
      }
  }
  return arr.length === 0
};