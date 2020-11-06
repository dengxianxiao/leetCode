/**
 *
 * 双指针 0放到前面，2放到后面
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const len = nums.length
    let p0 = 0
    let p2 = len - 1
    const swap = (a, b) => {
        const temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }
    for (let i = 0; i < len; i++) {
        while (i <= p2 && nums[i] === 2) {
            swap(i, p2)
            p2--
        }
        if (nums[i] === 0) {
            swap(i, p0)
            p0++
        }
    }
};

/**
 *
 * 双指针 1放到0的后面
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0
    let p1 = 0
    const swap = (a, b) => {
        const temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            swap(i, p1)
            p1++
        } else if (nums[i] === 0) {
            swap(i, p0)
            // p1>p0时，p0的位置肯定1，把1交换到的nums[i]的位置，需要再交换回来
            if (p1 > p0) {
                swap(i, p1)
            }
            p0++
            p1++
        }
    }
};

/**
 *
 * 单指针
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let k = 0
    // 把0交换到最前面
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            const temp = nums[i]
            nums[i] = nums[k]
            nums[k] = temp
            k++
        }
    }
    // 把1交换到0的后面
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            const temp = nums[i]
            nums[i] = nums[k]
            nums[k] = temp
            k++
        }
    }
};

/**
 *
 * 两次遍历
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let redCount = 0
  let whiteCount = 0
  let blueCount = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          redCount++
      } else if (nums[i] === 1) {
          whiteCount++
      } else {
          blueCount++
      }
  }
  for (let i = 0; i < nums.length; i++) {
      if (redCount && i >= 0 && i < redCount) {
          nums[i] = 0
      } else if (whiteCount && i >= redCount && i < whiteCount + redCount) {
          nums[i] = 1
      } else {
          nums[i] = 2
      }
  }
};
