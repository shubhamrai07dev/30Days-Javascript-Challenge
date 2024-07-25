// main.js
import { add, subtract, multiply, divide } from "./task3.mjs";

const num1 = 10;
const num2 = 5;

console.log(`The result of adding ${num1} and ${num2} is ${add(num1, num2)}.`);
console.log(
  `The result of subtracting ${num2} from ${num1} is ${subtract(num1, num2)}.`
);
console.log(
  `The result of multiplying ${num1} and ${num2} is ${multiply(num1, num2)}.`
);
console.log(
  `The result of dividing ${num1} by ${num2} is ${divide(num1, num2)}.`
);
