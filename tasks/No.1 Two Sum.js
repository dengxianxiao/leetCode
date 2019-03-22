/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var resultArr = [];
    nums.forEach((num, i) => {
      var restNum = target - num;
      if (nums.indexOf(restNum) !== -1 && (nums.findIndex((a) => a == restNum)) != i) {
          resultArr = [i, nums.findIndex((a) => a == restNum)];
          return;
      }
    });
    return resultArr.sort();
};