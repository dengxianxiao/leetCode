/**
 * 506. 相对名次
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let arr = nums.concat().sort((a, b) => b - a)
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], i)
  }
  return nums.map(num => {
      let index = map.get(num)
      if (index === 0) {
          return 'Gold Medal'
      } else if (index === 1) {
          return 'Silver Medal'
      } else if (index === 2) {
          return 'Bronze Medal'
      } else {
          return index + 1 + ''
      }
  })
};
