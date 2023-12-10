function isSorted(arr: number[]) {
    return arr.every((num, index, array) => index === 0 || num >= array[index - 1]); 
}

const numbers1: number[] = [1, 2, 3, 4, 5];
const numbers2: number[] = [1, 2, 3, 4, 5];

console.log(isSorted(numbers1)); // true
console.log(isSorted(numbers2)); // false"