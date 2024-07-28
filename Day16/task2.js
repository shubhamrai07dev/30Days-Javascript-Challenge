function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


const number = 10;
console.log(`Fibonacci number at position ${number} is ${fibonacci(number)}`);
