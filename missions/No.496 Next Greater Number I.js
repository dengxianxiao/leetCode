/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var arr = [];
    findNums.forEach(function(fVal) {
        var index = nums.findIndex((num) => num == fVal);
        for (var j = index; j < nums.length; j++) {
            if (nums[j] > fVal) {
                arr.push(nums[j]);
                break;
            }
            if (j >= nums.length) {
                arr.push(-1);
            }
        }
        if (j >= nums.length) {
            arr.push(-1);
        }
    });
    return arr;
};
