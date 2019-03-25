/**
* 合并为一个数组排序，然后求中间值
* 
*/
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2]
  arr.sort((a, b) => a - b)
  let len = arr.length
  let middle = Math.floor(len / 2)
  if (len % 2 !== 0) {
    return arr[middle]
  } else {
    return (arr[middle] + arr[middle] / 2)
  }
}




/**
 * 找到两个索引i, j ，将两个有序数组a, b分别拆分为两份a[0, i - 1), a[i, aLen) 和 b[0, j - 1], b[j, bLen)
 * 只要保证 a[i - 1] < b[j] && b[j - 1] < a[i] 就可以满足左边最大小于右边最小值
 * 如果总长度为奇数，则中间值为maxOfLeft
 * 否则为 (maxOfLeft + minOfRight) / 2
 *
 */
var findMedianSortedArrays2 = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  // 确保 nums2 比 nums1 长
  if (len1 > len2) {
    return findMedianSortedArrays2(nums2, nums1)
  }
  // 参数有误
  if (len2 === 0) {
    return
  }

  let iMin = 0
  let iMax = len1
  let harfIndex = Math.floor((len1 + len2 + 1) / 2)
  while (iMin <= iMax) {
    i = Math.floor((iMin + iMax) / 2)
    j = harfIndex - i
    if (i < len1 && nums2[j - 1] > nums1[i]) {
      // i 太小
      iMin = i + 1
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      // i 太大
      iMax = i - 1
    } else {
      // 找到正确的 i，并求出左边最大的值，右边最小的值
      let maxOfLeft
      if (i === 0) {
        maxOfLeft = nums2[j - 1]
      } else if (j === 0) {
        maxOfLeft = nums1[i - 1]
      } else {
        maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1])
      }

      // 长度为奇数
      if ((len1 + len2) % 2 === 1) {
        return maxOfLeft
      }

      // 求右边最小值
      let minOfRight
      if (i === len1) {
        minOfRight = nums2[j]
      } else if (j === len2) {
        minOfRight = nums1[i]
      } else {
        minOfRight = Math.min(nums1[i], nums2[j])
      }

      return (maxOfLeft + minOfRight) / 2
    }
  }
}