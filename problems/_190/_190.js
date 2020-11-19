/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0
  let count = 32

  while (count--) {
    result *= 2
    result += n & 1
    n = n >> 1
  }
  return result
}