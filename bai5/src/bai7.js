function isSorted(arr) {
    return arr.every(function (num, index, array) { return index === 0 || num >= array[index - 1]; });
}
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [1, 2, 3, 4, 5];
console.log(numbers1);
console.log(isSorted(numbers1)); // true
console.log(isSorted(numbers2)); // false"
