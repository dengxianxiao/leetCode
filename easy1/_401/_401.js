/**
 * 401 二进制手表
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch1 = function(num) {
  const hour = [["0"],
          ["1", "2", "4", "8"],
          ["3", "5", "6", "9", "10"],
          ["7", "11"]]
  const minute = [["00"],
          ["01", "02", "04", "08", "16", "32"],
          ["03", "05", "06", "09", "10", "12", "17", "18", "20", "24", "33", "34", "36", "40", "48"],
          ["07", "11", "13", "14", "19", "21", "22", "25", "26", "28", "35", "37", "38", "41", "42", "44", "49", "50", "52", "56"],
          ["15", "23", "27", "29", "30", "39", "43", "45", "46", "51", "53", "54", "57", "58"],
          ["31", "47", "55", "59"]]
  // 小时最多只能取3个灯
  let arr = []
  for (let i = 0; i <= 3 && i <= num; i++) {
      // 分钟最多只能取5个灯
      if (num - i <= 5) {
          for (h of hour[i]) {
              for (m of minute[num - i]) {
                  arr.push(`${h}:${m}`)
              }
          }
      }
  }
  return arr
};


/**
* 获取一个数的二进制位数
*/
function bitCount(n) {
  let s = n.toString(2).match(/1/g)
  if (s) {
      return s.length
  }
  return 0
}

/**
* @param {number} num
* @return {string[]}
*/
var readBinaryWatch2 = function(num) {
  let arr = []
  for (let h = 0; h < 12; h++) {
      for (let m = 0; m < 60; m++) {
          // 将两个数拼成一个数
          if (bitCount(h * 64 + m) === num) {
              arr.push(h + ':' + (m < 10 ? 0 : '') + m)
          }
      }
  }
  return arr
};
