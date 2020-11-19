# 20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

## 1. 使用栈存储括号，当出现左括号是放入，右括号时取出

```js
var isValid = function(s) {
  let arr = []
  let obj = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
      if (Object.keys(obj).indexOf(s[i]) !== -1) {
          arr.unshift(s[i])
      } else {
          let str = arr.shift()
          if (obj[str] !== s[i]) {
              return false
          }
      }
  }
  return arr.length === 0
};
```

## 2. 使用栈存储括号，当出现左括号是放入右括号，出现右括号时取出匹配

```js
var isValid = function(s) {
  let arr = []
  let obj = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
      if (Object.keys(obj).indexOf(s[i]) !== -1) {
          arr.unshift(obj[s[i]])
      } else if (arr.shift() !== s[i]) {
          return false
      }
  }
  return arr.length === 0
};
```