# 题目

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

[3, 3], target = 6

## 1. 双层循环相加，直到找到target

```js
var twoSum1 = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
```

## 2. 使用map存储键值对， 判断另一个数是否在map中

```js
var twoSum3 = function(nums, target) {
  let map = new Map()
  for (let i in nums) {
    let another = target - nums[i]
    if (!map.has(another)) {
      map.set(nums[i], i)
    } else {
      return [map.get(another), i]
    }
  }
}
```
