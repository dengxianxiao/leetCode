# 题目

 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3
示例 2:

输入: J = "z", S = "ZZ"
输出: 0
注意:

S 和 J 最多含有50个字母。
 J 中的字符不重复。

## 1. 使用filter过滤

```js
var numJewelsInStones1 = function (J, S) {
  return S.split('').filter(char => J.indexOf(char) !== -1).length
}
```

## 2. 正则表达式

```js
var numJewelsInStones2 = function (J, S) {
  let j1 = J.split('').join('|')
  let regex = RegExp(j1, 'g')
  let resultArr = S.match(regex)
  return resultArr ? resultArr.length : 0
}
```

## 3. 直接双层循环一个个判断

```js
var numJewelsInStones3 = function (J, S) {
  let sCount = 0
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        sCount++
      }
    }
  }
  return sCount
}
```

## 4. 先排序所有宝石S，再找到第一个开始的位置，循环判断每一个宝石种类

```js
var numJewelsInStones4 = function (J, S) {
  let sCount = 0
  let sArr = S.split('').sort()
  for (let i = 0; i < J.length; i++) {
    // 排序后找到第一个开始的位置
    let beginIndex = sArr.indexOf(J[i])
    if (beginIndex !== -1) {
      for (let j = beginIndex; j < sArr.length; j++) {
        // 排序后同样的字符连在一起，第一个不一样的直接进下一个循环
        if (J[i] !== sArr[j]) {
          break
        }
        sCount++
      }
    }
  }
  return sCount
}
```

## 5. 两个字符串排序，从小到大判断是否包含有宝石

```js
var numJewelsInStones5 = function (J, S) {
  let jArr = J.split('').sort()
  let sArr = S.split('').sort()
  let i = 0
  let j = 0
  let sCount = 0
  while (i < jArr.length && j < sArr.length) {
    if (sArr[j] < jArr[i]) {
      j++
    } else if (sArr[j] === jArr[i]) {
      sCount++
      j++
    } else {
      i++
    }
  }
  return sCount
}
```