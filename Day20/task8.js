// Function to set a key-value pair to both localStorage and sessionStorage
function setToBothStorages(key, value) {
  // Set the value in localStorage
  localStorage.setItem(key, value);
  console.log(`Saved to localStorage: ${key} = ${value}`);

  // Set the value in sessionStorage
  sessionStorage.setItem(key, value);
  console.log(`Saved to sessionStorage: ${key} = ${value}`);
}

// Function to retrieve and log the value from both localStorage and sessionStorage
function retrieveAndLogFromBothStorages(key) {
  // Retrieve the value from localStorage
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue !== null) {
    console.log(`Retrieved from localStorage: ${key} = ${localStorageValue}`);
  } else {
    console.log(`No value found in localStorage for key: ${key}`);
  }

  // Retrieve the value from sessionStorage
  const sessionStorageValue = sessionStorage.getItem(key);
  if (sessionStorageValue !== null) {
    console.log(
      `Retrieved from sessionStorage: ${key} = ${sessionStorageValue}`
    );
  } else {
    console.log(`No value found in sessionStorage for key: ${key}`);
  }
}


// Set the key-value pair to both storages
setToBothStorages("name", "shubham rai");

// Retrieve and log the values from both storages
retrieveAndLogFromBothStorages("name");
