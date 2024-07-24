const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Response data:", data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
