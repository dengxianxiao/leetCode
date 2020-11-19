/**
 * 345. 反转字符串中的元音字母
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。

 */


/**
 * 定义头尾指针从两个方向遍历，遇到两个都是元音字母就交换值
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (!s || !s.length) {
        return s
    }
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = s.split('')
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        if (vowels.indexOf(arr[i]) === -1) {
            i++
        }
        if (vowels.indexOf(arr[j]) === -1) {
            j--
        }
        if (vowels.includes(arr[i]) && vowels.includes(arr[j])) {
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
            i++
            j--
        }
    }
    return arr.join('')
};
