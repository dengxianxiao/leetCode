/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
     if (num <= 0)
        return;
    var arr = getBinary(num);
    var newArr = arr.map((val)=>val === 1 ? val = 0 : val = 1);
    return getDecimalFromBinary(newArr);

    function getBinary(num) {
        var arr = [];
        if (num === 0)
            return [0];
        while (num >= 1) {
            arr.push(num % 2);
            num = parseInt(num / 2);
        }
        return arr;
    }

    function getDecimalFromBinary(arr) {
        if (arr.length <= 0)
            return;
        var num = 0;
        arr.forEach((val,index)=>{
            var tmpNum = 1;
            if (val === 1) {
                if (index >= 1) {
                    for (var i = 0; i < index; i++) {
                        tmpNum *= 2;                        
                    }
                } 
                num += tmpNum; 
            }
                      
        }
        );
        return num;
    }

};