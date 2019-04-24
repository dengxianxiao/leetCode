# 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 1. 通过数字求余反转数字

```js
var reverse1 = function(x) {
  let y = 0
  while (x != 0) {
      y = y * 10 + x % 10
      x = parseInt(x / 10)  
  }
  if (y > Math.pow(2, 31) - 1 || y < -Math.pow(2, 31)) {
      return 0
  }
  return y
}
```

## 2. 通过字符串方法反转判断

```js
 var reverse2 = function(x) {
  if (x >= 0) {
    let val = Number(x.toString().split('').reverse().join(''))
    if (val > Math.pow(2, 31) - 1) {
        return 0
    }
    return val
  } else {
    let val = -Number(x.toString().slice(1).split('').reverse().join(''))
    if (val < -Math.pow(2, 31)) {
        return 0
    }
    return val
  }
}
```