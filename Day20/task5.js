// Function to save a string value to session storage
function saveToSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved to session storage: ${key} = ${value}`);
}

// Function to retrieve a string value from session storage and log it
function retrieveFromSessionStorage(key) {
  const value = sessionStorage.getItem(key);
  if (value !== null) {
    console.log(`Retrieved from session storage: ${key} = ${value}`);
  } else {
    console.log(`No value found in session storage for key: ${key}`);
  }
}

// Example usage
saveToSessionStorage("name", "shubham rai");
saveToSessionStorage("email", "shubhamrai@gmail.com");
retrieveFromSessionStorage("name");
