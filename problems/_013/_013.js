
/**
 * 循环一个个判断特殊情况
 * @param {string} s
 * @return {number}
 */
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

/**
 * 每个特殊情况只可能出现一次，每出现一次特殊情况减掉2，20，200
 * @param {string} s
 * @return {number}
 */
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

/**
 * 特殊情况前面一个肯定比后面一个小，出现则减掉当前值
 * @param {string} s
 * @return {number}
 */
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

/**
 * 使用replace替换掉所有特殊情况，直接求和
 * @param {string} s
 * @return {number}
 */
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