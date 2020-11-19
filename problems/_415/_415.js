/**
 * 415. 字符串相加
 * 循环字符串，按位加
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  if (!num1) {
      return num2
  }
  if (!num2) {
      return num1
  }
  let carry = 0
  let result = ''
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
      let x = i < 0 ? 0 : parseInt(num1[i])
      let y = j < 0 ? 0 : parseInt(num2[j])
      let sum = x + y + carry
      carry = parseInt(sum / 10)
      result = (sum % 10) + result
  }
  if (carry) {
      result = carry + result
  }
  return result
};
