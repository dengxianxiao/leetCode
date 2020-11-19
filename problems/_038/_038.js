/**
 * 连续相等的数字一起计数
 * 比如 5：111221 => [111, 22, 1]  => 31(three one)22(two two)11(one one)
 * 连续相等的数字为一组，读数字
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n < 1 || n > 30) {
      return ''
  }
  let arr = ['1', '11', '21', '1211', '111221']
  if (n <= 5) {
      return arr[n - 1]
  }
  let numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let i = 5; i < n; i++) {
      let currNum = arr[i - 1]
      let currStr = ''
      let count = 1
      for (let j = 1, len = currNum.length; j <= len; j++) {
        if (currNum[j] === currNum[j - 1]) {
          count++
        } else {
          // 当出现不相等的数时，计数之前的数字字符串
          currStr += count + '' + numArr[Number(currNum[j - 1]) - 1]
          count = 1
        }
      }
      arr.push(currStr)
  }
  return arr[n - 1]
};