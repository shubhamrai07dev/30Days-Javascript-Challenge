// Function to remove an item from session storage and log it before and after removal
function removeFromSessionStorage(key) {
  // Log the item before removing it
  const valueBefore = sessionStorage.getItem(key);
  if (valueBefore !== null) {
    console.log(`Item before removal: ${key} = ${valueBefore}`);
  } else {
    console.log(`No item found in session storage for key: ${key}`);
  }

  // Remove the item from session storage
  sessionStorage.removeItem(key);

  // Log the item after removing it
  const valueAfter = sessionStorage.getItem(key);
  if (valueAfter !== null) {
    console.log(`Item after removal: ${key} = ${valueAfter}`);
  } else {
    console.log(
      `Item removed. No item found in session storage for key: ${key}`
    );
  }
}

// Example usage
// Save an item to session storage for demonstration purposes
sessionStorage.setItem("address", "lucknow");
sessionStorage.setItem("name", "shubham rai");
sessionStorage.setItem("email", "shubhamrai@gmail.com");

// Call the function to remove the item
removeFromSessionStorage("name");
