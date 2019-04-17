# 14. 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

## 1. 先取最短的字符串出来，循环与之比较，不一致直接结束

```js
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) {
  return ''
  }
  // 先取最短的字符串
  let shortStr = strs.reduce((acc, str) => str.length < acc.length ? str : acc)
  let str = ''
  // 循环与最短的字符串比较，如果有出现不一样的，直接结束
  for (let i = 0; i < shortStr.length; i++) {
      let j = 0
      for (; j < strs.length; j++) {
          if (strs[j][i] !== shortStr[i]) {
              break
          }
      }
      if (j >= strs.length) {
          str += strs[0][i]
      } else {
          break
      }
  }
  return str
};
```

## 2. 取第一个字符串，循环剩下的字符串，从后往前剪掉最后一个字符，直到当前元素包含pre为止，即indexOf()返回0

```js
var longestCommonPrefix2 = function(strs) {
  if (!strs || !strs.length) {
      return ''
  }
  let pre = strs[0]
  let i = 1
  while (i < strs.length) {
      // 从后往前剪掉最后一个元素，直到当前元素包含pre为止，即indexOf()返回0
      while (strs[i].indexOf(pre) !== 0) {
          pre = pre.slice(0, pre.length - 1)
      }
      i++
  }
  return pre
};
```

## 3. 先排序，会按字母先后排好序，只需要比较第一个和最后一个就行

```js
var longestCommonPrefix3 = function(strs) {
  if (!strs || !strs.length) {
      return ''
  }
  strs.sort()
  let first = strs[0]
  let last = strs[strs.length - 1]
  let pre = ''
  for (let i = 0; i < first.length; i++) {
      if (last[i] === first[i]) {
          pre += last[i]
      } else {
          return pre
      }
  }
  return pre
};
```