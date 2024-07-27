function createIDGenerator() {
    let lastID = 0;
    
  return function () {
    lastID++; // Increment the ID
    return lastID; // Return the new ID
  };
}

const generateUniqueID = createIDGenerator();

console.log(generateUniqueID()); 
