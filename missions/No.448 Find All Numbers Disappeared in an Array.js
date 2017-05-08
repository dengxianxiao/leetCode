/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var arr = [];
      for (var i = 1; i < nums.length + 1; i++) {
         if (!nums.includes(i)) {
            arr.push(i);
         }
      }
    // for (var i = 0; i < nums.length; i++) {
    //   var val = Math.abs(nums[i]) - 1;
    //   if (nums[val] > 0) {
    //       nums[val] = -nums[val]
    //   }
      
    // }  
    //   for (var i = 0; i < nums.length; i++) {
    //       if (nums[i] > 0) {
    //           arr.push(i + 1);
    //       }
    //   }
    return arr;
};