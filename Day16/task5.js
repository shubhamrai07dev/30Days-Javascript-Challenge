function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// Test cases
const testString1 = "hello"; // Expected output: "olleh"
const testString2 = "world"; 

console.log(`Reversed "hello": ${reverseString(testString1)}`);
console.log(`Reversed "world": ${reverseString(testString2)}`);