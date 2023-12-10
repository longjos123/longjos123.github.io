function sumEvenNumbers(numbers: number[]): number {
    return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
  }
  
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumEvenNumbers(numbers));