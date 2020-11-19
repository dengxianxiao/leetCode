# 13. 罗马数字转整数

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:

输入: "III"
输出: 3
示例 2:

输入: "IV"
输出: 4
示例 3:

输入: "IX"
输出: 9
示例 4:

输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
示例 5:

输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.

## 1. 循环一个个判断特殊情况，特殊情况特殊处理

```js
var romanToInt1 = function(s) {
  const romanObj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let num = 0
  for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
          case 'I': {
              if (s[i + 1] === 'V') {
                  num += 4
                  i++
              } else if (s[i + 1] === 'X') {
                  num += 9
                  i++
              } else {
                  num += romanObj[s[i]]
              }
          };
          break;
          case 'X': {
              if (s[i + 1] === 'L') {
                  num += 40
                  i++
              } else if (s[i + 1] === 'C') {
                  num += 90
                  i++
              } else {
                  num += romanObj[s[i]]
              }
          };
          break;
          case 'C': {
              if (s[i + 1] === 'D') {
                  num += 400
                  i++
              } else if (s[i + 1] === 'M') {
                  num += 900
                  i++
              } else {
                  num += romanObj[s[i]]
              }
          };
          break;
          default: {
              num += romanObj[s[i]]
          }
      }
  }
  return num
};
```

## 2. 每个特殊情况只可能出现一次，每出现一次特殊情况减掉2，20，200

```js
var romanToInt2 = function(s) {
  if (s.length === 0) {
      return 0
  }
  const romanObj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let sum = 0
  // 每个特殊情况只可能出现一次
  if (s.indexOf('IV') !== -1 || s.indexOf('IX') !== -1) {
      sum -= 2
  }
  if (s.indexOf('XL') !== -1 || s.indexOf('XC') !== -1) {
      sum -= 20
  }
  if (s.indexOf('CD') !== -1 || s.indexOf('CM') !== -1) {
      sum -= 200
  }
  
  // 计算总和
  for (let i = 0; i < s.length; i++) {
      sum += romanObj[s[i]]
  }
  return sum
};
```

## 3. 特殊情况前面一个肯定比后面一个小，出现则减掉当前值

```js
var romanToInt3 = function(s) {
  if (s.length === 0) {
      return 0
  }
  const romanObj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let sum = 0
  
  // 计算总和
  for (let i = 0; i < s.length; i++) {
      if (romanObj[s[i]] < romanObj[s[i + 1]]) {
          sum -= romanObj[s[i]]
      } else {
          sum += romanObj[s[i]]
      }
  }
  return sum
};
```

## 4. 使用replace替换掉所有特殊情况，直接求和

```js
var romanToInt4 = function(s) {
  if (s.length === 0) {
      return 0
  }
  const romanObj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  s = s.replace("IV", "IIII").replace("IX", "VIIII")
  s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
  s = s.replace("CD", "CCCC").replace("CM", "DCCCC")
  
  // 计算总和
  let sum = 0
  for (let i = 0; i < s.length; i++) {
      sum += romanObj[s[i]]
  }
  return sum
};
```