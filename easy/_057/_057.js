/**
 *
 * 遍历
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const ans = []
  let left = newInterval[0]
  let right = newInterval[1]
  let space = false
  let i = 0
  for (i = 0; i <intervals.length; i++) {
      if (intervals[i][0] > right) {
          // 第一个右边，交集结束
          if (!space) {
              ans.push([left, right])
              space = true
          }
          ans.push(intervals[i])
      } else if (intervals[i][1] < left) {
          // 在目标左边，没有交集
          ans.push(intervals[i])
      } else {
          // 有交集
          left = Math.min(intervals[i][0], left)
          right = Math.max(intervals[i][1], right)
      }
  }
  if (!space) {
      ans.push([left, right])
  }
  return ans
};
