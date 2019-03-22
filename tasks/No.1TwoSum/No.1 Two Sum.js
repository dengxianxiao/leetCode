/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i in nums) {
    let another = target - nums[i]
    if (!map.has(another)) {
      map.set(nums[i], i)
    } else {
      return [map.get(another), i]
    }
  }
};