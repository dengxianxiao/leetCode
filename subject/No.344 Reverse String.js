/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var sArr = s.split('');
    sArr.reverse();
    return sArr.join('');
};