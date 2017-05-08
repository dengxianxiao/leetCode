/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var allUpperReg = /^[A-Z]+$/;
    var allLowerReg = /^[a-z]+$/;
    var oneCapitalReg = /^[A-Z][a-z]+$/;
    return allUpperReg.test(word) || allLowerReg.test(word) || oneCapitalReg.test(word);
};