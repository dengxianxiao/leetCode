/**
 * 476. 数字的补数
 * num          = 00000101
 * mask         = 11111000
 * ~mask & ~num = 00000010
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let mask = ~0
  while (num & mask) {
      mask = mask << 1
  }
  return ~mask & ~num
};
