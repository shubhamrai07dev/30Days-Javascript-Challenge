function countOccurrences(arr, target) {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  const firstElementMatches = arr[0] === target ? 1 : 0;
  return firstElementMatches + countOccurrences(arr.slice(1), target);
}

// Test cases
const testArray1 = [1, 2, 3, 4, 1, 1, 5]; // Target: 1, Expected output: 3
const testArray2 = [10, -2, 30, 4, 10, 10, 30]; // Target: 10, Expected output: 3

console.log(
  `Occurrences of 1 in [1, 2, 3, 4, 1, 1, 5]: ${countOccurrences(
    testArray1,
    1
  )}`
);
console.log(
  `Occurrences of 10 in [10, -2, 30, 4, 10, 10, 30]: ${countOccurrences(
    testArray2,
    10
  )}`
);