/**
 * 500. 键盘行
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let row1 = 'qwertyuiopQWERTYUIOP'
  let row2 = 'asdfghjklASDFGHJKL'
  let row3 = 'zxcvbnmZXCVBNM'
  let result = []
  for (let i = 0; i < words.length; i++) {
      let j = 0
      let len = words[i].length
      let str = words[i][j]
      let row = row1
      if (row2.includes(str)) {
          row = row2
      } else if (row3.includes(str)) {
          row = row3
      }
      for (j = 1; j < len; j++) {
          str = words[i][j]
          if (row.indexOf(str) === -1) {
              break
          }
      }
      if (j >= len) {
          result.push(words[i])
      }
  }
  return result
};
