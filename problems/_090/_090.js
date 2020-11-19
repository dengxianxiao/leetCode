/**
 * 回溯
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  const ans = []
  const getAns = (nums, i, temp, ans) => {
      ans.push(temp.slice())
      for (let j = i; j < nums.length; j++) {
          // 跳过重复值
          if (j > i && nums[j - 1] === nums[j]) {
              continue
          }
          // 使用当前值
          temp.push(nums[j])
          getAns(nums, j + 1, temp, ans)
          // 不使用当前值
          temp.pop()
      }
  }

  getAns(nums, 0, [], ans)
  return ans
};
