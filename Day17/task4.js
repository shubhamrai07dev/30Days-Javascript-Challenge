// Function to reverse a string using a stack
function reverseString(str) {
  const stack = new Stack();

  // Push all characters of the string into the stack
  for (let char of str) {
    stack.push(char);
  }

  // Pop all characters from the stack and form the reversed string
  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${reversedString}`);
