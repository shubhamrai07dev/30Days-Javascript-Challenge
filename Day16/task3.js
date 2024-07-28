function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

// Test cases
const testArray1 = [1, 2, 3, 4, 5]; 
const testArray2 = [10, -2, 30, 4]; 

console.log(`Sum of [1, 2, 3, 4, 5] is : ${sumArray(testArray1)}`);
console.log(`Sum of [10, -2, 30, 4] is : ${sumArray(testArray2)}`);
