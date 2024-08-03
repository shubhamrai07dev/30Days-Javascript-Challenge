const regex = /\d/g;
const testString = "The year is 2024 and the time is 10:30 AM.";
const matches = testString.match(regex);

console.log(matches); // ["2", "0", "2", "4", "1", "0", "3", "0"]
    