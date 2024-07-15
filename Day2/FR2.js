let num1 = 20;
let num2 = 20;

let res =
  num1 >= num2
    ? num1 == num2
      ? `${num1} is equal to ${num2}.`
      : `${num1} is greater than ${num2}.`
    : `${num1} is smaller than ${num2}.`;

console.log(res);
