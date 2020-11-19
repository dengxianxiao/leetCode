/**
 *
 * 快慢指针
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  // 获取下一个数的索引
  const getIndex = (i, nums) => {
      const n = nums.length
      const step = i + nums[i]
      return step >= 0 ? (step % n) : (n + (step % n))
  }
  const n = nums.length
  for (let i = 0; i < n; i++) {
      if (nums[i] === 0) {
          continue
      }
      let slow = i
      let fast = getIndex(i, nums)
      // 都为正数或负数时才是同一方向
      while (nums[slow] * nums[fast] > 0 && nums[fast] * nums[getIndex(fast, nums)] > 0) {
          if (slow === fast) {
              // 去掉只有一个元素的
              if (fast === getIndex(fast, nums)) {
                  break
              }
              return true
          }
          // 慢指针走一步
          slow = getIndex(slow, nums)
          // 快指针走两步
          fast = getIndex(getIndex(fast, nums), nums)
      }

      // 访问过的不是循环的数，置0
      let j = i
      let val = nums[i]
      while (nums[j] * val > 0) {
          const next = getIndex(j, nums)
          nums[j] = 0
          j = next
      }
  }
  return false
};
