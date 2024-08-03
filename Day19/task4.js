const regex = /\d+/g;
const testString = "The year is 2024 and the time is 10:30 AM.";
const matches = testString.match(regex);

console.log(matches); // ["2024", "10", "30"]
