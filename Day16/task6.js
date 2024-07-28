function isPalindrome(str) {
  // Base case: if the string is empty or has only one character, it is a palindrome
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

// Test cases
const testString1 = "racecar";
const testString2 = "hello";

console.log(`Is "racecar" a palindrome? ${isPalindrome(testString1)}`);
console.log(`Is "hello" a palindrome? ${isPalindrome(testString2)}`);
