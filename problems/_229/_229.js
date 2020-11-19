/**
 * map
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const map = new Map()
  for (let num of nums) {
      if (map.has(num)) {
          map.set(num, map.get(num) + 1)
      } else {
          map.set(num, 1)
      }
  }
  const ans = []
  for (let [num, count] of map) {
      if (count > (nums.length / 3)) {
          ans.push(num)
      }
  }
  return ans
};
