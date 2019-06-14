/**
 * 逆向
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow1 = function(rowIndex) {
  let arr = new Array(rowIndex + 1).fill(0)
    arr[0] = 1
    for (let i = 1; i <= rowIndex; i++) {
      // 从最后一个开始往前加
      for (let j = i; j >= 1; j--) {
        arr[j] += arr[j - 1]
      }
    }
    return arr
};

/**
 * 正向
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow2 = function(rowIndex) {
  if (rowIndex <= 0) {
      return [1]
    }
    let arr = [1]
    for (let i = 1; i <= rowIndex; i++) {
      let tmpVal = arr[0]
      for (let j = 1; j < i; j++) {
        let val = arr[j]
        arr[j] = arr[j] + tmpVal
        tmpVal = val
      }
      arr.push(1)
    }
    return arr
};
