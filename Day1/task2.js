let myString = "This is task 2 || outside function";

console.log(myString); //outside

function showString() {
  let myString = "Incide the function";
  console.log(myString);
}

console.log(myString); //outside
showString();
console.log(myString); //outside
