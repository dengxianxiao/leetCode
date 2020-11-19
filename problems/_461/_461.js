/**
 * 461. 汉明距离
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let val = x ^ y
  let dist = 0
  while (val) {
      dist++
      val = val & (val - 1) // 将二进制最右位置0
  }
  return dist
};
