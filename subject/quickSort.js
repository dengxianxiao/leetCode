function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var key = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        arr[i] < key ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quickSort(left).concat(key, quickSort(right));
}
