/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var tempLen = 0;
    var maxLen = 0;
    nums.forEach(val => 
        maxLen = Math.max(maxLen, tempLen = (val === 0 ? 0 : tempLen + 1)));
    return  maxLen;
};