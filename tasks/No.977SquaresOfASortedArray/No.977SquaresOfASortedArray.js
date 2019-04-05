/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares1 = function(A) {
  return A.map(val => val * val).sort((a, b) => a - b)
};

/**
 * 双指针,使用两个指针从两个方向读取，求绝对值最大的为当前值
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares2 = function(A) {
  let len = A.length
  let i = 0
  let j = len - 1
  let resultArr = []
  for (let k = len - 1; k >= 0; k--) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      resultArr[k] = A[i] * A[i]
      i++
    } else {
      resultArr[k] = A[j] * A[j]
      j--
    }
  }
  return resultArr
}


/**
 * 双指针,使用两个指针分别读取数组的非负部分与负数部分 —— 指针 i 反向读取负数部分，指针 j 正向读取非负数部分
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares3 = function(A) {
  let len = A.length
  let j = 0
  // 找到第一个正数索引
  while (j < len && A[j] < 0) {
      j++
  }
  let i = j - 1 // 最后一个负数索引
  let resultArr = []
  let k = 0
  while (i >= 0 && j < len) {
      if (A[i] * A[i] < A[j] * A[j]) {
          resultArr[k++] = A[i] * A[i]
          i--
      } else {
          resultArr[k++] = A[j] * A[j]
          j++
      }
  }
  // 两边数量不一致，只有一边有剩余的数
  while (i >= 0) {
      resultArr[k++] = A[i] * A[i]
      i--
  }
  while (j < len) {
      resultArr[k++] = A[j] * A[j]
      j++
  }
  return resultArr
};

