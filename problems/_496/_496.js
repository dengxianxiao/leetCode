/**
 * 496. 下一个更大元素 I
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map()
  let arr = []
  // 找到nums2每个元素右边的第一个大的元素
  nums2.forEach(num => {
      while (arr.length && arr[arr.length - 1] < num) {
          map.set(arr.pop(), num)
      }
      arr.push(num)
  })
  return nums1.map(num => map.get(num) || -1)
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement2 = function(nums1, nums2) {
  let result = []
  nums1.forEach(num => {
      result.push(-1)
      let index = nums2.findIndex(num2 => num2 === num)
      for (let i = index; i < nums2.length; i++) {
          if (nums2[i] > num) {
              result.pop()
              result.push(nums2[i])
              break
          }
      }
  })
  return result
};
