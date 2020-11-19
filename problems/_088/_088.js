/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
  let i = 0
  let j = 0
  if (m === 0) {
    while (j < n) {
      nums1[j] = nums2[j]
      j++
    }
  }
  while (i < m && j < n) {
    if (nums2[j] <= nums1[i]) {
      // nums1 元素向后挪一位，将nums2[j] 插入当前位置
      let t = m - 1
      while (t >= i) {
        nums1[t + 1] = nums1[t]
        t--
      }
      nums1[i++] = nums2[j++]
      m++
    } else {
      i++
    }
  }
  // nums2有剩余直接合并到nums1
  while (j < n) {
    nums1[i++] = nums2[j++]
  }
};