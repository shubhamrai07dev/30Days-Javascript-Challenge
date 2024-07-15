// logical OR operator (||) checks only one condition if any one condition found true then it execute the code
let age = 21;
let origin = "india2";

if (age >= 18 || origin == "india") {
  if (age >= 18 && origin == "india") {
    console.log("you can vote");
  } else {
    console.log("you can not vote");
  }
} else {
  console.log("you can not vote in india");
}
