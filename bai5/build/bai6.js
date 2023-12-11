function sumEvenNumbers(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; }).reduce(function (acc, num) { return acc + num; }, 0);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbers));
