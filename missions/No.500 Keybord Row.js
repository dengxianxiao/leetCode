/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var keybordRow = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M']];
    var newArr = [];
    return words.filter(function(val) {
        var upperValArr = val.toUpperCase().split('');
        var has = false;
        for (var i = 0; i < keybordRow.length; i++) {
            for (var j = 0; j < upperValArr.length; j++) {
               keybordRow[i].indexOf(upperValArr[j]) === -1 ? has = false : has = true;
               if (!has) break;
            }
            //has found all
            if (has)break;
        }
        if (has) {
            return val;
        }
    });
};