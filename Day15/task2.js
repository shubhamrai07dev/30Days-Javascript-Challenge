function createCounter() {
  let counter = 0;

  return function myfunc() {
    counter++;
    console.log(counter);
  };
}
const myCounter = createCounter();
myCounter();
