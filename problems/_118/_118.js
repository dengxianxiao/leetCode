/**
 *
在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

/**
 * 杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) {
    return []
  }
  let arr = [[1]]
  for (let i = 1; i < numRows; i++) {
    let tmpArr = [1] // 第一个为1
    for (let j = 1; j < i; j++) {
      tmpArr[j] = arr[i - 1][j] + arr[i - 1][j - 1]
    }
    tmpArr.push(1) // 最后一个也为1
    arr.push(tmpArr)
  }
  return arr
};
