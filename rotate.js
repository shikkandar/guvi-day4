function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
      const temp = arr.pop();
      arr.unshift(temp);
    }
    return arr;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const k = 3;
  const rotatedArray = rotateArray(originalArray, k);
  
  console.log(rotatedArray); 