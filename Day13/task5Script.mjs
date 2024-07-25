import * as utils from "./task5.mjs";

const num1 = 10;
const num2 = 5;

console.log(
  `The result of adding ${num1} and ${num2} is ${utils.add(num1, num2)}.`
);
console.log(
  `The result of subtracting ${num2} from ${num1} is ${utils.subtract(
    num1,
    num2
  )}.`
);
console.log(
  `The result of multiplying ${num1} and ${num2} is ${utils.multiply(
    num1,
    num2
  )}.`
);
console.log(
  `The result of dividing ${num1} by ${num2} is ${utils.divide(num1, num2)}.`
);
console.log(`The value of PI is ${utils.PI}.`);
console.log(`The value of E is ${utils.E}.`);
