const year = 2020;

if (year % 4 == 0 && year % 100 !== 0) {
  if (year % 400 == 0) {
    console.log("leap year");
  } else {
    console.log("no leap year");
  }
} else {
  console.log("not leaf year");
}
