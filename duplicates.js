const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = function(arr) {
  return [...new Set(arr)];
};

const uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray);


const uniqueArray1 = (function(arr) {
  return [...new Set(arr)];
})(arrayWithDuplicates);

console.log(uniqueArray);
