/**
 * 475. 供暖器
 * 找到每个房子两边的取暖器，取两边小的距离，再取所有距离的最大值即为结果
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  heaters.sort((a, b) => a - b)
  let result = 0
  let len = heaters.length
  for (let house of houses) {
      let i = binarySearch(heaters, house)
      let dist1 = Math.abs(house - heaters[i])
      let dist2 = (i + 1 <= len - 1) ? Math.abs(heaters[i + 1] - house) : -1
      if (dist2 === -1) {
          result = Math.max(result, dist1, dist2)
      } else {
          result = Math.max(result, Math.min(dist1, dist2))
      }
  }
  return result
};

/**
* 二分查找，找到val在arr中的位置
* @param {number[]} arr
* @param {number} val
* @return {number}
*/
var binarySearch = function(arr, val) {
  let i = 0
  let j = arr.length
  let len = j
  if (j === 1) {
      return 0
  }
  let count = 0
  while (i < j) {
      let middle = Math.floor((i + j) / 2)
      if (arr[middle] > val) {
          j = middle - 1
          if (arr[j] < val) {
              return j
          }
      } else if (arr[middle] < val) {
          if (arr[middle + 1] > val) {
              return middle
          }
          i = middle + 1
      } else {
          return middle
      }
  }
  return i > len - 1 ? len - 1 : i
}
