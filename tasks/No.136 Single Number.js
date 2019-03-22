/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0;
    nums.forEach(val => result ^= val);
    return result;
};