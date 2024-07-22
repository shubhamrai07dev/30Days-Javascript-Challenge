function sumAll(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

// Calling the function with arbitrary numbers
sumAll(1, 2, 3, 4, 5, 6, 3,4); // Logs: 15
sumAll(10, 20, 30, 20, 19); // Logs: 60
sumAll(7); // Logs: 7
sumAll(); // Logs: 0
