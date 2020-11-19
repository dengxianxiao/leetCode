/**
 *
 * 贪心
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  let i = 0
  const len = flowerbed.length
  while (i < len) {
      if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === len - 1 || flowerbed[i + 1] === 0)) {
          count++
          flowerbed[i] = 1
      }
      i++
  }
  return count >= n
};
