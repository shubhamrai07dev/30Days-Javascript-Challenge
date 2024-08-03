const regex = /\b[A-Z]\w*\b/g;
const testString = "Hello, this is a JavaScript Regex Example.";
const matches = testString.match(regex);

console.log(matches); // ["Hello", "JavaScript", "Regex", "Example"]
