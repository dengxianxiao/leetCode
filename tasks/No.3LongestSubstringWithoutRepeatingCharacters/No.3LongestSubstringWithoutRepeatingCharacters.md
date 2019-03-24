# 题目

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。  

请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

## 1.窗口滑动，使用Set作为滑动窗口

如果从索引 i 到 j - 1之间的子字符串 s{ij}已经被检查为没有重复字符。  
我们只需要检查 s[j]对应的字符是否已经存在于子字符串 s{ij}中,  
使用 Set 将字符存储在当前窗口 [i, j)（最初 j = i）中。  
然后我们向右侧滑动索引 j，如果它不在 Set 中，我们会继续滑动 j。直到 s[j] 已经存在于 Set 中  

```js
var lengthOfLongestSubstring1 = function (s) {
  let len = s.length
  let set = new Set()
  let longest = 0
  let i = 0
  let j = 0
  while (i < len && j < len) {
    if (!set.has(s[j])) {
      set.add(s[j++]) // 添加set, j向右+1
      longest = Math.max(longest, j - i)
    } else {
      set.delete(s[i++]) // 删除第一个，i向右+1
    }
  }
  return longest
}
```

## 2.窗口滑动，使用Map作为滑动窗口

使用 Set 最多将执行2len次，它可以被进一步优化为仅需要 len个步骤  
可以使用map存储数据，使用集合来判断一个字符是否存在。   
当我们找到重复的字符时，我们可以立即跳过该窗口  
也就是说，如果 s[j] 在 [i, j)范围内有与 j' 重复的字符，我们不需要逐渐增加 i，  
我们可以直接跳过 [i，j']范围内的所有元素，并将 i变为 j' + 1  

```js
var lengthOfLongestSubstring2 = function (s) {
  let len = s.length
  let longest = 0
  let map = new Map()
  for (let i = 0, j = 0; j < len; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i)
    }
    longest = Math.max(longest, j - i + 1)
    map.set(s[j], j + 1)
  }
  return longest
}
```

## 3.窗口滑动，使用object作为滑动窗口

也可以使用对象存储数据，和map差不多

```js
var lengthOfLongestSubstring3 = function (s) {
  const map = {}
  let left = 0
  return s.split('').reduce((max, str, i) => {
    if (map[str] >= left) {
      left = map[str] + 1
    }
    map[str] = i
    return Math.max(max, i - left + 1)
  }, 0)
}
```

## 4.暴力法，遍历所有子字符串，求出最长字符串

```js
var lengthOfLongestSubstring4 = function (s) {
  let longest = 0
  let len = s.length
  for (let i = 0; i < len; i++) {
    // 如果已经求得最长字符串，不用再执行循环
    if (longest > len - i) {
      break
    }
    let arr = [s[i]] // 存放当前不重复的数组
    for (let j = i + 1; j < len; j++) {
      if (arr.indexOf(s[j]) === -1) {
        arr.push(s[j])
      } else {
        // 开始出现重复
        if (arr.length > longest) {
          longest = arr.length
        }
        break
      }
    }
    // 找到最后一个依然没有重复，不会进入else
    if (arr.length > longest) {
      longest = arr.length
    }
  }
  return longest
}
```