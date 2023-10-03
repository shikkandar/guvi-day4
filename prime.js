const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findPrimesInArray = function(arr) {
  return arr.filter(function(num) {
    if (num <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return true; 
  });
};

const primeNumbers = findPrimesInArray(numbers);

console.log("Prime numbers in the array: " + primeNumbers);

const primeNumbers1 = (function(arr) {
  return arr.filter(function(num) {
    if (num <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return true;
  });
})(numbers);

console.log("Prime numbers in the array: " + primeNumbers);
