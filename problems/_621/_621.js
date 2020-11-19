/**
 *
 * 排序
 * 时间复杂度O(logn)
 * 空间复杂度O(logn)
 *
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const arr = new Array(26).fill(0)
  for (let task of tasks) {
      arr[task.charCodeAt() - 'A'.charCodeAt()] += 1
  }
  arr.sort((a, b) => b - a)
  let time = 0
  while (arr[0] > 0) {
      let i = 0
      while (i <= n) {
          if (arr[0] === 0) {
              break
          }
          if (i < 26 && arr[i] > 0) {
              arr[i] -= 1
          }
          time++
          i++
      }
      arr.sort((a, b) => b - a)
  }
  return time
};
