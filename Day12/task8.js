// Function to fetch data from an invalid URL
function fetchInvalidUrl() {
  const invalidUrl = "https://faltu.url";

  fetch(invalidUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
      console.error("Caught an error while fetching:", error.message);
    });
}

// Example usage:
fetchInvalidUrl();
