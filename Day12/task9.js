async function fetchInvalidUrl() {
  const invalidUrl = "https://invalid.url";

  try {
    const response = await fetch(invalidUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Caught an error while fetching:", error.message);
  }
}

// Example usage:
fetchInvalidUrl();
