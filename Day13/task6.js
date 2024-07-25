import chunk from "lodash";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const chunks = chunk(array, chunkSize);

console.log(`Original array: ${array}`);
console.log(`Chunks of size ${chunkSize}: ${JSON.stringify(chunks)}`);
