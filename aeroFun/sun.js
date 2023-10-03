const numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const totalSum = sumOfNumbers(numbers);

console.log("Total Sum:", totalSum);
