function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const maxOfRest = findMax(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

// Test cases
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [10, -2, 30, 4]; 

console.log(`Maximum of [1, 2, 3, 4, 5]: ${findMax(testArray1)}`);
console.log(`Maximum of [10, -2, 30, 4]: ${findMax(testArray2)}`);