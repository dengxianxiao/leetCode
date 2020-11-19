
/**
 *
 * Set
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums || !nums.length) {
      return 0
  }
  const set = new Set(nums)
  let longest = 0
  for (let num of set) {
      // 没有num - 1时表示连续数字的第一个数
      if (!set.has(num - 1)) {
          let currentNum = num
          let currentLongest = 1
          while (set.has(currentNum + 1)) {
              currentNum++
              currentLongest++
          }
          longest = Math.max(longest, currentLongest)
      }

  }
  return longest
};

/**
 * 排序
 * 时间复杂度O(nlogn) 取决于排序
 * 空间复杂度O(nlogn) 取决于排序
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums || !nums.length) {
      return 0
  }
  nums.sort((a, b) => a - b)
  let longest = 1
  let curLongest = 1
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          continue
      }
      if (nums[i] === nums[i - 1] + 1) {
          curLongest++
      } else {
          longest = Math.max(longest, curLongest)
          curLongest = 1
      }
  }
  longest = Math.max(longest, curLongest)
  return longest
};
