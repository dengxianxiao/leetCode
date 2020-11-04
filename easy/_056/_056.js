/**
 *
 * 排序
 * 时间复杂度O(nlogn)
 * 空间复杂度O(nlogn) 取决于排序
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const ans = []
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length; i++) {
      const left = intervals[i][0]
      const right = intervals[i][1]
      if (!ans.length || ans[ans.length - 1][1] < left) {
          ans.push([left, right])
      } else {
          ans[ans.length - 1][1] = [Math.max(ans[ans.length - 1][1], right)]
      }
  }
  return ans
};

/**
 *
 * 排序
 * 时间复杂度O(nlogn)
 * 空间复杂度O(nlogn) 取决于排序
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const ans = []
  intervals.sort((a, b) => a[0] - b[0])
  let i = 0
  while (i < intervals.length - 1) {
      if (intervals[i][1] < intervals[i + 1][0] || intervals[i][0] > intervals[i + 1][1]) {
          i++
      } else {
          intervals[i + 1] = [Math.min(intervals[i][0], intervals[i + 1][0]), Math.max(intervals[i][1], intervals[i + 1][1])]
          intervals.splice(i, 1)
      }
  }
  return intervals
};
