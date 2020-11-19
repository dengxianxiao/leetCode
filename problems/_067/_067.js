/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let binaryString = ''
  let carry = 0 
  while (i >= 0 || j >= 0 || carry === 1) {
      let sum = carry
      if (i >= 0) {
          sum += a[i--] - '0'
      }
      if (j >= 0) {
          sum += b[j--] - '0'
      }
      carry = Math.floor(sum / 2)
      binaryString = '' + sum % 2 + binaryString
  }
  return binaryString
};