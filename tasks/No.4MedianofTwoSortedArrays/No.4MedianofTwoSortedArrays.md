# 题目

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

## 1.合并为一个数组排序，然后求中间值

```js
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
```

## 2.找到两个索引将两个数组分别拆分为两个部分，求出左边最大和右边最小

找到两个索引i, j ，将两个有序数组a, b分别拆分为两份a[0, i - 1), a[i, aLen) 和 b[0, j - 1], b[j, bLen)  
只要保证 a[i - 1] < b[j] && b[j - 1] < a[i] 就可以满足左边最大小于右边最小值  
如果总长度为奇数，则中间值为maxOfLeft  
否则为 (maxOfLeft + minOfRight) / 2  

```js
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

  // 找到正确的索引 i, j
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
```