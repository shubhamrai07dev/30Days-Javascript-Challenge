function removeItemFromLocalStorage(key) {
    // Log the local storage content before removing the item
    console.log("Local Storage before removing item:");
    console.log(JSON.stringify(localStorage));

    // Remove the item from local storage
    localStorage.removeItem(key);

    // Log the local storage content after removing the item
    console.log("Local Storage after removing item:");
    console.log(JSON.stringify(localStorage));
}

// Example usage
removeItemFromLocalStorage('email');
