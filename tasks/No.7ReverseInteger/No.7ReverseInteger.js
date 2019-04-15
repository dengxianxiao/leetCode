
/**
 * 通过数字求余反转数字
* @param {number} x
* @return {number}
*/
var reverse1 = function(x) {
  let y = 0
  while (x != 0) {
      y = y * 10 + x % 10
      x = parseInt(x / 10)  
  }
  if (y > Math.pow(2, 31) - 1 || y < -Math.pow(2, 31)) {
      return 0
  }
  return y
};

/**
  * 通过字符串方法反转判断
  * @param {number} x
  * @return {number}
  */
 var reverse2 = function(x) {
  if (x >= 0) {
    let val = Number(x.toString().split('').reverse().join(''))
    if (val > Math.pow(2, 31) - 1) {
        return 0
    }
    return val
  } else {
    let val = -Number(x.toString().slice(1).split('').reverse().join(''))
    if (val < -Math.pow(2, 31)) {
        return 0
    }
    return val
  }
}  

