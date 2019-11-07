/**
 * 405. 数字转换为十六进制数
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) {
      return '0'
  }
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let hexStr = ''
  while (num) {
      // 取二进制的后4位数
      hexStr = arr[num & 15] + hexStr
      // 无符号右移4位
      num = num >>> 4
  }
  return hexStr
};
