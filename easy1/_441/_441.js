/**
 * 441. 排列硬币
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (!n) {
      return 0
  }
  i = 1
  while (n > 0) {
      n -= i
      i++
  }
  if (n < 0) {
      i -= 2
      return i
  }
  return --i
};

/**
 * 数学问题
 * @param {number} n
 * @return {number}
 */
var arrangeCoins2 = function(n) {
  return Math.floor(Math.sqrt(1/4+2*n)-1/2)
};
