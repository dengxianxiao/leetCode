/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    if (x < y) {
        var temp = x;
        x = y;
        y = temp;
    }

    var arr1 = getBinary(x);
    var arr2 = getBinary(y);

    for (var i = arr2.length; i < arr1.length; i++) {
        arr2.unshift(0);
    }
    var count = 0;
    arr2.forEach(function(val, i) {
        val != arr1[i] ? count++ : '';
    });
    return count;


    function getBinary(num) {

        var arr = [];
        if (num === 0) return [0];
        while (num >= 1) {
            arr.push(num % 2);
            num = parseInt(num / 2);
        }
        return arr;
    }

};
