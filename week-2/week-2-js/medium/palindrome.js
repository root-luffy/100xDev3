/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert to lowercase
  const lowerStr = str.toLowerCase();

  // Reverse the string
  const reversedStr = lowerStr.split('').reverse().join('');

  // Compare and return result
  return lowerStr === reversedStr;
}

module.exports = isPalindrome;
 