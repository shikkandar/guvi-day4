function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  function findPalindromesInArray(arr) {
    return arr.filter(function(str) {
      return isPalindrome(str);
    });
  }
  
  const strings = ["racecar", "hello", "level", "world", "deified"];
  const palindromeStrings = findPalindromesInArray(strings);
  
  console.log("Palindrome strings in the array: " + palindromeStrings);
  